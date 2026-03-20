/* ============================================
   LOGGER - Capture console optimisee IA
   Format: TS|TYPE|SRC|MSG (compact, parsable)
   Stockage: localStorage + fichier serveur
   ============================================ */

const Logger = {
  KEY: 'app-logs',
  MAX_ENTRIES: 500,
  SERVER_URL: '/api/log',
  useServer: true,

  // Initialise le logger (ecrase logs precedents)
  init() {
    this.clear();
    this._interceptConsole();
    this.log('logger', 'Logger initialise');
    return this;
  },

  // Efface tous les logs
  clear() {
    localStorage.setItem(this.KEY, '');
    // Efface aussi cote serveur
    if (this.useServer) {
      fetch('/api/logs/clear', { method: 'POST' }).catch(() => {});
    }
  },

  // Recupere les logs bruts
  getRaw() {
    return localStorage.getItem(this.KEY) || '';
  },

  // Recupere les logs parses
  getAll() {
    const raw = this.getRaw();
    if (!raw) return [];
    return raw.split('\n').filter(Boolean).map(line => {
      const [ts, type, src, ...msgParts] = line.split('|');
      return { ts: parseInt(ts), type, src, msg: msgParts.join('|') };
    });
  },

  // Ajoute une entree
  _add(type, src, msg) {
    const ts = Date.now();
    const entry = `${ts}|${type}|${src}|${msg}`;
    let logs = this.getRaw();

    // Limite le nombre d'entrees
    const lines = logs.split('\n').filter(Boolean);
    if (lines.length >= this.MAX_ENTRIES) {
      lines.shift();
      logs = lines.join('\n');
    }

    logs = logs ? logs + '\n' + entry : entry;
    localStorage.setItem(this.KEY, logs);

    // Envoie au serveur (async, non bloquant)
    if (this.useServer) {
      fetch(this.SERVER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: entry
      }).catch(() => {
        // Serveur non disponible, on continue avec localStorage
      });
    }

    // Dispatch event pour UI
    window.dispatchEvent(new CustomEvent('logger:entry', { detail: { ts, type, src, msg } }));
  },

  // Methodes publiques
  log(src, msg) { this._add('LOG', src, msg); },
  info(src, msg) { this._add('INFO', src, msg); },
  warn(src, msg) { this._add('WARN', src, msg); },
  error(src, msg) { this._add('ERR', src, msg); },

  // Intercepte console native
  _interceptConsole() {
    const self = this;
    const originalConsole = {
      log: console.log.bind(console),
      info: console.info.bind(console),
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    };

    console.log = function(...args) {
      originalConsole.log(...args);
      self._add('LOG', 'console', args.map(a => self._stringify(a)).join(' '));
    };

    console.info = function(...args) {
      originalConsole.info(...args);
      self._add('INFO', 'console', args.map(a => self._stringify(a)).join(' '));
    };

    console.warn = function(...args) {
      originalConsole.warn(...args);
      self._add('WARN', 'console', args.map(a => self._stringify(a)).join(' '));
    };

    console.error = function(...args) {
      originalConsole.error(...args);
      self._add('ERR', 'console', args.map(a => self._stringify(a)).join(' '));
    };
  },

  // Stringify pour objets
  _stringify(val) {
    if (val === null) return 'null';
    if (val === undefined) return 'undefined';
    if (typeof val === 'object') {
      try { return JSON.stringify(val); }
      catch { return String(val); }
    }
    return String(val);
  },

  // Export pour analyse IA
  export() {
    const blob = new Blob([this.getRaw()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `logs_${Date.now()}.log`;
    a.click();
    URL.revokeObjectURL(url);
  }
};

// Auto-init
if (typeof window !== 'undefined') {
  window.Logger = Logger;
}
