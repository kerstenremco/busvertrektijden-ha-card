import { css } from "lit";

export const styles = css`
  .bvt__stopalert {
    color: var(--warning-color);
    font-weight: bolder;
    display: flex;
    gap: 0.5em;
    align-items: center;
  }

  .bvt__stopalert__icon {
    width: 1.3em;
  }

  .bvt__entries {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.7em;
  }

  .bvt__entry {
    display: flex;
    gap: 0.5em;
  }

  .bvt__number {
    width: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
  }

  .bvt__info {
    flex: 1;
    align-self: center;
  }

  .bvt__info--strikethrough {
    text-decoration: line-through;
  }

  .bvt__info--cancelled {
    color: var(--error-color);
    font-weight: bold;
  }

  .bvt__info__subheader {
    font-style: italic;
  }

  .bvt__info__subheader--alert {
    font-style: normal;
    color: var(--warning-color);
  }

  .bvt__info__time {
    font-weight: bold;
    margin-right: 0.2em;
  }

  .bvt__info__time--strikethrough {
    text-decoration: line-through;
    font-weight: normal;
  }

  .bvt__info__time--late {
    color: var(--error-color);
  }

  .bvt__time {
    text-align: right;
    align-self: center;
    color: var(--success-color);
  }

  .bvt__time--late {
    color: var(--error-color);
  }

  .bvt__time--cancelled {
    color: #ff5252;
    text-decoration: line-through;
  }
`;
