document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    });
  
    scrollToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
