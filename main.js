document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('active');
    });
  }
  
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mobileMenu) {
          mobileMenu.classList.remove('active');
        }
      }
    });
  });
  
  // Animate elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .benefit-card, .stat-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load
  
  // Counter animation for stats
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsSection = document.querySelector('.about-stats');
  
  const animateStats = function() {
    if (isElementInViewport(statsSection)) {
      statNumbers.forEach(number => {
        const target = parseInt(number.textContent);
        const suffix = number.textContent.includes('+') ? '+' : '';
        let count = 0;
        const duration = 2000; // Animation duration in ms
        const increment = target / (duration / 16); // 60fps
        
        const updateCount = () => {
          count += increment;
          if (count < target) {
            number.textContent = Math.floor(count) + suffix;
            requestAnimationFrame(updateCount);
          } else {
            number.textContent = target + suffix;
          }
        };
        
        updateCount();
      });
      
      // Remove event listener after animation
      window.removeEventListener('scroll', animateStats);
    }
  };
  
  window.addEventListener('scroll', animateStats);
  
  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
});