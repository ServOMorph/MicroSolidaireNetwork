/* ============================================
   PLUGIN TEMPLATE - Frontend UI
   Remplacer 'MicroSolidaireNetwork' par le nom du plugin
   IMPORTANT : window.MicroSolidaireNetwork DOIT correspondre
   a "frontend_global" dans manifest.json
   ============================================ */

const MicroSolidaireNetwork = {
  apiPrefix: '/api/plugins/micro-solidaire-network',

  init() {
    UILoader.registerHook('main_content', {
      render: () => this.render(),
      onMount: () => this.mount()
    });
  },

  render() {
    return `
      <div id="micro-solidaire-network-container">
        <div class="plugin-header">
          <h2>MicroSolidaireNetwork</h2>
          <p>Description de l'interface</p>
        </div>
        <div class="plugin-content">
          <button id="micro-solidaire-network-btn" class="btn btn-primary">
            Tester l'API
          </button>
          <div id="micro-solidaire-network-result"></div>
        </div>
      </div>
    `;
  },

  mount() {
    const btn = document.getElementById('micro-solidaire-network-btn');
    const result = document.getElementById('micro-solidaire-network-result');

    if (btn) {
      btn.addEventListener('click', async () => {
        try {
          const token = localStorage.getItem('auth-token');
          const res = await fetch(`${this.apiPrefix}/hello`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const data = await res.json();
          result.textContent = JSON.stringify(data, null, 2);
        } catch (err) {
          result.textContent = 'Erreur: ' + err.message;
        }
      });
    }
  }
};

// Enregistrement global
window.MicroSolidaireNetwork = MicroSolidaireNetwork;
MicroSolidaireNetwork.init();
