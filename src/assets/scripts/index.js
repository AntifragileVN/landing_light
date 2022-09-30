const headerBurger = document.querySelector(".header__burger");
const headerMobileMenu = document.querySelector(".header__mobile-menu");
const headerBurgerClose = document.querySelector(".header__close-btn ");

const handleBurgerBtnClick = () => {
  // headerBurger.classList.add();
  headerBurger.style.cssText = `
    opacity: 0;
    pointer-events: none;
    `;
  headerMobileMenu.style.cssText = `
    opacity: 1;
    pointer-events: all;
    transition: 0.5s;
    `;
};

headerBurger.addEventListener("click", handleBurgerBtnClick);

const handleBurgerCloseClick = () => {
  headerBurger.style.cssText = `
    opacity: 1;
    pointer-events: all;
    `;
  headerMobileMenu.style.cssText = `
  opacity: 0; 
  pointer-events: none;
  transition: 0.5s;
  `;
};

headerBurgerClose.addEventListener("click", handleBurgerCloseClick);
