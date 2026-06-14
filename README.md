# Micro Solidaire Network — Site Internet

![Licence](https://img.shields.io/badge/licence-MIT-green)
![Python](https://img.shields.io/badge/python-3.8%2B-blue)
![Statut](https://img.shields.io/badge/statut-en%20développement-orange)
![Stack](https://img.shields.io/badge/stack-HTML%20·%20CSS%20·%20JS-lightgrey)

> Association loi 1901 · Libourne (Gironde) & en ligne
> Communauté solidaire de micro-entrepreneurs engagés pour un numérique responsable et une IA éthique.

---

## À propos

**Micro Solidaire Network** est une association qui fédère des micro-entrepreneurs
autour d'un **numérique responsable** et d'une **IA éthique**. Ce dépôt contient
le **site internet** de l'association : un site statique multi-pages accompagné de
plusieurs variantes de maquettes et d'un sélecteur de chartes graphiques.

Le projet est volontairement **sans dépendance** : HTML / CSS / JavaScript pur,
servi par un petit serveur de développement Python (bibliothèque standard).

---

## Démarrage rapide

```bash
# Lancer le serveur de développement
python run.py

# Ouvrir dans le navigateur → page de choix de version
http://localhost:4019/choix.html
```

Le serveur s'ouvre automatiquement sur la **page de choix de version**.

---

## Versions du site

| Version | Fichier | Description |
|---|---|---|
| **Site complet** | `site/index.html` | 11 pages HTML, navigation complète |
| **Mini Site** | `site/mini-site.html` | Page unique dark mode, sélecteur de charte |
| **Aquarelle** | `site/site2.html` | Mini site entier, charte 3 aquarelle/artisanale |
| **ChatGPT** | `site/site2_0-chatgpt/index.htm` | Maquette générée par ChatGPT |
| **Comet** | `site/SITE3_COMET/index.htm` | Maquette style ivoire & orange terra |

---

## Sélecteur de chartes graphiques

Le site principal et le mini-site disposent d'un **sélecteur 🎨** dans la navbar.
Le choix est persisté dans `localStorage` (`msn-theme`).

| Charte | Style | Couleurs principales |
|---|---|---|
| **Charte 1** | Dark moderne | `#5BC0DE` · `#0D1117` |
| **Charte 2** | Glassmorphism | `#2F6BFF` · `#0B1A3A → #5A3E8B` |
| **Charte 3** | Aquarelle & Nature | `#6FAF8F` · `#D98C5F` · `#F8F5F0` |

---

## Structure du projet

```
MicroSolidaireNetwork/
├── run.py                    # Serveur dev Python (port 4019, auto-reload)
├── requirements.txt          # Prérequis (aucune dépendance externe)
├── LICENSE                   # Licence MIT
├── CONTRIBUTING.md           # Guide de contribution
├── site/                     # Fichiers servis
│   ├── choix.html            # Page d'accueil — sélection de version
│   ├── index.html            # Site complet — accueil
│   ├── mission.html
│   ├── ce-que-tu-y-trouves.html
│   ├── communaute.html
│   ├── blog.html
│   ├── adhesion.html
│   ├── ressources.html
│   ├── contact.html
│   ├── mentions-legales.html
│   ├── confidentialite.html
│   ├── cookies.html
│   ├── mini-site.html        # Mini site page unique (sélecteur charte)
│   ├── site2.html            # Mini site entier — charte 3 aquarelle
│   ├── site2_0-chatgpt/      # Maquette ChatGPT (icônes 240px, hero 35vh)
│   │   ├── index.htm
│   │   ├── style.css
│   │   └── assets/img/       # hero.png, rencontres.png, ateliers.png, ressources.png
│   ├── SITE3_COMET/          # Maquette Comet (ivoire & orange terra)
│   │   ├── index.htm
│   │   ├── style.css
│   │   └── assets/img/
│   ├── css/
│   │   └── styles.css        # CSS principal + chartes 1/2/3
│   ├── js/
│   │   └── main.js           # JS principal + sélecteur de charte
│   └── assets/
│       └── images/
│           ├── logo-serenia.png
│           ├── logo-famicloud.png
│           └── charte3/      # Images aquarelle à générer (voir IMAGES_CHARTE3.md)
├── docs/
│   ├── ROADMAP.md
│   ├── SYNTHESE_ASSO.md
│   └── SITE_INTERNET/
│       └── CHARTES_GRAPHIQUES/
│           ├── CHARTE_GRAPHIQUE1.md
│           ├── CHARTE_GRAPHIQUE2.md
│           ├── CHARTE_GRAPHIQUE3.md
│           └── IMAGES_CHARTE3.md   # Prompts DALL-E pour les images charte 3
└── README.md
```

---

## Images charte 3 (à générer)

Les prompts DALL-E sont dans [`docs/SITE_INTERNET/CHARTES_GRAPHIQUES/IMAGES_CHARTE3.md`](docs/SITE_INTERNET/CHARTES_GRAPHIQUES/IMAGES_CHARTE3.md).

Images à déposer dans `site/assets/images/charte3/` :
- `hero-illustration.jpg` (1920×900)
- `icon-rencontres.png` (160×160)
- `icon-ateliers.png` (160×160)
- `icon-ressources.png` (160×160)
- `icon-ia.png` (160×160)
- `illustration-mission.jpg` (600×480)
- `texture-papier.png` (800×800)

---

## Contribuer

Les contributions sont les bienvenues. Consulte le guide [CONTRIBUTING.md](CONTRIBUTING.md)
pour démarrer.

---

## Licence

Ce projet est distribué sous licence [MIT](LICENSE).

---

## Écosystème

- **SéréniaTech** — Partenaire technique ([serenia-tech.fr](https://serenia-tech.fr))
- **FamiCloud** — Infrastructure de l'espace membres
