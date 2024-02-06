---
id: 587d78a8367417b2b2512ae7
title: Modifier le timing de l'animation avec des mots-clés
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKvwCM'
forumTopicId: 301045
dashedName: change-animation-timing-with-keywords
---

# --description--

Dans les animations CSS, la propriété `animation-timing-function` contrôle la vitesse à laquelle un élément animé change pendant la durée de l'animation. Si l'animation est une voiture se déplaçant d'un point A à un point B en un temps donné (votre `animation-duration`), le `animation-timing-function` indique comment la voiture accélère et décélère au cours du trajet.

Il existe un certain nombre de mots-clés prédéfinis pour les options les plus courantes. Par exemple, la valeur par défaut est `ease`, qui commence lentement, accélère au milieu, puis ralentit à nouveau à la fin. Parmi les autres options, citons `ease-out`, qui est rapide au début puis ralentit, `ease-in`, qui est lent au début puis accélère à la fin, ou `linear`, qui applique une vitesse d'animation constante tout au long de la séquence.

# --instructions--

Pour les éléments ayant pour id `ball1` et `ball2`, ajoutez une propriété `animation-timing-function` à chacun d'entre eux, et définissez `#ball1` sur `linear`, et `#ball2` sur `ease-out`. Remarquez la différence entre la façon dont les éléments se déplacent pendant l'animation mais se terminent ensemble, puisqu'ils partagent la même `animation-duration` de 2 secondes.

# --hints--

La valeur de la propriété `animation-timing-function` pour l'élément avec l'id `ball1` devrait être `linear`.

```js
const ball1Animation = __helpers.removeWhiteSpace(
  $('#ball1').css('animation-timing-function')
);
assert(ball1Animation == 'linear' || ball1Animation == 'cubic-bezier(0,0,1,1)');
```

La valeur de la propriété `animation-timing-function` pour l'élément avec l'id `ball2` devrait être `ease-out`.

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

  .balls {
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
    left:27%;

  }
  #ball2 {
    left:56%;

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
  .balls {
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
    left:27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left:56%;
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
