import "../assets/scss/style.scss";

import { modal } from "./modules";
import type { IModal } from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  const modalEditSelectors = {
    trigger: ".personal__btn",
    selector: ".modalEdit",
  } as IModal;

  modal(modalEditSelectors);
});
