const signInBtn = document.querySelector("#modalSignInBtn");

const getValuesFromSignForm = (form) => {
  return {
    name: form.elements["userName"].value,
    password: form.elements["password"],
    data: Date.now(),
  };
};

function createSignModal() {
  const createdSignModal = document.createElement("div");
  createdSignModal.innerHTML = `
<div class="overlay " id="modalSignInForm">
        <form class="modal__form">
          <div class="modal__form-title">Sign in</div>
          <div class="modal__form-inputs">
            <input
              class="modal__form-input"
              type="text"
              name="userName"
              placeholder="Email or username"
            />
            <input
              class="modal__form-input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
            <button class="modal__form-button" type="submit">Sign in</button>
        </form>
      </div>`;

  document.body.insertBefore(createdSignModal, document.body.firstChild);
}

const handleSignInBtnClick = () => {
  createSignModal();
};

signInBtn.addEventListener("click", handleSignInBtnClick);

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".modal__form") &&
    !e.target.matches("#modalSignInBtn")
  ) {
    document.getElementById("modalSignInForm").remove();
  }
});
