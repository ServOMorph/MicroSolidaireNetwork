# Synthèse — Micro Solidaire Network
> Généré le 2026-03-22 par /analyse_asso_micro-solidaire-network

---

## 1. Vision & Mission

**Micro Solidaire Network** est une association loi 1901 dont la mission est de rassembler des micro-entrepreneurs au sein d'une **communauté solidaire interconnectée**.

Finalités :
- Rompre l'isolement des micro-entrepreneurs et créer un réseau de pairs
- Mutualiser les expériences, outils, bonnes pratiques et retours terrain
- Favoriser le bien-être (humain, psychologique, organisationnel) dans la pratique du micro-entrepreneuriat
- Soutenir le développement économique de chacun (visibilité, clients, partenariats)

Objet statutaire (Article 2) :
- Entraide et rupture de l'isolement des micro-entrepreneurs
- Montée en compétences numériques (outils collaboratifs, IA, cybersécurité, gestion en ligne)
- Prévention des risques psychosociaux chez les indépendants
- Conception et diffusion de solutions numériques partagées (communs numériques)
- Insertion sociale et professionnelle par l'entrepreneuriat et le numérique
- Coopération avec structures publiques et privées

---

## 2. Public cible & Positionnement

**Public cible :**
- Micro-entrepreneurs tous secteurs (focus : services, accompagnement, formation, création, numérique)
- Indépendants en début d'activité ou en phase de structuration
- Personnes déjà en lien avec SéréniaTech cherchant une dimension collective

**Positionnement :**
- Réseau d'entraide « à taille humaine », non élitiste, centré sur la coopération
- Pont entre bien-être (ne pas s'épuiser en tant que solo-preneur) et performance économique
- Transformation numérique pédagogique, bienveillante et sur-mesure — dans la continuité de SéréniaTech

---

## 3. Architecture technique du plugin

### Routes API (`backend.js`)

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/plugins/micro-solidaire-network/docs` | Liste toutes les sections et fichiers du storage |
| GET | `/api/plugins/micro-solidaire-network/preview?path=...` | Servir un fichier en lecture en ligne (stream) |
| GET | `/api/plugins/micro-solidaire-network/download?path=...` | Télécharger un fichier (attachment) |

Toutes les routes nécessitent une authentification (`req.user` via Bearer token).

Types de fichiers gérés : PDF, images (PNG/JPG/GIF/SVG/WebP), texte/Markdown, Word (doc/docx), Excel (xls/xlsx), ZIP, CSV.

### Composants UI (`ui.js`)

Objet global `MicroSolidaireNetwork` enregistré sur `window`, hook `main_content` FamiCloud.

| Composant/Fonction | Rôle |
|--------------------|------|
| `render()` | Structure HTML : hero + nav latérale + panel fichiers + modal |
| `_renderNav()` | Navigation par sections avec icônes et compteur de fichiers |
| `_renderPanel(section)` | Liste des fichiers d'une section |
| `_renderFileRow(file)` | Ligne fichier : icône, nom, date, taille, boutons Voir/Télécharger |
| `_openFile(...)` | Ouvre image, PDF (iframe), Markdown/TXT (rendu inline) |
| `_renderMarkdown(text)` | Parser Markdown maison (titres, gras, italique, listes, blockquote, code) |
| `_downloadFile(...)` | Téléchargement via Blob URL |

Sections avec icônes natives : `Projet 📋`, `Événements 📅`, `Statuts 📜`, `Photos 🖼️`, `Général 📂`

### Stockage documentaire (`storage/`)

Structure : chaque sous-dossier = une section dans la navigation. Les fichiers à la racine forment la section « Général ».

| Section | Fichiers présents |
|---------|-------------------|
| `Projet/` | `synthèse.md`, `Statuts_brouillon.md` |
| `Financements/` | `Synthèse COMET.md` |

### Manifest (`manifest.json`)

```json
{
  "id": "micro-solidaire-network",
  "version": "1.0.0",
  "color": "#5BC0DE",
  "ui_hooks": ["main_content", "sidebar-menu"],
  "standalone": { "port": "4019" }
}
```

---

## 4. Contenu existant

| Fichier | Emplacement | Contenu |
|---------|-------------|---------|
| `synthèse.md` | `storage/Projet/` | Vision, objectifs, public, articulation FamiCloud/SéréniaTech, site web, gouvernance, financement |
| `Statuts_brouillon.md` | `storage/Projet/` | Projet de statuts loi 1901 complet (18 articles) |
| `Synthèse COMET.md` | `storage/Financements/` | Stratégie complète de financement (6 familles + tableau récapitulatif) |

---

## 5. Gouvernance

**Instances (Articles 8–11) :**
- **Assemblée Générale Ordinaire** : 1 fois/an — rapport moral/financier, budget, élections CA
- **Assemblée Générale Extraordinaire** : modifications statuts, dissolution, fusion
- **Conseil d'Administration** : 3 à 12 membres, stratégie, budget, partenariats
- **Bureau** : Président·e + Secrétaire + Trésorier·ère — gestion courante

**Types de membres (Article 5) :**
1. **Adhérents** : micro-entrepreneurs / indépendants / porteurs de projet, à jour de cotisation
2. **Partenaires** : personnes morales (collectivités, réseaux, entreprises)
3. **Bienfaiteurs** : soutien financier ou en nature significatif

**Ressources (Article 12) :**
- Cotisations membres
- Subventions publiques (État, UE, collectivités)
- Prestations de services, formations, ateliers
- Dons manuels, mécénat, crowdfunding

---

## 6. Écosystème

### SéréniaTech
- Apporte l'expertise numérique, IA, automatisation, pédagogie pour adultes
- Conçoit ateliers, contenus, formations sur-mesure pour les membres
- MS Network = le **bras associatif et communautaire** de SéréniaTech

### FamiCloud
- MS Network est un **plugin intégré** dans FamiCloud (port `4019`)
- Mutualise l'infrastructure : authentification, stockage, gestion de compte
- Logique modulaire : espace public + espace membres via le système de plugins
- MS Network = un des premiers « cas d'usage communautaires » de FamiCloud

### Financements identifiés (Synthèse COMET)
- Subventions locales : Ville/Agglo, Département Gironde, Région Nouvelle-Aquitaine (Défis numériques)
- Nationaux : FDVA, ministères (Économie, Travail, Numérique)
- Européens : FSE+, FEDER TIC, Digital Europe (DIGITAL-2026-SKILLS-09)
- Privés : fondations inclusion numérique, mécénat de compétences, crowdfunding (Ulule, KissKissBankBank)

---

## 7. À implémenter dans le site public

### Partie publique (site vitrine)
- [ ] Page d'accueil : nom, baseline, objet, valeurs
- [ ] Page Mission : entraide, réseau, bien-être, numérique
- [ ] Page Adhésion : types de membres, tarifs cotisation, formulaire de pré-adhésion / contact
- [ ] Calendrier des rencontres et ateliers (grandes dates)
- [ ] Page Équipe / Portraits de membres / Témoignages
- [ ] Footer : liens SéréniaTech, mentions légales, contact

### Espace membres (via plugin FamiCloud existant)
- [x] Bibliothèque de ressources documentaires (plugin actuel — sections navigables)
- [x] Visualisation PDF et images en ligne
- [x] Téléchargement de fichiers
- [ ] Agenda partagé (rencontres, ateliers, co-développement)
- [ ] Forum léger / fil d'entraide
- [ ] Annuaire des membres avec recommandations croisées
- [ ] Petites annonces internes (recherche partenaires, besoins)

### Aspects transverses
- [ ] Charte graphique alignée SéréniaTech (couleur principale : `#5BC0DE`)
- [ ] Design accessible, langage simple, sans jargon
- [ ] SEO local (Libourne, Gironde, Nouvelle-Aquitaine)
- [ ] Conformité RGPD (formulaire adhésion, gestion membres)
