document.addEventListener('DOMContentLoaded', () => {
    // Pequena animação de entrada nos cards
    const cards = document.querySelectorAll('.help-card');
    cards.forEach((card, i) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease';
            card.style.opacity = 1;
        }, 200 * i);
    });
});
