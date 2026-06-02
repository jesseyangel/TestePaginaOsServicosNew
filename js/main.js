/* ══════════════════════════════════════════════
   O&S Serviços – main.js
   ══════════════════════════════════════════════ */

// ── Hamburger menu ───────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ── Scroll reveal ────────────────────────────
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));

// ── Testimonial slider ───────────────────────
const track   = document.getElementById('testimonialTrack');
const dots    = document.querySelectorAll('.dot');
const slides  = track.children.length;
let current   = 0;

function goTo(index) {
  current = (index + slides) % slides;
  track.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));
document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.index)));

// Auto-advance a cada 5 segundos
setInterval(() => goTo(current + 1), 5000);

// ── FAQ accordion ────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Fecha todos
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    // Abre o clicado (se estava fechado)
    if (!isOpen) item.classList.add('open');
  });
});
