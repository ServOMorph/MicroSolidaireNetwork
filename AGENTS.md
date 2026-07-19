# Instructions de conversation - Micro Solidaire Network

Ce fichier guide les agents d'IA (comme Claude Code ou Gemini) travaillant sur ce dépôt.

## Langue et style
- Communiquer exclusivement en français
- Adopter un ton professionnel, synthétique et direct
- Émojis : pas d'émojis dans le code ni dans les messages de commit, sauf accord explicite

## Comportement
- Exécuter uniquement les tâches demandées explicitement
- Ne pas prendre d'initiatives non sollicitées
- Ne pas extrapoler au-delà de la demande
- Ne pas créer de contenu supplémentaire non demandé
- Ne pas ajouter de commentaires non nécessaires dans le code

## Contraintes de code
- **Taille des fichiers** : Maximum 500 lignes par fichier. Proposer une refactorisation si cette limite est dépassée.
- **Architecture modulaire** : Évaluer systématiquement la division en plusieurs fichiers (1 fichier = 1 responsabilité claire).
- **Tests** : Créer les tests associés dès qu'une nouvelle fonctionnalité est ajoutée.
- **Conventions de nommage** :
  - Variables et fonctions : `camelCase`
  - Composants React : `PascalCase`
  - Fichiers : `kebab-case`

## UI / Contenu
- **Pronoms et perspective** : Tous les textes de l'UI doivent être écrits à la première personne du singulier (*je, ma, mes, moi*), car le projet est actuellement porté par une seule personne.
- **Écriture inclusive** : Utiliser l'écriture inclusive avec le point médian (`·`) pour tous les termes genrés dans l'UI (ex: *entrepreneur·e·s*, *indépendant·e·s*, *travailleur·se·s*, *bienveillant·e*).
