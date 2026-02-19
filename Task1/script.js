// ── Scroll: shrink/tint header ───────────────────
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ── Keyboard arrow scroll ─────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    window.scrollBy({
      top: e.key === 'ArrowDown' ? 60 : -60,
      behavior: 'smooth'
    });
  }
});

// ── Subtle fade-in on scroll for sections ─────────
const sections = document.querySelectorAll('.about, .services, .contact');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(32px)';
  section.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  observer.observe(section);
});

// ── Active nav link highlight ─────────────────────
const navLinks = document.querySelectorAll('.nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--fg)' : '';
  });
});
