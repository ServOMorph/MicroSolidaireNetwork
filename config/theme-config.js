/* ============================================
   CONFIG THEME - SérénIATech
   Palette unique avec mode clair/sombre automatique
   ============================================ */

const ThemeConfig = {
  // Nom du theme
  name: 'SérénIATech',

  // Mode detecte automatiquement via prefers-color-scheme
  getCurrentMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  },

  // Initialise (detection automatique du mode systeme)
  init() {
    // Ecoute les changements de preference systeme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      console.log('[Theme] Mode systeme change:', e.matches ? 'sombre' : 'clair');
    });

    console.log('[Theme] SérénIATech initialise en mode', this.getCurrentMode());
  },

  // Methodes factices pour compatibilite avec le code existant
  setTheme() { /* Pas de changement de theme pour SérénIATech */ },
  setMode() { /* Mode automatique via prefers-color-scheme */ }
};

// Auto-init au chargement DOM
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => ThemeConfig.init());
}

// Export pour modules
if (typeof module !== 'undefined') {
  module.exports = ThemeConfig;
}
