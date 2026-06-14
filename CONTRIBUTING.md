# Contribuer à Micro Solidaire Network

Merci de l'intérêt porté au projet ! Les contributions sont les
bienvenues : correction de fautes, accessibilité, performances, nouvelles
pages ou améliorations des chartes graphiques.

## Démarrer

```bash
git clone <url-du-depot>
cd MicroSolidaireNetwork
python run.py
```

Le site est **100 % statique** (HTML/CSS/JS) et servi par `run.py` (Python,
bibliothèque standard uniquement — voir `requirements.txt`). Aucune installation
de dépendances n'est nécessaire.

## Organisation du dépôt

- Tout le site servi se trouve dans `site/`.
- La documentation (chartes, plan de site, SEO…) est dans `docs/`.
- Voir la structure détaillée dans le [README](README.md).

## Conventions

- **Langue** : français pour le contenu et les commits.
- **Code** : 1 fichier = 1 responsabilité, maximum 500 lignes par fichier.
- **Nommage** : `camelCase` (variables/fonctions), `PascalCase` (composants),
  `kebab-case` (fichiers).
- **Commits** : messages clairs et préfixés (`feat:`, `fix:`, `docs:`, `style:`…).

## Proposer une modification

1. Crée une branche depuis `master`.
2. Effectue tes modifications.
3. Vérifie le rendu localement avec `python run.py`.
4. Ouvre une Pull Request en décrivant le changement.

Pour toute question, ouvre une *issue* ou contacte l'équipe du projet via la page
Contact du site.
