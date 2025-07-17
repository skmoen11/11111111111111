document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerText;
      
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending...';
      
      fetch('process-form.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Show success message
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message success';
        messageDiv.textContent = data.message;
        
        // Insert before form
        contactForm.parentNode.insertBefore(messageDiv, contactForm);
        
        // Reset form
        contactForm.reset();
        
        // Remove message after 5 seconds
        setTimeout(() => {
          messageDiv.remove();
        }, 5000);
      })
      .catch(error => {
        // Show error message
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message error';
        messageDiv.textContent = 'There was an error sending your message. Please try again.';
        contactForm.parentNode.insertBefore(messageDiv, contactForm);
      })
      .finally(() => {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
      });
    });
  }
});