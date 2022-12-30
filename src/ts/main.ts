import "../assets/scss/style.scss";

import { modal, IModal } from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  const modalEditSelectors = {
    trigger: ".personal__btn",
    selector: ".modalEdit",
  } as IModal;

  modal(modalEditSelectors);
});
