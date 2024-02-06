---
id: bad87fee1348bd9aedf08823
title: Ajouter une marge négative à un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpyGs3'
forumTopicId: 16166
dashedName: add-a-negative-margin-to-an-element
---

# --description--

La marge d'un élément contrôle la quantité d'espace entre la bordure de l'élément et les éléments qui l'entourent.

Si vous définissez la marge d'un élément à une valeur négative, l'élément s'agrandira.

# --instructions--

Essayez de définir le `marging` sur une valeur négative comme celle du conteneur rouge.

Changez la `marge` du conteneur bleue à `15px`, afin qu'elle remplisse toute la largeur horizontale du conteneur jaune qui l'entoure.

# --hints--

Votre classe `blue-box` devrait donner aux éléments `-15px` de `margin`.

```js
assert($('.blue-box').css('margin-top') === '-15px');
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
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

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
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
    margin-top: -15px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">marge interne</h5>
  <h5 class="box blue-box">marge interne</h5>
</div>
```
