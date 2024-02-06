---
id: 5a94fe7769fb03452672e463
title: Utilisez les requêtes multimédia pour créer des mises en page réactives
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cMbqeHk"
forumTopicId: 301138
dashedName: use-media-queries-to-create-responsive-layouts
---

# --description--

La grille CSS peut être un moyen simple de rendre votre site plus réactif en utilisant des requêtes média pour réorganiser les zones de la grille, modifier les dimensions d'une grille et réorganiser le placement des éléments.

Dans l'aperçu, lorsque la largeur de la fenêtre d'affichage est de 300px ou plus, le nombre de colonnes passe de 1 à 2. La zone de publicité occupe alors entièrement la colonne de gauche.

# --instructions--

Lorsque la largeur de la fenêtre d'affichage est égale ou supérieure à `400px`, la zone d'en-tête doit occuper entièrement la ligne supérieure et la zone de pied de page, la ligne inférieure.

# --hints--

Lorsque la fenêtre d'affichage est de `400px` ou plus, la classe `container` doit avoir une propriété `grid-template-areas` dans laquelle les zones d'en-tête et de pied de page occupent respectivement les rangées du haut et du bas et la publicité et le contenu occupent les colonnes de gauche et de droite de la rangée du milieu.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /@media\s*?\(\s*?min-width\s*?:\s*?400px\s*?\)[\s\S]*.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px) {
    .container {
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px) {
    .container {
      grid-template-areas:
      /* Only change code below this line */
        "advert header"
        "advert content"
        "advert footer";
      /* Only change code above this line */
    }
  }
</style>

<div class="container">
  <div class="item1">en-tête</div>
  <div class="item2">annonce</div>
  <div class="item3">contenu</div>
  <div class="item4">pied de page</div>
</div>
```

# --solutions--

```html
<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px) {
    .container {
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px) {
    .container {
      grid-template-areas:
        "header header"
        "advert content"
        "footer footer";
    }
  }
</style>

<div class="container">
  <div class="item1">en-tête</div>
  <div class="item2">annonce</div>
  <div class="item3">contenu</div>
  <div class="item4">pied de page</div>
</div>
```
