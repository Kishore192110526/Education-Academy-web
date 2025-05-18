
    // Smooth scroll for nav
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(e) {
        if (this.hash) {
          e.preventDefault();
          document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Toast notification for contact form
    document.querySelector('form')?.addEventListener('submit', function(e){
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
  