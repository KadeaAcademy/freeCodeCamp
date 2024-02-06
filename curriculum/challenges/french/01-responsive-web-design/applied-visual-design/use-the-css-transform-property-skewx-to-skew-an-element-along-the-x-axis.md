---
id: 587d78a6367417b2b2512adb
title: Utilisez la propriété de transformation CSS skewX pour incliner un élément le long de l'axe X.
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
dashedName: use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis
---

# --description--

La fonction suivante de la propriété `transform` est `skewX()`, qui incline l'élément sélectionné le long de son axe X (horizontal) d'un degré donné.

Le code suivant incline l'élément du paragraphe de -32 degrés le long de l'axe X.

```css
p {
  transform: skewX(-32deg);
}
```

# --instructions--

Inclinez l'élément avec l'id de `bottom` de 24 degrés le long de l'axe X en utilisant la propriété `transform`.

# --hints--

L'élément avec l'id `bottom` doit être incliné de 24 degrés le long de son axe X.

```js
assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

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
    margin:  50px auto;
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
