/* ========================================
   MADUREIRA ALINHAMENTOS — SCRIPT.JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- MOBILE MENU ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu    = document.getElementById('navMenu');

  menuToggle?.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  /* Fechar menu ao clicar em link */
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle?.classList.remove('active');
      navMenu?.classList.remove('open');
    });
  });

  /* ---------- HEADER SCROLL ---------- */
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ---------- ACTIVE NAV LINK ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* ---------- COUNTER ANIMATION ---------- */
  const counters = document.querySelectorAll('[data-count]');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    counters.forEach(counter => {
      const target = parseInt(counter.dataset.count, 10);
      const duration = 2000;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;

      const update = () => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          return;
        }
        counter.textContent = current;
        requestAnimationFrame(update);
      };

      update();
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const revealElements = document.querySelectorAll('.service-card, .diff-card, .about-grid, .contact-grid');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity .6s ease ${i * .1}s, transform .6s ease ${i * .1}s`;
    revealObserver.observe(el);
  });

  /* ---------- COUNTER ON SCROLL ---------- */
  const heroStats = document.querySelector('.hero-stats');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .5 });

  if (heroStats) statObserver.observe(heroStats);

  /* If hero stats are already visible on load (desktop), trigger */
  if (heroStats && heroStats.getBoundingClientRect().top < window.innerHeight) {
    // Let observer handle it, but fallback if observer doesn't fire immediately
    setTimeout(animateCounters, 600);
  }

  /* ---------- SMOOTH SCROLL (fallback) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---------- SERVICES CAROUSEL ---------- */
  const serviceSlides = Array.from(document.querySelectorAll('.service-slide'));
  const serviceDotsContainer = document.querySelector('.services-dots');
  let serviceIndex = 0;
  let serviceInterval;

  const setServiceSlide = (index) => {
    serviceSlides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });
    serviceDotsContainer?.querySelectorAll('.services-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
    serviceIndex = index;
  };

  const createServiceDots = () => {
    if (!serviceDotsContainer) return;
    serviceDotsContainer.innerHTML = '';
    serviceSlides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'services-dot' + (index === 0 ? ' active' : '');
      dot.addEventListener('click', () => {
        setServiceSlide(index);
        resetServiceInterval();
      });
      serviceDotsContainer.appendChild(dot);
    });
  };

  const nextServiceSlide = () => {
    setServiceSlide((serviceIndex + 1) % serviceSlides.length);
  };

  const startServiceInterval = () => {
    serviceInterval = window.setInterval(nextServiceSlide, 4200);
  };

  const resetServiceInterval = () => {
    window.clearInterval(serviceInterval);
    startServiceInterval();
  };

  if (serviceSlides.length > 1) {
    createServiceDots();
    startServiceInterval();
    const serviceCarousel = document.querySelector('.services-carousel');
    serviceCarousel?.addEventListener('mouseenter', () => window.clearInterval(serviceInterval));
    serviceCarousel?.addEventListener('mouseleave', startServiceInterval);
  }

  /* ---------- LEAD TRACKING ----------
     Connect a Google Analytics Measurement ID in the hosting platform to
     persist these events in GA4. */
  window.dataLayer = window.dataLayer || [];
  function trackLead(source, destination) {
    const event = {
      event: 'generate_lead',
      lead_source: source,
      lead_destination: destination
    };
    window.dataLayer.push(event);
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        lead_source: source,
        lead_destination: destination
      });
    }
  }

  document.querySelectorAll('.lead-link, a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      trackLead(link.dataset.leadSource || 'whatsapp', link.href);
    });
  });

  /* ---------- MAP FALLBACK disabled to keep Google Maps visible ---------- */
  // The map iframe should remain visible even when Google Maps API objects are not present.

});
