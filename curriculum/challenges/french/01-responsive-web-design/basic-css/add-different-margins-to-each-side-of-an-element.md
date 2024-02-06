---
id: bad87fee1248bd9aedf08824
title: Ajouter des marges différentes de chaque côté d'un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
dashedName: add-different-margins-to-each-side-of-an-element
---

# --description--

Parfois, vous voudrez personnaliser un élément pour qu'il ait un `margin` différent sur chacun de ses côtés.

Le CSS vous permet de contrôler le `margin` de chacun des quatre côtés d'un élément grâce aux propriétés `margin-top`, `margin-right`, `margin-bottom` et `margin-left`.

# --instructions--

Donnez au conteneur bleue un `margin` de `40px` en haut et à gauche, mais seulement `20px` en bas et à droite.

# --hints--

Votre classe `blue-box` devrait donner au haut des éléments `40px` de `margin`.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

Votre classe `blue-box` devrait donner à la droite des éléments `20px` de `margin`.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

Votre classe `blue-box` devrait donner au bas des éléments `20px` de `margin`.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

Votre classe `blue-box` devrait donner à la gauche des éléments `40px` de `margin`.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">marge externe</h5>

<div class="box yellow-box">
  <h5 class="box red-box">marge interne</h5>
  <h5 class="box blue-box">marge interne</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
</style>
<h5 class="injected-text">marge externe</h5>

<div class="box yellow-box">
  <h5 class="box red-box">marge interne</h5>
  <h5 class="box blue-box">marge interne</h5>
</div>
```
