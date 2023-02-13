let valueDisplays = document.querySelectorAll(".team-numbers");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function() {
    startValue = startValue + 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


var swiper = new Swiper(".mySwiper", {
   breakpoints: {
      1000: {
          slidesPerView: 4,
      },
  
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      484: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      280: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      100: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
  },
   slidesPerView: 5,
   spaceBetween: 30,
   freeMode: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });