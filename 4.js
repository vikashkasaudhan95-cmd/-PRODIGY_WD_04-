// Contact Form Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been sent successfully.');
  contactForm.reset();
});

// Navbar background shift on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});