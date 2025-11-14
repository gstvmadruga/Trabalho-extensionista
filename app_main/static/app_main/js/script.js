script.js
            document.addEventListener('DOMContentLoaded', () => {
                // Menu Hamburger
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');

                if (hamburger && navMenu) {
                    hamburger.addEventListener('click', () => {
                        navMenu.classList.toggle('active');
                    });
                }

                // Formulário de Contato aprimorado
                const contactForm = document.getElementById('contact-form');
                const formMessage = document.getElementById('form-message');

                if (contactForm) {
                    contactForm.addEventListener('submit', function(event) {
                        event.preventDefault();

                        const name = document.getElementById('name').value;
                        const email = document.getElementById('email').value;
                        const message = document.getElementById('message').value;

                        formMessage.textContent = ''; // Limpa a mensagem anterior

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

                // Formulário de Newsletter
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

                // Animação de Contadores na Página Inicial
                const counters = document.querySelectorAll('.counter');
                const options = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.5
                };

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
                }, options);

                counters.forEach(counter => {
                    observer.observe(counter);
                });

                // Carrossel de Projetos
                // ... (Mantenha o código anterior, como Menu Hamburger e formulários)

                // Carrossel de Projetos (CÓDIGO CORRIGIDO)
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

                if (nextButton && prevButton && track) {
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

                // ... (Mantenha o código seguinte, como Carrossel de Depoimentos e Eventos)

                // Carrossel de Depoimentos
                const testimonials = document.querySelectorAll('.testimonial-slide');
                let currentTestimonial = 0;

                function showTestimonial(n) {
                    testimonials.forEach(testimonial => testimonial.style.display = 'none');
                    testimonials[n].style.display = 'block';
                }

                function nextTestimonial() {
                    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                    showTestimonial(currentTestimonial);
                }

                if (testimonials.length > 0) {
                    setInterval(nextTestimonial, 5000);
                    showTestimonial(0);
                }

                // Gerenciamento de Eventos Dinâmicos
                const upcomingEventsList = document.getElementById('upcoming-events-list');
                const pastEventsList = document.getElementById('past-events-list');

                if (upcomingEventsList && pastEventsList) {
                    const eventsData = [
                        {
                            title: 'Passeio Ciclístico na Orla',
                            date: '15 de Setembro de 2024',
                            location: 'Praça Central',
                            description: 'Venha pedalar conosco! Um passeio divertido para toda a família.',
                            status: 'upcoming'
                        },
                        {
                            title: 'Oficina de Manutenção Gratuita',
                            date: '28 de Setembro de 2024',
                            location: 'Sede do Projeto',
                            description: 'Aprenda a fazer pequenos reparos na sua bicicleta. Vagas limitadas!',
                            status: 'upcoming'
                        },
                        {
                            title: 'Feira de Doação de Bicicletas',
                            date: '5 de Outubro de 2024',
                            location: 'Parque Municipal',
                            description: 'Receberemos doações de bicicletas e faremos um mini-evento para doá-las a crianças da comunidade.',
                            status: 'upcoming'
                        },
                        {
                            title: 'Passeio Histórico em Parceria',
                            date: '10 de Agosto de 2024',
                            location: 'Centro Histórico',
                            description: 'Um passeio educativo para explorar a história da cidade de uma forma divertida. Evento já realizado!',
                            status: 'past'
                        },
                        {
                            title: 'Encontro Mensal de Voluntários',
                            date: '25 de Agosto de 2024',
                            location: 'Online',
                            description: 'Reunião para alinhamento e planejamento das próximas atividades do projeto. Para voluntários ativos.',
                            status: 'past'
                        }
                    ];

                    eventsData.forEach(event => {
                        const eventCard = document.createElement('div');
                        eventCard.classList.add('event-card');
                        if (event.status === 'past') {
                            eventCard.classList.add('past');
                        }

                        eventCard.innerHTML = `
                            <h3>${event.title}</h3>
                            <div class="event-meta">
                                <i class="fas fa-calendar-alt"></i>
                                <span>${event.date}</span>
                            </div>
                            <div class="event-meta">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${event.location}</span>
                            </div>
                            <p>${event.description}</p>
                            ${event.status === 'upcoming' ? '<a href="#" class="button">Participar</a>' : '<a href="#" class="button">Ver Detalhes</a>'}
                        `;

                        if (event.status === 'upcoming') {
                            upcomingEventsList.appendChild(eventCard);
                        } else {
                            pastEventsList.appendChild(eventCard);
                        }
                    });
                }
            });