import { IState } from "../main";

export interface IModal {
  trigger: string;
  selector: string;
}

export const modal = ({ trigger, selector }: IModal, state: IState) => {
  const modal = document.querySelector(selector)!;
  const button = document.querySelector(trigger)!;
  const modalCloseButton = modal.querySelector(".close")!;
  const modalConfirmButton = modal.querySelector(".confirm")!;

  button.addEventListener("click", () => {
    modal.classList.remove("hide");
    modal.classList.add("show");
  });

  modalCloseButton.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.classList.add("hide");
  });

  modalConfirmButton.addEventListener("click", () => {
    confirmChanges();
    clearModalInputs();
  });

  function clearModalInputs() {
    const genderInput = document.querySelector(`#gender`) as HTMLSelectElement;
    const ageInput = document.querySelector(`#age`) as HTMLInputElement;
    const prehistoryInput = document.querySelector(
      `#prehistory`
    ) as HTMLTextAreaElement;
    const skillsInput = document.querySelectorAll(
      ".modalEdit__skills_item"
    ) as NodeListOf<HTMLImageElement>;
    const avatarInput = document.querySelectorAll(
      ".modalEdit__avatar_item"
    ) as NodeListOf<HTMLImageElement>;

    genderInput.value = `0`;
    ageInput.value = ``;
    prehistoryInput.value = ``;

    skillsInput.forEach((skill) => {
      skill.classList.remove("picked");
    });

    avatarInput.forEach((avatar) => {
      avatar.classList.remove("active");
    });
  }

  function confirmChanges() {
    const personalImage = document.querySelector(
      ".personal_img"
    ) as HTMLImageElement;
    const personalGender = document.querySelector(
      "#personal_gender"
    ) as HTMLLIElement;
    const personalAge = document.querySelector(
      "#personal_age"
    ) as HTMLLIElement;
    const personalSkills = document.querySelector(
      "#personal_skills"
    ) as HTMLLIElement;
    const personalPrehistory = document.querySelector(
      "#personal_prehistory"
    ) as HTMLLIElement;

    personalImage.setAttribute("src", state.avatar);
    personalGender.textContent = `Gender: ${state.gender}`;
    personalAge.textContent = `Age: ${state.age}`;
    personalPrehistory.innerHTML = `Prehistory: <div class="prehistory">${state.prehistory}</div>`;

    state.skills.forEach((skill) => {
      const temp = document.createElement("img");
      temp.setAttribute("src", skill);
      temp.classList.add("mini-skills");
      personalSkills.appendChild(temp);
    });
  }
};
