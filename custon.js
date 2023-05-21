const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  breakpoints: {
    300: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 4 },
    1400: { slidesPerView: 4 },
  },
});
