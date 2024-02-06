---
id: 5a94fe1369fb03452672e45d
title: Placer des éléments dans des grilles à l'aide de la propriété grid-area
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

Après avoir créé un modèle de zone pour votre conteneur de grille, comme indiqué dans le défi précédent, vous pouvez placer un élément dans votre zone personnalisée en faisant référence au nom que vous lui avez donné. Pour ce faire, vous utilisez la propriété `grid-area` sur un élément comme ceci :

```css
.item1 {
  grid-area: header;
}
```

Cela permet à la grille de savoir que vous voulez que la classe `item1` aille dans la zone nommée `header`. Dans ce cas, l'élément utilisera la totalité de la ligne supérieure, car cette ligne entière est nommée zone d'en-tête.

# --instructions--

Placez un élément avec la classe `item5` dans la zone `footer` en utilisant la propriété `grid-area`.

# --hints--

La classe `item5` devrait avoir une propriété `grid-area` qui a la valeur de `footer`.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi)
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

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }

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

# --solutions--

```html
<style>.item5 {grid-area: footer;}</style>
```
