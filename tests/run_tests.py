# -*- coding: utf-8 -*-
"""
Script principal pour executer tous les tests
Genere un rapport de couverture dans tests/reports/
Usage: python tests/run_tests.py
"""

import sys
import os
import unittest
import io
from datetime import datetime

# Configuration encodage Windows
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

# Chemin du projet
PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TESTS_DIR = os.path.dirname(os.path.abspath(__file__))
REPORTS_DIR = os.path.join(TESTS_DIR, 'reports')

# Assure que le dossier reports existe
os.makedirs(REPORTS_DIR, exist_ok=True)


def run_all_tests():
    """Execute tous les tests et genere un rapport."""

    print("=" * 60)
    print("  EXECUTION DES TESTS")
    print("=" * 60)
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Repertoire: {TESTS_DIR}")
    print()

    # Decouvre tous les tests
    loader = unittest.TestLoader()
    suite = loader.discover(TESTS_DIR, pattern='test_*.py')

    # Execute les tests
    stream = io.StringIO()
    runner = unittest.TextTestRunner(stream=stream, verbosity=2)
    result = runner.run(suite)

    # Affiche les resultats
    output = stream.getvalue()
    print(output)

    # Calcule les statistiques
    total = result.testsRun
    failures = len(result.failures)
    errors = len(result.errors)
    skipped = len(result.skipped)
    success = total - failures - errors - skipped

    # Calcule le pourcentage de reussite
    if total > 0:
        success_rate = (success / total) * 100
    else:
        success_rate = 0

    # Resume
    print()
    print("=" * 60)
    print("  RESUME")
    print("=" * 60)
    print(f"Tests executes:  {total}")
    print(f"Reussites:       {success}")
    print(f"Echecs:          {failures}")
    print(f"Erreurs:         {errors}")
    print(f"Ignores:         {skipped}")
    print(f"Taux reussite:   {success_rate:.1f}%")
    print()

    # Affiche les echecs et erreurs
    if result.failures:
        print("ECHECS:")
        for test, traceback in result.failures:
            print(f"  - {test}")
            print(f"    {traceback[:200]}...")
        print()

    if result.errors:
        print("ERREURS:")
        for test, traceback in result.errors:
            print(f"  - {test}")
            print(f"    {traceback[:200]}...")
        print()

    # Genere le rapport
    report_file = os.path.join(REPORTS_DIR, f'test_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.txt')
    with open(report_file, 'w', encoding='utf-8') as f:
        f.write("=" * 60 + "\n")
        f.write("  RAPPORT DE TESTS\n")
        f.write("=" * 60 + "\n")
        f.write(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"Repertoire: {TESTS_DIR}\n\n")
        f.write(output)
        f.write("\n")
        f.write("=" * 60 + "\n")
        f.write("  RESUME\n")
        f.write("=" * 60 + "\n")
        f.write(f"Tests executes:  {total}\n")
        f.write(f"Reussites:       {success}\n")
        f.write(f"Echecs:          {failures}\n")
        f.write(f"Erreurs:         {errors}\n")
        f.write(f"Ignores:         {skipped}\n")
        f.write(f"Taux reussite:   {success_rate:.1f}%\n")

    print(f"Rapport genere: {report_file}")

    # Met a jour le rapport latest
    latest_file = os.path.join(REPORTS_DIR, 'latest_report.txt')
    with open(latest_file, 'w', encoding='utf-8') as f:
        f.write(f"Derniere execution: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"Tests: {total} | Reussites: {success} | Echecs: {failures} | Erreurs: {errors}\n")
        f.write(f"Taux reussite: {success_rate:.1f}%\n")
        if success_rate >= 85:
            f.write("Objectif 85% ATTEINT\n")
        else:
            f.write(f"Objectif 85% NON ATTEINT (manque {85 - success_rate:.1f}%)\n")

    # Code de sortie
    if result.wasSuccessful():
        print("TOUS LES TESTS ONT REUSSI")
        return 0
    else:
        print("CERTAINS TESTS ONT ECHOUE")
        return 1


def run_specific_test(test_name):
    """Execute un test specifique."""
    loader = unittest.TestLoader()
    suite = loader.loadTestsFromName(test_name)
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    return 0 if result.wasSuccessful() else 1


if __name__ == '__main__':
    if len(sys.argv) > 1:
        # Execute un test specifique
        exit_code = run_specific_test(sys.argv[1])
    else:
        # Execute tous les tests
        exit_code = run_all_tests()

    sys.exit(exit_code)
