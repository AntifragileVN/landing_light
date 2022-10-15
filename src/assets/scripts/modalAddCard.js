const AddGameBtn = document.querySelector("#addNewGameBtn");

const getValuesFromGameForm = (form) => {
  return {
    name: form.elements["gameName"].value,
    description: form.elements["gameDescription"].value,
    review: form.elements["gameReview"].value,
    imageName: form.elements["gameImageName"].value,
    data: Date.now(),
  };
};

function createAddGameModal() {
  const createdGameModal = document.createElement("div");
  createdGameModal.innerHTML = `
<div class="overlay" id="modalAddGameForm">
      <form class="modal__form">
        <div class="modal__form-title">Add new game</div>
        <div class="modal__form-inputs">
          <input
            class="modal__form-input"
            type="text"
            name="gameName"
            placeholder="Game name"
          />
          <input
            class="modal__form-input"
            type="text"
            name="gameDescription"
            placeholder="Game description"
          />
           <input
            class="modal__form-input"
            type="text"
            name="gameReview"
            placeholder="Game review"
          />
          <input
            class="modal__form-input"
            type="text"
            name="gameImageName"
            placeholder="Game image name"
          />
        </div>
          <button class="modal__form-button" type="submit" class="btn">Add game</button>
      </form>
    </div>`;

  document.body.insertBefore(createdGameModal, document.body.firstChild);
}

function openAddGameModal(block) {
  block.classList.remove("close");
}

// const closeAddGameModal = () => {
//   modaAddGameBlock.classList.add("close");
// };

const handleAddGameBtnClick = () => {
  createAddGameModal();
  console.log("gh");
};

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".modal__form") &&
    !e.target.matches("#addNewGameBtn")
  ) {
    document.getElementById("modalAddGameForm").remove();
  }
});

AddGameBtn.addEventListener("click", handleAddGameBtnClick);
