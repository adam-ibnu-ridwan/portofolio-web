const hamMenu = document.getElementById("ham-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamMenu.onclick = function () {
  navbarNav.classList.toggle("active");
};

const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");

dropdownBtns.forEach((e, i) => {
  e.onclick = () => {
    dropdowns[i].classList.toggle("active");
  };
});
