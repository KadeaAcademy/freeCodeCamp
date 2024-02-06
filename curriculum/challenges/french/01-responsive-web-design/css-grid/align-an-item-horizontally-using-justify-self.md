---
id: 5a90374338fddaf9a66b5d3a
title: Aligner un élément horizontalement à l'aide de justify-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
dashedName: align-an-item-horizontally-using-justify-self
---

# --description--

Dans la grille CSS, le contenu de chaque élément est situé dans une boîte que l'on appelle une <dfn>cell</dfn>. Vous pouvez aligner horizontalement la position du contenu dans sa cellule en utilisant la propriété `justify-self` sur un élément de grille. Par défaut, cette propriété a une valeur de `stretch`, ce qui fait que le contenu remplit toute la largeur de la cellule. Cette propriété CSS Grid accepte également d'autres valeurs :

`start` : aligne le contenu à gauche de la cellule,

`center` : aligne le contenu au centre de la cellule,

`end` : aligne le contenu à droite de la cellule.

# --instructions--

Utilisez la propriété `justify-self` pour centrer l'élément avec la classe `item2`.

# --hints--

La classe `item2` devrait avoir une propriété `justify-self` dont la valeur est `center`.

```js
assert(
  code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }

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
<style>.item2 {justify-self: center;}</style>
```
