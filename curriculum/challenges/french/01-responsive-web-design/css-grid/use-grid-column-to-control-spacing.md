---
id: 5a90372638fddaf9a66b5d38
title: Utilisez la grid-column pour contrôler l'espacement
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cnzkDSr'
forumTopicId: 301136
dashedName: use-grid-column-to-control-spacing
---

# --description--

Jusqu'à ce point, toutes les propriétés qui ont été discutées concernent les conteneurs de grille. La propriété `grid-column` est la première à être utilisée sur les éléments de la grille eux-mêmes.

Les lignes horizontales et verticales hypothétiques qui créent la grille sont appelées <dfn>lignes</dfn>. Ces lignes sont numérotées en commençant par 1 dans le coin supérieur gauche de la grille et se déplacent vers la droite pour les colonnes et vers le bas pour les lignes, en comptant vers le haut.

Voici à quoi ressemblent les lignes d'une grille 3x3 :

<div style='position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;'><p style='left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;'>column lines</p><p style='left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>1</p><p style='left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>2</p><p style='left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>3</p><p style='left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>4</p><p style='left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;'>row lines</p><p style='left:-10%;top:-10%;font-size:130%;position:absolute;'>1</p><p style='left:-10%;top:21%;font-size:130%;position:absolute;'>2</p><p style='left:-10%;top:53%;font-size:130%;position:absolute;'>3</p><p style='left:-10%;top:85%;font-size:130%;position:absolute;'>4</p><div style='left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;'></div></div>

Pour contrôler le nombre de colonnes qu'un élément consommera, vous pouvez utiliser la propriété `grid-column` en conjonction avec les numéros de ligne auxquels vous voulez que l'élément commence et s'arrête.

Voici un exemple :

```css
grid-column: 1 / 3;
```

Ainsi, l'élément commencera à la première ligne verticale de la grille à gauche et s'étendra jusqu'à la troisième ligne de la grille, consommant ainsi deux colonnes.

# --instructions--

Faites en sorte que l'élément avec la classe `item5` consomme les deux dernières colonnes de la grille.

# --hints--

La classe `item5` devrait avoir une propriété `grid-column`.

```js
assert(
  __helpers
    .removeWhiteSpace($('style').text())
    .match(/\.item5{.*grid-column:.*}/g)
);
```

La classe `item5` doit avoir une propriété `grid-column` qui fait qu'elle consomme les deux dernières colonnes de la grille.

```js
const colStart = getComputedStyle($('.item5')[0]).gridColumnStart;
const colEnd = getComputedStyle($('.item5')[0]).gridColumnEnd;
const result = colStart.toString() + colEnd.toString();
const correctResults = [
  '24',
  '2-1',
  '2span 2',
  '2span2',
  'span 2-1',
  '-12',
  'span 2span 2',
  'span 2auto',
  'autospan 2'
];
assert(correctResults.includes(result));
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
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    grid-column: 2 / 4;
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
