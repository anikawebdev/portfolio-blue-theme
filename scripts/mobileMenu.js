let ham = document.querySelector(".mobile__ham");
let navbar = document.querySelector(".mobile__navbar");

ham.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  navbar.classList.toggle("showMobileNavbar");
  ham.classList.toggle("mobile__close");
}

let links = document.querySelectorAll(".mobile__navbar-link");

links.forEach(function (link) {
  link.addEventListener("click", toggleHamburger);
});
