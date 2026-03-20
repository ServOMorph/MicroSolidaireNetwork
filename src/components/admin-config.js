/* ============================================
   ADMIN CONFIG - Editeur de configuration dynamique
   Permet de modifier les variables en temps reel
   ============================================ */

const AdminConfig = {
  config: {},
  panel: null,
  isVisible: false,

  // Initialise le panneau de configuration
  init() {
    this.createPanel();
    this.loadConfig();
    this.bindEvents();
    console.log('AdminConfig initialise');
    return this;
  },

  // Cree le panneau HTML
  createPanel() {
    const panel = document.createElement('div');
    panel.id = 'admin-config-panel';
    panel.className = 'admin-config-panel';
    panel.innerHTML = `
      <div class="admin-config-header">
        <h3>Configuration</h3>
        <div class="admin-config-actions">
          <button id="config-save" class="btn btn-sm btn-primary" title="Sauvegarder">Sauver</button>
          <button id="config-reset" class="btn btn-sm btn-secondary" title="Reinitialiser">Reset</button>
          <button id="config-close" class="btn btn-sm" title="Fermer">×</button>
        </div>
      </div>
      <div class="admin-config-body">
        <div id="config-sections"></div>
      </div>
      <div class="admin-config-footer">
        <span class="config-status" id="config-status">Pret</span>
      </div>
    `;
    document.body.appendChild(panel);
    this.panel = panel;
  },

  // Charge la configuration depuis l'API
  async loadConfig() {
    try {
      const response = await fetch('/api/config');
      if (response.ok) {
        this.config = await response.json();
        this.renderConfig();
        this.setStatus('Configuration chargee', 'success');
      } else {
        this.setStatus('Erreur chargement', 'error');
      }
    } catch (err) {
      this.setStatus('Serveur non disponible', 'error');
      console.error('Erreur chargement config:', err);
    }
  },

  // Affiche la configuration dans le panneau
  renderConfig() {
    const container = document.getElementById('config-sections');
    if (!container) return;

    container.innerHTML = '';

    for (const [section, values] of Object.entries(this.config)) {
      const sectionEl = document.createElement('div');
      sectionEl.className = 'config-section';
      sectionEl.innerHTML = `
        <div class="config-section-header" data-section="${section}">
          <span class="config-section-toggle">▶</span>
          <span class="config-section-name">${section}</span>
        </div>
        <div class="config-section-content" id="section-${section}"></div>
      `;
      container.appendChild(sectionEl);

      const contentEl = sectionEl.querySelector('.config-section-content');
      this.renderSectionContent(section, values, contentEl);
    }
  },

  // Affiche le contenu d'une section
  renderSectionContent(section, values, container) {
    if (Array.isArray(values)) {
      // Affiche les tableaux comme liste
      const list = document.createElement('div');
      list.className = 'config-array';
      list.innerHTML = `<span class="config-array-label">[${values.length} elements]</span>
        <textarea class="config-array-input" data-section="${section}" data-type="array">${JSON.stringify(values, null, 2)}</textarea>`;
      container.appendChild(list);
    } else if (typeof values === 'object') {
      // Affiche les objets comme champs
      for (const [key, value] of Object.entries(values)) {
        const field = this.createField(section, key, value);
        container.appendChild(field);
      }
    }
  },

  // Cree un champ de formulaire
  createField(section, key, value) {
    const field = document.createElement('div');
    field.className = 'config-field';

    const type = typeof value;
    let input = '';

    if (type === 'boolean') {
      input = `<label class="config-toggle">
        <input type="checkbox" data-section="${section}" data-key="${key}" ${value ? 'checked' : ''}>
        <span class="config-toggle-slider"></span>
      </label>`;
    } else if (type === 'number') {
      input = `<input type="number" class="config-input" data-section="${section}" data-key="${key}" value="${value}">`;
    } else if (Array.isArray(value)) {
      input = `<input type="text" class="config-input" data-section="${section}" data-key="${key}" value="${value.join(', ')}" data-type="array">`;
    } else {
      input = `<input type="text" class="config-input" data-section="${section}" data-key="${key}" value="${value}">`;
    }

    field.innerHTML = `
      <label class="config-label">${key}</label>
      ${input}
    `;

    return field;
  },

  // Attache les evenements
  bindEvents() {
    // Toggle sections
    document.addEventListener('click', (e) => {
      if (e.target.closest('.config-section-header')) {
        const header = e.target.closest('.config-section-header');
        const section = header.dataset.section;
        const content = document.getElementById(`section-${section}`);
        const toggle = header.querySelector('.config-section-toggle');

        if (content.style.display === 'none') {
          content.style.display = 'block';
          toggle.textContent = '▼';
        } else {
          content.style.display = 'none';
          toggle.textContent = '▶';
        }
      }
    });

    // Bouton sauvegarder
    document.getElementById('config-save')?.addEventListener('click', () => this.saveConfig());

    // Bouton reset
    document.getElementById('config-reset')?.addEventListener('click', () => this.resetConfig());

    // Bouton fermer
    document.getElementById('config-close')?.addEventListener('click', () => this.hide());

    // Changements en temps reel
    document.addEventListener('change', (e) => {
      if (e.target.matches('.config-input, .config-toggle input')) {
        this.updateValue(e.target);
      }
    });
  },

  // Met a jour une valeur dans la config
  updateValue(input) {
    const section = input.dataset.section;
    const key = input.dataset.key;

    if (!section) return;

    let value;
    if (input.type === 'checkbox') {
      value = input.checked;
    } else if (input.type === 'number') {
      value = parseFloat(input.value);
    } else if (input.dataset.type === 'array') {
      try {
        value = JSON.parse(input.value);
      } catch {
        value = input.value.split(',').map(s => s.trim());
      }
    } else {
      value = input.value;
    }

    if (key) {
      if (!this.config[section]) this.config[section] = {};
      this.config[section][key] = value;
    } else {
      this.config[section] = value;
    }

    this.setStatus('Modifie (non sauvegarde)', 'warning');
  },

  // Sauvegarde la configuration
  async saveConfig() {
    try {
      this.setStatus('Sauvegarde...', 'info');
      const response = await fetch('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.config)
      });

      if (response.ok) {
        this.setStatus('Configuration sauvegardee', 'success');
        // Dispatch event pour notifier les autres composants
        window.dispatchEvent(new CustomEvent('config:updated', { detail: this.config }));
      } else {
        this.setStatus('Erreur sauvegarde', 'error');
      }
    } catch (err) {
      this.setStatus('Erreur connexion', 'error');
      console.error('Erreur sauvegarde config:', err);
    }
  },

  // Reinitialise la configuration
  async resetConfig() {
    if (!confirm('Reinitialiser la configuration par defaut ?')) return;

    try {
      this.setStatus('Reinitialisation...', 'info');
      const response = await fetch('/api/config/reset', { method: 'POST' });

      if (response.ok) {
        await this.loadConfig();
        this.setStatus('Configuration reinitialisee', 'success');
      } else {
        this.setStatus('Erreur reset', 'error');
      }
    } catch (err) {
      this.setStatus('Erreur connexion', 'error');
    }
  },

  // Met a jour le statut
  setStatus(message, type = 'info') {
    const status = document.getElementById('config-status');
    if (status) {
      status.textContent = message;
      status.className = `config-status config-status-${type}`;
    }
  },

  // Affiche le panneau
  show() {
    if (this.panel) {
      this.panel.classList.add('visible');
      this.isVisible = true;
      this.loadConfig();
    }
  },

  // Cache le panneau
  hide() {
    if (this.panel) {
      this.panel.classList.remove('visible');
      this.isVisible = false;
    }
  },

  // Toggle le panneau
  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  },

  // Recupere une valeur de config
  get(section, key = null) {
    if (!this.config[section]) return null;
    if (key === null) return this.config[section];
    return this.config[section][key];
  }
};

// Export global
if (typeof window !== 'undefined') {
  window.AdminConfig = AdminConfig;
}
