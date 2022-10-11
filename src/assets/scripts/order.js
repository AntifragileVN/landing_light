// Order select
const order = document.querySelector(".order");

const handleOrderClick = (e) => {
  const eTarget = e.target.value;
  console.log("e target ==", eTarget);
};

order.addEventListener("click", handleOrderClick);
