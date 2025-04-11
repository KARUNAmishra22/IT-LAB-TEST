document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    let currentIndex = 0;
    const slideCount = slides.length;
  
    // Auto-slide every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlider();
    }, 5000);
  
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots if you add them
      const dots = document.querySelectorAll('.slider-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
  });