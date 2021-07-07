const slides = document.getElementById("slideshow").getElementsByTagName("img");
let currentSlide = 0;

function nextSlide() {
  for (const slide of slides) {
    slide.style.opacity = "0";
  }
  slides[currentSlide % slides.length].style.opacity = "1";
  currentSlide += 1;
}

setInterval(nextSlide, 4000);
nextSlide();
