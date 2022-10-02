const signInForm = document.querySelector(".sign-in-form");

const handlSubmitSignInForm = (e) => {
  e.preventDefault();

  const email = signInForm.elements["email"].value;
  console.log("email = ", email);
};

signInForm.addEventListener("submit", handlSubmitSignInForm);
