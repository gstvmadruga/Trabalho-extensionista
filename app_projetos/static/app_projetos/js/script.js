/* projetos.js (Carrossel de Projetos) */
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsContainer = document.querySelector('.carousel-dots');

    let slideIndex = 0;

    // Calcula a largura de um slide e o transforma
    const updateCarousel = () => {
        if (!track || !slides.length) return;
        const slideWidth = slides[0].offsetWidth;
        const offset = -slideIndex * slideWidth;
        track.style.transform = `translateX(${offset}px)`;
        updateDots();
    };

    // Cria e atualiza os pontos de navegação
    const updateDots = () => {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === slideIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                slideIndex = index;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        });
    };

    if (nextButton && prevButton && track && slides.length > 0) {
        // Evento para o botão "próximo"
        nextButton.addEventListener('click', () => {
            slideIndex = (slideIndex + 1) % slides.length;
            updateCarousel();
        });

        // Evento para o botão "anterior"
        prevButton.addEventListener('click', () => {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        // Inicializa o carrossel na primeira vez
        updateCarousel();

        // Adiciona um listener para atualizar o carrossel em caso de redimensionamento
        window.addEventListener('resize', updateCarousel);
    }
});