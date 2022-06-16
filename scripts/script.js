// === Header Drop Logic === //
let headerScroll = document.getElementById("site-header");

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    headerScroll.style.backgroundColor = "rgba(25,25,25, 0.7)";
  } else {
    headerScroll.style.backgroundColor = "transparent";
  }
};

//===============================================================//

// === Carousel Logic === //
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// 

//==============================================================================//
// === Prevent Scroll === //

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

//==============================================================================//

//=== Nav Overlay ===//

const menuOpen = document.querySelector(".toggler");

menuOpen.addEventListener("click", () => {
  menuOpen.classList.toggle("menu-open");

  if (menuOpen.classList.contains("menu-open")) {
    disableScroll();
  } else {
    enableScroll();
  }
});

/* Current Year Logic */

let date = new Date();
let year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;

//===============================================================================//

