const headerBurger = document.querySelector(".header__burger");
const headerMobileMenu = document.querySelector(".header__mobile-menu");
const headerBurgerClose = document.querySelector(".header__close-btn ");

function open() {
  headerMobileMenu.classList.remove("close");
  headerMobileMenu.classList.add("show");
  headerBurger.classList.add("close");
}

const handleBurgerBtnClick = () => {
  open();
};

function close() {
  headerMobileMenu.classList.remove("show");
  headerMobileMenu.classList.add("close");
  headerBurger.classList.remove("close");
}

const handleBurgerCloseClick = () => {
  close();
};

headerBurger.addEventListener("click", handleBurgerBtnClick);

headerBurgerClose.addEventListener("click", handleBurgerCloseClick);

// const handleDocumentClick = (e) => {
//   if (e.target.matches("header__burger") || e.target.matches("burger__icon"))
//     return;

//   if (!e.target.matches("header__mobile-menu")) {
//     close();
//   }
// };

// document.addEventListener("click", handleDocumentClick);

document.addEventListener("click", (e) => {
  let clickInside = headerMobileMenu.contains(e.target);
  let clickBurger = headerBurger.contains(e.target);
  if (!clickInside && !clickBurger) {
    close();
  }
});

// document.body.style.cursor = "none";
