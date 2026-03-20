/**
 * Hot Reload - Rechargement automatique du navigateur
 *
 * Interroge le serveur toutes les secondes pour detecter les modifications
 * et recharge automatiquement la page si necessaire.
 *
 * Compatible avec : run.py (Python) et server.js (Node.js)
 */

const HotReload = {
  lastTimestamp: null,
  interval: null,
  checkDelay: 1000,
  enabled: true,

  /**
   * Initialise la surveillance des modifications
   */
  init() {
    if (!this.enabled) return;

    this.check();
    this.interval = setInterval(() => this.check(), this.checkDelay);

    if (window.Logger) {
      Logger.log('hot-reload', 'Surveillance activee (1s)');
    }
  },

  /**
   * Verifie si le serveur a detecte des modifications
   */
  async check() {
    try {
      const res = await fetch('/_reload/check');
      if (!res.ok) return;

      const data = await res.json();

      if (this.lastTimestamp && data.last_update > this.lastTimestamp) {
        if (window.Logger) {
          Logger.log('hot-reload', 'Modification detectee, rechargement...');
        }
        location.reload();
      }

      this.lastTimestamp = data.last_update;
    } catch (e) {
      // Serveur non disponible ou endpoint absent - silencieux
    }
  },

  /**
   * Arrete la surveillance
   */
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
      if (window.Logger) {
        Logger.log('hot-reload', 'Surveillance arretee');
      }
    }
  },

  /**
   * Redemarre la surveillance
   */
  restart() {
    this.stop();
    this.init();
  }
};

window.HotReload = HotReload;
