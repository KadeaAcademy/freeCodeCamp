---
id: 5a9036ee38fddaf9a66b5d35
title: Créer un écart de colonne à l'aide de grid-column-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cVZ8vfD'
forumTopicId: 301124
dashedName: create-a-column-gap-using-grid-column-gap
---

# --description--

Jusqu'à présent, dans les grilles que vous avez créées, les colonnes étaient toutes serrées les unes contre les autres. Parfois, vous voulez un espace entre les colonnes. Pour ajouter un espace entre les colonnes, utilisez la propriété `grid-column-gap` comme ceci:

```css
grid-column-gap: 10px;
```

Cela crée 10px d'espace vide entre toutes nos colonnes.

# --instructions--

Donnez aux colonnes de la grille un espace de `20px`.

# --hints--

La classe `container` doit avoir une propriété `grid-column-gap` dont la valeur est `20px`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi
  )
);
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
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
<style>.container {grid-column-gap: 20px;}</style>
```
