/* ============================================
   SERVER - Serveur minimal pour logs, config et assets
   Usage: node server.js
   ============================================ */

const http = require('http');
const fs = require('fs');
const path = require('path');

// Fichiers de configuration
const CONFIG_FILE = path.join(__dirname, 'config', 'app_config.json');
const LOGS_FILE = path.join(__dirname, 'logs', 'console.log');
const PROMPTS_FILE = path.join(__dirname, 'data', 'prompts.json');

// Charge la configuration
let CONFIG = {};
function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      CONFIG = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    }
  } catch (err) {
    console.error('Erreur chargement config:', err.message);
  }
}
loadConfig();

const PORT = CONFIG.SERVER?.port || 4019;

// Types MIME
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.py': 'text/plain'
};

// Charge les prompts
let PROMPTS = { version: "1.0", prompts: [] };
function loadPrompts() {
  try {
    if (fs.existsSync(PROMPTS_FILE)) {
      PROMPTS = JSON.parse(fs.readFileSync(PROMPTS_FILE, 'utf8'));
    }
  } catch (err) {
    console.error('Erreur chargement prompts:', err.message);
  }
}
loadPrompts();

// Assure que les dossiers necessaires existent
['logs', 'archives', 'notes_persos', 'config', 'data'].forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Efface les logs au demarrage (si configure)
if (CONFIG.LOGS?.clear_on_start !== false) {
  fs.writeFileSync(LOGS_FILE, '');
}

// Timestamp de demarrage pour hot-reload (fixe, ne change qu'au redemarrage)
const SERVER_START_TIME = Date.now() / 1000;

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Endpoint logs POST
  if (req.method === 'POST' && req.url === '/api/log') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const entry = body.trim();
        fs.appendFileSync(LOGS_FILE, entry + '\n');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('{"ok":true}');
      } catch (err) {
        res.writeHead(500);
        res.end('{"error":"' + err.message + '"}');
      }
    });
    return;
  }

  // Endpoint logs GET (lecture)
  if (req.method === 'GET' && req.url === '/api/logs') {
    try {
      const logs = fs.existsSync(LOGS_FILE) ? fs.readFileSync(LOGS_FILE, 'utf8') : '';
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(logs);
    } catch (err) {
      res.writeHead(500);
      res.end('Erreur lecture logs');
    }
    return;
  }

  // Endpoint clear logs
  if (req.method === 'POST' && req.url === '/api/logs/clear') {
    fs.writeFileSync(LOGS_FILE, '');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"ok":true}');
    return;
  }

  // Endpoint config GET (lecture)
  if (req.method === 'GET' && req.url === '/api/config') {
    try {
      loadConfig();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(CONFIG, null, 2));
    } catch (err) {
      res.writeHead(500);
      res.end('{"error":"' + err.message + '"}');
    }
    return;
  }

  // Endpoint config POST (sauvegarde)
  if (req.method === 'POST' && req.url === '/api/config') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const newConfig = JSON.parse(body);
        CONFIG = newConfig;
        fs.writeFileSync(CONFIG_FILE, JSON.stringify(CONFIG, null, 2), 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('{"ok":true}');
      } catch (err) {
        res.writeHead(400);
        res.end('{"error":"' + err.message + '"}');
      }
    });
    return;
  }

  // Endpoint config PATCH (modification partielle)
  if (req.method === 'PATCH' && req.url === '/api/config') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const updates = JSON.parse(body);
        // Merge les updates dans la config
        for (const section in updates) {
          if (CONFIG[section] && typeof CONFIG[section] === 'object' && !Array.isArray(CONFIG[section])) {
            CONFIG[section] = { ...CONFIG[section], ...updates[section] };
          } else {
            CONFIG[section] = updates[section];
          }
        }
        fs.writeFileSync(CONFIG_FILE, JSON.stringify(CONFIG, null, 2), 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(CONFIG, null, 2));
      } catch (err) {
        res.writeHead(400);
        res.end('{"error":"' + err.message + '"}');
      }
    });
    return;
  }

  // Endpoint config reset
  if (req.method === 'POST' && req.url === '/api/config/reset') {
    try {
      // Recharge le fichier config par defaut
      const defaultConfig = {
        "APP": { "name": "[NomProjet]", "version": "1.0.0", "author": "SerénIA Tech", "description": "Application creee via @creation-appli", "debug": false },
        "SERVER": { "port": 4019, "host": "localhost", "cors_enabled": true, "static_folder": ".", "api_prefix": "/api" },
        "LOGS": { "enabled": true, "file": "logs/console.log", "max_entries": 500, "clear_on_start": true, "format": "TS|TYPE|SRC|MSG", "levels": ["LOG", "INFO", "WARN", "ERR"] },
        "UI": { "default_theme": "nuit-foret", "default_mode": "normal", "admin_enabled": true, "console_visible": false, "animations": true, "language": "fr" },
        "THEMES": ["nuit-foret", "terre-ethique", "cryptage-nocturne", "ocean-profond", "aurore-boreale", "desert-dore", "lavande-mystique", "charbon-elegant", "emeraude-nature", "crepuscule-violet"],
        "MODES": ["hyper-econome", "econome", "normal", "ultra", "supernova", "quasar"],
        "TESTS": { "coverage_target": 85, "output_dir": "tests/reports", "verbose": true },
        "PATHS": { "logs": "logs/", "archives": "archives/", "notes": "notes_persos/", "tests": "tests/", "config": "config/" }
      };
      CONFIG = defaultConfig;
      fs.writeFileSync(CONFIG_FILE, JSON.stringify(CONFIG, null, 2), 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('{"ok":true}');
    } catch (err) {
      res.writeHead(500);
      res.end('{"error":"' + err.message + '"}');
    }
    return;
  }

  // Endpoint prompts GET (liste tous les prompts)
  if (req.method === 'GET' && req.url === '/api/prompts') {
    try {
      loadPrompts();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(PROMPTS, null, 2));
    } catch (err) {
      res.writeHead(500);
      res.end('{"error":"' + err.message + '"}');
    }
    return;
  }

  // Endpoint prompts POST (ajouter un prompt)
  if (req.method === 'POST' && req.url === '/api/prompts') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const newPrompt = JSON.parse(body);
        newPrompt.id = newPrompt.id || newPrompt.nom.toLowerCase().replace(/[^a-z0-9]/g, '-');
        newPrompt.date_creation = newPrompt.date_creation || new Date().toISOString().split('T')[0];
        PROMPTS.prompts.push(newPrompt);
        fs.writeFileSync(PROMPTS_FILE, JSON.stringify(PROMPTS, null, 2), 'utf8');
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newPrompt, null, 2));
      } catch (err) {
        res.writeHead(400);
        res.end('{"error":"' + err.message + '"}');
      }
    });
    return;
  }

  // Endpoint prompts DELETE (supprimer un prompt par id)
  if (req.method === 'DELETE' && req.url.startsWith('/api/prompts/')) {
    const promptId = req.url.split('/api/prompts/')[1];
    const index = PROMPTS.prompts.findIndex(p => p.id === promptId);
    if (index === -1) {
      res.writeHead(404);
      res.end('{"error":"Prompt non trouve"}');
      return;
    }
    PROMPTS.prompts.splice(index, 1);
    fs.writeFileSync(PROMPTS_FILE, JSON.stringify(PROMPTS, null, 2), 'utf8');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"ok":true}');
    return;
  }

  // Endpoint hot-reload (timestamp fixe = pas de rechargement en boucle)
  if (req.method === 'GET' && req.url === '/_reload/check') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ last_update: SERVER_START_TIME }));
    return;
  }

  // Servir fichiers statiques
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(__dirname, filePath);

  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end('Erreur serveur');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`
  ===================================
  ${CONFIG.APP?.name || 'Application'} v${CONFIG.APP?.version || '1.0.0'}
  Serveur: http://localhost:${PORT}
  Config:  ${CONFIG_FILE}
  Logs:    ${LOGS_FILE}
  ===================================

  API Endpoints:
  - GET/POST /api/config  (configuration)
  - GET/POST /api/logs    (logs console)
  - PATCH    /api/config  (modification partielle)
  - GET/POST /api/prompts (gestion prompts)
  - DELETE   /api/prompts/:id (supprimer prompt)
  `);
});
