// ************Get element in console by click************
const body = document.querySelector(".body");

body.onclick = (e) => {
  if (e.target != ".order") {
    console.log("cleack on =  ", e.target);
  }
};
