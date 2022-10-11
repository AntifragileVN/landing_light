const categoris = document.querySelectorAll(".menu__link");

handleCategoriClick = (e) => {
  //   console.log("e", e.target);
  categoris.forEach((categori) => {
    if (categori.classList.contains("menu__link--active")) {
      categori.classList.remove("menu__link--active");
      console.log("remodev");
    }
  });
  e.target.classList.toggle("menu__link--active");
};

categoris.forEach((categori) => {
  categori.addEventListener("click", handleCategoriClick);
});

console.log("catagoris = ", categoris);
