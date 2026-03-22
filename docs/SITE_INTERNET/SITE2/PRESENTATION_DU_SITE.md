# 1. Présentation générale du site

## 1.1 Objectif du site
Le site “Micro Solidaire Network” a pour objectif de :
- Présenter une communauté de micro-entrepreneurs
- Favoriser les rencontres, l’entraide et la collaboration
- Donner accès à des ressources pratiques et événements
- Encourager une vision apaisée et durable de l’entrepreneuriat

## 1.2 Public cible
- Micro-entrepreneurs / freelances
- Indépendants en reconversion
- Créateurs d’activités locales
- Profils recherchant du lien social et du soutien

## 1.3 Ton et ambiance visuelle
- Style : illustration **aquarelle / dessin à la main**
- Ambiance : **chaleureuse, rurale, poétique**
- Valeurs transmises :
  - sérénité
  - lenteur
  - entraide
- Univers visuel :
  - nature vivante (vent, feuilles, lumière)
  - village sur colline
  - interactions humaines simples

---

# 2. Architecture générale

## 2.1 Pages prévues
- **Accueil** : page principale présentant la communauté et les activités
- **Qui sommes-nous** : présentation de la mission et des membres
- **Nos activités** : détail des rencontres, ateliers et événements
- **Ressources** : contenus numériques (guides, outils)
- **Contact** : formulaire + informations de contact

## 2.2 Description des pages
- Accueil : point d’entrée émotionnel et informatif
- Qui sommes-nous : crédibilité et vision
- Nos activités : engagement utilisateur
- Ressources : valeur pratique
- Contact : conversion et mise en relation

---

# 3. Spécifications détaillées de la page d’accueil

## 3.1 Header

### Objectif
Navigation principale et identification du site

### Contenu
- Logo (texte) :  
  **Micro Solidaire Network**  
  Sous-titre : *Communauté solidaire de micro-entrepreneurs interconnectés*

- Menu :
  - Accueil
  - Qui sommes-nous
  - Nos activités
  - Contact

### Comportement
- Hover : soulignement léger
- Header sticky (optionnel)

### Mise en page
- Alignement horizontal
- Logo à gauche, menu à droite
- Hauteur : ~80px

---

## 3.2 Hero

### Objectif
Créer une connexion émotionnelle immédiate

### Contenu
- Titre :
  **Solidarité et sérénité pour les entrepreneurs indépendants**

- Bouton :
  **Rejoindre la communauté**

### Comportement
- CTA hover :
  - couleur légèrement plus foncée
  - légère élévation (transform: translateY(-2px))

### Mise en page
- Image en fond ou illustration principale
- Texte centré horizontalement
- CTA sous le titre
- Padding vertical important (100–150px)

---

## 3.3 Section “Rencontres”

### Objectif
Mettre en avant les échanges humains

### Contenu
- Titre : Rencontres
- Texte :  
  *Échangeons et partageons nos expériences.*

### Comportement
- Carte hover :
  - ombre renforcée
  - légère montée

### Mise en page
- Carte
- Icône au-dessus
- Texte centré

---

## 3.4 Section “Ateliers”

### Objectif
Valoriser l’apprentissage collectif

### Contenu
- Titre : Ateliers
- Texte :  
  *Participez à nos ateliers collaboratifs.*

### Comportement
Identique aux autres cartes

---

## 3.5 Section “Ressources numériques”

### Objectif
Montrer la valeur digitale

### Contenu
- Titre : Ressources numériques
- Texte :  
  *Guides, outils et conseils en ligne.*

---

## 3.6 Organisation des blocs

### Mise en page globale
- 3 colonnes desktop
- Espacement entre cartes : 30–40px
- Largeur max : 1200px
- Centré

---

## 3.7 Footer

### Objectif
Informations secondaires

### Contenu
- Nom du site
- Liens :
  - Mentions légales
  - Contact

---

# 4. Guide de style

## 4.1 Palette de couleurs

- Vert principal : #6FAF8F → éléments naturels
- Bleu pastel : #A8C7D8 → fond / ambiance
- Jaune doré : #F2D6A2 → lumière / accents
- Ivoire : #F8F5F0 → fond principal
- Gris foncé : #3A3A3A → texte
- Terre cuite : #D98C5F → boutons

---

## 4.2 Typographies

- Titres : police manuscrite ou serif douce
- Texte : sans-serif (Inter / Open Sans)

Tailles :
- H1 : 56px
- H2 : 32px
- Texte : 16–18px

---

## 4.3 Boutons

- Couleur : terre cuite
- Texte : blanc
- Border-radius : 25px
- Padding : 12px 24px
- Ombre légère

---

## 4.4 Cartes

- Fond : blanc
- Border-radius : 16px
- Ombre : douce
- Padding : 20–30px

---

## 4.5 Responsive

- Largeur max : 1200px
- Tablet :
  - 2 colonnes
- Mobile :
  - 1 colonne
  - menu burger
  - texte centré

---

# 5. Plan HTML/CSS pour Claude Code

## 5.1 Arborescence


/project
├── index.html
├── style.css
├── /assets
│ ├── /img
│ └── /icons


---

## 5.2 Structure HTML (outline)

```html
<header class="site-header">
  <div class="container">
    <div class="logo"></div>
    <nav class="nav"></nav>
  </div>
</header>

<section class="hero">
  <div class="hero-content">
    <h1></h1>
    <a class="btn-primary"></a>
  </div>
</section>

<section class="features">
  <div class="container">
    <div class="card rencontres"></div>
    <div class="card ateliers"></div>
    <div class="card ressources"></div>
  </div>
</section>

<footer class="site-footer"></footer>
5.3 Convention de nommage
Classes simples, lisibles
Style semi-BEM :
.hero-title
.card-icon
.btn-primary
6. Prompts pour images
6.1 Hero

Prompt :
“Illustration style aquarelle douce, 4 micro-entrepreneurs assis autour d’une grande table en bois en extérieur, village sur une colline en arrière-plan, lumière dorée, ambiance chaleureuse, nature vivante avec vent dans les feuilles, chats présents, carnets et laptops sur la table, style film d’animation, couleurs pastel, cadrage large 16:9”

6.2 Icône Rencontres

“Illustration simple aquarelle, deux bulles de discussion stylisées, couleurs pastel, trait dessiné à la main, fond clair, style doux et chaleureux”

6.3 Icône Ateliers

“Illustration aquarelle d’une ampoule et d’un crayon croisés, style dessiné à la main, couleurs douces, ambiance créative”

6.4 Icône Ressources

“Illustration aquarelle d’un ordinateur portable ouvert, style doux, couleurs pastel, design minimaliste”

7. Prompts pour Claude Code
Prompt A — HTML

Créer le fichier index.html avec :

structure HTML5 complète
header + hero + 3 cartes + footer
classes définies dans le plan
contenu texte exact fourni
Prompt B — CSS

Créer style.css :

appliquer palette couleurs
styliser header, hero, boutons, cartes
utiliser flexbox / grid
ajouter hover effects
Prompt C — Responsive

Modifier style.css :

media queries :
1024px
768px
passer de 3 colonnes à 1
adapter tailles de texte
Prompt D — Finitions UI
ajouter transitions CSS
améliorer espacements
ajouter ombres cohérentes
optimiser lisibilité