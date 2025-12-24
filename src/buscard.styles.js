import { css, html } from "lit";

export const styles = css`
  .bus-card {
    margin-bottom: 10px;
  }

  .bus-card .bus-card-alert {
    color: #ff5252;
    font-weight: bold;
  }

  .line-number {
    background-color: #ff793f;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bus-card-head {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .live-time {
    color: #33d9b2;
  }

  .bus-card.changed .live-time {
    color: #ff5252;
  }

  .bus-card.canceled .live-time {
    color: #ff5252;
    text-decoration: line-through;
  }

  .bus-card-head svg {
    stroke: #33d9b2;
  }

  .bus-card.changed .bus-card-head svg,
  .bus-card.canceled .bus-card-head svg {
    stroke: #ff5252;
  }

  .bus-card-details {
    flex: 1;
  }

  .bus-time {
    font-weight: bold;
  }

  .bus-card.changed .bus-time,
  .bus-card.canceled .bus-time {
    font-weight: normal;
    text-decoration: line-through;
  }

  .bus-time-changed {
    font-weight: bold;
    color: #ff5252;
    display: none;
  }

  .bus-card.changed .bus-time-changed {
    display: inline-block;
  }

  .bus-time-canceled {
    font-weight: bold;
    color: #ff5252;
    display: none;
  }

  .bus-card.canceled .bus-time-canceled {
    display: inline-block;
  }
`;

export const timeIcon = html`
  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M12 6V12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.24 16.24L12 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`;
