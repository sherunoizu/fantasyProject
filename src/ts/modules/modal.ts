export interface IModal {
  trigger: string;
  selector: string;
}

export const modal = ({ trigger, selector }: IModal) => {
  const modal = document.querySelector(selector);

  modal!.addEventListener("click", () => {
    console.log(trigger);
    modal?.classList.add("hide");
  });
};
