---
id: 587d78ab367417b2b2512af0
title: 'Utilisez display : flex pour positionner deux boîtes.'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
dashedName: use-display-flex-to-position-two-boxes
---

# --description--

Cette section utilise des styles de défi alternés pour montrer comment utiliser le CSS pour positionner des éléments de manière flexible. D'abord, un défi expliquera la théorie, puis un défi pratique utilisant un simple composant tweet appliquera le concept de flexbox.

En plaçant la propriété CSS `display : flex;` sur un élément, vous pouvez utiliser d'autres propriétés flexbox pour construire une page réactive.

# --instructions--

Ajoutez la propriété CSS `display` à `#box-container` et attribuez-lui la valeur `flex`.

# --hints--

La propriété `#box-container` doit avoir pour valeur `display` la valeur `flex`.

```js
assert($('#box-container').css('display') == 'flex');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
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
    height: 500px;
    display: flex;
  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
