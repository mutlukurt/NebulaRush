// ==========================================================================
// NEBULA RUSH - Production Landing Page JavaScript
// ==========================================================================

// Global state
let currentSlide = 0;
const totalSlides = 3;

// DOM Elements
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const contactModal = document.getElementById('contact-modal');
const contactForm = document.getElementById('contact-form');
const successToast = document.getElementById('success-toast');
const testimonialsTrack = document.getElementById('testimonials-track');
const sliderPrev = document.getElementById('slider-prev');
const sliderNext = document.getElementById('slider-next');
const sliderDots = document.getElementById('slider-dots');

// ==========================================================================
// Header Scroll Effect
// ==========================================================================
function handleHeaderScroll() {
  const scrollY = window.scrollY;
  
  if (scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// ==========================================================================
// Mobile Navigation
// ==========================================================================
function toggleMobileNav() {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (navMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

// Close mobile nav when clicking on links or outside
function closeMobileNav() {
  navMenu.classList.remove('active');
  navToggle.classList.remove('active');
  document.body.style.overflow = '';
}

// Close mobile nav when clicking outside
function handleOutsideClick(e) {
  if (navMenu.classList.contains('active') && 
      !navMenu.contains(e.target) && 
      !navToggle.contains(e.target)) {
    closeMobileNav();
  }
}

// ==========================================================================
// Smooth Scrolling for Navigation Links
// ==========================================================================
function handleSmoothScroll(e) {
  const href = e.target.getAttribute('href');
  
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile nav if open
      closeMobileNav();
    }
  }
}

// ==========================================================================
// Contact Modal
// ==========================================================================
function openContactModal() {
  contactModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Focus on first input
  const firstInput = contactModal.querySelector('input');
  setTimeout(() => firstInput?.focus(), 100);
}

function closeContactModal() {
  contactModal.classList.remove('active');
  document.body.style.overflow = '';
  
  // Reset form
  contactForm.reset();
}

// Handle contact form submission
function handleContactSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };
  
  // Simulate form submission
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    closeContactModal();
    showSuccessToast();
    
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
}

// ==========================================================================
// Success Toast
// ==========================================================================
function showSuccessToast() {
  successToast.classList.add('show');
  
  setTimeout(() => {
    successToast.classList.remove('show');
  }, 3000);
}

// ==========================================================================
// Testimonials Slider
// ==========================================================================
function updateSlider() {
  const translateX = -currentSlide * 100;
  testimonialsTrack.style.transform = `translateX(${translateX}%)`;
  
  // Update dots
  const dots = sliderDots.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlider();
}

// Auto-play slider
function startAutoPlay() {
  return setInterval(nextSlide, 5000);
}

// ==========================================================================
// Intersection Observer for Scroll Animations
// ==========================================================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, observerOptions);
  
  // Observe all elements with data-aos attribute
  const animatedElements = document.querySelectorAll('[data-aos]');
  animatedElements.forEach(el => observer.observe(el));
}

// ==========================================================================
// Parallax Effects
// ==========================================================================
function handleParallax() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  
  // Hero particles parallax
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle, index) => {
    const speed = 0.2 + (index * 0.1);
    const translateY = scrollY * speed;
    particle.style.transform = `translateY(${translateY}px)`;
  });
  
  // Hero shapes parallax
  const shapes = document.querySelectorAll('.shape');
  shapes.forEach((shape, index) => {
    const speed = 0.1 + (index * 0.05);
    const translateY = scrollY * speed;
    shape.style.transform = `translateY(${translateY}px) rotate(${scrollY * 0.1}deg)`;
  });
  
  // Spotlight stars parallax
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    const speed = 0.15 + (index * 0.05);
    const translateY = scrollY * speed;
    star.style.transform = `translateY(${translateY}px)`;
  });
}

// ==========================================================================
// Button Hover Effects
// ==========================================================================
function initButtonEffects() {
  const primaryButtons = document.querySelectorAll('.btn-primary');
  
  primaryButtons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.setProperty('--hover-scale', '1.02');
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.setProperty('--hover-scale', '1');
    });
  });
}

// ==========================================================================
// Feature Bubble Hover Effects
// ==========================================================================
function initFeatureBubbleEffects() {
  const bubbles = document.querySelectorAll('.feature-bubble');
  
  bubbles.forEach(bubble => {
    bubble.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.bubble-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1) rotate(10deg)';
      }
    });
    
    bubble.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.bubble-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
    });
  });
}

// ==========================================================================
// Keyboard Navigation
// ==========================================================================
function handleKeyboardNavigation(e) {
  // Close modal with Escape key
  if (e.key === 'Escape') {
    if (contactModal.classList.contains('active')) {
      closeContactModal();
    }
  }
  
  // Slider navigation with arrow keys
  if (document.activeElement.closest('.testimonials-slider')) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  }
}

// ==========================================================================
// Touch/Swipe Support for Slider
// ==========================================================================
function initTouchSupport() {
  let startX = 0;
  let endX = 0;
  let startY = 0;
  let endY = 0;
  
  testimonialsTrack.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  
  testimonialsTrack.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const threshold = 50;
    const diffX = startX - endX;
    const diffY = Math.abs(startY - endY);
    
    // Only trigger swipe if horizontal movement is greater than vertical
    if (Math.abs(diffX) > threshold && diffY < threshold * 2) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }
}

// ==========================================================================
// Responsive Utilities
// ==========================================================================
function getScreenSize() {
  const width = window.innerWidth;
  if (width >= 1200) return 'desktop';
  if (width >= 1024) return 'laptop';
  if (width >= 768) return 'tablet';
  if (width >= 480) return 'mobile';
  return 'small';
}

function handleResize() {
  const screenSize = getScreenSize();
  
  // Close mobile nav on resize to larger screens
  if (screenSize !== 'mobile' && screenSize !== 'small') {
    closeMobileNav();
  }
  
  // Adjust slider for mobile
  updateSlider();
  
  // Recalculate parallax positions
  if (screenSize === 'desktop' || screenSize === 'laptop') {
    handleParallax();
  }
}

// ==========================================================================
// Performance Optimizations
// ==========================================================================
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// ==========================================================================
// Lazy Loading for Images
// ==========================================================================
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// ==========================================================================
// Preload Critical Assets
// ==========================================================================
function preloadAssets() {
  const criticalAssets = [
    // Add paths to critical images here
  ];
  
  criticalAssets.forEach(asset => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = asset;
    document.head.appendChild(link);
  });
}

// ==========================================================================
// Event Listeners
// ==========================================================================
function initEventListeners() {
  // Scroll events
  window.addEventListener('scroll', throttle(handleHeaderScroll, 16));
  
  // Only add parallax on larger screens for performance
  if (window.innerWidth >= 768) {
    window.addEventListener('scroll', throttle(handleParallax, 16));
  }
  
  // Navigation
  navToggle?.addEventListener('click', toggleMobileNav);
  
  // Close mobile nav when clicking outside
  document.addEventListener('click', handleOutsideClick);
  
  // Smooth scrolling for all nav links
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
      handleSmoothScroll(e);
    }
  });
  
  // Contact modal
  contactForm?.addEventListener('submit', handleContactSubmit);
  
  // Modal overlay click to close
  contactModal?.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      closeContactModal();
    }
  });
  
  // Testimonials slider
  sliderPrev?.addEventListener('click', prevSlide);
  sliderNext?.addEventListener('click', nextSlide);
  
  // Slider dots
  sliderDots?.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
      const slideIndex = parseInt(e.target.dataset.slide);
      goToSlide(slideIndex);
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', handleKeyboardNavigation);
  
  // Window resize with debouncing
  window.addEventListener('resize', debounce(handleResize, 250));
  
  // Orientation change for mobile devices
  window.addEventListener('orientationchange', debounce(() => {
    setTimeout(handleResize, 200); // Delay to allow orientation to complete
  }, 100));
  
  // Page visibility change (pause animations when tab is not active)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // Pause animations
      document.body.style.animationPlayState = 'paused';
    } else {
      // Resume animations
      document.body.style.animationPlayState = 'running';
    }
  });
  
  // Prevent zoom on double tap for iOS
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
}

// ==========================================================================
// Focus Management for Accessibility
// ==========================================================================
function initFocusManagement() {
  // Trap focus in modal
  contactModal?.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusableElements = contactModal.querySelectorAll(
        'input, textarea, button, [href], [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
  
  // Focus visible elements on navigation
  document.addEventListener('click', (e) => {
    if (e.target.matches('button, a, input, textarea, select')) {
      e.target.classList.add('focus-visible');
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('using-keyboard');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('using-keyboard');
  });
}

// ==========================================================================
// Animation Utilities
// ==========================================================================
function animateNumber(element, start, end, duration = 2000) {
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * easeOut);
    
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// ==========================================================================
// Error Handling
// ==========================================================================
function handleError(error, context = 'Unknown') {
  console.error(`Error in ${context}:`, error);
  
  // Could send to error tracking service in production
  // trackError(error, context);
}

// ==========================================================================
// Performance Monitoring
// ==========================================================================
function measurePerformance() {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load performance:', {
          loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
          domReady: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          totalTime: perfData.loadEventEnd - perfData.fetchStart
        });
      }, 0);
    });
  }
}

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Initialize all components
    initEventListeners();
    initScrollAnimations();
    initButtonEffects();
    initFeatureBubbleEffects();
    initTouchSupport();
    initLazyLoading();
    initFocusManagement();
    
    // Start auto-play for testimonials
    const autoPlayInterval = startAutoPlay();
    
    // Pause auto-play on hover
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider) {
      testimonialsSlider.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
      });
      
      testimonialsSlider.addEventListener('mouseleave', () => {
        startAutoPlay();
      });
    }
    
    // Preload assets
    preloadAssets();
    
    // Monitor performance
    measurePerformance();
    
    // Initial calls
    handleHeaderScroll();
    updateSlider();
    
    console.log('NEBULA RUSH initialized successfully! 🚀');
    
  } catch (error) {
    handleError(error, 'Initialization');
  }
});

// ==========================================================================
// Global Functions (for HTML onclick handlers)
// ==========================================================================
window.openContactModal = openContactModal;
window.closeContactModal = closeContactModal;