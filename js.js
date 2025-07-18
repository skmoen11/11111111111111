// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved user preference or use system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scrolling for navigation links
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
        }
    });
});

// Review Slider
let currentReview = 0;
const reviewTrack = document.getElementById('reviewTrack');
const reviewCards = document.querySelectorAll('.review-card');
const dots = document.querySelectorAll('.review-dot');

function updateReviewSlider() {
    reviewTrack.style.transform = `translateX(-${currentReview * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentReview);
    });
}

function goToReview(index) {
    currentReview = index;
    updateReviewSlider();
}

// Auto-advance reviews
setInterval(() => {
    currentReview = (currentReview + 1) % reviewCards.length;
    updateReviewSlider();
}, 5000);

// Modal Functions
function openModal(packageName, packagePrice) {
    const modal = document.getElementById('orderModal');
    const modalTitle = document.getElementById('modalTitle');
    const packageNameInput = document.getElementById('packageName');
    const packagePriceInput = document.getElementById('packagePrice');
    
    modalTitle.textContent = `${packageName} - $${packagePrice}`;
    packageNameInput.value = packageName;
    packagePriceInput.value = packagePrice;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset form
    document.getElementById('modalForm').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('paymentForm').reset();
    document.getElementById('bkashInfo').style.display = 'none';
    document.getElementById('nagadInfo').style.display = 'none';
    document.getElementById('transactionIdGroup').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('orderModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Show payment info based on selection
const paymentMethods = document.querySelectorAll('input[name="payment"]');
const bkashInfo = document.getElementById('bkashInfo');
const nagadInfo = document.getElementById('nagadInfo');
const transactionIdGroup = document.getElementById('transactionIdGroup');

paymentMethods.forEach(method => {
    method.addEventListener('change', () => {
        if (method.value === 'bKash') {
            bkashInfo.style.display = 'block';
            nagadInfo.style.display = 'none';
            transactionIdGroup.style.display = 'block';
        } else if (method.value === 'Nagad') {
            bkashInfo.style.display = 'none';
            nagadInfo.style.display = 'block';
            transactionIdGroup.style.display = 'block';
        } else {
            bkashInfo.style.display = 'none';
            nagadInfo.style.display = 'none';
            transactionIdGroup.style.display = 'none';
        }
    });
});

// Form submission handling
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitButton.disabled = true;
    
    // Simulate form submission (in a real scenario, this would be an actual form submission)
    setTimeout(() => {
        document.getElementById('modalForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        // Reset form after showing success message
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.point-card, .package-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.animationPlayState = 'running';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);