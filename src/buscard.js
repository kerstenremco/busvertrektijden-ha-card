import { html, LitElement } from "lit";
import { styles, timeIcon } from "./buscard.styles.js";

export class BustijdenCard extends LitElement {
  static styles = styles;

  static get properties() {
    return {
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

  render() {
    if (!this.valid_entity) {
      return html`<div>Ongeldige entity. Zorg ervoor dat je een sensor met het juiste formaat gebruikt.</div>`;
    }

    if (this.available === false) {
      return html`<div>Geen busgegevens beschikbaar. Controleer je internetverbinding.</div>`;
    }

    if (!this.stop_name) {
      return html`<div>Halte naam niet beschikbaar. Controleer of de haltecode goed in je configuratie staat.</div>`;
    }

    if (this.stop_name.endsWith("None")) {
      return html`<div>Deze halte is niet gevonden. Controleer of de haltecode goed in je configuratie staat.</div>`;
    }
    if (!this.stops || this.stops.length === 0) {
      return html`<div>Er zijn momenteel geen aankomende bussen voor deze halte.</div>`;
    }
    return html`
      <div>
        ${this.stops.slice(0, this.amount).map((stop) => {
          let className = "bus-card";
          if (stop.tripUpdate.cancelled) {
            className += " canceled";
          } else if (stop.tripUpdate.delay > 0) {
            className += " changed";
          }
          return html`
            <div class="${className}">
              <div class="bus-card-head">
                <span class="line-number">${stop.stopTime.routeShortName}</span>

                <div class="bus-card-details">
                  <span class="bus-time">${stop.stopTime.arrivalTime}</span>
                  <span class="bus-time-changed">${stop.tripUpdate.calculatedArrivalTime}</span>
                  <span class="bus-time-canceled">Geannuleerd</span>
                  <span class="stop-text">${stop.stopTime.stopHeadsign}</span>
                  <div class="bus-card-details-time">
                    <span class="bus-direction">${stop.stopTime.routeLongName}</span>
                  </div>
                  <div class="bus-card-alert">${stop.alerts.map((alert) => html`<span class="alert-text">${alert.header}</span>`)}</div>
                </div>
                <span class="live-time">${stop.tripUpdate.minutesUntill} min</span>
                ${timeIcon}
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }
}
