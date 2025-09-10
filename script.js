document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.slideshow-images');
    if (!slidesContainer) return;

    const slides = slidesContainer.querySelectorAll('img');
    const prevBtn = document.querySelector('.slideshow-arrow.left');
    const nextBtn = document.querySelector('.slideshow-arrow.right');
    let current = 0;
    let interval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    function startAutoScroll() {
        // Clear any existing interval first
        if (interval) clearInterval(interval);
        
        // Start a new interval
        interval = setInterval(() => {
            current = (current + 1) % slides.length;
            showSlide(current);
        }, 3000);
    }

    if (prevBtn && nextBtn && slides.length > 0) {
        prevBtn.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
            startAutoScroll(); // Reset timer on manual navigation
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
            startAutoScroll(); // Reset timer on manual navigation
        });

        // Initialize
        showSlide(current);
        startAutoScroll();

        // Cleanup on page change
        window.addEventListener('beforeunload', () => {
            if (interval) clearInterval(interval);
        });
    }
});