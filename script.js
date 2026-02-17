/**
 * QD Tuning — Premium Tuning Atelier
 * Vanilla JS: nav, calculator, form, scroll animations
 */

(function () {
  'use strict';

  // --- Mobile navigation ---
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__list a');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', navList.classList.contains('is-open'));
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('is-open');
      });
    });

    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
        navList.classList.remove('is-open');
      }
    });
  }

  // --- Project estimator ---
  const estimatorForm = document.getElementById('estimatorForm');
  const resultValue = document.getElementById('resultValue');

  if (estimatorForm && resultValue) {
    // Ориентировочная стоимость (руб.) по типу и объёму работ
    const prices = {
      interior: {
        steering: 'от 25 000 ₽',
        seats: 'от 85 000 ₽',
        'full-interior': 'от 350 000 ₽',
        'body-kit': '—',
        carbon: 'от 45 000 ₽',
        'm-performance': 'от 120 000 ₽',
        'full-package': '—'
      },
      exterior: {
        steering: '—',
        seats: '—',
        'full-interior': '—',
        'body-kit': 'от 95 000 ₽',
        carbon: 'от 60 000 ₽',
        'm-performance': 'от 150 000 ₽',
        'full-package': '—'
      },
      full: {
        steering: 'от 25 000 ₽',
        seats: 'от 85 000 ₽',
        'full-interior': 'от 350 000 ₽',
        'body-kit': 'от 95 000 ₽',
        carbon: 'от 60 000 ₽',
        'm-performance': 'от 180 000 ₽',
        'full-package': 'от 450 000 ₽'
      }
    };

    estimatorForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const workType = document.getElementById('workType').value;
      const scope = document.getElementById('scope').value;

      if (!workType || !scope) {
        resultValue.textContent = 'Выберите тип и объём работ';
        return;
      }

      const price = prices[workType] && prices[workType][scope];
      resultValue.textContent = price || 'Запросить расчёт';
    });
  }

  // --- Contact form ---
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Заглушка: здесь будет отправка на сервер или интеграция с CRM
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const car = document.getElementById('car').value;
      const comment = document.getElementById('comment').value;

      console.log('Заявка:', { name, phone, car, comment });
      alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      contactForm.reset();
    });
  }

  // --- Phone input mask ---
  const phoneInput = document.getElementById('phone');

  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      let value = this.value.replace(/\D/g, '');
      if (value.length > 0) {
        if (value[0] === '8' || value[0] === '7') {
          value = value.substring(1);
        }
      }
      let formatted = '';
      if (value.length > 0) {
        formatted = '+7';
        if (value.length > 0) {
          formatted += ' (' + value.substring(0, 3);
        }
        if (value.length >= 3) {
          formatted += ') ' + value.substring(3, 6);
        }
        if (value.length >= 6) {
          formatted += '-' + value.substring(6, 8);
        }
        if (value.length >= 8) {
          formatted += '-' + value.substring(8, 10);
        }
      }
      this.value = formatted;
    });
  }

  // --- Scroll animations ---
  const animateElements = document.querySelectorAll('.animate');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  animateElements.forEach(function (el) {
    observer.observe(el);
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const heroVideo = document.getElementById('heroVideo');

if (heroVideo) {
  heroVideo.addEventListener('canplay', () => {
    heroVideo.classList.add('is-loaded');
  });
}
})();
