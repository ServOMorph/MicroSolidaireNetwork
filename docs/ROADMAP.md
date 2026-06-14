# ROADMAP MicroSolidaireNetwork
# Statuts: 0=todo 1=doing 2=done 3=block | Prio: H/M/L

---
meta:
  stat: dev
  prog: 82
  phase: 5
  maj: 2026-06-14
  goal: "Site internet complet pour le projet Micro Solidaire Network"
  success: ["Site multi-pages livré", "Mini sites fonctionnels", "Sélecteur de chartes graphiques", "Page de choix de version"]
---

## PHASES

### P1:Fondations [2]
env_cfg[2] struct[2] charte_ui[2] roadmap[2] run_py[2]

### P2:Site principal multi-pages [2]
index[2] mission[2] ce-que-tu-y-trouves[2] communaute[2] blog[2]
adhesion[2] ressources[2] contact[2] mentions-legales[2]
confidentialite[2] cookies[2] styles_css[2] main_js[2]

### P3:Mini sites & variantes [2]
choix_html[2] mini_site[2] site2_aquarelle[2] site2_chatgpt[2] site3_comet[2]
logos_serenia_famicloud[2] mode_sombre[2]
→ 2026-06-14 : nettoyage repo (seul site2_0-chatgpt conservé), run.py→landing directe

### P4:Sélecteur de chartes graphiques [2]
charte1_dark[2] charte2_glassmorphism[2] charte3_aquarelle[2]
switcher_site_principal[2] switcher_mini_site[2]
images_charte3_doc[2]

### P5:Enrichissement maquette ChatGPT [1]
police_inter[2] hero_recadrage[2] sections_contenu[2]
textes_projet[2] header_sticky[2] icones_aquarelle[2]
favicon[0] og_image[0]

### P6:Polish & Deploy [0]
perf[0] seo[0] a11y_audit[0] formulaires_reels[0] deploy[0]

## SESSIONS
# Format: S[DATE]|O:[obj]|F:[fait]|B:[bloque>solution]|N:[next]
S[2026-03-22]|O:mini_sites+chartes|F:choix.html,mini-site.html,site2.html,site2-chatgpt,switcher_3_chartes,images_doc|B:none|N:generer_images_charte3
S[2026-03-23]|O:maquettes+ajustements|F:SITE3_COMET_ajout,fix_404_chatgpt,icones_x4,hero_div2|B:site2-chatgpt_renomme_site2_0-chatgpt>lien_corrige|N:generer_images_charte3
S[2026-06-14]|O:open_source+présentation|F:LICENSE,CONTRIBUTING,requirements,README_enrichi,repo_nettoyé,sections_contenu(qui-sommes-nous+rejoindre+contact),Inter_chargée,hero_recadré,edge_headless_screenshot|B:none|N:favicon+og_image+deploy
S[2026-06-14b]|O:textes_projet+icones|F:textes_adaptés(projet_vs_asso),header_sticky,tagline_header,bouton_hero_supprimé,icones_aquarelle_x7,PROMPTS_ICONES.md|B:none|N:favicon+og_image+deploy

## LOG
# Format: TYPE|ID|DATE|PRIO|DESC|ETAT
DEC|001|2026-03-22|H|Site statique HTML/CSS/JS servi par Python http.server|done
DEC|002|2026-03-22|H|Sélecteur de charte via data-theme sur <html> + localStorage|done
DEC|003|2026-03-22|M|Mini site = page unique, site complet = multi-pages|done
DEC|004|2026-03-22|M|5 versions sur choix.html: complet, mini, aquarelle, chatgpt, comet|done
DEP|google_fonts|runtime|L|Poppins+Lato+Caveat+Inter via CDN Google Fonts|actif

## DELTA
# Historique incremental (append-only) - Format: [DATE] ACTION CIBLE DETAIL
[2026-03-22] +add P1 init projet via @creation-appli
[2026-03-22] +add P2 site multi-pages complet (11 pages HTML)
[2026-03-22] +add P2 run.py serveur dev avec auto-reload FileWatcher
[2026-03-22] +add P2 mode sombre (styles.css + variables CSS)
[2026-03-22] +add P2 logos SéréniaTech + FamiCloud copiés dans assets/
[2026-03-22] +add P3 choix.html page de sélection de version (4 cartes)
[2026-03-22] +add P3 mini-site.html page unique dark mode
[2026-03-22] +add P3 site2.html mini site entier charte3 aquarelle
[2026-03-22] +add P3 site2-chatgpt/ maquette ChatGPT intégrée
[2026-03-22] +add P4 switcher charte graphique dans navbar (main.js inject)
[2026-03-22] +add P4 charte1: dark moderne #5BC0DE (existant)
[2026-03-22] +add P4 charte2: glassmorphism #0B1A3A→#5A3E8B + #2F6BFF
[2026-03-22] +add P4 charte3: aquarelle ivoire #F8F5F0 + vert #6FAF8F + Caveat
[2026-03-22] +add P4 switcher intégré mini-site.html (inline CSS+JS)
[2026-03-22] +add docs IMAGES_CHARTE3.md avec 7 prompts DALL-E
[2026-03-22] !fix SITE2_chatgpt hero.jpg→hero.png + assets/icons→assets/img
[2026-03-23] +add P3 SITE3_COMET intégré dans choix.html (carte ☀️)
[2026-03-23] !fix choix.html lien site2-chatgpt→site2_0-chatgpt (404 corrigé)
[2026-03-23] ~mod site2_0-chatgpt/style.css icônes 60px→240px (x4), hero 70vh→35vh (÷2)
[2026-06-14] +add open_source LICENSE MIT + CONTRIBUTING.md + requirements.txt
[2026-06-14] ~mod README.md badges + À propos + Contribuer (chemins perso retirés)
[2026-06-14] ~mod .gitignore untrack .claude/ (chemins machine privés)
[2026-06-14] -del site/ tous variants sauf site2_0-chatgpt (choix.html, mini-site, aquarelle, COMET, css/, js/)
[2026-06-14] ~mod run.py landing directe sur site2_0-chatgpt/index.htm
[2026-06-14] +add site2_0-chatgpt/index.htm section #qui-sommes-nous (mission + 4 valeurs)
[2026-06-14] +add site2_0-chatgpt/index.htm section #rejoindre (3 types membres)
[2026-06-14] +add site2_0-chatgpt/index.htm section #contact (formulaire)
[2026-06-14] +add site2_0-chatgpt/style.css Inter via Google Fonts CDN
[2026-06-14] ~mod site2_0-chatgpt/style.css hero: hauteur auto + padding 60px + cadrage center 40%
[2026-06-14] +add workflow Edge headless screenshot pour vérification autonome rendu
