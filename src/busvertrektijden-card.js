import { BustijdenCard } from "./buscard";

customElements.define("busvertrektijden-card", BustijdenCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "busvertrektijden-card",
  name: "Bus vertrektijden Card",
  description: "Shows upcoming bus departures",
});
