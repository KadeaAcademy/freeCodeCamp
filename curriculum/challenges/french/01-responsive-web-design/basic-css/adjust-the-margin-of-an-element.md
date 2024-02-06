---
id: bad87fee1348bd9aedf08822
title: Ajuster la marge d'un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJarHW'
forumTopicId: 16654
dashedName: adjust-the-margin-of-an-element
---

# --description--

Le `margin` d'un élément contrôle l'espace entre le `border` de l'élément et les éléments qui l'entourent.

Ici, nous pouvons voir que le conteneur bleue et le conteneur rouge sont imbriquées dans le conteneur jaune. Notez que le conteneur rouge a un `margin` plus grande que le conteneur bleue, ce qui la fait paraître plus petite.

Lorsque vous augmentez le `margin` du conteneur bleue, la distance entre sa bordure et les éléments qui l'entourent augmente.

# --instructions--

Changez le `margin` du conteneur bleue pour qu'elle corresponde à celle du conteneur rouge.

# --hints--

Votre classe `blue-box` devrait donner à l'élément `20px` de `margin`.

```js
assert($('.blue-box').css('margin-top') === '20px');
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
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
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
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>
<h5 class="injected-text">marge externe</h5>

<div class="box yellow-box">
  <h5 class="box red-box">marge interne</h5>
  <h5 class="box blue-box">marge interne</h5>
</div>
```
