const headerBurger = document.querySelector(".header__burger");
const headerMobileMenu = document.querySelector(".header__mobile-menu");
const headerBurgerClose = document.querySelector(".header__close-btn ");

const handleBurgerBtnClick = () => {
  headerBurger.style.display = "none";
  headerMobileMenu.style.display = "block";
};

const handleBurgerCloseClick = () => {
  headerBurger.style.display = "block";
  headerMobileMenu.style.display = "none";
};

headerBurger.addEventListener("click", handleBurgerBtnClick);
headerBurgerClose.addEventListener("click", handleBurgerCloseClick);
