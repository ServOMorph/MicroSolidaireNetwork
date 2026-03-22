# Commande /analyse_asso_micro-solidaire-network

Analyse le plugin FamiCloud de l'association et génère une synthèse dans `docs/`.

## Instructions

Tu dois effectuer les actions suivantes dans l'ordre :

### 1. Lire tous les fichiers du plugin

Chemin source : `D:\ServOMorph\FamiCLouD_DEV\plugins\micro-solidaire-network\`

Lire dans cet ordre :
1. `manifest.json` — identité, version, ports, hooks
2. `backend.js` — API, routes, logique serveur
3. `ui.js` — interface, composants, interactions
4. `storage/Projet/synthèse.md` — vision, objectifs, positionnement
5. `storage/Projet/Statuts_brouillon.md` — gouvernance, statuts loi 1901
6. Tous autres fichiers présents dans `storage/`

### 2. Analyser le contenu

Extraire et structurer :

**Vision & Mission**
- Objet de l'association
- Public cible
- Valeurs et positionnement

**Architecture technique du plugin**
- Routes API disponibles (depuis backend.js)
- Composants UI (depuis ui.js)
- Structure du stockage (sections documentaires)
- Dépendances et hooks FamiCloud

**Contenu documentaire existant**
- Sections présentes dans `storage/`
- Types de fichiers gérés
- Données réelles disponibles

**Gouvernance**
- Organes (CA, Bureau, AG)
- Types de membres
- Ressources financières prévues

**Liens écosystème**
- Relation avec SéréniaTech
- Intégration dans FamiCloud
- Articulation plugin ↔ site public

### 3. Écrire la synthèse

Créer ou mettre à jour le fichier `docs/SYNTHESE_ASSO.md` dans le projet courant avec le contenu suivant :

```markdown
# Synthèse — Micro Solidaire Network
> Généré le [DATE] par /analyse_asso_micro-solidaire-network

## 1. Vision & Mission
[contenu extrait]

## 2. Public cible & Positionnement
[contenu extrait]

## 3. Architecture technique du plugin
### Routes API
[liste des endpoints]

### Composants UI
[liste des composants/sections]

### Stockage documentaire
[sections et types de fichiers]

## 4. Contenu existant
[inventaire des fichiers dans storage/]

## 5. Gouvernance
[organes, membres, ressources]

## 6. Écosystème
[liens SéréniaTech / FamiCloud]

## 7. À implémenter dans le site public
[liste des fonctionnalités à porter sur le site internet]
```

### 4. Confirmation

Afficher :
> "Synthèse écrite dans `docs/SYNTHESE_ASSO.md`. Prêt à travailler sur le site ?"
