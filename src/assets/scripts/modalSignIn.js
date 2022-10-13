const modalBlock = document.querySelector(".overlay");
const modalSignForm = document.querySelector(".modal__form");
const signInBtn = document.querySelector(".menu__sign-button");

function openSignModal() {
  modalBlock.classList.remove("close");
}

const handleSignInBtnClick = () => {
  openSignModal();
  console.log("gh");
};

const closeSignModal = () => {
  modalBlock.classList.add("close");
};

// const handleBurgerCloseClick = () => {
//   close();
// };

signInBtn.addEventListener("click", handleSignInBtnClick);

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".modal__form") &&
    !e.target.matches(".menu__sign-button")
  ) {
    closeSignModal();
  }
});
