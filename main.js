// Counter Animation for Stats
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.stat-item h3');
  const speed = 200;
  
  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const increment = target / speed;
      
      if(count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animateCounters, 1);
      } else {
        counter.innerText = target;
      }
    });
  }
  
  // Start animation when stats section is in view
  const statsSection = document.querySelector('.stats-section');
  const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
      animateCounters();
      observer.unobserve(statsSection);
    }
  });
  
  observer.observe(statsSection);
  
  // Testimonial Slider
  $('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
  
  // Smooth scrolling for anchor links
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );
  });
});