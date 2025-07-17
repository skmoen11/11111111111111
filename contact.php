<?php include 'includes/header.php'; ?>

<main>
  <!-- Contact Hero -->
  <section class="page-hero">
    <div class="container">
      <h1>Contact Me</h1>
      <p>Get in touch to discuss your CV design needs</p>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="section contact-section">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Contact Information</h2>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="info-content">
              <h3>Phone</h3>
              <p>01779148278</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fab fa-whatsapp"></i>
            </div>
            <div class="info-content">
              <h3>WhatsApp</h3>
              <p><a href="https://wa.me/+8801779148278">Click to Chat</a></p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info-content">
              <h3>Email</h3>
              <p><a href="mailto:maryhlarsen.1@gmail.com">maryhlarsen.1@gmail.com</a></p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fab fa-facebook"></i>
            </div>
            <div class="info-content">
              <h3>Facebook</h3>
              <p>
                <a href="https://www.facebook.com/sadiaakter.cvexpert/" target="_blank">Profile</a><br>
                <a href="https://www.facebook.com/bdcvexperts" target="_blank">Page</a>
              </p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <h2>Send a Message</h2>
          <form id="contactForm" action="process-form.php" method="POST">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone">
            </div>
            
            <div class="form-group">
              <label for="service">Service Interested In</label>
              <select id="service" name="service">
                <option value="CV Design">CV Design</option>
                <option value="Cover Letter">Cover Letter</option>
                <option value="LinkedIn Optimization">LinkedIn Optimization</option>
                <option value="Multiple Services">Multiple Services</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

<?php include 'includes/footer.php'; ?>