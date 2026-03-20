/* ============================================
   CONFIG THEMES ET MODES
   ============================================ */

const ThemeConfig = {
  // Theme par defaut
  defaultTheme: 'nuit-foret',

  // Mode par defaut
  defaultMode: 'econome',

  // Liste des themes disponibles
  themes: [
    { id: 'nuit-foret', name: 'Nuit Foret', value: 'Eco-responsabilite' },
    { id: 'terre-ethique', name: 'Terre Ethique', value: 'Ethique et transparence' },
    { id: 'cryptage-nocturne', name: 'Cryptage Nocturne', value: 'Securite des donnees' },
    { id: 'aurore-humaine', name: 'Aurore Humaine', value: 'IA pour les humains' },
    { id: 'horizon-progres', name: 'Horizon Progres', value: 'Innovation et progres' },
    { id: 'ocean-profond', name: 'Ocean Profond', value: 'Profondeur et exploration' },
    { id: 'magma-digital', name: 'Magma Digital', value: 'Puissance et energie' },
    { id: 'glacier-arctique', name: 'Glacier Arctique', value: 'Clarte et precision' },
    { id: 'sable-dore', name: 'Sable Dore', value: 'Chaleur et richesse' },
    { id: 'nebula-cosmique', name: 'Nebula Cosmique', value: 'Creativite et mystere' }
  ],

  // Liste des modes disponibles
  modes: [
    { id: 'hyper-econome', name: 'Hyper-econome', desc: '0 effet, batterie max' },
    { id: 'econome', name: 'Econome', desc: 'Usage quotidien (defaut)' },
    { id: 'normal', name: 'Normal', desc: 'Design moderne' },
    { id: 'ultra', name: 'Ultra', desc: 'Effets spectaculaires' },
    { id: 'supernova', name: 'Supernova', desc: 'Mode clair, effets avances' },
    { id: 'quasar', name: 'Quasar', desc: 'Mode clair max, immersif' }
  ],

  // Applique un theme
  setTheme(themeId) {
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('app-theme', themeId);
  },

  // Applique un mode
  setMode(modeId) {
    document.documentElement.setAttribute('data-mode', modeId);
    localStorage.setItem('app-mode', modeId);
  },

  // Initialise au chargement
  init() {
    const savedTheme = localStorage.getItem('app-theme') || this.defaultTheme;
    const savedMode = localStorage.getItem('app-mode') || this.defaultMode;
    this.setTheme(savedTheme);
    this.setMode(savedMode);
  }
};

// Auto-init au chargement DOM
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => ThemeConfig.init());
}

// Export pour modules
if (typeof module !== 'undefined') {
  module.exports = ThemeConfig;
}
