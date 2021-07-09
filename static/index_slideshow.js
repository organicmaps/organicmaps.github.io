var slides = document.getElementById("slideshow").getElementsByTagName("img");
var currentSlide = 0;

function nextSlide() {
    for (var _i = 0, slides_1 = slides; _i < slides_1.length; _i++) {
        var slide = slides_1[_i];
        slide.style.opacity = "0";
    }
    slides[currentSlide % slides.length].style.opacity = "1";
    currentSlide += 1;
}

setInterval(nextSlide, 4000);
nextSlide();
