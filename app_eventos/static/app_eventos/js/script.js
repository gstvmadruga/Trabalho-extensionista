document.addEventListener('DOMContentLoaded', () => {
    const upcomingEventsList = document.getElementById('upcoming-events-list');
    const pastEventsList = document.getElementById('past-events-list');

    if (!upcomingEventsList || !pastEventsList) return;

    const eventsData = [
        { title: 'Passeio Ciclístico na Orla', date: '15 de Setembro de 2024', location: 'Praça Central', description: 'Um passeio divertido para toda a família.', status: 'upcoming' },
        { title: 'Oficina de Manutenção Gratuita', date: '28 de Setembro de 2024', location: 'Sede do Projeto', description: 'Aprenda pequenos reparos na sua bike.', status: 'upcoming' },
        { title: 'Feira de Doação de Bicicletas', date: '5 de Outubro de 2024', location: 'Parque Municipal', description: 'Doações de bicicletas para crianças.', status: 'upcoming' },
        { title: 'Passeio Histórico em Parceria', date: '10 de Agosto de 2024', location: 'Centro Histórico', description: 'Evento já realizado.', status: 'past' },
        { title: 'Encontro Mensal de Voluntários', date: '25 de Agosto de 2024', location: 'Online', description: 'Reunião de planejamento.', status: 'past' }
    ];

    eventsData.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('event-card');
        if (event.status === 'past') card.classList.add('past');
        card.innerHTML = `
            <h3>${event.title}</h3>
            <div class="event-meta"><i class="fas fa-calendar-alt"></i><span>${event.date}</span></div>
            <div class="event-meta"><i class="fas fa-map-marker-alt"></i><span>${event.location}</span></div>
            <p>${event.description}</p>
            <a href="#" class="button">${event.status === 'upcoming' ? 'Participar' : 'Ver Detalhes'}</a>
        `;
        (event.status === 'upcoming' ? upcomingEventsList : pastEventsList).appendChild(card);
    });
});
