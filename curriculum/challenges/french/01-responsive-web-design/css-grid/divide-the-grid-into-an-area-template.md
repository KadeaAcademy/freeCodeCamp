---
id: 5a94fe0569fb03452672e45c
title: Diviser la grille (Grid) en un modèle de zone
challengeType: 0
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

Vous pouvez regrouper les cellules de votre grille dans une <dfn>area</dfn> et donner à la zone un nom personnalisé. Faites-le en utilisant `grid-template-areas` sur le conteneur comme ceci :

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "advert footer footer";
```

Le code ci-dessus regroupe les cellules de la grille en quatre zones : `header`, `advert`, `content`, et `footer`. Chaque mot représente une cellule et chaque paire de guillemets représente une ligne.

# --instructions--

Modifiez le modèle pour que la zone `footer` s'étende sur toute la ligne inférieure. La définition des zones n'aura pas d'effet visuel pour l'instant. Plus tard, vous ferez en sorte qu'un élément utilise une zone pour voir comment cela fonctionne.

# --hints--

La classe `container` doit avoir une propriété `grid-template-areas` similaire à celle de l'exemple, mais avec la zone `footer` qui s'étend sur toute la ligne inférieure.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
    /* Only change code below this line */
      "header header header"
      "advert content content"
      "advert footer footer";
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;

    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```
