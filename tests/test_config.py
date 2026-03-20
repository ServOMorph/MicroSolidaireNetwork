# -*- coding: utf-8 -*-
"""
Tests pour le module config.py
Couverture cible: 85%
"""

import sys
import os
import json
import unittest

# Ajoute le dossier parent au path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import config


class TestConfigModule(unittest.TestCase):
    """Tests pour le module de configuration."""

    def setUp(self):
        """Reinitialise la config avant chaque test."""
        config.reset()

    def tearDown(self):
        """Nettoie apres chaque test."""
        config.reset()

    # --- Tests structure CONFIG ---

    def test_config_has_required_sections(self):
        """Verifie que CONFIG contient toutes les sections requises."""
        required_sections = ['APP', 'SERVER', 'LOGS', 'UI', 'THEMES', 'MODES', 'TESTS', 'PATHS']
        for section in required_sections:
            self.assertIn(section, config.CONFIG, f"Section {section} manquante")

    def test_app_section_structure(self):
        """Verifie la structure de la section APP."""
        app = config.CONFIG['APP']
        self.assertIn('name', app)
        self.assertIn('version', app)
        self.assertIn('author', app)
        self.assertIn('debug', app)

    def test_server_section_structure(self):
        """Verifie la structure de la section SERVER."""
        server = config.CONFIG['SERVER']
        self.assertIn('port', server)
        self.assertIn('host', server)
        self.assertIsInstance(server['port'], int)

    def test_logs_section_structure(self):
        """Verifie la structure de la section LOGS."""
        logs = config.CONFIG['LOGS']
        self.assertIn('enabled', logs)
        self.assertIn('file', logs)
        self.assertIn('max_entries', logs)
        self.assertIsInstance(logs['max_entries'], int)

    def test_ui_section_structure(self):
        """Verifie la structure de la section UI."""
        ui = config.CONFIG['UI']
        self.assertIn('default_theme', ui)
        self.assertIn('default_mode', ui)
        self.assertIn('admin_enabled', ui)

    def test_themes_is_list(self):
        """Verifie que THEMES est une liste non vide."""
        themes = config.CONFIG['THEMES']
        self.assertIsInstance(themes, list)
        self.assertGreater(len(themes), 0)

    def test_modes_is_list(self):
        """Verifie que MODES est une liste non vide."""
        modes = config.CONFIG['MODES']
        self.assertIsInstance(modes, list)
        self.assertGreater(len(modes), 0)

    # --- Tests fonction get() ---

    def test_get_section(self):
        """Teste la recuperation d'une section complete."""
        app = config.get('APP')
        self.assertIsNotNone(app)
        self.assertIsInstance(app, dict)

    def test_get_key(self):
        """Teste la recuperation d'une cle specifique."""
        version = config.get('APP', 'version')
        self.assertEqual(version, '1.0.0')

    def test_get_nonexistent_section(self):
        """Teste la recuperation d'une section inexistante."""
        result = config.get('NONEXISTENT')
        self.assertIsNone(result)

    def test_get_nonexistent_key(self):
        """Teste la recuperation d'une cle inexistante."""
        result = config.get('APP', 'nonexistent_key')
        self.assertIsNone(result)

    # --- Tests fonction set() ---

    def test_set_value(self):
        """Teste la modification d'une valeur."""
        result = config.set('APP', 'debug', True)
        self.assertTrue(result)
        self.assertTrue(config.CONFIG['APP']['debug'])

    def test_set_nonexistent_section(self):
        """Teste la modification dans une section inexistante."""
        result = config.set('NONEXISTENT', 'key', 'value')
        self.assertFalse(result)

    def test_set_nonexistent_key(self):
        """Teste la modification d'une cle inexistante."""
        result = config.set('APP', 'nonexistent_key', 'value')
        self.assertFalse(result)

    # --- Tests fonction reset() ---

    def test_reset(self):
        """Teste la reinitialisation de la config."""
        config.CONFIG['APP']['debug'] = True
        config.reset()
        self.assertFalse(config.CONFIG['APP']['debug'])

    # --- Tests fonctions JSON ---

    def test_to_json(self):
        """Teste l'export JSON."""
        json_str = config.to_json()
        self.assertIsInstance(json_str, str)
        # Verifie que c'est du JSON valide
        parsed = json.loads(json_str)
        self.assertIn('APP', parsed)

    def test_from_json(self):
        """Teste l'import JSON."""
        test_config = '{"APP": {"name": "TestApp", "version": "2.0.0", "author": "Test", "description": "Test", "debug": true}}'
        result = config.from_json(test_config)
        self.assertTrue(result)
        self.assertEqual(config.CONFIG['APP']['name'], 'TestApp')

    def test_from_json_invalid(self):
        """Teste l'import d'un JSON invalide."""
        result = config.from_json('invalid json')
        self.assertFalse(result)

    # --- Tests save/load ---

    def test_save_creates_file(self):
        """Teste que save() cree le fichier."""
        config.CONFIG['APP']['name'] = 'TestSave'
        result = config.save()
        self.assertTrue(result)
        self.assertTrue(os.path.exists(config.CONFIG_FILE))

    def test_load_restores_config(self):
        """Teste que load() restaure la config."""
        config.CONFIG['APP']['name'] = 'TestLoad'
        config.save()
        config.CONFIG['APP']['name'] = 'Changed'
        config.load()
        self.assertEqual(config.CONFIG['APP']['name'], 'TestLoad')

    def test_load_nonexistent_file(self):
        """Teste load() avec fichier inexistant."""
        # Supprime le fichier s'il existe
        if os.path.exists(config.CONFIG_FILE):
            os.remove(config.CONFIG_FILE)
        result = config.load()
        self.assertFalse(result)


class TestConfigValues(unittest.TestCase):
    """Tests pour les valeurs par defaut."""

    def test_default_port(self):
        """Verifie le port par defaut."""
        self.assertEqual(config.CONFIG['SERVER']['port'], 3000)

    def test_default_theme(self):
        """Verifie le theme par defaut."""
        self.assertEqual(config.CONFIG['UI']['default_theme'], 'nuit-foret')

    def test_default_mode(self):
        """Verifie le mode par defaut."""
        self.assertEqual(config.CONFIG['UI']['default_mode'], 'normal')

    def test_coverage_target(self):
        """Verifie la cible de couverture."""
        self.assertEqual(config.CONFIG['TESTS']['coverage_target'], 85)

    def test_logs_format(self):
        """Verifie le format des logs."""
        self.assertEqual(config.CONFIG['LOGS']['format'], 'TS|TYPE|SRC|MSG')


if __name__ == '__main__':
    unittest.main(verbosity=2)
