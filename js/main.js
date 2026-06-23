/* ══════════════════════════════════════════════
   O&S Serviços – main.js
   ══════════════════════════════════════════════ */

// ── Hamburger menu ───────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('open').toString());
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Scroll reveal ────────────────────────────
const reveals = document.querySelectorAll('.reveal');

if (reveals.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => revealObserver.observe(el));
}

// ── Testimonial slider ───────────────────────
const track = document.getElementById('testimonialTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dots = document.querySelectorAll('.dot');

if (track && nextBtn && prevBtn && dots.length) {
  const slides = track.children.length;
  let current = 0;

  function goTo(index) {
    current = (index + slides) % slides;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  nextBtn.addEventListener('click', () => goTo(current + 1));
  prevBtn.addEventListener('click', () => goTo(current - 1));
  dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.index)));

  setInterval(() => goTo(current + 1), 5000);
}

// ── Lead form ────────────────────────────────
const form = document.getElementById('leadForm');
const status = document.getElementById('formStatus');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('leadEmail')?.value?.trim() || '';
    const service = document.getElementById('leadService')?.value || 'Serviço não informado';
    const message = `Olá! Gostaria de solicitar um orçamento para ${service}. Meu e-mail para contato é ${email || 'não informado'}.`;
    const whatsappUrl = `https://wa.me/5511979561723?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    status.textContent = 'Redirecionando para o WhatsApp...';
    status.classList.add('success');
  });
}

// ── FAQ accordion ────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item?.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    if (!isOpen && item) item.classList.add('open');
  });
});
