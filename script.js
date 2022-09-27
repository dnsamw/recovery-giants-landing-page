//hamburger and Free quote button
window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
    }
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector("#toggleMenu");
  const menu_items = document.querySelectorAll(".menu-item");

  //quote
  const quote_btn = document.querySelector("#free-quote");
  const quote_container = document.querySelector("#quote-container");
  const form_close_btn = document.querySelector("#form-close");

  for (i of menu_items) {
    i.addEventListener("click", () => {
      mobile_menu.classList.toggle("is-active");
      menu_btn.classList.toggle("is-active");
    });
  }

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  quote_btn.addEventListener("click", function () {
    quote_container.classList.toggle("is-active");
  });

  form_close_btn.addEventListener("click", function () {
    quote_container.classList.toggle("is-active");
  });

  //forms
  const form1 = document.getElementById("Form1");
  const form2 = document.getElementById("Form2");
  const form3 = document.getElementById("Form3");

  //buttons
  const next1 = document.getElementById("next1");
  const next2 = document.getElementById("next2");
  const back1 = document.getElementById("back1");
  const back2 = document.getElementById("back2");
  //const getBtn = document.getElementById("get-btn");

  //progress
  const progress = document.getElementById("progress");

  // getBtn.onclick = function () {
  //   var x = document.getElementById("container");
  // };

  next1.onclick = function () {
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "240px";
  };

  next2.onclick = function () {
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "360px";
  };

  back1.onclick = function () {
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "120px";
  };

  back2.onclick = function () {
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px";
  };
};

//Testimonials Swiper
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
