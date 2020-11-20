import "./index.js";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const normal = () => html` <my-counter></my-counter> `;

export const disabled = () => html` <my-counter disabled></my-counter> `;

export const secondary = () =>
  html` <my-counter variant="secondary"></my-counter> `;
