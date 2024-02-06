---
id: 587d78a7367417b2b2512ae1
title: Créer du mouvement à l'aide de l'animation CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

Lorsque des éléments ont une `position` spécifiée, comme `fixe` ou `relative`, les propriétés de décalage CSS `droite`, `gauche`, `haut` et `basse` peuvent être utilisées dans les règles d'animation pour créer un mouvement.

Comme le montre l'exemple ci-dessous, vous pouvez pousser l'élément vers le bas puis vers le haut en fixant la propriété `top` de l'image-clé `50%` à 50px, mais en la fixant à 0px pour la première (`0%`) et la dernière (`100%`) image-clé.

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

# --instructions--

Ajoutez un mouvement horizontal à l'animation `div`. En utilisant la propriété `left` offset, ajoutez à la règle `@keyframes` pour que l'arc-en-ciel commence à 0 pixel à `0%`, se déplace à 25 pixels à `50%`, et se termine à -25 pixels à `100%`. Ne remplacez pas la propriété `top` dans l'éditeur - l'animation doit avoir un mouvement vertical et horizontal.

# --hints--

La règle `@keyframes` pour `0%` devrait utiliser le décalage `left` de 0px.

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

La règle `@keyframes` pour `50%` devrait utiliser le décalage `left` de 25px.

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

La règle `@keyframes` pour `100%` devrait utiliser le décalage `left` de -25px.

```js
assert(code.match(/100%\s*?{[\s\S]*?left:\s*?-25px(;[\s\S]*?|\s*?)}/gi));
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
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;

    }
    50% {
      background-color: green;
      top: 50px;

    }
    100% {
      background-color: yellow;
      top: 0px;

    }
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
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;
    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;
    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;
    }
  }
</style>
<div id="rect"></div>
```
