# CLAUDE.md

Ce fichier guide Claude Code pour ce repository.


## Communication

- Langue : français exclusivement
- Ton : professionnel, synthétique, direct
- Émojis : uniquement les marqueurs définis ci-dessous

### Marqueurs de fin (obligatoires)

Chaque réponse se termine par :
```
# 😎
# ❤️
# ❤️
# ❤️
# ❤️
# ❤️
```

## Comportement

- Exécuter uniquement les tâches demandées explicitement
- Ne pas prendre d'initiatives non sollicitées
- Ne pas extrapoler au-delà de la demande
- Ne pas créer de contenu supplémentaire non demandé
- Ne pas ajouter de commentaires non nécessaires dans le code

### Noms de Fichiers et Dossiers
- Noms explicites en français
- Structure claire et logique

## Contraintes de code

### Taille des fichiers
- **Maximum 500 lignes par fichier**
- Si un fichier dépasse cette limite : proposer une refactorisation urgente avant de poursuivre

### Architecture modulaire
- À chaque script créé, évaluer systématiquement la division en plusieurs fichiers
- Principe de responsabilité unique : 1 fichier = 1 responsabilité claire
- Privilégier un code modulable et scalable

### Tests
- Créer les tests associés dès qu'une nouvelle fonction est ajoutée
- Voir `tests/README.md` pour la stratégie de couverture

### Conventions de nommage
- Variables/fonctions : camelCase
- Composants React : PascalCase
- Fichiers : kebab-case ou selon framework

## Systeme d'Apprentissage Centralise

Ce projet beneficie du systeme d'auto-apprentissage centralise dans Agents_IA_V2.

**Chemin du systeme** : `C:\Users\raph6\Documents\ServOMorph\Agents_IA_V2\.claude\learnings\`

### Fonctionnement

- **Au demarrage (`/start`)** : Les apprentissages pertinents sont charges depuis le systeme centralise
- **A la cloture (`/close`)** : Les erreurs corrigees et patterns multi-essais sont extraits et stockes

### Benefices

- Memoire persistante entre sessions
- Partage des apprentissages entre TOUS les projets ServOMorph
- Expertise croissante au fil du temps

### Commandes CLI

```bash
# Rechercher des apprentissages
python C:\Users\raph6\Documents\ServOMorph\Agents_IA_V2\.claude\learnings\learning_manager.py search "python asyncio"

# Voir les statistiques
python C:\Users\raph6\Documents\ServOMorph\Agents_IA_V2\.claude\learnings\learning_manager.py stats
```

## Dossiers Interdits

**INTERDICTION TOTALE** de lecture ou écriture dans :
- `notes_persos/`
- `archives/`