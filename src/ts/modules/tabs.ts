export interface ITabSelectors {
  headerSelector: string;
  tabsSelector: string;
  contentsSelector: string;
  activeClass: string;
  event?: "click" | "keydown";
}

export const tabs = ({
  headerSelector,
  contentsSelector,
  tabsSelector,
  activeClass,
  event = "click",
}: ITabSelectors): void => {
  const header = document.querySelector(headerSelector) as HTMLDivElement;
  const tabs = document.querySelectorAll(
    tabsSelector
  ) as NodeListOf<HTMLLIElement>;
  const contents = document.querySelectorAll(
    contentsSelector
  ) as NodeListOf<HTMLDivElement>;

  const hideTabContent = () => {
    contents.forEach((content) => content.classList.remove(activeClass));

    tabs.forEach((tab) => tab.classList.remove(activeClass));
  };

  const showTabContent = (i = 0) => {
    contents[i].classList.add(activeClass);
    tabs[i].classList.add(activeClass);
  };

  header.addEventListener(event, (e) => {
    const target = e.target as HTMLLIElement;
    const targetParent = target.parentNode as HTMLElement;
    const tabSelectorClass = tabsSelector.replace(/\./, "");
    const clickEvent: boolean = event === "click";
    const keydownEventCodeIsSpace: boolean =
      (e as KeyboardEvent).code === "Space";

    const isPickEvent: boolean = clickEvent || keydownEventCodeIsSpace;
    const isTargetWithClassExist: boolean =
      target &&
      (target.classList.contains(tabSelectorClass) ||
        targetParent.classList.contains(tabSelectorClass));

    if (isPickEvent && isTargetWithClassExist) {
      {
        tabs.forEach((tab, i) => {
          if (target == tab || targetParent == tab) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    }
  });

  hideTabContent();
  showTabContent();
};
