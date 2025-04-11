document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Name validation
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      isValid = false;
    }
    
    // Email validation
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email';
      isValid = false;
    }
    
    // Message validation
    if (message === '') {
      document.getElementById('messageError').textContent = 'Message is required';
      isValid = false;
    } else if (message.length < 10) {
      document.getElementById('messageError').textContent = 'Message should be at least 10 characters';
      isValid = false;
    }
    
    if (isValid) {
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    }
  });