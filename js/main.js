// start in settimeout in loading
let Loading = document.getElementById("loading");
window.onload = function LoadingIndex() {
  setTimeout(() => {
    Loading.style.display = "none";
  }, 3000);
};
// start in sidebar

let Sidebar = document.querySelector(".sidebar__navbar");
let NavbarMenu = document.querySelector(".navabar__menu");
let NavbarMenuSpan = document.querySelector(".navabar__menu .active span");

function resizeWindow() {
  let WidthWindows = window.innerWidth;
  if (WidthWindows >= 768) {
    Sidebar.classList.add("active");
  } else {
    Sidebar.classList.remove("acive");
  }
}

window.onresize = () => {
  resizeWindow();
};

NavbarMenu.addEventListener("click", () => {
  Sidebar.classList.toggle("active");
});

// start in swiper js
var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: false,
  slidesPerView: 4,
});
