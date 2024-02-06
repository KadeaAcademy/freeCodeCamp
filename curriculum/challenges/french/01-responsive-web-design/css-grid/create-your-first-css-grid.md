---
id: 5a858944d96184f06fd60d61
title: Créez votre première grille (Grid) CSS
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cqwREC4'
forumTopicId: 301129
dashedName: create-your-first-css-grid
---

# --description--

Transformez n'importe quel élément HTML en conteneur de grille en donnant à sa propriété `display` la valeur `grid`. Cela vous donne la possibilité d'utiliser toutes les autres propriétés associées à CSS Grid.

**Note:** En CSS Grid, l'élément parent est appelé le <dfn>container</dfn> et ses enfants sont appelés <dfn>items</dfn>.

# --instructions--

Changez l'affichage du div avec la classe `container` en `grid`.

# --hints--

La classe `container` devrait avoir une propriété `display` avec une valeur de `grid`.

```js
assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {display: grid;}</style>
```
