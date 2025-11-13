document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-slide');
    let currentTestimonial = 0;

    function showTestimonial(n) {
        testimonials.forEach(t => t.style.display = 'none');
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
                description: 'Receberemos doações e faremos um mini-evento para doá-las a crianças da comunidade.',
                status: 'upcoming'
            },
            {
                title: 'Passeio Histórico em Parceria',
                date: '10 de Agosto de 2024',
                location: 'Centro Histórico',
                description: 'Um passeio educativo para explorar a história da cidade. Evento já realizado!',
                status: 'past'
            }
        ];

        eventsData.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            if (event.status === 'past') eventCard.classList.add('past');

            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <div class="event-meta">
                    <i class="fas fa-calendar-alt"></i> <span>${event.date}</span>
                </div>
                <div class="event-meta">
                    <i class="fas fa-map-marker-alt"></i> <span>${event.location}</span>
                </div>
                <p>${event.description}</p>
                ${event.status === 'upcoming'
                    ? '<a href="#" class="button">Participar</a>'
                    : '<a href="#" class="button">Ver Detalhes</a>'}
            `;

            if (event.status === 'upcoming') {
                upcomingEventsList.appendChild(eventCard);
            } else {
                pastEventsList.appendChild(eventCard);
            }
        });
    }
});
