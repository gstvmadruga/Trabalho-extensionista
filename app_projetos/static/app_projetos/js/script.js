document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track?.children || []);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsContainer = document.querySelector('.carousel-dots');

    if (!track || slides.length === 0) return;

    let slideIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
        updateDots();
    }

    function updateDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === slideIndex) dot.classList.add('active');
            dot.addEventListener('click', () => {
                slideIndex = i;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        });
    }

    nextButton?.addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % slides.length;
        updateCarousel();
    });

    prevButton?.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});
