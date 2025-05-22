const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');
let index = 0;
let interval;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) {
      slide.classList.add('active');
    }
  });
}

function startSlider() {
  interval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);
}


function stopSlider() {
  clearInterval(interval);
}

showSlide(index);
startSlider();

carousel.addEventListener('mouseenter', stopSlider);
carousel.addEventListener('mouseleave', startSlider);
