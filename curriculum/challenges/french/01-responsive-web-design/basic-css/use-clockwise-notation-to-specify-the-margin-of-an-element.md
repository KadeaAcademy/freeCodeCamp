---
id: bad87fee1348bd9afdf08726
title: Utiliser la notation dans le sens des aiguilles d'une montre pour spécifier la marge d'un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

Essayons à nouveau, mais avec `margin` cette fois.

Au lieu de spécifier les propriétés `margin-top`, `margin-right`, `margin-bottom` et `margin-left` d'un élément individuellement, vous pouvez les spécifier toutes en une seule ligne, comme ceci :

```css
margin: 10px 20px 10px 20px;
```

Ces quatre valeurs fonctionnent comme une horloge : haut, droite, bas, gauche, et produiront exactement le même résultat qu'en utilisant les instructions de marge spécifiques à chaque côté.

# --instructions--

Utilisez la notation dans le sens des aiguilles d'une montre pour donner à l'élément avec la classe `blue-box` une marge de `40px` en haut et à gauche, mais seulement `20px` en bas et à droite.

# --hints--

Votre classe `blue-box` devrait donner au haut de l'élément `40px` de `margin`.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

Votre classe `blue-box` devrait donner à la droite de l'élément `20px` de `margin`.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

Votre classe `blue-box` devrait donner au bas de l'élément `20px` de `margin`.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

Votre classe `blue-box` devrait donner à la gauche de l'élément `40px` de `margin`.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

Vous devez utiliser la notation dans le sens des aiguilles d'une montre pour définir la marge de la classe `blue-box`.

```js
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    __helpers.removeCssComments($('style').text())
  )
);
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">marge externe</h5>

<div class="box yellow-box">
  <h5 class="box red-box">marge interne</h5>
  <h5 class="box blue-box">marge interne</h5>
</div>
```
