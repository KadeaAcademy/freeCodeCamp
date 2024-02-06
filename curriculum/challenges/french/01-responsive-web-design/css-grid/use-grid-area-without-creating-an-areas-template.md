---
id: 5a94fe2669fb03452672e45e
title: Utiliser grid-area sans créer de modèle de zones
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

La propriété `grid-area` que vous avez apprise dans le dernier défi peut être utilisée d'une autre manière. Si votre grille n'a pas de modèle de zone à référencer, vous pouvez créer une zone à la volée pour qu'un élément soit placé comme ceci :

```css
item1 { grid-area: 1/1/2/4; }
```

Vous utilisez les numéros de ligne que vous avez appris précédemment pour définir l'emplacement de la zone pour cet élément. Les chiffres de l'exemple ci-dessus représentent ces valeurs :

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

Ainsi, l'élément de l'exemple consommera les lignes entre les lignes 1 et 2, et les colonnes entre les lignes 1 et 4.

# --instructions--

En utilisant la propriété `grid-area`, placez l'élément avec la classe `item5` entre les troisième et quatrième lignes horizontales et entre les première et quatrième lignes verticales.

# --hints--

La classe `item5` devrait avoir une propriété `grid-area` pour qu'elle remplisse toute la zone entre les troisième et quatrième lignes horizontales, et les première et quatrième lignes verticales.

```js
assert(
  code.match(
    /.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi
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
<style>.item5 {grid-area: 3/1/4/4;}</style>
```
