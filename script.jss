const slides = document.querySelectorAll('.slideshow img');
let current = 0;

function showSlide(index) {
  slides.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

if (slides.length > 0) {
  showSlide(current);
  setInterval(nextSlide, 3000); // Change every 3 seconds
}
