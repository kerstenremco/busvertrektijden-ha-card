import { html, LitElement } from "lit";
import { styles, timeIcon } from "./buscard.styles.js";

export class BustijdenCard extends LitElement {
  static styles = styles;

  static get properties() {
    return {
      alerts: { type: Array, state: true },
      stops: { type: Array, state: true },
      entity: { type: String },
      amount: { type: String },
      _hass: { type: Object },
      valid_entity: { type: Boolean, state: true },
      stop_name: { type: String, state: true },
      available: { type: Boolean, state: true },
      lastUpdated: { type: String, state: true },
    };
  }

  constructor() {
    super();
    this.alerts = [];
    this.stops = [];
    this.available = false;
    this.valid_entity = false;
  }

  static getStubConfig(hass) {
    const firstSensor = Object.keys(hass.entities).find((entityId) => entityId.startsWith("sensor.bus_stop_"));
    return {
      entity: firstSensor || "",
      amount: 8,
    };
  }

  setConfig(config) {
    this.entity = config.entity;
    this.amount = config.amount < 1 ? 1 : config.amount > 10 ? 10 : config.amount;
  }

  set hass(hass) {
    this._hass = hass;
    // Validate entity
    this.valid_entity = this.entity.includes("bus_stop_");
    if (!this.valid_entity) {
      return;
    }
    // Get state attributes
    const state = hass["states"]?.[this.entity];
    if (!state) {
      return;
    }
    this.stop_name = state["attributes"]["friendly_name"];
    this.alerts = state["attributes"]["alerts"];
    this.stops = state["attributes"]["stops"];
    this.lastUpdated = state["last_updated"];

    // Check availability
    this.available = state["state"] != "unavailable";
  }

  static getConfigForm() {
    return {
      schema: [
        {
          name: "entity",
          required: true,
          selector: { entity: { domain: "sensor" } },
        },
        { name: "amount", required: true, selector: { text: { type: "number" } } },
      ],
      computeHelper: (schema) => {
        switch (schema.name) {
          case "entity":
            return "Busstop";
          case "amount":
            return "Aantal opkomende stops weergeven (minimaal 1, maximaal 10)";
        }
        return undefined;
      },
    };
  }

  getAlert() {
    if (this.alerts === undefined || this.alerts.length === 0) {
      return html``;
    }

    return html`<div>
      <div class="bvt__stopalert">
        <svg class="bvt__stopalert__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
          <path
            d="M16,1A7,7 0 0,1 23,8C23,11.53 20.39,14.45 17,14.93V18C17,18.84 16.65,19.58 15.96,20.2V22C15.96,22.27 15.87,22.5 15.68,22.71C15.5,22.91 15.26,23 15,23H14C13.71,23 13.47,22.91 13.27,22.71C13.06,22.5 12.96,22.27 12.96,22V21H5.04V22C5.04,22.27 4.94,22.5 4.73,22.71C4.53,22.91 4.29,23 4,23H3C2.74,23 2.5,22.91 2.32,22.71C2.13,22.5 2.04,22.27 2.04,22V20.2C1.35,19.58 1,18.84 1,18V8C1,6.42 1.7,5.35 3.07,4.8C4.44,4.26 6.42,4 9,4L10.23,4.03C11.5,2.2 13.61,1 16,1M16,3A5,5 0 0,0 11,8A5,5 0 0,0 16,13A5,5 0 0,0 21,8A5,5 0 0,0 16,3M15,10H17V12H15V10M15,4H17V9H15V4M3,13H11.09C9.8,11.72 9,9.96 9,8H3V13M4.5,16C3.69,16 3,16.67 3,17.5A1.5,1.5 0 0,0 4.5,19C5.35,19 6,18.33 6,17.5A1.5,1.5 0 0,0 4.5,16M13.5,16C12.65,16 12,16.67 12,17.5A1.5,1.5 0 0,0 13.5,19C14.31,19 15,18.33 15,17.5A1.5,1.5 0 0,0 13.5,16Z"
          />
        </svg>
        ${this.alerts.map((alert) => html`<span>${alert}</span>`)}
      </div>
    </div>`;
  }

  getEntries() {
    let entries = [];
    this.stops.slice(0, this.amount).map((stop) => {
      let infoHeader = [];
      if (stop["cancelled"] === true) {
        infoHeader.push(html`<span class="bvt__info__time bvt__info__time--strikethrough">${stop["departure_time"].slice(0, 5)}</span>`);
        infoHeader.push(html`<span class="bvt__info--strikethrough">${stop["name"]}</span>`);
        infoHeader.push(html` <span class="bvt__info--cancelled">vervallen</span>`);
      } else if (stop["delay"] > 0) {
        infoHeader.push(html`<span class="bvt__info__time bvt__info__time--late">${stop["computed_time"]}</span>`);
        infoHeader.push(html`<span class="bvt__info__time bvt__info__time--strikethrough">${stop["departure_time"].slice(0, 5)}</span>`);
        infoHeader.push(html`<span>${stop["name"]}</span>`);
      } else {
        infoHeader.push(html`<span class="bvt__info__time">${stop["computed_time"]}</span>`);
        infoHeader.push(html`<span>${stop["name"]}</span>`);
      }

      // Class for time
      let timeClasses = ["bvt__time"];
      if (stop["cancelled"] === true) {
        timeClasses.push("bvt__time--cancelled");
      } else if (stop["delay"] > 0) {
        timeClasses.push("bvt__time--late");
      }
      let timeClass = timeClasses.join(" ");

      // Class for subheader
      let alerts = stop["alerts"];
      let subheaderClasses = ["bvt__info__subheader"];
      if (alerts !== undefined) {
        subheaderClasses.push("bvt__info__subheader--alert");
      }
      let subheaderClass = subheaderClasses.join(" ");

      entries.push(
        html`<div class="bvt__entry">
          <span class="bvt__number">${stop["bus_number"]}</span>
          <div class="bvt__info">
            <div>${infoHeader.map((item) => item)}</div>
            <div class="${subheaderClass}">
              <span>${alerts !== undefined ? alerts[0] : stop["trip_name"]}</span>
            </div>
          </div>
          <span class="${timeClass}">${Math.floor(stop["seconds"] / 60)} min</span>
        </div>`,
      );
    });

    return entries;
  }

  render() {
    let content = [];

    if (!this.valid_entity) {
      content.push(html`<div>Ongeldige entity. Zorg ervoor dat je een sensor met het juiste formaat gebruikt.</div>`);
    } else if (this.available === false) {
      content.push(html`<div>Geen busgegevens beschikbaar. Controleer je internetverbinding.</div>`);
    } else if (!this.stop_name) {
      content.push(html`<div>Halte naam niet beschikbaar. Controleer of de haltecode goed in je configuratie staat.</div>`);
    } else if (this.stop_name.endsWith("None")) {
      content.push(html`<div>Deze halte is niet gevonden. Controleer of de haltecode goed in je configuratie staat.</div>`);
    } else if (!this.stops || this.stops.length === 0) {
      content.push(html`<div>Er zijn momenteel geen aankomende bussen voor deze halte.</div>`);
    } else {
      // Alert
      content.push(this.getAlert());

      // Stops
      content.push(html`<div class="bvt__entries">${this.getEntries()}</div>`);
    }
    return html`
      <ha-card header="${this.stop_name}">
        <div class="card-content bvt">${content.map((item) => item)}</div>
      </ha-card>
    `;
  }
}
