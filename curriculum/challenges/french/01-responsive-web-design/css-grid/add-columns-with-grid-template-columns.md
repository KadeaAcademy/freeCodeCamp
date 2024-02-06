---
id: 5a9036d038fddaf9a66b5d32
title: Ajouter des colonnes avec grid-template-columns
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
forumTopicId: 301117
dashedName: add-columns-with-grid-template-columns
---

# --description--

La simple création d'un élément de grille ne vous mènera pas très loin. Vous devez également définir la structure de la grille. Pour ajouter des colonnes à la grille, utilisez la propriété `grid-template-columns` sur un conteneur de grille comme démontré ci-dessous :

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

Cela donnera à votre grille deux colonnes de 50px de large chacune. Le nombre de paramètres donnés à la propriété `grid-template-columns` indique le nombre de colonnes dans la grille, et la valeur de chaque paramètre indique la largeur de chaque colonne.

# --instructions--

Donnez au conteneur de la grille trois colonnes qui ont chacune une largeur de 100 pixels.

# --hints--

La classe `container` doit avoir une propriété `grid-template-columns` avec trois unités de `100px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.container')?.gridTemplateColumns === '100px 100px 100px');
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
    display: grid;
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
<style>.container {grid-template-columns: 100px 100px 100px;}</style>
```
