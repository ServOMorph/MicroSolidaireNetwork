# MicroSolidaireNetwork

> Projet cree via @creation-appli | @SerénIA Tech

## Demarrage rapide

```bash
# 1. Lancer le serveur
npm start

# 2. Ouvrir dans le navigateur
http://localhost:3000

# 3. Executer les tests
python tests/run_tests.py
```

**Mode Admin** : Activer le toggle dans la navbar pour afficher console et configuration.

## Structure

```
MicroSolidaireNetwork/
├── .claude/           # Config Claude Code
├── archives/          # Fichiers archives
├── config/            # Configuration
│   ├── theme-config.js
│   └── app_config.json  # Config editable via Admin
├── docs/              # Documentation
│   ├── CHARTE_GRAPHIQUE_APPLI.md
│   └── ROADMAP.md     # Suivi projet
├── logs/              # Logs console (efface au demarrage)
│   └── console.log    # Format: TS|TYPE|SRC|MSG
├── notes_persos/      # Notes privees (gitignore)
├── src/
│   ├── assets/styles/ # CSS (themes, modes, admin)
│   ├── components/    # admin-console.js + admin-config.js
│   ├── services/      # Logique metier
│   └── utils/         # logger.js
├── tests/             # Tests (85% couverture)
│   ├── test_config.py
│   ├── test_server.py
│   └── run_tests.py
├── config.py          # Config centralisee Python
├── server.js          # Serveur Node.js (API config + logs)
├── package.json       # Config npm
└── index.html         # Point d'entree
```

## Charte graphique

- **10 themes** : Nuit Foret, Terre Ethique, Cryptage Nocturne...
- **6 modes** : Hyper-econome, Econome, Normal, Ultra, Supernova, Quasar

Voir `docs/CHARTE_GRAPHIQUE_APPLI.md` pour les specifications completes.

## Commandes Claude Code

- `/start` - Demarrer session
- `/close` - Cloturer session
- `/commit` - Commit automatique

## Suivi projet

Voir `docs/ROADMAP.md` pour :
- Progression des phases
- Journal des sessions
- Decisions techniques
