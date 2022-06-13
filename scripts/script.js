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

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// Buttons

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Counter

let counter = 1;
const size = carouselImages[0].clientWidth; // Getting image size

carouselSlide.style.transform = `translateX(` + -size * counter + `px)`;

// Button Listeners

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(` + -size * counter + `px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = `translateX(` + -size * counter + `px)`;
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(` + -size * counter + `px)`;
  }

  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = `translateX(` + -size * counter + `px)`;
  }
});

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


