const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Mark active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path || (path === 'index.html' && href === 'index.html')) {
    a.classList.add('active');
  }
});
