# Guide SEO & IA 2026
## Soyez visible sur Google ET sur ChatGPT

**Version** : 3.0
**Date** : Janvier 2026
**Auteur** : SéréniaTech
**Base sur** : Analyse du site serenia-tech.fr (PageSpeed 94, Schema 100% valide)

---

> Ce guide a ete construit en optimisant un vrai site, avec de vrais resultats.
> Chaque recommandation a ete testee et validee.

---

## Avant de commencer

### Pourquoi ce guide existe

En 2025, j'ai construit le site SereniaTech avec un objectif simple : etre visible sur Google ET dans les reponses de ChatGPT, Claude et Perplexity.

Le constat etait clair : les regles du jeu ont change. Aujourd'hui, vos prospects ne tapent plus seulement dans Google. Ils demandent a ChatGPT "Quel prestataire pour une formation IA en France ?", ils interrogent Perplexity, ils parlent a leur assistant vocal.

Apres 3 mois d'iterations, de tests et de mesures, j'ai compilé tout ce qui fonctionne dans ce guide. Pas de theorie abstraite : chaque recommandation a ete testee sur un vrai site, avec de vrais resultats.

**Resultats obtenus sur SereniaTech :**
- PageSpeed : 94/100 mobile
- Toutes les pages indexees en moins de 48h
- Schema.org valide a 100% sur Rich Results Test
- Site structure pour etre cite par les agents IA

---

### A qui s'adresse ce guide ?

#### Vous etes developpeur ou integrateur

Vous livrez des sites a vos clients mais vous perdez du temps sur le SEO. Les allers-retours sur les meta tags, la structure des titres, le Schema.org... ca vous parle.

**Ce que vous allez obtenir :**
- Des templates valides, prets a copier-coller
- Des checklists completes pour ne rien oublier
- Une methodologie claire pour chaque type de page

#### Vous etes entrepreneur et gerez votre site

Vous avez un site mais vous n'etes pas sur qu'il soit bien optimise. Vous avez lu des articles contradictoires, vous ne savez pas par ou commencer.

**Ce que vous allez obtenir :**
- Un audit autonome en suivant les checklists
- Des actions concretes, meme sans etre technique
- La confiance que votre site est correctement configure

#### Vous etes en marketing ou growth

Vous devez briefer des developpeurs mais vous ne parlez pas le meme langage. Vous voulez des specs claires et des KPIs mesurables.

**Ce que vous allez obtenir :**
- Des specs transmissibles directement aux devs
- Un vocabulaire commun pour communiquer
- Les metriques a suivre (PageSpeed, Rich Results, etc.)

---

### Ce que ce guide va changer pour vous

| # | Benefice | Comment |
|---|----------|---------|
| 1 | **Divisez par 2 le temps de mise en ligne SEO** | Templates et checklists prets a l'emploi |
| 2 | **Soyez visible sur Google ET sur ChatGPT** | Strategies specifiques pour les 2 ecosystemes |
| 3 | **Evitez les erreurs couteuses** | Les pieges classiques identifies et expliques |
| 4 | **Parlez le meme langage que vos devs/clients** | Vocabulaire clair, specs transmissibles |
| 5 | **Restez a jour jusqu'en 2026** | Conforme aux derniers standards (INP, E-E-A-T) |

---

### Votre premier Quick Win (5 minutes)

Avant de lire le guide complet, faites ceci maintenant :

**Etape 1** : Ouvrez votre page d'accueil dans votre editeur

**Etape 2** : Copiez ce bloc JSON-LD et adaptez les [CROCHETS] :

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[VOTRE ENTREPRISE]",
  "url": "[VOTRE URL]",
  "description": "[DESCRIPTION EN 1 PHRASE - max 160 car.]",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  }
}
```

**Etape 3** : Collez-le dans votre `<head>` juste avant `</head>` :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mon Entreprise",
  "url": "https://mon-site.fr",
  "description": "Description de mon activite en une phrase.",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  }
}
</script>
```

**Etape 4** : Testez sur [Rich Results Test](https://search.google.com/test/rich-results)

**Resultat** : Votre entreprise est maintenant identifiable par Google et les agents IA comme une entite structuree. Vous venez de faire votre premier pas vers l'optimisation IA-first.

---

## Sommaire

| Partie | Contenu | Vous saurez... |
|--------|---------|----------------|
| **1. Fondations** | Ecosystemes de recherche, E-E-A-T | Comment Google et les IA evaluent votre site |
| **2. SEO Classique** | Meta tags, structure HTML, titres | Configurer les bases sans erreur |
| **3. Optimisation IA** | Strategies par type d'IA, patterns | Etre cite par ChatGPT et Perplexity |
| **4. Donnees Structurees** | Schema.org JSON-LD + templates | Parler le langage des machines |
| **5. Fichiers Techniques** | robots.txt, sitemap, .htaccess | Configurer l'infrastructure |
| **6. Performance** | Core Web Vitals, images, CSS/JS | Atteindre PageSpeed > 90 |
| **7. Accessibilite & Securite** | WCAG, headers HTTP, RGPD | Eviter les penalites |
| **8. Mise en Pratique** | Roadmap 7-14 jours, checklists, fiches | Implementer sans rien oublier |

---

## 1. Fondations : Comprendre le Paysage 2026

### 1.1 Les Deux Ecosystemes de Recherche

Le paysage de la recherche web a fondamentalement change. Vous devez maintenant optimiser pour deux ecosystemes distincts :

**Ecosysteme 1 : Moteurs de recherche traditionnels**
- Google, Bing, Yahoo, DuckDuckGo, Qwant
- Fonctionnement : crawling → indexation → ranking algorithmique
- Votre objectif : apparaitre en premiere page des resultats

**Ecosysteme 2 : Systemes de recherche IA**
- **Agents IA generatifs** : ChatGPT (OpenAI), Claude (Anthropic), Perplexity, You.com
- **IA integrees aux SERP** : Google SGE, Bing Copilot
- **Assistants vocaux** : Google Assistant, Siri, Alexa
- Fonctionnement : comprehension semantique → extraction → synthese
- Votre objectif : etre cite comme source dans les reponses

### 1.2 Comment les Agents IA Consomment Votre Site

```
VOTRE SITE                    AGENT IA                      UTILISATEUR
    |                            |                              |
    |  1. Crawling/Indexation    |                              |
    |<---------------------------|                              |
    |                            |                              |
    |  2. Analyse du contenu     |     3. Question utilisateur  |
    |--------------------------->|<-----------------------------|
    |                            |                              |
    |                            |  4. Extraction des infos     |
    |                            |     pertinentes              |
    |                            |                              |
    |                            |  5. Synthese + Citation      |
    |                            |----------------------------->|
    |                            |     "Selon [votre site]..."  |
```

**Ce que les agents IA recherchent dans votre contenu :**
- Des **faits explicites** : prix, durees, zones, specifications
- Une **structure claire** : titres hierarchiques, listes, tableaux
- Des **reponses directes** aux questions naturelles (FAQ)
- Des **signaux de credibilite** : auteur identifie, sources, dates

### 1.3 Differences entre Types d'IA

| Aspect | IA Generatives (ChatGPT, Claude) | IA SERP (Google SGE, Bing Copilot) |
|--------|----------------------------------|-------------------------------------|
| **Source des donnees** | Crawling propre ou partenariats | Index du moteur de recherche |
| **Affichage** | Reponse synthetisee complete | Encart dans les resultats de recherche |
| **Citation** | Variable selon le modele | Lien vers source obligatoire |
| **Optimisation requise** | Contenu clair, structure, E-E-A-T | SEO classique + donnees structurees |

### 1.4 E-E-A-T : Le Signal de Confiance Non-Negociable

**E-E-A-T** (Experience, Expertise, Authoritativeness, Trustworthiness) est le critere principal pour les deux ecosystemes. Sans E-E-A-T, votre contenu sera ignore.

| Signal | Ce que ca signifie | Comment le prouver |
|--------|-------------------|-------------------|
| **Experience** | Vous avez vecu ce dont vous parlez | Etudes de cas, temoignages clients, portfolio |
| **Expertise** | Vous maitrisez le sujet | Certifications, diplomes, annees d'experience |
| **Autorite** | D'autres vous reconnaissent | Mentions presse, liens entrants, profils sociaux pro |
| **Fiabilite** | On peut vous faire confiance | HTTPS, mentions legales, politique confidentialite |

**Pages essentielles pour prouver votre E-E-A-T :**
- Page "A propos" detaillee avec votre parcours
- Page "Auteur" pour les blogs (avec photo, bio, liens)
- Temoignages verifiables avec noms et entreprises
- Liens vers LinkedIn et profils professionnels

> **Important 2026** : Les contenus bases sur une vraie experience humaine se distinguent clairement du contenu genere. Privilegiez les etudes de cas reelles, les chiffres verifiables et les temoignages authentiques.

---

## 2. SEO Classique : Les Fondamentaux

### 2.1 Meta Tags Essentiels

Chaque page doit contenir ces meta tags dans le `<head>` :

```html
<!-- Titre de la page (50-60 caracteres) -->
<title>Titre Principal - Marque | Mot-cle</title>

<!-- Description (150-160 caracteres) -->
<meta name="description" content="Description concise et attractive avec mots-cles principaux.">

<!-- URL Canonique (evite le contenu duplique) -->
<link rel="canonical" href="https://exemple.fr/page-exacte">
```

**Regles critiques :**
- Chaque page doit avoir un `<title>` **unique**
- Chaque page doit avoir une `<meta description>` **unique**
- L'URL canonique doit pointer vers **elle-meme** (pas une autre page)

> **Note sur `meta keywords`** : Cette balise n'est plus utilisee par Google depuis 2009. Ne perdez pas de temps avec.

### 2.2 Open Graph (Partage Reseaux Sociaux)

```html
<meta property="og:title" content="Titre pour partage social">
<meta property="og:description" content="Description pour le partage">
<meta property="og:type" content="website">
<meta property="og:url" content="https://exemple.fr/page">
<meta property="og:image" content="https://exemple.fr/image-og.png">
<meta property="og:locale" content="fr_FR">
```

### 2.3 Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Titre Twitter">
<meta name="twitter:description" content="Description Twitter">
```

### 2.4 Hierarchie des Titres

La structure des titres est cruciale pour le SEO et l'accessibilite :

```
H1 (unique par page) - Titre principal
+-- H2 - Section principale 1
|   +-- H3 - Sous-section
|   +-- H3 - Sous-section
+-- H2 - Section principale 2
|   +-- H3 - Sous-section
|   |   +-- H4 - Detail
|   +-- H3 - Sous-section
+-- H2 - Section principale 3
```

**Regles imperatives :**
- **Un seul H1 par page** (jamais deux)
- **Ne jamais sauter de niveau** (H1 → H3 interdit, faire H1 → H2 → H3)
- Utiliser les titres pour la **structure**, pas pour le style visuel

---

## 3. Optimisation pour les Recherches IA

### 3.1 Transformation Avant/Apres : Page Service

Voici comment transformer une page service classique en page IA-first :

| Element | AVANT (classique) | APRES (IA-first) |
|---------|-------------------|------------------|
| **Titre H1** | "Nos services" | "Formation IA pour entreprises - 900EUR a 4300EUR" |
| **Premier paragraphe** | "Decouvrez notre expertise reconnue depuis 10 ans dans l'accompagnement des entreprises..." | "Formations IA professionnelles de 900EUR a 4300EUR, duree 0.5 a 3 jours, France entiere, eligible OPCO." |
| **Structure** | Longs paragraphes de texte | Intro factuelle + liste de benefices + FAQ |
| **Prix** | "Sur devis" ou absent | Fourchette explicite visible |
| **FAQ** | Absente | 5+ questions naturelles avec Schema FAQPage |
| **Schema.org** | Absent ou basique | Service + Offer + FAQPage alignes au contenu |

**Resultat** : Page comprehensible en 5 secondes par un humain ET extractible par un agent IA.

### 3.2 Transformation Avant/Apres : Page Article

| Element | AVANT | APRES |
|---------|-------|-------|
| **Auteur** | Absent ou "Admin" | Nom reel + photo + lien LinkedIn + bio courte |
| **Date** | Absente ou cachee | Date publication visible + "Mis a jour le..." |
| **Intro** | Accroche vague "Dans cet article nous allons voir..." | Resume factuel en 2 phrases avec l'info cle |
| **Structure** | Titres H2 aleatoires | Hierarchie H1 > H2 > H3 stricte et logique |
| **Schema.org** | Absent | Article + author + datePublished + dateModified |

### 3.3 L'Intro Factuelle : Votre Arme Secrete

Pour aider les agents IA a extraire rapidement l'essentiel, commencez **chaque page importante** par un resume factuel de 2-3 phrases :

```html
<article>
    <h1>Formation IA pour Entreprises</h1>

    <p class="intro">
        <strong>Formations IA professionnelles de 900EUR a 4 300EUR</strong>,
        disponibles en intra-entreprise ou inter-entreprises.
        Duree : demi-journee a 3 jours. Zone : France entiere.
        Eligible financement OPCO.
    </p>

    <!-- Suite du contenu... -->
</article>
```

**Regles pour l'intro factuelle :**
- Placer en haut de page, **visible** (jamais dans un bloc cache)
- Inclure les infos cles : **prix, duree, zone, public cible**
- Eviter le marketing vague ("leader du marche", "solution innovante")
- Maximum 3 phrases

### 3.4 FAQ Optimisee pour la Recherche Vocale

Les assistants vocaux et agents IA privilegient les reponses directes aux questions naturelles.

```html
<section aria-labelledby="faq-title">
    <h2 id="faq-title">Questions frequentes</h2>

    <dl>
        <dt>Combien coute une formation IA ?</dt>
        <dd>Nos formations IA coutent entre 900EUR et 4300EUR selon la duree
            (demi-journee a 3 jours) et le format (intra ou inter-entreprise).</dd>

        <dt>En combien de temps voit-on des resultats ?</dt>
        <dd>Les premiers resultats sont visibles en 2 a 4 semaines pour
            l'accompagnement. Le ROI des automatisations est generalement
            atteint en 3 a 6 mois.</dd>

        <dt>Intervenez-vous partout en France ?</dt>
        <dd>Oui, nous intervenons dans toute la France, en presentiel
            ou a distance selon vos besoins.</dd>
    </dl>
</section>
```

**Types de questions a couvrir systematiquement :**
- Prix / cout ("Combien coute...")
- Duree ("En combien de temps...")
- Eligibilite ("Qui peut...")
- Localisation ("Ou intervenez-vous...")
- Processus ("Comment fonctionne...")

### 3.5 Regle d'Or : Coherence Schema <-> Contenu Visible

**Chaque element declare en Schema.org JSON-LD DOIT correspondre a un contenu visible sur la page.**

```html
<!-- CORRECT : Le prix est visible sur la page -->
<p>Tarif : 900EUR a 4300EUR</p>

<script type="application/ld+json">
{
    "@type": "Service",
    "name": "Formation IA",
    "offers": {
        "priceRange": "900-4300",
        "priceCurrency": "EUR"
    }
}
</script>

<!-- INCORRECT : Prix declare mais non visible -->
<!-- Google ignorera ce Schema -->
```

---

## 4. Donnees Structurees Schema.org

> **Documentation officielle** : [schema.org](https://schema.org/)
> **Outil de test** : [Rich Results Test](https://search.google.com/test/rich-results)

### [TEMPLATE] Schema.org Organization

Copiez ce template et remplacez les `[CROCHETS]` :

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[NOM_ENTREPRISE]",
  "alternateName": "[NOM_ALTERNATIF - ou supprimer cette ligne]",
  "url": "[URL_SITE - ex: https://mon-site.fr]",
  "logo": "[URL_LOGO - ex: https://mon-site.fr/logo.png]",
  "description": "[DESCRIPTION_1_PHRASE - max 160 car.]",
  "foundingDate": "[ANNEE - ex: 2025]",
  "areaServed": {
    "@type": "Country",
    "name": "[PAYS - ex: France]"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Service client",
    "availableLanguage": "[LANGUE - ex: French]"
  },
  "sameAs": [
    "[URL_LINKEDIN - ex: https://www.linkedin.com/company/nom]",
    "[URL_TWITTER - ou supprimer cette ligne]"
  ]
}
```

**Checklist avant publication :**
- [ ] Nom correspond exactement au nom affiche sur le site
- [ ] URL du logo accessible publiquement (testez dans un navigateur)
- [ ] Description < 160 caracteres
- [ ] Tous les liens sameAs fonctionnels

### [TEMPLATE] Schema.org Service

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[NOM_SERVICE - ex: Formation IA]",
  "description": "[DESCRIPTION_VISIBLE_SUR_PAGE]",
  "provider": {
    "@type": "Organization",
    "name": "[NOM_ENTREPRISE]"
  },
  "areaServed": {
    "@type": "Country",
    "name": "[PAYS]"
  },
  "serviceType": "[TYPE - ex: Formation professionnelle]",
  "offers": {
    "@type": "Offer",
    "priceRange": "[PRIX_MIN]-[PRIX_MAX] - ex: 900-4300",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
}
```

**Regle critique** : Le prix dans `priceRange` DOIT correspondre exactement au prix affiche sur la page. Sinon Google ignore le Schema.

### [TEMPLATE] Schema.org FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[QUESTION_1 - ex: Combien coute une formation ?]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[REPONSE_1 - exactement comme sur la page]"
      }
    },
    {
      "@type": "Question",
      "name": "[QUESTION_2]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[REPONSE_2]"
      }
    }
  ]
}
```

**Important** : Chaque question/reponse du Schema DOIT etre visible sur la page dans une section FAQ.

### Autres Types Utiles

| Type | Quand l'utiliser |
|------|-----------------|
| `LocalBusiness` | Entreprise avec adresse physique |
| `Product` | Pages produit e-commerce |
| `Article` | Articles de blog |
| `BreadcrumbList` | Fil d'Ariane |
| `Person` | Pages de profil / auteur |

---

## 5. Fichiers Techniques Essentiels

### 5.1 robots.txt

```txt
# robots.txt pour [Nom Site]
# Site web : https://domaine.fr
# Derniere mise a jour : [Date]

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /.git/
Disallow: /.env

Sitemap: https://domaine.fr/sitemap.xml

# Moteurs de recherche principaux
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Agents IA (autorises par defaut)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Pour BLOQUER les agents IA (decommenter si souhaite)
# User-agent: GPTBot
# Disallow: /
```

### 5.2 sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://domaine.fr/</loc>
        <lastmod>2026-01-13</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://domaine.fr/services</loc>
        <lastmod>2026-01-13</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
</urlset>
```

**Priorites recommandees :**
| Priorite | Type de page |
|----------|--------------|
| 1.0 | Page d'accueil |
| 0.9 | Pages de conversion (services, contact) |
| 0.8 | Pages importantes (portfolio, temoignages) |
| 0.7 | Pages secondaires (about, blog) |
| 0.3 | Pages legales |

### [TEMPLATE] .htaccess Complet (Apache)

```apache
# ============================================
# .htaccess pour [NOM_SITE]
# Genere avec le Guide SEO & IA SéréniaTech
# ============================================

# --- REDIRECTION HTTPS ---
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# --- REDIRECTION WWW (choisir UNE option) ---
# Option A : Supprimer www (recommande)
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [L,R=301]

# Option B : Forcer www (decommenter si besoin)
# RewriteCond %{HTTP_HOST} !^www\. [NC]
# RewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [L,R=301]

# --- PAGES D'ERREUR ---
ErrorDocument 404 /404.html
ErrorDocument 403 /403.html
ErrorDocument 500 /500.html

# --- HEADERS SECURITE ---
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# --- CACHE (1 an pour assets statiques) ---
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/html "access plus 1 hour"
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# --- COMPRESSION GZIP ---
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json
</IfModule>

# --- SECURITE FICHIERS ---
<FilesMatch "\.(env|log|sql|bak|config|yml|yaml)$">
    Order allow,deny
    Deny from all
</FilesMatch>

# --- BLOQUER ACCES DOSSIERS ---
Options -Indexes
AddDefaultCharset UTF-8
```

**Checklist apres installation :**
- [ ] Tester https://votresite.fr (doit charger en HTTPS)
- [ ] Tester https://www.votresite.fr (doit rediriger vers sans www ou inverse)
- [ ] Tester une URL inexistante (doit afficher votre 404.html)
- [ ] Verifier sur securityheaders.com (objectif : grade A minimum)

---

## 6. Performance et Core Web Vitals

### 6.1 Metriques 2026

> **Note** : FID (First Input Delay) est remplace par INP (Interaction to Next Paint) depuis mars 2024.

| Metrique | Seuil acceptable | Objectif ambitieux | Description |
|----------|------------------|-------------------|-------------|
| **LCP** | < 2.5s | < 2.0s | Largest Contentful Paint - affichage du plus grand element |
| **INP** | < 200ms | < 150ms | Interaction to Next Paint - reactivite aux interactions |
| **CLS** | < 0.1 | < 0.05 | Cumulative Layout Shift - stabilite visuelle |

> Les seuils "ambitieux" deviendront probablement les nouveaux standards en 2026. Visez-les des maintenant.

### 6.2 Optimisation des Images

```html
<!-- Format moderne avec fallback -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.png"
         alt="Description de l'image"
         width="800"
         height="600"
         loading="lazy">
</picture>
```

**Checklist images :**
- [ ] Format WebP (qualite 80-85%)
- [ ] Toujours specifier `width` et `height` (evite le CLS)
- [ ] `loading="lazy"` sur toutes les images non-critiques
- [ ] Poids < 100Ko par image si possible

### 6.3 CSS et JavaScript

```html
<head>
    <!-- CSS critique inline (above-the-fold uniquement) -->
    <style>
        :root { --color-primary: #a5c9ca; }
        body { font-family: system-ui, sans-serif; margin: 0; }
    </style>

    <!-- Preload puis chargement CSS principal -->
    <link rel="preload" href="/css/main.min.css" as="style">
    <link rel="stylesheet" href="/css/main.min.css">
</head>
<body>
    <!-- Contenu de la page -->

    <!-- JS en fin de body avec defer -->
    <script src="/js/main.min.js" defer></script>
</body>
```

**Minification (commandes) :**
```bash
# CSS
npx clean-css-cli src/css/main.css -o src/css/main.min.css

# JavaScript
npx terser src/js/main.js -o src/js/main.min.js -c -m
```

### 6.4 Polices

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
      rel="stylesheet">
```

**Regles :**
- Maximum 2 familles de polices
- Maximum 3-4 poids par famille
- Toujours utiliser `display=swap`

---

## 7. Accessibilite, Securite et RGPD

### 7.1 Accessibilite - Les Essentiels

**Skip Link (obligatoire) :**
```html
<body>
    <a href="#main-content" class="skip-link">Aller au contenu principal</a>
    <nav>...</nav>
    <main id="main-content">...</main>
</body>
```

```css
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px 16px;
    z-index: 100;
}
.skip-link:focus { top: 0; }
```

**Contrastes de couleurs (WCAG 2.1 AA) :**
- Texte normal : ratio minimum 4.5:1
- Gros texte (18px+ ou 14px bold) : ratio minimum 3:1

### 7.2 Headers de Securite

| Header | Valeur | Fonction |
|--------|--------|----------|
| `X-Content-Type-Options` | `nosniff` | Empeche MIME-sniffing |
| `X-Frame-Options` | `SAMEORIGIN` | Protection clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Controle referrer |
| `Permissions-Policy` | `geolocation=(), microphone=(), camera=()` | Desactive APIs sensibles |

### 7.3 RGPD - Elements Obligatoires

- [ ] Bandeau de consentement cookies (AVANT tout tracking)
- [ ] Page "Politique de confidentialite"
- [ ] Page "Mentions legales"
- [ ] Possibilite de retirer son consentement

---

## 8. Mise en Pratique

### 8.1 Choisissez Votre Rythme

**Temps total estime : ~15 heures de travail**

Choisissez le format qui correspond a votre disponibilite :

| Format | Rythme | Pour qui |
|--------|--------|----------|
| **Sprint 7 jours** | 2-3h/jour | Developpeurs, week-end intensif |
| **Roadmap 14 jours** | 1h/jour | Entrepreneurs, rythme regulier |

---

### 8.2 Sprint 7 Jours (2-3h/jour)

Pour ceux qui veulent des resultats rapides.

#### Jour 1 : Setup (2h)
- [ ] Installer Google Search Console (15 min)
- [ ] Creer/verifier robots.txt (20 min)
- [ ] Creer/verifier sitemap.xml et soumettre (30 min)
- [ ] Auditer tous les `<title>` - les rendre uniques (45 min)
- [ ] Auditer toutes les meta descriptions (30 min)

#### Jour 2 : Structure HTML (2h)
- [ ] Corriger les H1 (1 seul par page)
- [ ] Verifier hierarchie H1 > H2 > H3
- [ ] Ajouter attributs alt sur images
- [ ] Configurer Open Graph et Twitter Cards

#### Jour 3 : Schema.org (2h30)
- [ ] Ajouter Schema Organization (accueil)
- [ ] Ajouter Schema Service (pages services)
- [ ] Creer section FAQ visible (min 5 questions)
- [ ] Ajouter Schema FAQPage
- [ ] Tester sur Rich Results Test

#### Jour 4 : Optimisation IA (2h)
- [ ] Ajouter intro factuelle sur accueil (prix, zone, duree)
- [ ] Ajouter intro factuelle sur pages services
- [ ] Reformuler FAQ en questions naturelles
- [ ] Verifier coherence Schema <-> contenu visible

#### Jour 5 : E-E-A-T & Contenu (1h30)
- [ ] Completer page A propos (parcours, expertise)
- [ ] Ajouter auteur identifie (nom, photo, liens pro)
- [ ] Ajouter dates de mise a jour sur pages cles
- [ ] Verifier temoignages et preuves sociales

#### Jour 6 : Performance (2-3h)
- [ ] Convertir images en WebP (qualite 80-85%)
- [ ] Ajouter width/height sur toutes les images
- [ ] Ajouter loading="lazy" sur images non-critiques
- [ ] Minifier CSS et JS
- [ ] Tester PageSpeed Insights (objectif > 90)

#### Jour 7 : Securite & Tests (2h)
- [ ] Verifier HTTPS et redirections
- [ ] Configurer headers securite (.htaccess)
- [ ] Tester sur securityheaders.com (objectif grade A)
- [ ] Test accessibilite WAVE (0 erreur critique)
- [ ] Test final complet avec toutes les checklists

---

### 8.3 Roadmap 14 Jours (1h/jour)

Pour ceux qui preferent un rythme regulier.

#### Semaine 1 : Fondations

| Jour | Focus | Actions |
|------|-------|---------|
| J1 | Setup | Search Console + robots.txt |
| J2 | Sitemap | Creer/verifier + soumettre |
| J3 | Titles | Auditer et corriger tous les `<title>` |
| J4 | Descriptions | Auditer toutes les meta descriptions |
| J5 | Structure | Corriger H1 + hierarchie titres |
| J6 | Schema | Organization + Service |
| J7 | FAQ | Creer FAQ visible + Schema FAQPage |

**Checkpoint Semaine 1 :**
- [ ] Search Console actif, sitemap soumis
- [ ] Titles et descriptions uniques
- [ ] Schema valide sur Rich Results Test

#### Semaine 2 : Optimisation & Performance

| Jour | Focus | Actions |
|------|-------|---------|
| J8 | IA-First | Intros factuelles sur pages cles |
| J9 | FAQ | Reformuler en questions naturelles |
| J10 | E-E-A-T | Page A propos + auteur identifie |
| J11 | Images | Convertir WebP + dimensions |
| J12 | Performance | Minifier CSS/JS + lazy loading |
| J13 | Securite | Headers + HTTPS + tests |
| J14 | Final | Tests complets + corrections |

**Checkpoint Final :**
- [ ] PageSpeed > 90 mobile
- [ ] Rich Results Test sans erreur
- [ ] Security Headers grade A
- [ ] WAVE sans erreur critique

---

### 8.4 Checklists Completes

#### Checklist SEO Classique

- [ ] `<title>` unique et descriptif (50-60 car.)
- [ ] `<meta name="description">` unique (150-160 car.)
- [ ] URL canonique sur chaque page
- [ ] Hierarchie H1 > H2 > H3 respectee
- [ ] Un seul H1 par page
- [ ] Attribut `alt` sur toutes les images informatives
- [ ] Open Graph configure
- [ ] Twitter Cards configurees
- [ ] robots.txt present et correct
- [ ] sitemap.xml a jour et soumis
- [ ] Site inscrit sur Google Search Console
- [ ] Site inscrit sur Bing Webmaster Tools

#### Checklist Optimisation IA

- [ ] Contenu factuel explicite (prix, zones, durees) en haut de page
- [ ] Structure FAQ avec questions naturelles
- [ ] Schema.org Organization complet et valide
- [ ] Schema.org FAQPage aligne au contenu visible
- [ ] Schema.org Service/Product avec prix corrects
- [ ] Page "A propos" avec E-E-A-T complet
- [ ] Auteur identifie (nom, photo, bio, liens)
- [ ] Dates de mise a jour visibles
- [ ] robots.txt autorise les agents IA

#### Checklist Performance

- [ ] LCP < 2.5 secondes
- [ ] INP < 200 millisecondes
- [ ] CLS < 0.1
- [ ] CSS critique inline
- [ ] CSS/JS minifies
- [ ] Images en WebP avec width/height
- [ ] `loading="lazy"` sur images non-critiques
- [ ] Compression GZIP activee
- [ ] Score PageSpeed > 90

#### Checklist Accessibilite

- [ ] Skip link present et fonctionnel
- [ ] Navigation au clavier possible
- [ ] Contrastes >= 4.5:1 (texte normal)
- [ ] Labels sur tous les champs de formulaire
- [ ] Focus visible sur elements interactifs
- [ ] `lang="fr"` sur `<html>`
- [ ] Texte alternatif sur images informatives

#### Checklist Securite

- [ ] HTTPS actif
- [ ] Redirection HTTP -> HTTPS
- [ ] Headers de securite configures
- [ ] Fichiers sensibles bloques (.env, .git)
- [ ] Indexation repertoires desactivee

---

### 8.5 Fiches Recapitulatives

#### Fiche : Page d'Accueil

```
PAGE D'ACCUEIL - CHECKLIST RAPIDE

META (dans <head>)
[ ] <title> unique (50-60 car.) : _______________
[ ] <meta description> (150-160 car.) : _______________
[ ] <link rel="canonical"> vers elle-meme
[ ] Open Graph complet

CONTENU
[ ] Un seul H1 : _______________
[ ] Intro factuelle en haut (prix/zone/service)
[ ] Hierarchie H1 > H2 > H3 respectee

SCHEMA.ORG
[ ] Organization (JSON-LD)
[ ] FAQPage si FAQ presente

VERIFICATION
[ ] Rich Results Test : OK
[ ] PageSpeed > 90 : Score = ___
```

#### Fiche : Page Service

```
PAGE SERVICE - CHECKLIST RAPIDE

META
[ ] <title> avec nom service + prix : _______________
[ ] <meta description> avec benefice cle : _______________
[ ] URL canonique

CONTENU OBLIGATOIRE
[ ] H1 = nom du service
[ ] Intro factuelle : prix + duree + zone + cible
[ ] Liste des benefices
[ ] FAQ (min 5 questions naturelles)
[ ] CTA clair et visible

SCHEMA.ORG
[ ] Service avec name, description, offers
[ ] priceRange coherent avec prix affiche
[ ] FAQPage alignee au contenu visible

TEST FINAL
[ ] Un visiteur comprend l'offre en 5 secondes : OUI/NON
[ ] Rich Results Test valide : OUI/NON
```

---

### 8.6 Templates FAQ par Secteur

#### Pour un service de formation

1. Combien coute une formation [SUJET] ?
2. Quelle est la duree d'une formation ?
3. La formation est-elle eligible au financement OPCO ?
4. Proposez-vous des formations a distance ?
5. Quel est le nombre maximum de participants ?
6. Delivrez-vous une certification ?
7. Comment se deroule une formation type ?
8. Peut-on personnaliser le programme ?
9. Quels sont les prerequis ?
10. Comment s'inscrire ?

#### Pour un service de conseil/accompagnement

1. Combien coute un accompagnement ?
2. Comment se deroule le premier rendez-vous ?
3. Quelle est la duree d'un accompagnement type ?
4. Travaillez-vous a distance ?
5. Quels resultats puis-je attendre ?
6. En combien de temps voit-on des resultats ?
7. Proposez-vous une garantie ?
8. Comment prendre rendez-vous ?
9. A qui s'adresse cet accompagnement ?
10. Quelle est votre methode ?

#### Pour un SaaS / produit digital

1. Combien coute [PRODUIT] ?
2. Y a-t-il un essai gratuit ?
3. Comment fonctionne la facturation ?
4. Puis-je annuler a tout moment ?
5. Mes donnees sont-elles securisees ?
6. Y a-t-il une application mobile ?
7. Comment contacter le support ?
8. Proposez-vous des reductions pour les equipes ?
9. Quelles integrations sont disponibles ?
10. Comment migrer depuis [CONCURRENT] ?

---

## [TEMPLATE] Bloc d'Introduction Factuelle

Copiez ce bloc et remplacez les `[CROCHETS]` :

```html
<article>
    <h1>[TITRE DU SERVICE/PRODUIT]</h1>

    <p class="intro">
        <strong>[SERVICE] de [PRIX_MIN]EUR a [PRIX_MAX]EUR</strong>,
        disponible en [FORMAT_1] ou [FORMAT_2].
        Duree : [DUREE_MIN] a [DUREE_MAX].
        Zone : [ZONE_GEOGRAPHIQUE].
        [AVANTAGE_CLE - ex: Eligible financement OPCO].
    </p>

    <!-- Suite du contenu... -->
</article>
```

**Exemple rempli :**
```html
<article>
    <h1>Formation IA pour Entreprises</h1>

    <p class="intro">
        <strong>Formations IA professionnelles de 900EUR a 4300EUR</strong>,
        disponibles en intra-entreprise ou inter-entreprises.
        Duree : demi-journee a 3 jours.
        Zone : France entiere.
        Eligible financement OPCO.
    </p>
</article>
```

---

## Ressources et Outils

### Outils de Validation

| Categorie | Outil | URL |
|-----------|-------|-----|
| SEO | Google Search Console | search.google.com/search-console |
| SEO | Bing Webmaster Tools | bing.com/webmasters |
| Schema | Rich Results Test | search.google.com/test/rich-results |
| Schema | Schema Markup Validator | validator.schema.org |
| Performance | PageSpeed Insights | pagespeed.web.dev |
| Performance | GTmetrix | gtmetrix.com |
| Accessibilite | WAVE | wave.webaim.org |
| Accessibilite | axe DevTools | deque.com/axe |
| Securite | SecurityHeaders | securityheaders.com |

### Documentation Officielle

- [Schema.org](https://schema.org/) - Vocabulaire de donnees structurees
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Core Web Vitals](https://web.dev/vitals/)

---

## Conclusion

Un site web moderne doit etre concu pour deux audiences :

1. **Les humains** : UX, accessibilite, performance, confiance
2. **Les machines** : structure semantique, donnees structurees, contenu explicite

**Les 6 principes a retenir :**

| # | Principe | Implementation |
|---|----------|----------------|
| 1 | **Structure semantique HTML5** | `nav`, `main`, `article`, `section` |
| 2 | **Donnees structurees coherentes** | Schema.org = contenu visible |
| 3 | **Contenu factuel en premier** | Intro avec prix, zones, durees |
| 4 | **E-E-A-T visible** | Page A propos, auteur, temoignages |
| 5 | **Performance ambitieuse** | LCP < 2.0s, INP < 150ms, CLS < 0.05 |
| 6 | **Accessibilite native** | Standards HTML5, pas de sur-ingenierie |

> **L'approche "IA-First"** garantit une optimisation pour tous les systemes de recherche (classiques et IA) tout en respectant les standards du web et en privilegiant l'experience utilisateur.

---

## Changelog

### v3.0 (Janvier 2026)
- **Nouveau** : Section "Avant de commencer" avec personas et promesses business
- **Nouveau** : Quick Win 5 minutes pour demarrer immediatement
- **Nouveau** : Tableaux Avant/Apres pour pages service et article
- **Nouveau** : 4 templates remplissables (Organization, Service, FAQPage, .htaccess)
- **Nouveau** : Roadmap 7-14 jours avec checkpoints
- **Nouveau** : Fiches recapitulatives par type de page
- **Nouveau** : Templates FAQ par secteur (formation, conseil, SaaS)
- **Ameliore** : Table des matieres orientee benefices
- **Ameliore** : Structure en 8 parties au lieu de 13 chapitres

### v2.1 (Decembre 2025)
- Version initiale complete
- 13 chapitres techniques
- Checklists operationnelles
- Exemples de code

---

*Guide SEO & IA v3.0 - Janvier 2026*
*Cree par SéréniaTech - serenia-tech.fr*
*Base sur un vrai projet avec de vrais resultats*
