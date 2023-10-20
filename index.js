import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

window.onscroll = function () {
  const navbar = document.getElementById("Navbar");
  const topbar = document.getElementById("TopNav")
  if (window.scrollY > 400) {
    navbar.classList.add("scrolled");
    topbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    topbar.classList.remove("scrolled");
  }
};


var carouselSweiper = new Swiper(".carouselTeam", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

var carouselSweiper = new Swiper(".testimonalsCarousel", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

