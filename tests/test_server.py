# -*- coding: utf-8 -*-
"""
Tests pour le serveur Node.js (server.js)
Utilise requests pour tester les endpoints API
Couverture cible: 85%
"""

import unittest
import subprocess
import time
import os
import sys
import json

# Essaie d'importer requests, sinon skip les tests
try:
    import requests
    HAS_REQUESTS = True
except ImportError:
    HAS_REQUESTS = False


# Configuration
SERVER_URL = 'http://localhost:3000'
PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


@unittest.skipUnless(HAS_REQUESTS, "Module 'requests' non installe")
class TestServerEndpoints(unittest.TestCase):
    """Tests pour les endpoints du serveur."""

    server_process = None

    @classmethod
    def setUpClass(cls):
        """Demarre le serveur avant les tests."""
        # Verifie si le serveur est deja en cours d'execution
        try:
            response = requests.get(f'{SERVER_URL}/', timeout=1)
            cls.server_running = True
            cls.server_process = None
            print("Serveur deja en cours d'execution")
        except:
            cls.server_running = False
            print("Demarrage du serveur de test...")
            # Demarre le serveur
            cls.server_process = subprocess.Popen(
                ['node', 'server.js'],
                cwd=PROJECT_DIR,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE
            )
            time.sleep(2)  # Attend que le serveur demarre

    @classmethod
    def tearDownClass(cls):
        """Arrete le serveur apres les tests."""
        if cls.server_process:
            cls.server_process.terminate()
            cls.server_process.wait()
            print("Serveur de test arrete")

    # --- Tests page principale ---

    def test_index_page(self):
        """Teste que la page d'accueil est accessible."""
        response = requests.get(f'{SERVER_URL}/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('text/html', response.headers.get('Content-Type', ''))

    def test_css_files(self):
        """Teste que les fichiers CSS sont accessibles."""
        response = requests.get(f'{SERVER_URL}/src/assets/styles/main.css')
        self.assertEqual(response.status_code, 200)
        self.assertIn('text/css', response.headers.get('Content-Type', ''))

    def test_js_files(self):
        """Teste que les fichiers JS sont accessibles."""
        response = requests.get(f'{SERVER_URL}/src/utils/logger.js')
        self.assertEqual(response.status_code, 200)
        self.assertIn('javascript', response.headers.get('Content-Type', ''))

    def test_404_page(self):
        """Teste la page 404."""
        response = requests.get(f'{SERVER_URL}/nonexistent-page.html')
        self.assertEqual(response.status_code, 404)

    # --- Tests API Logs ---

    def test_logs_get_empty(self):
        """Teste GET /api/logs quand vide."""
        # Clear d'abord
        requests.post(f'{SERVER_URL}/api/logs/clear')
        response = requests.get(f'{SERVER_URL}/api/logs')
        self.assertEqual(response.status_code, 200)

    def test_logs_post(self):
        """Teste POST /api/log."""
        log_entry = '1234567890|LOG|test|Message de test'
        response = requests.post(
            f'{SERVER_URL}/api/log',
            data=log_entry,
            headers={'Content-Type': 'text/plain'}
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data.get('ok'))

    def test_logs_get_after_post(self):
        """Teste GET /api/logs apres POST."""
        # Clear et ajoute un log
        requests.post(f'{SERVER_URL}/api/logs/clear')
        log_entry = '9999999999|INFO|test|Test apres post'
        requests.post(f'{SERVER_URL}/api/log', data=log_entry)

        response = requests.get(f'{SERVER_URL}/api/logs')
        self.assertEqual(response.status_code, 200)
        self.assertIn('9999999999', response.text)

    def test_logs_clear(self):
        """Teste POST /api/logs/clear."""
        response = requests.post(f'{SERVER_URL}/api/logs/clear')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data.get('ok'))

    # --- Tests API Config ---

    def test_config_get(self):
        """Teste GET /api/config."""
        response = requests.get(f'{SERVER_URL}/api/config')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn('APP', data)
        self.assertIn('SERVER', data)

    def test_config_post(self):
        """Teste POST /api/config."""
        # Recupere la config actuelle
        current = requests.get(f'{SERVER_URL}/api/config').json()
        current['APP']['debug'] = True

        response = requests.post(
            f'{SERVER_URL}/api/config',
            json=current
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data.get('ok'))

        # Verifie que la modification a ete appliquee
        updated = requests.get(f'{SERVER_URL}/api/config').json()
        self.assertTrue(updated['APP']['debug'])

    def test_config_patch(self):
        """Teste PATCH /api/config."""
        patch_data = {'APP': {'debug': False}}
        response = requests.patch(
            f'{SERVER_URL}/api/config',
            json=patch_data
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertFalse(data['APP']['debug'])

    def test_config_reset(self):
        """Teste POST /api/config/reset."""
        response = requests.post(f'{SERVER_URL}/api/config/reset')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data.get('ok'))

    def test_config_invalid_json(self):
        """Teste POST /api/config avec JSON invalide."""
        response = requests.post(
            f'{SERVER_URL}/api/config',
            data='invalid json',
            headers={'Content-Type': 'application/json'}
        )
        self.assertEqual(response.status_code, 400)

    # --- Tests CORS ---

    def test_cors_headers(self):
        """Teste les headers CORS."""
        response = requests.get(f'{SERVER_URL}/')
        self.assertIn('Access-Control-Allow-Origin', response.headers)

    def test_options_request(self):
        """Teste la requete OPTIONS (preflight)."""
        response = requests.options(f'{SERVER_URL}/api/config')
        self.assertEqual(response.status_code, 204)


class TestServerWithoutRunning(unittest.TestCase):
    """Tests qui ne necessitent pas le serveur."""

    def test_server_file_exists(self):
        """Verifie que server.js existe."""
        server_path = os.path.join(PROJECT_DIR, 'server.js')
        self.assertTrue(os.path.exists(server_path))

    def test_package_json_exists(self):
        """Verifie que package.json existe."""
        package_path = os.path.join(PROJECT_DIR, 'package.json')
        self.assertTrue(os.path.exists(package_path))

    def test_package_json_valid(self):
        """Verifie que package.json est valide."""
        package_path = os.path.join(PROJECT_DIR, 'package.json')
        with open(package_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        self.assertIn('name', data)
        self.assertIn('scripts', data)
        self.assertIn('start', data['scripts'])


if __name__ == '__main__':
    unittest.main(verbosity=2)
