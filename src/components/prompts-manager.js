/* ============================================
   PROMPTS MANAGER - Gestionnaire de prompts
   Affiche, copie et gere les prompts stockes
   ============================================ */

const PromptsManager = {
  prompts: [],
  container: null,
  isVisible: false,

  init() {
    this.createContainer();
    this.loadPrompts();
  },

  createContainer() {
    // Conteneur principal
    this.container = document.createElement('div');
    this.container.id = 'prompts-panel';
    this.container.className = 'prompts-panel';
    this.container.innerHTML = `
      <div class="prompts-header">
        <h2>Prompts</h2>
        <div class="prompts-actions">
          <button id="prompts-add-btn" class="btn btn-primary btn-sm">+ Ajouter</button>
          <button id="prompts-close-btn" class="btn btn-secondary btn-sm">Fermer</button>
        </div>
      </div>
      <div id="prompts-list" class="prompts-list"></div>
      <div id="prompts-form" class="prompts-form" style="display:none;">
        <h3>Nouveau Prompt</h3>
        <input type="text" id="prompt-nom" placeholder="Nom du prompt" class="input-field">
        <input type="text" id="prompt-desc" placeholder="Description courte" class="input-field">
        <input type="text" id="prompt-cat" placeholder="Categorie" class="input-field" value="general">
        <input type="text" id="prompt-tags" placeholder="Tags (separes par virgule)" class="input-field">
        <textarea id="prompt-contenu" placeholder="Contenu du prompt..." class="input-field textarea-large"></textarea>
        <div class="form-actions">
          <button id="prompt-save-btn" class="btn btn-primary">Sauvegarder</button>
          <button id="prompt-cancel-btn" class="btn btn-secondary">Annuler</button>
        </div>
      </div>
    `;
    document.body.appendChild(this.container);

    // Event listeners
    document.getElementById('prompts-close-btn').addEventListener('click', () => this.hide());
    document.getElementById('prompts-add-btn').addEventListener('click', () => this.showForm());
    document.getElementById('prompt-save-btn').addEventListener('click', () => this.savePrompt());
    document.getElementById('prompt-cancel-btn').addEventListener('click', () => this.hideForm());

    // Style
    this.addStyles();
  },

  addStyles() {
    if (document.getElementById('prompts-styles')) return;

    const style = document.createElement('style');
    style.id = 'prompts-styles';
    style.textContent = `
      .prompts-panel {
        position: fixed;
        top: 0;
        right: -500px;
        width: 480px;
        height: 100vh;
        background: var(--bg-color);
        border-left: 2px solid var(--accent-color);
        box-shadow: -5px 0 20px rgba(0,0,0,0.3);
        z-index: 1000;
        transition: right 0.3s ease;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .prompts-panel.visible {
        right: 0;
      }
      .prompts-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid var(--border-color);
        background: var(--bg-secondary);
      }
      .prompts-header h2 {
        margin: 0;
        color: var(--accent-color);
      }
      .prompts-actions {
        display: flex;
        gap: 0.5rem;
      }
      .prompts-list {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
      }
      .prompt-card {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .prompt-card:hover {
        border-color: var(--accent-color);
        transform: translateX(-5px);
      }
      .prompt-card.expanded {
        border-color: var(--accent-color);
      }
      .prompt-card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0.5rem;
      }
      .prompt-card-title {
        font-weight: bold;
        color: var(--accent-color);
        margin: 0;
      }
      .prompt-card-cat {
        font-size: 0.75rem;
        background: var(--accent-color);
        color: var(--bg-color);
        padding: 2px 8px;
        border-radius: 4px;
      }
      .prompt-card-desc {
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
      }
      .prompt-card-tags {
        display: flex;
        gap: 0.25rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      }
      .prompt-tag {
        font-size: 0.7rem;
        background: var(--bg-color);
        color: var(--text-secondary);
        padding: 2px 6px;
        border-radius: 3px;
        border: 1px solid var(--border-color);
      }
      .prompt-card-content {
        display: none;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border-color);
      }
      .prompt-card.expanded .prompt-card-content {
        display: block;
      }
      .prompt-content-text {
        background: var(--bg-color);
        padding: 1rem;
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.85rem;
        white-space: pre-wrap;
        max-height: 300px;
        overflow-y: auto;
        border: 1px solid var(--border-color);
      }
      .prompt-card-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.75rem;
      }
      .btn-sm {
        padding: 4px 12px;
        font-size: 0.85rem;
      }
      .prompts-form {
        padding: 1rem;
        border-top: 1px solid var(--border-color);
        background: var(--bg-secondary);
      }
      .prompts-form h3 {
        margin: 0 0 1rem 0;
        color: var(--accent-color);
      }
      .input-field {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        background: var(--bg-color);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        color: var(--text-color);
      }
      .input-field:focus {
        border-color: var(--accent-color);
        outline: none;
      }
      .textarea-large {
        min-height: 150px;
        resize: vertical;
      }
      .form-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }
      .copy-success {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-color);
        color: var(--bg-color);
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        z-index: 2000;
        animation: fadeInOut 2s ease forwards;
      }
      @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(-10px); }
        15% { opacity: 1; transform: translateY(0); }
        85% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-10px); }
      }
    `;
    document.head.appendChild(style);
  },

  async loadPrompts() {
    try {
      const response = await fetch('/api/prompts');
      const data = await response.json();
      this.prompts = data.prompts || [];
      this.renderPrompts();
    } catch (err) {
      console.error('Erreur chargement prompts:', err);
      this.prompts = [];
      this.renderPrompts();
    }
  },

  renderPrompts() {
    const list = document.getElementById('prompts-list');
    if (!list) return;

    if (this.prompts.length === 0) {
      list.innerHTML = '<p style="text-align:center; color:var(--text-secondary);">Aucun prompt enregistre</p>';
      return;
    }

    list.innerHTML = this.prompts.map((p, index) => `
      <div class="prompt-card" data-index="${index}">
        <div class="prompt-card-header">
          <h4 class="prompt-card-title">${p.nom}</h4>
          <span class="prompt-card-cat">${p.categorie || 'general'}</span>
        </div>
        <p class="prompt-card-desc">${p.description || ''}</p>
        <div class="prompt-card-tags">
          ${(p.tags || []).map(t => `<span class="prompt-tag">${t}</span>`).join('')}
        </div>
        <div class="prompt-card-content">
          <div class="prompt-content-text">${this.escapeHtml(p.contenu)}</div>
          <div class="prompt-card-actions">
            <button class="btn btn-primary btn-sm copy-btn" data-index="${index}">Copier</button>
            <button class="btn btn-secondary btn-sm delete-btn" data-id="${p.id}">Supprimer</button>
          </div>
        </div>
      </div>
    `).join('');

    // Event listeners pour expand/collapse
    list.querySelectorAll('.prompt-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn')) {
          card.classList.toggle('expanded');
        }
      });
    });

    // Event listeners pour copier
    list.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = parseInt(btn.dataset.index);
        this.copyPrompt(index);
      });
    });

    // Event listeners pour supprimer
    list.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        this.deletePrompt(id);
      });
    });
  },

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  async copyPrompt(index) {
    const prompt = this.prompts[index];
    if (!prompt) return;

    try {
      await navigator.clipboard.writeText(prompt.contenu);
      this.showNotification('Prompt copie dans le presse-papier !');
      if (typeof Logger !== 'undefined') {
        Logger.log('prompts', 'Prompt copie: ' + prompt.nom);
      }
    } catch (err) {
      console.error('Erreur copie:', err);
      // Fallback pour navigateurs anciens
      const textarea = document.createElement('textarea');
      textarea.value = prompt.contenu;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.showNotification('Prompt copie !');
    }
  },

  showNotification(message) {
    const notif = document.createElement('div');
    notif.className = 'copy-success';
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2000);
  },

  async deletePrompt(id) {
    if (!confirm('Supprimer ce prompt ?')) return;

    try {
      const response = await fetch('/api/prompts/' + id, { method: 'DELETE' });
      if (response.ok) {
        await this.loadPrompts();
        if (typeof Logger !== 'undefined') {
          Logger.log('prompts', 'Prompt supprime: ' + id);
        }
      }
    } catch (err) {
      console.error('Erreur suppression:', err);
    }
  },

  showForm() {
    document.getElementById('prompts-form').style.display = 'block';
    document.getElementById('prompt-nom').focus();
  },

  hideForm() {
    document.getElementById('prompts-form').style.display = 'none';
    document.getElementById('prompt-nom').value = '';
    document.getElementById('prompt-desc').value = '';
    document.getElementById('prompt-cat').value = 'general';
    document.getElementById('prompt-tags').value = '';
    document.getElementById('prompt-contenu').value = '';
  },

  async savePrompt() {
    const nom = document.getElementById('prompt-nom').value.trim();
    const desc = document.getElementById('prompt-desc').value.trim();
    const cat = document.getElementById('prompt-cat').value.trim() || 'general';
    const tags = document.getElementById('prompt-tags').value.split(',').map(t => t.trim()).filter(t => t);
    const contenu = document.getElementById('prompt-contenu').value.trim();

    if (!nom || !contenu) {
      alert('Nom et contenu sont requis');
      return;
    }

    try {
      const response = await fetch('/api/prompts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, description: desc, categorie: cat, tags, contenu })
      });

      if (response.ok) {
        this.hideForm();
        await this.loadPrompts();
        if (typeof Logger !== 'undefined') {
          Logger.log('prompts', 'Prompt ajoute: ' + nom);
        }
      }
    } catch (err) {
      console.error('Erreur sauvegarde:', err);
    }
  },

  show() {
    this.container.classList.add('visible');
    this.isVisible = true;
    this.loadPrompts();
  },

  hide() {
    this.container.classList.remove('visible');
    this.isVisible = false;
  },

  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }
};
