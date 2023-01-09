import "../assets/scss/style.scss";

import { modal } from "./modules";
import { setMaps, setAvatars, setSkills } from "./modules";
import { tabs } from "./modules";
import { changeModalState } from "./modules";

import type { IModal } from "./modules";
import type { ITabSelectors } from "./modules";

export interface IState {
  gender: string;
  age: number;
  skills: string[];
  prehistory: string;
  avatar: string;
}

window.addEventListener("DOMContentLoaded", () => {
  const state = {
    gender: "",
    age: 0,
    skills: [],
    prehistory: "",
    avatar: "",
  } as IState;

  const modalEditSelectors = {
    trigger: ".personal__btn",
    selector: ".modalEdit",
  } as IModal;

  const mapTabsSelectors = {
    headerSelector: ".map__header",
    contentsSelector: ".map__content_item",
    tabsSelector: ".map__header_item",
    activeClass: "active",
  } as ITabSelectors;

  const skillsTabsSelectors = {
    headerSelector: ".modalEdit__skills",
    contentsSelector: ".skill-descr_item",
    tabsSelector: ".modalEdit__skills_item",
    activeClass: "active",
  } as ITabSelectors;

  Promise.all([setMaps(), setAvatars(), setSkills()]).then(() => {
    modal(modalEditSelectors, state);

    tabs(mapTabsSelectors);
    tabs(skillsTabsSelectors);

    changeModalState(state);
  });
});
