---
id: 587d78a9367417b2b2512aea
title: Rendre les mouvements plus naturels en utilisant une courbe de Bézier
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
dashedName: make-motion-more-natural-using-a-bezier-curve
---

# --description--

Ce défi consiste à animer un élément pour reproduire le mouvement d'une balle que l'on jongle. Les défis précédents portaient sur les courbes de Bézier cubiques `linéaires` et `ease-out`, mais aucune d'entre elles ne reproduit fidèlement le mouvement de jonglage. Vous devez personnaliser une courbe de Bézier pour cela.

La fonction `animation-timing-function` boucle automatiquement à chaque image-clé lorsque le `animation-iteration-count` est réglé sur infini. Comme la règle de l'image-clé est fixée au milieu de la durée de l'animation (à `50%`), il en résulte deux progressions d'animation identiques lors du mouvement ascendant et descendant de la balle.

La courbe de Bézier cubique suivante simule un mouvement de jonglage :

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

Remarquez que la valeur de y2 est supérieure à 1. Bien que la courbe de Bézier cubique soit mappée sur un système de coordonnées 1 par 1 et qu'elle ne puisse accepter que des valeurs x comprises entre 0 et 1, la valeur y peut être définie sur des nombres supérieurs à 1. Il en résulte un mouvement de rebondissement qui est idéal pour simuler la balle de jonglage.

# --instructions--

Changez la valeur de `animation-timing-function` de l'élément avec l'identifiant `green` en une fonction `cubic-bezier` avec les valeurs x1, y1, x2, y2 définies respectivement à 0.311, 0.441, 0.444, 1.649.

# --hints--

La valeur de la propriété `animation-timing-function` pour l'élément avec l'id `green` doit être une fonction `cubic-bezier` avec les valeurs x1, y1, x2, y2 comme spécifié.

```js
assert(
  $('#green').css('animation-timing-function') ==
    'cubic-bezier(0.311, 0.441, 0.444, 1.649)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```
