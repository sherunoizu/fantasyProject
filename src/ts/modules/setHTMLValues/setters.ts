import { getData } from "../../services";

export const setAvatars = async () => {
  const avatarsContainer = document.querySelector(
    ".modalEdit__avatar"
  ) as HTMLDivElement;

  await getData("http://localhost:3000/avatars").then((result) => {
    result.forEach((item) => {
      const avatar = document.createElement("img");

      avatar.classList.add("modalEdit__avatar_item");
      avatar.setAttribute("src", item.src);
      avatar.setAttribute("alt", item.description);

      avatarsContainer.appendChild(avatar);
    });
  });
};

export const setMaps = async () => {
  const mapBlock = document.querySelector(".map") as HTMLDivElement;
  const mapHeader = mapBlock.querySelector(".map__header") as HTMLUListElement;
  const mapContent = mapBlock.querySelector(".map__content") as HTMLDivElement;

  await getData("http://localhost:3000/maps").then((result) => {
    result.forEach((item, i) => {
      const headerItem = document.createElement("li");
      const contentItem = document.createElement("div");

      headerItem.classList.add("map__header_item");
      headerItem.innerHTML = `
        <img
          class="img_small"
          src="${item.src}"
          alt="map_${i}"
        />
      `;
      mapHeader.appendChild(headerItem);

      contentItem.classList.add("map__content_item");
      contentItem.innerHTML = `
        <img
          class="img_big"
          src="${item.src}"
          alt="map_${i}"
        />
        <div class="map__content_description">
          ${item.description}
        </div>
      `;
      mapContent.appendChild(contentItem);
    });
  });
};

export const setSkills = async () => {
  const skillsContainer = document.querySelector(
    ".modalEdit__skills"
  ) as HTMLDivElement;
  const skillsDescriptionContainer = document.querySelector(
    ".modalEdit__skill-descr"
  ) as HTMLDivElement;

  await getData("http://localhost:3000/skills").then((result) => {
    result.forEach((item) => {
      const skill = document.createElement("img");
      const skillDescription = document.createElement("p");

      skill.classList.add("modalEdit__skills_item");
      skill.setAttribute("src", item.src);

      skillDescription.classList.add("skill-descr_item");
      skillDescription.textContent = item.description;

      skillsContainer.appendChild(skill);
      skillsDescriptionContainer.appendChild(skillDescription);
    });
  });
};
