var swiper = new Swiper(".brand", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
});



var swiper = new Swiper('.customers', {
  slidesPerView: 1,
  spaceBetween: 50,
  effect: "fade",
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' +
        '<img src="asstes/img/user' + (index + 1) + '.png" alt="User ' + (index + 1) + '" class="user-img">' +
        '</div>';
    },
  },
});
