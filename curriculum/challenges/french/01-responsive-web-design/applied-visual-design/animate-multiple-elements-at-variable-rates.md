---
id: 587d78a8367417b2b2512ae6
title: Animer plusieurs éléments à des taux variables
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
dashedName: animate-multiple-elements-at-variable-rates
---

# --description--

Dans le défi précédent, vous avez changé les taux d'animation de deux éléments animés de façon similaire en modifiant leurs règles `@keyframes`. Vous pouvez atteindre le même objectif en manipulant la `durée d'animation` de plusieurs éléments.

Dans l'animation exécutée dans l'éditeur de code, il y a trois étoiles dans le ciel qui scintillent à la même vitesse dans une boucle continue. Pour qu'elles scintillent à des rythmes différents, vous pouvez définir la propriété `animation-duration` à des valeurs différentes pour chaque élément.

# --instructions--

Définissez le `animation-duration` des éléments avec les classes `star-1`, `star-2`, et `star-3` à 1s, 0.9s, et 1.1s, respectivement.

# --hints--

La propriété `animation-duration` de l'étoile de classe `star-1` doit rester à 1s.

```js
assert($('.star-1').css('animation-duration') == '1s');
```

La propriété `animation-duration` pour l'étoile de classe `star-2` devrait être de 0.9s.

```js
assert($('.star-2').css('animation-duration') == '0.9s');
```

La propriété `animation-duration` de l'étoile de classe `star-3` devrait être de 1,1s.

```js
assert($('.star-3').css('animation-duration') == '1.1s');
```

# --seed--

## --seed-contents--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>
```

# --solutions--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 0.9s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1.1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>
<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>
```
