import { IState } from "../main";

export const changeModalState = (state: IState) => {
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

  genderInput.addEventListener("change", () => {
    state.gender = genderInput.value;
  });

  ageInput.addEventListener("input", () => {
    state.age = +ageInput.value;
  });

  prehistoryInput.addEventListener("input", () => {
    state.prehistory = prehistoryInput.value;
  });

  skillsInput.forEach((skill) => {
    skill.addEventListener("dblclick", () => {
      if (state.skills.length < 5 && !skill.classList.contains("picked")) {
        state.skills.push(skill.getAttribute("src")!);
        skill.classList.add("picked");
      } else if (skill.classList.contains("picked")) {
        state.skills = state.skills.filter((item) => {
          return item != skill.getAttribute("src");
        });
        skill.classList.remove("picked");
      }
    });
  });

  avatarInput.forEach((avatar) => {
    avatar.addEventListener("dblclick", () => {
      avatarInput.forEach((av) => av.classList.remove("active"));
      avatar.classList.add("active");
      state.avatar = avatar.getAttribute("src")!;
    });
  });
};
