document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburger
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Formulário de Contato
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            formMessage.textContent = '';

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                formMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                formMessage.style.color = 'red';
            } else {
                formMessage.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
                formMessage.style.color = 'green';
                contactForm.reset();
            }
        });
    }

    // Newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value.trim() === '') {
                alert('Por favor, insira um e-mail válido.');
            } else {
                alert('Obrigado por se inscrever! Você receberá nossas novidades em breve.');
                newsletterForm.reset();
            }
        });
    }

    // Contadores
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterElement = entry.target;
                const target = parseInt(counterElement.dataset.target);
                let count = 0;
                const speed = 100;
                const increment = target / speed;

                const updateCounter = () => {
                    if (count < target) {
                        count += increment;
                        counterElement.innerText = Math.ceil(count);
                        setTimeout(updateCounter, 10);
                    } else {
                        counterElement.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(counterElement);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
});
