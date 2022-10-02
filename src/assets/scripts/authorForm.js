const signInForm = document.querySelector(".sign-in-form");

const getValuesFromForm = (form) => {
  return {
    username: form.elements["userName"].value,
    password: form.elements["password"].value,
  };
};

const handlSubmitSignInForm = (e) => {
  e.preventDefault();

  const formValus = getValuesFromForm(signInForm);
  console.log("user datas = ", formValus);
};

signInForm.addEventListener("submit", handlSubmitSignInForm);
