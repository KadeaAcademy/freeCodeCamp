---
id: 5a94fe4469fb03452672e460
title: Limiter la taille des éléments en utilisant la fonction minmax
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
dashedName: limit-item-size-using-the-minmax-function
---

# --description--

Il existe une autre fonction intégrée à utiliser avec `grid-template-columns` et `grid-template-rows` appelée `minmax`. Elle est utilisée pour limiter la taille des éléments lorsque le conteneur de la grille change de taille. Pour ce faire, vous devez spécifier la plage de taille acceptable pour votre élément. Voici un exemple :

```css
grid-template-columns: 100px minmax(50px, 200px);
```

Dans le code ci-dessus, `grid-template-columns` est défini pour créer deux colonnes ; la première a une largeur de 100px, et la seconde a une largeur minimale de 50px et maximale de 200px.

# --instructions--

En utilisant la fonction `minmax`, remplacez le `1fr` de la fonction `repeat` par une taille de colonne dont la largeur minimale est de `90px` et la largeur maximale de `1fr`, et redimensionnez le panneau de prévisualisation pour voir l'effet.

# --hints--

La classe `container` doit avoir une propriété `grid-template-columns` qui est définie pour répéter 3 colonnes avec une largeur minimale de `90px` et maximale de `1fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    /* Only change code below this line */

    grid-template-columns: repeat(3, 1fr);

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
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat(3, minmax(90px, 1fr));}</style>
```
