---
id: 5a94fe6269fb03452672e462
title: Créer des mises en page flexibles à l'aide d'auto-fit
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c3dPph8'
forumTopicId: 301127
dashedName: create-flexible-layouts-using-auto-fit
---

# --description--

`auto-fit` fonctionne de manière presque identique à `auto-fill`. La seule différence est que lorsque la taille du conteneur dépasse la taille de tous les éléments combinés, `auto-fill` continue d'insérer des lignes ou des colonnes vides et repousse vos éléments sur le côté, tandis que `auto-fit` réduit ces lignes ou colonnes vides et étire vos éléments pour les adapter à la taille du conteneur.

**Note :** si votre conteneur ne peut pas contenir tous vos éléments sur une ligne, il les déplacera vers une nouvelle ligne.

# --instructions--

Dans la deuxième grille, utilisez `auto-fit` avec `repeat` pour remplir la grille avec des colonnes qui ont une largeur minimale de `60px` et maximale de `1fr`. Redimensionnez ensuite l'aperçu pour voir la différence.

# --hints--

La classe `container2` devrait avoir une propriété `grid-template-columns` avec `repeat` et `auto-fit` qui remplira la grille avec des colonnes ayant une largeur minimale de `60px` et maximale de `1fr`.

```js
assert(
  code.match(
    /.container2\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
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
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));} .container2 {grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));}</style>
```
