---
id: bad87fee1348bd9aedf08824
title: Ajouter un padding différent sur chaque côté d'un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

Parfois, vous voudrez personnaliser un élément pour qu'il ait une quantité différente de "padding" sur chacun de ses côtés.

CSS vous permet de contrôler le "padding" des quatre côtés individuels d'un élément avec les propriétés |`padding-top`, `padding-right`, `padding-bottom` et `padding-left`.

# --instructions--

Donnez à la boîte bleue un `padding` de `40px` sur son haut et son côté gauche, mais seulement `20px` sur son bas et son côté droit.
# --hints--

Votre classe `blue-box` devrait donner au sommet des éléments `40px` de `padding`.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

Votre classe `blue-box` devrait donner à la droite des éléments `20px` de `padding`.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

Votre classe `blue-box` devrait donner au bas des éléments `20px` de `padding`.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

Votre classe `blue-box` devrait donner à la gauche des éléments `40px` de `padding`.

```js
assert($('.blue-box').css('padding-left') === '40px');
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
