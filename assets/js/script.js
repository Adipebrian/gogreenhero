const click = document.querySelector(".btn_click");
const click_back = document.querySelector(".click_back");
const p = document.querySelector(".contact p");
const boxContact = document.querySelector(".contact .boxContact");

click.addEventListener("click", function () {
  click.classList.toggle("hide");
  p.classList.toggle("hide");
  boxContact.classList.remove("hide");
});
click_back.addEventListener("click", function () {
  click.classList.remove("hide");
  p.classList.remove("hide");
  boxContact.classList.toggle("hide");
});

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".nav-mobile");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
