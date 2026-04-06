// ===========================
// MENU MOBILE
// ===========================
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
}

// ===========================
// CARROSSEL (saiba-mais.html)
// ===========================
(function initCarousel() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  const dotsContainer = document.getElementById('carouselDots');
  let current = 0;
  let autoTimer;

  // Criar dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Foto ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  document.getElementById('carouselPrev')?.addEventListener('click', () => {
    goTo(current - 1);
    resetAuto();
  });

  document.getElementById('carouselNext')?.addEventListener('click', () => {
    goTo(current + 1);
    resetAuto();
  });

  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 4000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  startAuto();
})();

// ===========================
// LIGHTBOX (galeria.html)
// ===========================
(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = document.getElementById('lightboxImg');
  const items = document.querySelectorAll('.gallery-item');
  let currentIndex = 0;

  function open(index) {
    currentIndex = index;
    lightboxImg.src = items[index].querySelector('img').src;
    lightboxImg.alt = items[index].querySelector('img').alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function prev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    lightboxImg.src = items[currentIndex].querySelector('img').src;
  }

  function next() {
    currentIndex = (currentIndex + 1) % items.length;
    lightboxImg.src = items[currentIndex].querySelector('img').src;
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => open(i));
  });

  document.getElementById('lightboxClose')?.addEventListener('click', close);
  document.getElementById('lightboxPrev')?.addEventListener('click', prev);
  document.getElementById('lightboxNext')?.addEventListener('click', next);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();
