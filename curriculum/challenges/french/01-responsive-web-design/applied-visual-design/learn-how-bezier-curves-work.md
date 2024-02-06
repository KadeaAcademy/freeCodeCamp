---
id: 587d78a9367417b2b2512ae8
title: Apprendre comment fonctionnent les courbes de Bézier
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
dashedName: learn-how-bezier-curves-work
---

# --description--

Le dernier défi a introduit la propriété `animation-timing-function` et quelques mots-clés qui modifient la vitesse d'une animation sur sa durée. CSS offre une option autre que les mots-clés qui permet un contrôle encore plus fin de la façon dont l'animation se déroule, grâce à l'utilisation des courbes de Bézier.

Dans les animations CSS, les courbes de Bezier sont utilisées avec la fonction `cubic-bezier`. La forme de la courbe représente le déroulement de l'animation. La courbe vit sur un système de coordonnées 1 par 1. L'axe X de ce système de coordonnées est la durée de l'animation (pensez-y comme à une échelle de temps), et l'axe Y est le changement dans l'animation.

La fonction `cubic-bezier` consiste en quatre points principaux qui se trouvent sur cette grille 1 par 1 : `p0`, `p1`, `p2`, et `p3`. `p0` et `p3` sont définis pour vous - ce sont les points de début et de fin qui sont toujours situés respectivement à l'origine (0, 0) et (1, 1). Vous définissez les valeurs x et y des deux autres points, et l'endroit où vous les placez dans la grille détermine la forme de la courbe que l'animation doit suivre. Pour ce faire, en CSS, vous déclarez les valeurs x et y des points d'ancrage `p1` et `p2` sous la forme suivante : `(x1, y1, x2, y2)`. Pour résumer, voici un exemple de courbe de Bézier en code CSS :

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

Dans l'exemple ci-dessus, les valeurs x et y sont équivalentes pour chaque point (x1 = 0,25 = y1 et x2 = 0,75 = y2), ce qui, si vous vous souvenez du cours de géométrie, donne une ligne qui s'étend de l'origine au point (1, 1). Cette animation est un changement linéaire d'un élément pendant la durée d'une animation, et c'est la même chose que d'utiliser le mot-clé `linear`. En d'autres termes, elle change à une vitesse constante.

# --instructions--

Pour l'élément avec l'id de `ball1`, changez la valeur de la propriété `animation-timing-function` de `linear` à sa valeur équivalente de fonction `cubic-bezier`. Utilisez les valeurs de points données dans l'exemple ci-dessus.

# --hints--

La valeur de la propriété `animation-timing-function` pour l'élément ayant l'id `ball1` doit être la fonction `cubic-bezier` équivalente à une fonction linéaire.

```js
assert(
  $('#ball1').css('animation-timing-function') ==
    'cubic-bezier(0.25, 0.25, 0.75, 0.75)'
);
```

La valeur de la propriété `animation-timing-function` pour l'élément avec l'id `ball2` ne doit pas changer.

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $('#ball2').css('animation-timing-function')
);
assert(
  ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
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

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

# --solutions--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  #ball2 {
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
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```
