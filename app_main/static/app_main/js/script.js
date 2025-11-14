document.addEventListener('DOMContentLoaded', () => {
  console.log('[script.js] DOMContentLoaded');

  // ---------- Menu hamburger (mantive seu código) ----------
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
  }

  // ---------- Forms (mantidos) ----------
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      formMessage.textContent = '';
      if (!name || !email || !message) {
        formMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        formMessage.style.color = 'red';
      } else {
        formMessage.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
        formMessage.style.color = 'green';
        contactForm.reset();
      }
    });
  }
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (!emailInput.value.trim()) alert('Por favor, insira um e-mail válido.');
      else { alert('Obrigado por se inscrever!'); newsletterForm.reset(); }
    });
  }

  // ---------- Counters (mantido) ----------
  const counters = document.querySelectorAll('.counter');
  if (counters.length) {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target || '0');
          let count = 0;
          const steps = 100;
          const inc = Math.max(1, Math.floor(target / steps));
          const run = () => {
            count += inc;
            if (count < target) {
              el.innerText = count;
              setTimeout(run, 10);
            } else {
              el.innerText = target;
            }
          };
          run();
          o.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => obs.observe(c));
  }

  // ==========================
  // CARROSSEL DE PROJETOS - ROBUSTO
  // ==========================
  const container = document.querySelector('.carousel-container'); // wrapper (opcional)
  const track = document.querySelector('.carousel-track');
  let slides = Array.from(document.querySelectorAll('.carousel-slide'));

  if (!track || slides.length === 0) {
    console.warn('[carousel] .carousel-track ou .carousel-slide não encontrado');
  } else {
    console.log(`[carousel] encontrado track e ${slides.length} slides`);

    // botões: aceita classes existentes ou cria se não houver
    let prevBtn = document.querySelector('.carousel-prev') || document.querySelector('.carousel-button.prev') || null;
    let nextBtn = document.querySelector('.carousel-next') || document.querySelector('.carousel-button.next') || null;

    function createNavButtons() {
      if (!prevBtn) {
        prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-prev';
        prevBtn.setAttribute('aria-label', 'Anterior');
        prevBtn.innerHTML = '&#10094;'; // ◀
        (container || track.parentElement).insertBefore(prevBtn, track);
      }
      if (!nextBtn) {
        nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-next';
        nextBtn.setAttribute('aria-label', 'Próximo');
        nextBtn.innerHTML = '&#10095;'; // ▶
        (container || track.parentElement).appendChild(nextBtn);
      }
    }
    createNavButtons();

    // estilo básico necessário no track (se ainda não houver)
    track.style.display = 'flex';
    track.style.gap = '0';
    track.style.willChange = 'transform';

    // garantia: cada slide terá flex: 0 0 <width> para evitar que diminuam
    let currentIndex = 0;
    let slideWidth = 0;

    function setSlideSizes() {
      // largura do "viewport" do carrossel: se existir .carousel-container use ela, senão use offsetWidth do parent
      const viewport = container || track.parentElement;
      slideWidth = Math.floor(viewport.offsetWidth);
      // se quiser que cada slide ocupe 80% e mostrar parte do próximo, ajuste aqui. Estamos usando 100%.
      slides.forEach(slide => {
        slide.style.flex = `0 0 ${slideWidth}px`;
      });
      // após ajustar tamanhos, reposiciona
      moveTo(currentIndex, false);
    }

    function moveTo(index, animate = true) {
      if (index < 0) index = 0;
      if (index > slides.length - 1) index = slides.length - 1;
      currentIndex = index;
      const offset = -currentIndex * slideWidth;
      if (!animate) track.style.transition = 'none';
      else track.style.transition = 'transform 0.45s cubic-bezier(.22,.9,.36,1)';
      track.style.transform = `translateX(${offset}px)`;
      // pequeno timeout para reativar transição se for chamado com animate=false
      if (!animate) requestAnimationFrame(() => {
        track.style.transition = 'transform 0.45s cubic-bezier(.22,.9,.36,1)';
      });
    }

    // eventos nos botões
    nextBtn?.addEventListener('click', () => {
      moveTo(Math.min(currentIndex + 1, slides.length - 1));
    });
    prevBtn?.addEventListener('click', () => {
      moveTo(Math.max(currentIndex - 1, 0));
    });

    // teclado (opcional)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') moveTo(Math.min(currentIndex + 1, slides.length - 1));
      if (e.key === 'ArrowLeft') moveTo(Math.max(currentIndex - 1, 0));
    });

    // suporte touch / drag
    (function addTouchSupport() {
      let startX = 0;
      let currentTranslate = 0;
      let isDown = false;

      track.addEventListener('pointerdown', (e) => {
        isDown = true;
        startX = e.clientX;
        track.style.cursor = 'grabbing';
        track.style.transition = 'none';
      });

      window.addEventListener('pointermove', (e) => {
        if (!isDown) return;
        const dx = e.clientX - startX;
        const offset = -currentIndex * slideWidth + dx;
        track.style.transform = `translateX(${offset}px)`;
      });

      window.addEventListener('pointerup', (e) => {
        if (!isDown) return;
        isDown = false;
        track.style.cursor = '';
        const dx = e.clientX - startX;
        // threshold para swipe
        if (dx < -50 && currentIndex < slides.length - 1) currentIndex++;
        if (dx > 50 && currentIndex > 0) currentIndex--;
        moveTo(currentIndex);
      });

      // cancel if pointer leaves window
      window.addEventListener('pointercancel', () => {
        if (!isDown) return;
        isDown = false;
        moveTo(currentIndex);
      });
    })();

    // resize
    window.addEventListener('resize', () => {
      // recarrega slides em caso de DOM dinâmico
      slides = Array.from(document.querySelectorAll('.carousel-slide'));
      setTimeout(setSlideSizes, 50);
    });

    // init
    setSlideSizes();

    // criar dots (opcional) - mostra qual index está ativo
    const dotsContainer = document.querySelector('.carousel-dots');
    if (dotsContainer) {
      function renderDots() {
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
          const dot = document.createElement('button');
          dot.className = 'dot';
          dot.type = 'button';
          if (i === currentIndex) dot.classList.add('active');
          dot.addEventListener('click', () => { moveTo(i); updateDots(); });
          dotsContainer.appendChild(dot);
        });
      }
      function updateDots() {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
      }
      // atualizar active dot sempre que moveTo é chamado (observador simples)
      const origMoveTo = moveTo;
      moveTo = (index, animate = true) => { origMoveTo(index, animate); setTimeout(updateDots, 50); };
      renderDots();
    }

    console.log('[carousel] inicializado com sucesso');
  } // end if track

  // ==========================
  // Depoimentos e Eventos (mantidos — seu código anterior)
  // ==========================
  const testimonials = document.querySelectorAll('.testimonial-slide');
  if (testimonials.length) {
    let idx = 0;
    function showTest(i) {
      testimonials.forEach(s => s.style.display = 'none');
      testimonials[i].style.display = 'block';
    }
    showTest(0);
    setInterval(() => {
      idx = (idx + 1) % testimonials.length;
      showTest(idx);
    }, 5000);
  }

  const upcomingEventsList = document.getElementById('upcoming-events-list');
  const pastEventsList = document.getElementById('past-events-list');
  if (upcomingEventsList && pastEventsList) {
    const eventsData = [
      { title: 'Passeio Ciclístico na Orla', date: '15 de Setembro de 2024', location: 'Praça Central', description: 'Venha pedalar conosco!', status: 'upcoming' },
      { title: 'Oficina de Manutenção Gratuita', date: '28 de Setembro de 2024', location: 'Sede do Projeto', description: 'Aprenda a consertar bicicletas.', status: 'upcoming' },
      { title: 'Feira de Doação de Bicicletas', date: '5 de Outubro de 2024', location: 'Parque Municipal', description: 'Doações e mini-evento.', status: 'upcoming' },
      { title: 'Passeio Histórico', date: '10 de Agosto de 2024', location: 'Centro Histórico', description: 'Evento já realizado.', status: 'past' }
    ];
    eventsData.forEach(ev => {
      const card = document.createElement('div');
      card.className = 'event-card' + (ev.status === 'past' ? ' past' : '');
      card.innerHTML = `
        <h3>${ev.title}</h3>
        <div class="event-meta"><i class="fas fa-calendar-alt"></i><span>${ev.date}</span></div>
        <div class="event-meta"><i class="fas fa-map-marker-alt"></i><span>${ev.location}</span></div>
        <p>${ev.description}</p>
        <a href="#" class="button">${ev.status === 'upcoming' ? 'Participar' : 'Ver Detalhes'}</a>
      `;
      if (ev.status === 'upcoming') upcomingEventsList.appendChild(card); else pastEventsList.appendChild(card);
    });
  }

}); 

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    let currentSlide = 0;

    function updateSlidePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlidePosition();
    });

    prevButton.addEventListener("click", () => {
        currentSlide =
            currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        updateSlidePosition();
    });

    window.addEventListener("resize", updateSlidePosition);
});

