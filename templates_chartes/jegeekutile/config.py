# -*- coding: utf-8 -*-
"""
Configuration centralisee de l'application
Charte graphique: JeGeekUtile
"""

import json
import os

CONFIG_FILE = os.path.join(os.path.dirname(__file__), 'config', 'app_config.json')

# ============================================
# CONFIGURATION PAR DEFAUT - JEGEEKUTILE
# ============================================

CONFIG = {
    # --- Application ---
    "APP": {
        "name": "[NomProjet]",
        "version": "1.0.0",
        "author": "JeGeekUtile",
        "description": "Application creee via @creation-appli",
        "debug": False
    },

    # --- Serveur ---
    "SERVER": {
        "port": 3000,
        "host": "localhost",
        "cors_enabled": True,
        "static_folder": ".",
        "api_prefix": "/api"
    },

    # --- Logs ---
    "LOGS": {
        "enabled": True,
        "file": "logs/console.log",
        "max_entries": 500,
        "clear_on_start": True,
        "format": "TS|TYPE|SRC|MSG",
        "levels": ["LOG", "INFO", "WARN", "ERR"]
    },

    # --- Interface utilisateur ---
    "UI": {
        "default_theme": "nuit-foret",
        "default_mode": "econome",
        "admin_enabled": True,
        "console_visible": False,
        "animations": True,
        "language": "fr"
    },

    # --- Themes JeGeekUtile (10 themes) ---
    "THEMES": [
        "nuit-foret",
        "terre-ethique",
        "cryptage-nocturne",
        "aurore-humaine",
        "horizon-progres",
        "ocean-profond",
        "magma-digital",
        "glacier-arctique",
        "sable-dore",
        "nebula-cosmique"
    ],

    # --- Modes d'affichage JeGeekUtile (6 modes) ---
    "MODES": [
        "hyper-econome",
        "econome",
        "normal",
        "ultra",
        "supernova",
        "quasar"
    ],

    # --- Tests ---
    "TESTS": {
        "coverage_target": 85,
        "output_dir": "tests/reports",
        "verbose": True
    },

    # --- Chemins ---
    "PATHS": {
        "logs": "logs/",
        "archives": "archives/",
        "notes": "notes_persos/",
        "tests": "tests/",
        "config": "config/"
    }
}

# ============================================
# FONCTIONS UTILITAIRES
# ============================================

def get(section, key=None):
    """Recupere une valeur de configuration."""
    if section not in CONFIG:
        return None
    if key is None:
        return CONFIG[section]
    return CONFIG[section].get(key)


def set(section, key, value):
    """Modifie une valeur de configuration."""
    if section in CONFIG and key in CONFIG[section]:
        CONFIG[section][key] = value
        return True
    return False


def save():
    """Sauvegarde la configuration dans le fichier JSON."""
    os.makedirs(os.path.dirname(CONFIG_FILE), exist_ok=True)
    with open(CONFIG_FILE, 'w', encoding='utf-8') as f:
        json.dump(CONFIG, f, indent=2, ensure_ascii=False)
    return True


def load():
    """Charge la configuration depuis le fichier JSON."""
    global CONFIG
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
                loaded = json.load(f)
                for section in loaded:
                    if section in CONFIG:
                        CONFIG[section].update(loaded[section])
            return True
        except Exception:
            return False
    return False


def to_json():
    """Exporte la configuration en JSON (pour API)."""
    return json.dumps(CONFIG, indent=2, ensure_ascii=False)


def from_json(json_str):
    """Importe la configuration depuis JSON."""
    global CONFIG
    try:
        CONFIG = json.loads(json_str)
        return True
    except Exception:
        return False


def reset():
    """Reinitialise la configuration par defaut."""
    global CONFIG
    CONFIG = {
        "APP": {
            "name": "[NomProjet]",
            "version": "1.0.0",
            "author": "JeGeekUtile",
            "description": "Application creee via @creation-appli",
            "debug": False
        },
        "SERVER": {
            "port": 3000,
            "host": "localhost",
            "cors_enabled": True,
            "static_folder": ".",
            "api_prefix": "/api"
        },
        "LOGS": {
            "enabled": True,
            "file": "logs/console.log",
            "max_entries": 500,
            "clear_on_start": True,
            "format": "TS|TYPE|SRC|MSG",
            "levels": ["LOG", "INFO", "WARN", "ERR"]
        },
        "UI": {
            "default_theme": "nuit-foret",
            "default_mode": "econome",
            "admin_enabled": True,
            "console_visible": False,
            "animations": True,
            "language": "fr"
        },
        "THEMES": [
            "nuit-foret", "terre-ethique", "cryptage-nocturne",
            "aurore-humaine", "horizon-progres", "ocean-profond",
            "magma-digital", "glacier-arctique", "sable-dore",
            "nebula-cosmique"
        ],
        "MODES": [
            "hyper-econome", "econome", "normal",
            "ultra", "supernova", "quasar"
        ],
        "TESTS": {
            "coverage_target": 85,
            "output_dir": "tests/reports",
            "verbose": True
        },
        "PATHS": {
            "logs": "logs/",
            "archives": "archives/",
            "notes": "notes_persos/",
            "tests": "tests/",
            "config": "config/"
        }
    }
    return True


load()


if __name__ == "__main__":
    print(to_json())
