// ============================================
// HIGH RIDGE ADVISORY - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Check for reduced motion preference
  initReducedMotion();

  // Initialize all components
  initNavigation();
  initNavbarScroll();
  initClientPortalDropdown();
  initScrollAnimations();
  initTeamAccordions();
  initSmoothScroll();
  initTypewriter();
});

// ----------------------------------------
// Reduced Motion Support
// ----------------------------------------
function initReducedMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduce-motion');
  }

  // Listen for changes in preference
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    if (e.matches) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  });
}

// ----------------------------------------
// Mobile Navigation
// ----------------------------------------
function initNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', function() {
    const isOpen = navMenu.classList.contains('is-open');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking a link
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  function openMenu() {
    navMenu.classList.add('is-open');
    navToggle.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    navMenu.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }
}

// ----------------------------------------
// Navbar Scroll Effect
// ----------------------------------------
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');

  if (!navbar) return;

  // Check if we're on a page with transparent navbar
  const isTransparent = navbar.classList.contains('navbar--transparent');

  if (!isTransparent) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNavbar() {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.3; // 30% of viewport height

    if (scrollY > heroHeight) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }

    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  });

  // Run once on load
  updateNavbar();
}

// ----------------------------------------
// Client Portal Dropdown
// ----------------------------------------
function initClientPortalDropdown() {
  const dropdown = document.getElementById('client-portal');

  if (!dropdown) return;

  const toggle = dropdown.querySelector('.nav-dropdown-toggle');
  const menu = dropdown.querySelector('.nav-dropdown-menu');

  if (!toggle || !menu) return;

  // Toggle on click
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const isOpen = dropdown.classList.contains('is-open');

    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  // Keyboard support
  toggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle.click();
    }
  });

  // Close on click outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  // Close on escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeDropdown();
    }
  });

  function openDropdown() {
    dropdown.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    dropdown.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
}

// ----------------------------------------
// Scroll Animations
// ----------------------------------------
function initScrollAnimations() {
  // Check for reduced motion preference
  if (document.documentElement.classList.contains('reduce-motion')) {
    // Make all animated elements visible immediately
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const animatedElements = document.querySelectorAll('[data-animate]');

  if (animatedElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// ----------------------------------------
// Team Bio Accordions
// ----------------------------------------
function initTeamAccordions() {
  const toggleButtons = document.querySelectorAll('[data-team-toggle]');

  if (toggleButtons.length === 0) return;

  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const teamCard = button.closest('.card-team');
      const isExpanded = teamCard.classList.contains('is-expanded');

      // Close all other accordions
      document.querySelectorAll('.card-team.is-expanded').forEach(card => {
        if (card !== teamCard) {
          card.classList.remove('is-expanded');
          const cardButton = card.querySelector('[data-team-toggle]');
          if (cardButton) {
            cardButton.setAttribute('aria-expanded', 'false');
            cardButton.innerHTML = 'View Bio <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
          }
        }
      });

      // Toggle current accordion
      if (isExpanded) {
        teamCard.classList.remove('is-expanded');
        button.setAttribute('aria-expanded', 'false');
        button.innerHTML = 'View Bio <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
      } else {
        teamCard.classList.add('is-expanded');
        button.setAttribute('aria-expanded', 'true');
        button.innerHTML = 'Close Bio <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
      }
    });
  });
}

// ----------------------------------------
// Smooth Scroll for Anchor Links
// ----------------------------------------
function initSmoothScroll() {
  // Only for links that point to anchors on the same page
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      // Skip if it's just "#"
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        // Get navbar height for offset
        const navbar = document.getElementById('navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // Handle page load with hash
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);

    if (targetElement) {
      // Wait for page to fully load
      setTimeout(() => {
        const navbar = document.getElementById('navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  }
}

// ----------------------------------------
// Utility: Throttle Function
// ----------------------------------------
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
  };
}

// ----------------------------------------
// Utility: Debounce Function
// ----------------------------------------
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ----------------------------------------
// Typewriter Animation
// ----------------------------------------
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter');

  if (!typewriterElement) return;

  // Check for reduced motion preference
  if (document.documentElement.classList.contains('reduce-motion')) {
    typewriterElement.textContent = 'Wealth Planning';
    return;
  }

  const words = [
    'Wealth Planning',
    'Financial Guidance',
    'Investment Strategy',
    'Client Service',
    'Fiduciary Care'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  const typeSpeed = 80;      // Speed of typing
  const deleteSpeed = 50;    // Speed of deleting
  const pauseTime = 2000;    // Pause at complete word
  const pauseBetween = 500;  // Pause before typing next word

  function type() {
    const currentWord = words[wordIndex];

    if (isPaused) {
      isPaused = false;
      setTimeout(type, pauseBetween);
      return;
    }

    if (isDeleting) {
      // Deleting characters
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, pauseBetween);
      } else {
        setTimeout(type, deleteSpeed);
      }
    } else {
      // Typing characters
      typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        isDeleting = true;
        isPaused = true;
        setTimeout(type, pauseTime);
      } else {
        setTimeout(type, typeSpeed);
      }
    }
  }

  // Start the animation
  type();
}
