
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelector('form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.remove('opacity-0');
  toast.classList.add('opacity-100');
  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
  }, 2000);
  this.reset();
});

(function () {
  const revealEls = document.querySelectorAll('.js-reveal');

  if (!revealEls.length) return; 

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.dataset.delay, 10) || 0;

          setTimeout(() => {
            el.classList.add('is-visible');
          }, delay);

          
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.12,   
      rootMargin: '0px 0px -40px 0px' 
    }
  );

  revealEls.forEach(el => observer.observe(el));
})();