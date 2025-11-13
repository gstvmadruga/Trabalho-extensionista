document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track ? track.children : []);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsContainer = document.querySelector('.carousel-dots');
    let slideIndex = 0;

    const updateCarousel = () => {
        if (!track || !slides.length) return;
        const slideWidth = slides[0].offsetWidth;
        const offset = -slideIndex * slideWidth;
        track.style.transform = `translateX(${offset}px)`;
        updateDots();
    };

    const updateDots = () => {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === slideIndex) dot.classList.add('active');
            dot.addEventListener('click', () => {
                slideIndex = index;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        });
    };

    if (nextButton && prevButton && track) {
        nextButton.addEventListener('click', () => {
            slideIndex = (slideIndex + 1) % slides.length;
            updateCarousel();
        });
        prevButton.addEventListener('click', () => {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });
        updateCarousel();
        window.addEventListener('resize', updateCarousel);
    }
});
