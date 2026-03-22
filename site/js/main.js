/* ============================================================
   Micro Solidaire Network — JS principal
   ============================================================ */

/* --- Navigation mobile --- */
(function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.querySelectorAll('span')[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    toggle.querySelectorAll('span')[1].style.opacity  = open ? '0' : '1';
    toggle.querySelectorAll('span')[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  // Fermer au clic sur un lien
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* --- Marquer le lien actif dans la nav --- */
(function markActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* --- Cookie banner --- */
(function initCookieBanner() {
  const banner  = document.getElementById('cookie-banner');
  const btnOk   = document.getElementById('cookie-accept');
  const btnNo   = document.getElementById('cookie-refuse');
  if (!banner) return;

  if (localStorage.getItem('msn-cookies') !== null) {
    banner.classList.add('hidden');
    return;
  }

  if (btnOk) btnOk.addEventListener('click', () => {
    localStorage.setItem('msn-cookies', 'accepted');
    banner.classList.add('hidden');
  });
  if (btnNo) btnNo.addEventListener('click', () => {
    localStorage.setItem('msn-cookies', 'refused');
    banner.classList.add('hidden');
  });
})();

/* --- Accordéon --- */
(function initAccordion() {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const body    = btn.nextElementSibling;
      const isOpen  = btn.getAttribute('aria-expanded') === 'true';
      // Fermer tous les autres
      document.querySelectorAll('.accordion-btn').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling?.classList.remove('open');
      });
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }
    });
  });
})();

/* --- Formulaire de contact (simulation) --- */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.getElementById('contact-success');
    if (success) {
      form.style.display = 'none';
      success.classList.add('show');
    }
  });
})();

/* --- Formulaire de pré-adhésion (simulation) --- */
(function initAdhesionForm() {
  const form = document.getElementById('adhesion-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.getElementById('adhesion-success');
    if (success) {
      form.style.display = 'none';
      success.classList.add('show');
    }
  });
})();

/* --- Scroll to top sur anchor #top --- */
(function initScrollTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.style.opacity = window.scrollY > 400 ? '1' : '0';
    btn.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* --- Sélecteur de charte graphique --- */
(function initThemeSwitcher() {
  const STORAGE_KEY = 'msn-theme';
  const chartes = [
    { id: 'charte1', label: 'Charte 1', desc: 'Dark moderne' },
    { id: 'charte2', label: 'Charte 2', desc: 'Glassmorphism' },
    { id: 'charte3', label: 'Charte 3', desc: 'Artisanale & Nature' },
  ];

  function loadFont(id, href) {
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id; link.rel = 'stylesheet'; link.href = href;
    document.head.appendChild(link);
  }

  function applyTheme(id) {
    if (id === 'charte2') {
      document.documentElement.setAttribute('data-theme', 'charte2');
      loadFont('font-inter', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    } else if (id === 'charte3') {
      document.documentElement.setAttribute('data-theme', 'charte3');
      loadFont('font-caveat', 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem(STORAGE_KEY, id);
    updateSwitcherUI(id);
  }

  function updateSwitcherUI(id) {
    const sw = document.getElementById('theme-switcher');
    if (!sw) return;
    const charte = chartes.find(c => c.id === id) || chartes[0];
    sw.querySelector('.theme-current').textContent = charte.label;
    sw.querySelectorAll('.theme-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.theme === id);
    });
  }

  function injectSwitcher() {
    const navInner = document.querySelector('.navbar-inner');
    if (!navInner || document.getElementById('theme-switcher')) return;

    const sw = document.createElement('div');
    sw.id = 'theme-switcher';
    sw.innerHTML =
      '<button class="theme-switcher-btn" aria-label="Changer de charte graphique" aria-expanded="false">' +
        '<span class="theme-icon">🎨</span>' +
        '<span class="theme-current">Charte 1</span>' +
        '<span class="theme-chevron">▾</span>' +
      '</button>' +
      '<div class="theme-dropdown" role="listbox">' +
        chartes.map(function(c) {
          return '<button class="theme-option" data-theme="' + c.id + '" role="option">' +
            '<span class="theme-option-label">' + c.label + '</span>' +
            '<span class="theme-option-desc">' + c.desc + '</span>' +
          '</button>';
        }).join('') +
      '</div>';

    const toggle = navInner.querySelector('.navbar-toggle');
    navInner.insertBefore(sw, toggle);

    const btn = sw.querySelector('.theme-switcher-btn');

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const open = sw.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });

    sw.querySelectorAll('.theme-option').forEach(function(opt) {
      opt.addEventListener('click', function() {
        applyTheme(opt.dataset.theme);
        sw.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function() {
      sw.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  // Appliquer le thème sauvegardé immédiatement (avant DOMContentLoaded)
  var saved = localStorage.getItem(STORAGE_KEY) || 'charte1';
  if (saved === 'charte2') {
    document.documentElement.setAttribute('data-theme', 'charte2');
    loadFont('font-inter', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  } else if (saved === 'charte3') {
    document.documentElement.setAttribute('data-theme', 'charte3');
    loadFont('font-caveat', 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
  }

  document.addEventListener('DOMContentLoaded', function() {
    injectSwitcher();
    updateSwitcherUI(saved);
  });
})();
