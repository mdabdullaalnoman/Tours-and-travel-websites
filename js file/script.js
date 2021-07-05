let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");

let formButton = document.querySelector("#login-btn");
let LoginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector("#navbar");

// window.onscroll = () => {
//   searchBtn.classList.remove("fa-times");
//   searchBtn.classList.remove("active");
// };

// searchBtn.addEventListener("click", () => {
//   searchBtn.classList.toggle("fa-times");
//   searchBar.classList.toggle("active");
// });

// formButton.addEventListener("click", () => {
//   LoginForm.classList.add("active");
// });

// formClose.addEventListener("click", () => {
//   LoginForm.classList.remove("active");
// });

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("actives");
});
