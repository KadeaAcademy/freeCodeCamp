---
id: 587d78a7367417b2b2512adf
title: Apprenez comment fonctionnent les propriétés CSS @keyframes et animation.
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

Pour animer un élément, vous devez connaître les propriétés d'animation et la règle `@keyframes`. Les propriétés d'animation contrôlent le comportement de l'animation et la règle `@keyframes` contrôle ce qui se passe pendant cette animation. Il y a huit propriétés d'animation au total. Dans ce défi, nous allons rester simples et couvrir les deux propriétés les plus importantes en premier :

`animation-name` définit le nom de l'animation, qui est ensuite utilisé par `@keyframes` pour indiquer à CSS quelles règles vont avec quelles animations.

`animation-duration` définit la durée de l'animation.

`@keyframes` permet de spécifier exactement ce qui se passe dans l'animation pendant cette durée. Cela se fait en donnant des propriétés CSS pour des "cadres" spécifiques pendant l'animation, avec des pourcentages allant de 0% à 100%. Si vous comparez cela à un film, les propriétés CSS pour 0% correspondent à l'affichage de l'élément dans la scène d'ouverture. Les propriétés CSS pour 100 % correspondent à la façon dont l'élément apparaît à la fin, juste avant le générique de fin. Ensuite, CSS applique la magie de la transition de l'élément pendant la durée donnée pour jouer la scène. Voici un exemple pour illustrer l'utilisation des `@keyframes` et des propriétés d'animation :

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

Pour l'élément avec l'identifiant `anim`, le bout de code ci-dessus définit le `animation-name` à `colorful` et définit le `animation-duration` à 3 secondes. Ensuite, la règle `@keyframes` établit un lien avec les propriétés de l'animation portant le nom `colorful`. Elle définit la couleur bleue au début de l'animation (0 %), qui passera au jaune à la fin de l'animation (100 %). Vous n'êtes pas limité aux transitions début-fin, vous pouvez définir les propriétés de l'élément pour n'importe quel pourcentage entre 0 % et 100 %.

# --instructions--

Créez une animation pour l'élément avec l'id `rect`, en définissant le `animation-name` à `rainbow` et le `animation-duration` à 4 secondes. Ensuite, déclarez une règle `@keyframes`, et définissez le `background-color` au début de l'animation (`0%`) sur bleu, au milieu de l'animation (`50%`) sur vert, et à la fin de l'animation (`100%`) sur jaune.

# --hints--

L'élément avec l'id de `rect` devrait avoir une propriété `animation-name` avec une valeur de `rainbow`.

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

L'élément avec l'id de `rect` devrait avoir une propriété `animation-duration` avec une valeur de 4s.

```js
assert($('#rect').css('animation-duration') == '4s');
```

La règle `@keyframes` doit utiliser le `animation-name` de `rainbow`.

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

La règle `@keyframes` pour `rainbow` devrait utiliser un `background-color` de `blue` à 0%.

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

La règle `@keyframes` pour `rainbow` devrait utiliser un `background-color` de `green` à 50%.

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

La règle `@keyframes` pour l'arc-en-ciel devrait utiliser un `background-color` de `yellow` à 100%.

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```
