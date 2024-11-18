
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fullpage');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.remove('visible');
          entry.target.classList.add('hidden');
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
