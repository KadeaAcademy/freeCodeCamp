---
id: 5a9036ee38fddaf9a66b5d37
title: Ajouter des espaces plus rapidement avec grid-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap` est une propriété raccourcie pour `grid-row-gap` et `grid-column-gap` des deux défis précédents qui est plus pratique à utiliser. Si `grid-gap` a une seule valeur, il créera un espace entre toutes les lignes et les colonnes. En revanche, s'il a deux valeurs, il utilisera la première pour définir l'écart entre les lignes et la seconde pour les colonnes.

# --instructions--

Utilisez `grid-gap` pour introduire un espace de `10px` entre les lignes et de `20px` entre les colonnes.

# --hints--

La classe `container` devrait avoir une propriété `grid-gap` qui introduit un espace de `10px` entre les lignes et un espace de `20px` entre les colonnes.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi
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
<style>.container {grid-gap: 10px 20px;}</style>
```
