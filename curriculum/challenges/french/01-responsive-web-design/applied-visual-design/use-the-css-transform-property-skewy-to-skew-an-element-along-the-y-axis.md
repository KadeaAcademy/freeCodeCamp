---
id: 587d78a6367417b2b2512adc
title: Utiliser la propriété de transformation CSS skewY pour incliner un élément le long de l'axe des Y
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
dashedName: use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis
---

# --description--

Étant donné que la fonction `skewX()` incline l'élément sélectionné selon l'axe des X d'un degré donné, il n'est pas surprenant que la propriété `skewY()` incline un élément selon l'axe des Y (vertical).

# --instructions--

Inclinez l'élément avec l'id de `top` de -10 degrés le long de l'axe Y en utilisant la propriété `transform`.

# --hints--

L'élément avec id `top` doit être incliné de -10 degrés le long de son axe Y.

```js
assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;

  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
