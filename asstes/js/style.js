/*======Navbar=======*/
window.onscroll = function () {
  // Get the navbar element
  var navbar = document.getElementById('header');
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (scrollPosition > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

function toggleMenu() {
  var navMenu = document.getElementById("nav_menu");
  // Toggle the 'active' class
  navMenu.classList.toggle("active");
}


/*======All Swiper Slider=======*/


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


var swiper = new Swiper(".blog_slider", {
  slidesPerView: 1,
  spaceBetween: 36,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
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