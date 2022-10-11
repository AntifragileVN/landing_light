const gameForm = document.querySelector(".game-form");

const getValuesFromGameForm = (form) => {
  return {
    name: form.elements["gameName"].value,
    description: form.elements["gameDescription"].value,
    imageName: form.elements["gameImageName"].value,
    data: Date.now(),
  };
};

function addModal() {
  const gameModal = document.createElement("div");
  gameModal.classList.add(
    ".signModal",
    ".game-form",
    ".game-form__inputs",
    ".game-form__input",
    ".game-form__button"
  );
  gameModal.innerHTML = `
<div class="signModal">
      <form class="game-form">
        <div class="game-form__title">Add new game</div>
        <div class="game-form__inputs">
          <input
            class="game-form__input"
            type="text"
            name="gameName"
            placeholder="Game name"
          />
          <input
            class="game-form__input"
            type="text"
            name="gameDescription"
            placeholder="Game description"
          />
          <input
            class="game-form__input"
            type="text"
            name="gameImageName"
            placeholder="Game image name"
          />
        </div>
        <div class="game-form__button">
          <button type="submit" class="btn">Add game</button>
        </div>
      </form>
    </div>`;

  let body = document.querySelector("body");
  let bg = document.createElement("div");
  bg.className = "signOverlay";
  body.appendChild(bg);

  document.body.insertBefore(gameModal, document.body.firstChild);
}

const handleSubmitAddGameForm = (e) => {
  e.preventDefault();

  addModal();

  const gameFormValues = getValuesFromGameForm(gameForm);
  console.log("games datas = ", gameFormValues);
};

gameForm.addEventListener("submit", handleSubmitAddGameForm);
