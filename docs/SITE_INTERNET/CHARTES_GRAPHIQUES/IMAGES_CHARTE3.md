# Images à générer — Charte Graphique 3
> Style : aquarelle artisanale, dessin fait main, traits fins, couleurs pastel naturelles
> Palette : vert #6FAF8F · bleu ciel #A8C7D8 · doré #F2D6A2 · terre cuite #D98C5F · ivoire #F8F5F0

---

## 1. Illustration Hero (principale)

**Fichier** : `site/assets/images/charte3/hero-illustration.jpg`
**Taille** : 1920 × 900 px
**Format** : JPG, qualité 85–90 %

**Prompt DALL-E** :
```
Watercolor illustration, hand-drawn style, wide landscape banner format.
Four micro-entrepreneurs sitting around a rustic wooden table outdoors in a lush green meadow,
sharing cups of tea and coffee, one using a laptop, one writing in a notebook,
all in warm conversation and smiling.
Background: rolling green hills, a small French village with terracotta rooftops,
blue sky with soft clouds, birds in flight, papers gently floating in the breeze.
An orange tabby cat sleeping on the bench nearby.
Colors: soft greens #6FAF8F, sky blue #A8C7D8, warm golden #F2D6A2, terracotta accents.
Style: Studio Ghibli-inspired watercolor, organic brush strokes, pastel palette,
warm and cozy atmosphere, no text, no logo. Wide cinematic crop 16:9.
```

---

## 2. Icône — Rencontres

**Fichier** : `site/assets/images/charte3/icon-rencontres.png`
**Taille** : 160 × 160 px
**Format** : PNG fond transparent

**Prompt DALL-E** :
```
Hand-drawn watercolor icon on transparent background, two speech bubbles
overlapping with small hearts inside, organic imperfect strokes,
soft green #6FAF8F and sky blue #A8C7D8 colors, pastel aquarelle style,
cozy and warm feeling, no text, centered, square composition 1:1.
```

---

## 3. Icône — Ateliers

**Fichier** : `site/assets/images/charte3/icon-ateliers.png`
**Taille** : 160 × 160 px
**Format** : PNG fond transparent

**Prompt DALL-E** :
```
Hand-drawn watercolor icon on transparent background, a glowing light bulb
with a small pencil crossing it, soft organic brush strokes,
golden yellow #F2D6A2 and terracotta #D98C5F warm tones,
aquarelle pastel style, slightly imperfect hand-crafted look, no text,
centered, square composition 1:1.
```

---

## 4. Icône — Ressources numériques

**Fichier** : `site/assets/images/charte3/icon-ressources.png`
**Taille** : 160 × 160 px
**Format** : PNG fond transparent

**Prompt DALL-E** :
```
Hand-drawn watercolor icon on transparent background, an open laptop
with a small potted plant beside it and a folded paper/document,
organic hand-crafted brush strokes, green #6FAF8F and sky blue #A8C7D8 tones,
cozy artisanal feel, aquarelle pastel style, no text, no brand,
centered, square composition 1:1.
```

---

## 5. Icône — IA éthique

**Fichier** : `site/assets/images/charte3/icon-ia.png`
**Taille** : 160 × 160 px
**Format** : PNG fond transparent

**Prompt DALL-E** :
```
Hand-drawn watercolor icon on transparent background, a friendly robot
head with a small green leaf growing from its antenna,
gentle human eyes, organic imperfect strokes,
muted teal #6FAF8F and golden #F2D6A2 pastel palette,
warm and non-threatening, aquarelle artisanal style, no text,
centered, square composition 1:1.
```

---

## 6. Illustration section Mission (optionnelle)

**Fichier** : `site/assets/images/charte3/illustration-mission.jpg`
**Taille** : 600 × 480 px
**Format** : JPG, qualité 85 %

**Prompt DALL-E** :
```
Watercolor illustration, hand-drawn style, portrait orientation.
A single independent entrepreneur (gender-neutral) sitting at a café table
under a tree, working on a laptop with a cup of coffee,
looking peaceful and confident, surrounded by soft nature elements
(leaves, flowers, a cat nearby).
Colors: soft greens, warm ivories, sky blue accents, terracotta details.
Studio Ghibli inspired, pastel aquarelle, cozy atmosphere, no text, no logo.
```

---

## 7. Texture de fond (optionnelle)

**Fichier** : `site/assets/images/charte3/texture-papier.png`
**Taille** : 800 × 800 px (tuile répétable)
**Format** : PNG semi-transparent

**Prompt DALL-E** :
```
Seamless tileable watercolor paper texture, very subtle,
ivory and warm white tones #F8F5F0,
light grain and soft brush marks, minimal,
used as a web background overlay, transparent-ready, no color stains.
```

---

## Notes d'intégration

Une fois les images générées, les déposer dans : `site/assets/images/charte3/`

L'image hero s'active automatiquement en Charte 3 via CSS :
```css
[data-theme="charte3"] .hero {
  background: url('../assets/images/charte3/hero-illustration.jpg') center center / cover no-repeat, ...;
}
```

Les icônes remplacent les emojis dans les cards — à intégrer manuellement
si on ajoute un système d'images conditionnelles par charte.
