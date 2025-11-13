/* eventos.js (Gerenciamento de Eventos Dinâmicos) */
document.addEventListener('DOMContentLoaded', () => {
    const upcomingEventsList = document.getElementById('upcoming-events-list');
    const pastEventsList = document.getElementById('past-events-list');

    if (upcomingEventsList && pastEventsList) {
        // Dados de eventos (em Django, isso viria do contexto ou de uma API)
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