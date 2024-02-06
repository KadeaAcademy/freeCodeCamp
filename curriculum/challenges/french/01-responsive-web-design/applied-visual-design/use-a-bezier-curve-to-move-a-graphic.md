---
id: 587d78a9367417b2b2512ae9
title: Utiliser une courbe de Bézier pour déplacer un graphique
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bnRCK'
forumTopicId: 301071
dashedName: use-a-bezier-curve-to-move-a-graphic
---

# --description--

Dans un défi précédent, nous avons discuté du mot-clé `ease-out` qui décrit un changement d'animation qui accélère d'abord et ralentit ensuite à la fin de l'animation. À droite, la différence entre le mot-clé `ease-out` (pour l'élément bleu) et le mot-clé `linear` (pour l'élément rouge) est démontrée. Des progressions d'animation similaires à celles du mot-clé `ease-out` peuvent être obtenues en utilisant une fonction de courbe de Bézier cubique personnalisée.

En général, la modification des points d'ancrage `p1` et `p2` entraîne la création de différentes courbes de Bezier, qui contrôlent la progression de l'animation dans le temps. Voici un exemple de courbe de Bezier utilisant des valeurs pour imiter le style de sortie en douceur :

```css
animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
```


Rappelez-vous que toutes les fonctions `cubic-bezier` commencent par `p0` à (0, 0) et se terminent par `p3` à (1, 1). Dans cet exemple, la courbe se déplace plus rapidement sur l'axe des Y (elle commence à 0, passe à la valeur y de 0 pour `p1`, puis à la valeur y de 1 pour `p2`) que sur l'axe des X (0 pour commencer, puis 0 pour `p1`, jusqu'à 0,58 pour `p2`). Par conséquent, le changement de l'élément animé progresse plus rapidement que le temps de l'animation pour ce segment. Vers la fin de la courbe, la relation entre le changement des valeurs x et y s'inverse - la valeur y passe de 1 à 1 (aucun changement), et les valeurs x passent de 0,58 à 1, ce qui fait que les changements de l'animation progressent plus lentement par rapport à la durée de l'animation.

# --instructions--

Pour voir l'effet de cette courbe de Bézier en action, changez la fonction `animation-timing-function` de l'élément avec l'id de `red` en une fonction `cubic-bezier` avec les valeurs x1, y1, x2, y2 fixées respectivement à 0, 0, 0.58, 1. Cela fera progresser les deux éléments dans l'animation de façon similaire.

# --hints--

La valeur de la propriété `animation-timing-function` de l'élément avec l'id `red` doit être une fonction `cubic-bezier` avec les valeurs x1, y1, x2, y2 fixées respectivement à 0, 0, 0.58, 1 .

```js
assert(
  $('#red').css('animation-timing-function') == 'cubic-bezier(0, 0, 0.58, 1)'
);
```

L'élément avec l'id `red` ne devrait plus avoir la propriété `animation-timing-function` de `linear`.

```js
assert($('#red').css('animation-timing-function') !== 'linear');
```

La valeur de la propriété `animation-timing-function` pour l'élément avec l'id `blue` ne doit pas changer.

```js
const blueBallAnimation = __helpers.removeWhiteSpace(
  $('#blue').css('animation-timing-function')
);
assert(
  blueBallAnimation == 'ease-out' ||
    blueBallAnimation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 56%;
    animation-timing-function: ease-out;
  }
  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```

# --solutions--

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  }
  #blue {
    background: blue;
    left: 56%;
    animation-timing-function: ease-out;
  }
  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```
