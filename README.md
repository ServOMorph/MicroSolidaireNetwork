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

# Le navigateur s'ouvre automatiquement sur la maquette
http://localhost:4019/index.htm
```

---

## Structure du projet

```
MicroSolidaireNetwork/
├── run.py                    # Serveur dev Python (port 4019, auto-reload)
├── requirements.txt          # Prérequis (aucune dépendance externe)
├── LICENSE                   # Licence MIT
├── CONTRIBUTING.md           # Guide de contribution
├── site/
│   └── site2_0-chatgpt/      # Maquette principale (landing page)
│       ├── index.htm         # Accueil, Qui sommes-nous, Activités, Rejoindre, Contact
│       ├── style.css         # Styles + police Inter (CDN)
│       └── assets/img/       # hero.png, rencontres.png, ateliers.png, ressources.png
├── docs/
│   ├── ROADMAP.md
│   ├── SYNTHESE_ASSO.md
│   └── SITE_INTERNET/
│       └── CHARTES_GRAPHIQUES/
└── README.md
```

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
