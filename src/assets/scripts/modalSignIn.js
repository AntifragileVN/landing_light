const modaSignInlBlock = document.querySelector("#modalSignInForm");
const modaAddGameBlock = document.querySelector("#modalAddGameForm");

const AddGameBtn = document.querySelector("#addNewGame");
const signInBtn = document.querySelector("#modalSignInBtn");

function openSignModal() {
  modaSignInlBlock.classList.remove("close");
}

const handleSignInBtnClick = () => {
  openSignModal();
  console.log("gh");
};

const closeSignModal = () => {
  modaSignInlBlock.classList.add("close");
};

// const handleBurgerCloseClick = () => {
//   close();
// };

signInBtn.addEventListener("click", handleSignInBtnClick);

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".modal__form") &&
    (!e.target.matches("#modalSignInBtn") ||
      !e.target.matches("#modalAddGameForm"))
  ) {
    closeSignModal();
    closeAddGameModal();
  }
});

function openAddGameModal() {
  modaAddGameBlock.classList.remove("close");
}

const closeAddGameModal = () => {
  modaAddGameBlock.classList.add("close");
};

const handleAddGameBtnClick = () => {
  openAddGameModal();
  console.log("gh");
};

AddGameBtn.addEventListener("click", handleAddGameBtnClick);
