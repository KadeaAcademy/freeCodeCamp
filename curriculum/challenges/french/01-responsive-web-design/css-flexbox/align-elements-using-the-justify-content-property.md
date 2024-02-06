---
id: 587d78ac367417b2b2512af6
title: Aligner les éléments à l'aide de la propriété justify-content
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43gnHm'
forumTopicId: 301102
dashedName: align-elements-using-the-justify-content-property
---

# --description--

Parfois, les éléments flexibles d'un conteneur flex ne remplissent pas tout l'espace du conteneur. Il est courant de vouloir indiquer à CSS comment aligner et espacer les éléments flexibles d'une certaine manière. Heureusement, la propriété `justify-content` offre plusieurs options à cet effet. Mais avant de passer en revue ces options, il convient de comprendre une terminologie importante.

[Voici une image utile montrant une rangée pour illustrer les concepts ci-dessous.](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

Rappelez-vous que la définition d'un conteneur flex en tant que ligne place les éléments flex côte à côte, de gauche à droite. Un conteneur flexible défini en tant que colonne place les éléments flexibles dans une pile verticale, de haut en bas. Dans chaque cas, la direction dans laquelle les éléments flex sont disposés est appelée **main axis**. Pour une ligne, il s'agit d'une ligne horizontale qui traverse chaque élément. Et pour une colonne, l'axe principal est une ligne verticale qui traverse les éléments.

Il existe plusieurs options pour espacer les éléments flexibles le long de la ligne qui constitue l'axe principal. L'une des plus couramment utilisées est `Justify-content : center;`, qui aligne tous les éléments flex au centre du conteneur flex. D'autres options sont disponibles :

<ul><li><code>flex-start</code>: aligne les éléments sur le début du conteneur flexible. Pour une ligne, cela pousse les éléments vers la gauche du conteneur. Pour une colonne, les éléments sont placés en haut du conteneur. Il s'agit de l'alignement par défaut si aucune <code>justify-content</code> valeur est spécifié.</li><li><code>flex-end</code>: aligne les éléments à la fin du conteneur flexible. Pour une ligne, cela pousse les éléments vers la droite du conteneur. Pour une colonne, ceci pousse les éléments vers le bas du conteneur.</li><li><code>space-between</code>: aligne les éléments au centre de l'axe principal, avec un espace supplémentaire placé entre les éléments. Le premier et le dernier élément sont poussés jusqu'au bord du conteneur flexible. Par exemple, dans une rangée, le premier élément est contre le côté gauche du conteneur, le dernier élément est contre le côté droit du conteneur, puis l'espace restant est réparti uniformément entre les autres éléments.</li><li><code>space-around</code>: similaire à <code>space-between</code> mais les premier et dernier éléments ne sont pas verrouillés aux bords du conteneur, l'espace est distribué autour de tous les éléments avec un demi-espace à chaque extrémité du conteneur flexible.</li><li><code>space-evenly</code>: Répartit l'espace de manière égale entre les éléments flexibles, avec un espace complet à chaque extrémité du conteneur flexible.</li></ul>

# --instructions--

Un exemple permet de montrer cette propriété en action. Ajoutez la propriété CSS `justify-content` à l'élément `#box-container`, et donnez-lui la valeur `center`.

**Bonus**  
Essayez les autres options de la propriété `justify-content` dans l'éditeur de code pour voir leurs différences. Mais notez qu'une valeur de `center` est la seule qui passe ce défi.

# --hints--

L'élément `#box-container` doit avoir une propriété `justify-content` dont la valeur est `center`.

```js
assert($('#box-container').css('justify-content') == 'center');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
