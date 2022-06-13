// === Header Drop Logic === //
let headerScroll = document.getElementById("site-header");

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    headerScroll.style.backgroundColor = "rgba(25,25,25, 0.7)";
  } else {
    headerScroll.style.backgroundColor = "transparent";
  }
};

// === Prevent Scroll === //

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

// === Video Gallery === //

document.querySelectorAll(".video-container video").forEach((vid) => {
  vid.onclick = () => {
    document.querySelector(".popup-video").style.display = "block";
    document.querySelector(".popup-video video").src = vid.getAttribute("src");
  };
});

document.querySelector(".popup-video span").onclick = () => {
  document.querySelector(".popup-video").style.display = "none";
};

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

//==============================================================================//

//==============================================================================//
