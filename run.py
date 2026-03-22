#!/usr/bin/env python3
"""
Lanceur de l'application MicroSolidaireNetwork avec auto-reload.

Usage:
    python run.py              # Mode dev avec auto-reload
    python run.py --no-watch   # Sans surveillance des fichiers
    python run.py --help       # Affiche l'aide
"""

import sys
import webbrowser
import time
import http.server
import socketserver
import os
import json
import threading
import hashlib
from pathlib import Path

# Configuration
PORT = 4019
PROJECT_ROOT = Path(__file__).parent
WATCH_INTERVAL = 2  # Secondes entre chaque verification

# Dossiers a surveiller pour l'auto-reload
WATCH_DIRS = ["css", "js"]

# Extensions a surveiller
WATCH_EXTENSIONS = {".py", ".js", ".json", ".html", ".css"}


class FileWatcher:
    """Surveille les modifications de fichiers et declenche le reload."""

    def __init__(self, root: Path, dirs: list, extensions: set):
        self.root = root
        self.dirs = dirs
        self.extensions = extensions
        self.file_hashes = {}
        self._running = False
        self._thread = None

    def _get_files_to_watch(self) -> list:
        files = []
        for dir_name in self.dirs:
            dir_path = self.root / dir_name
            if dir_path.exists():
                for ext in self.extensions:
                    files.extend(dir_path.rglob(f"*{ext}"))
        # Ajouter tous les .html du dossier site
        files.extend(self.root.glob("*.html"))
        return files

    def _compute_hash(self, filepath: Path) -> str:
        try:
            return hashlib.md5(filepath.read_bytes()).hexdigest()
        except Exception:
            return ""

    def _check_changes(self) -> list:
        changed = []
        current_files = self._get_files_to_watch()
        for filepath in current_files:
            current_hash = self._compute_hash(filepath)
            old_hash = self.file_hashes.get(str(filepath))
            if old_hash is None:
                self.file_hashes[str(filepath)] = current_hash
            elif old_hash != current_hash:
                self.file_hashes[str(filepath)] = current_hash
                changed.append(filepath)
        return changed

    def _watch_loop(self, on_change_callback):
        print(f"\n[Watch] Surveillance active ({WATCH_INTERVAL}s)")
        self._check_changes()  # Init hashes
        while self._running:
            time.sleep(WATCH_INTERVAL)
            changes = self._check_changes()
            if changes:
                print(f"\n[Watch] {len(changes)} modification(s) detectee(s)")
                on_change_callback()

    def start(self, on_change_callback):
        self._running = True
        self._thread = threading.Thread(
            target=self._watch_loop, args=(on_change_callback,), daemon=True
        )
        self._thread.start()

    def stop(self):
        self._running = False


class ReloadHandler(http.server.SimpleHTTPRequestHandler):
    """Handler HTTP avec endpoint reload."""
    last_update = time.time()

    def log_message(self, _format, *args):
        if args and '/_reload' not in str(args[0]):
            status = str(args[1]) if len(args) > 1 else ""
            if status.startswith('4') or status.startswith('5'):
                print(f"[HTTP] {args[0]} -> {status}")

    def do_GET(self):
        if self.path == '/_reload/check':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"last_update": self.last_update}).encode())
            return
        return super().do_GET()


def lancer_serveur(watch=True):
    """Lance le serveur HTTP avec surveillance optionnelle."""
    print(f"\n{'=' * 50}")
    print(f"  MicroSolidaireNetwork - Serveur Dev - Port {PORT}")
    print(f"{'=' * 50}")

    site_dir = PROJECT_ROOT / "site"
    os.chdir(site_dir)
    url = f"http://localhost:{PORT}/choix.html"

    watcher = None
    if watch:
        watcher = FileWatcher(site_dir, WATCH_DIRS, WATCH_EXTENSIONS)
        watcher.start(lambda: setattr(ReloadHandler, 'last_update', time.time()))

    print(f"\n[URL] {url}")
    print("\n[Commandes]")
    print("  Ctrl+C -> Arreter le serveur")
    if watch:
        print("  Auto-reload actif")
    print()

    # Ouvrir navigateur
    threading.Thread(target=lambda: (time.sleep(1), webbrowser.open(url)), daemon=True).start()

    try:
        with socketserver.TCPServer(("", PORT), ReloadHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n[Stop] Arret du serveur...")
        if watcher:
            watcher.stop()
        print("[OK] Serveur arrete")
    except OSError as e:
        if "Address already in use" in str(e) or "10048" in str(e):
            print(f"\n[!] Le port {PORT} est deja utilise.")
        else:
            raise


def afficher_aide():
    print(__doc__)
    print("\nOptions:")
    print("  (aucune)     Mode dev avec auto-reload")
    print("  --no-watch   Sans surveillance fichiers")
    print("  --help       Affiche cette aide")


def main():
    print("=" * 50)
    print("  MicroSolidaireNetwork")
    print("=" * 50)

    args = sys.argv[1:]
    if "--help" in args or "-h" in args:
        afficher_aide()
        return 0

    watch = "--no-watch" not in args
    lancer_serveur(watch=watch)
    return 0


if __name__ == "__main__":
    sys.exit(main())
