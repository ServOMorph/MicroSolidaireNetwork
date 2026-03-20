/* ============================================
   ADMIN CONSOLE - Panneau logs temps reel
   ============================================ */

const AdminConsole = {
  isVisible: false,
  panel: null,
  logsList: null,

  // Initialise la console admin
  init() {
    this._createPanel();
    this._bindEvents();
    this._loadExistingLogs();
    return this;
  },

  // Cree le panneau HTML
  _createPanel() {
    const panel = document.createElement('div');
    panel.id = 'admin-console';
    panel.className = 'admin-console';
    panel.innerHTML = `
      <div class="admin-console-header">
        <span class="admin-console-title">Console Admin</span>
        <div class="admin-console-actions">
          <button class="admin-btn" id="admin-export" title="Exporter">Exporter</button>
          <button class="admin-btn" id="admin-clear" title="Effacer">Effacer</button>
          <button class="admin-btn admin-btn-close" id="admin-close" title="Fermer">X</button>
        </div>
      </div>
      <div class="admin-console-body" id="admin-logs">
        <div class="admin-logs-list"></div>
      </div>
    `;
    document.body.appendChild(panel);
    this.panel = panel;
    this.logsList = panel.querySelector('.admin-logs-list');
  },

  // Bindage evenements
  _bindEvents() {
    // Bouton fermer
    document.getElementById('admin-close').addEventListener('click', () => this.hide());

    // Bouton exporter
    document.getElementById('admin-export').addEventListener('click', () => {
      if (window.Logger) window.Logger.export();
    });

    // Bouton effacer
    document.getElementById('admin-clear').addEventListener('click', () => {
      if (window.Logger) window.Logger.clear();
      this.logsList.innerHTML = '';
    });

    // Ecoute nouvelles entrees
    window.addEventListener('logger:entry', (e) => {
      if (this.isVisible) this._addEntry(e.detail);
    });
  },

  // Charge logs existants
  _loadExistingLogs() {
    if (!window.Logger) return;
    const logs = window.Logger.getAll();
    logs.forEach(entry => this._addEntry(entry));
  },

  // Ajoute une entree au panneau
  _addEntry(entry) {
    const div = document.createElement('div');
    div.className = `admin-log-entry admin-log-${entry.type.toLowerCase()}`;

    const time = new Date(entry.ts).toLocaleTimeString('fr-FR');
    div.innerHTML = `
      <span class="admin-log-time">${time}</span>
      <span class="admin-log-type">${entry.type}</span>
      <span class="admin-log-src">${entry.src}</span>
      <span class="admin-log-msg">${this._escapeHtml(entry.msg)}</span>
    `;

    this.logsList.appendChild(div);
    this.logsList.scrollTop = this.logsList.scrollHeight;
  },

  // Echappe HTML
  _escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  // Affiche le panneau
  show() {
    this.isVisible = true;
    this.panel.classList.add('visible');
    this._loadExistingLogs();
  },

  // Masque le panneau
  hide() {
    this.isVisible = false;
    this.panel.classList.remove('visible');
  },

  // Toggle visibilite
  toggle() {
    this.isVisible ? this.hide() : this.show();
  }
};

// Auto-init
if (typeof window !== 'undefined') {
  window.AdminConsole = AdminConsole;
}
