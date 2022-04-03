---
id: bad87fee1348bd9aedf08826
title: Utiliser la notation dans le sens des aiguilles d'une montre pour spécifier le padding d'un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mBS9'
forumTopicId: 18346
dashedName: use-clockwise-notation-to-specify-the-padding-of-an-element
---

# --description--

Au lieu de spécifier les propriétés `padding-top`, `padding-right`, `padding-bottom`, et `padding-left` d'un élément individuellement, vous pouvez les spécifier toutes sur une seule ligne, comme ceci :

```css
padding: 10px 20px 10px 20px;
```

Ces quatre valeurs fonctionnent comme une horloge : haut, droite, bas, gauche, et produiront exactement le même résultat qu'en utilisant les instructions de padding spécifiques à chaque côté.
# --instructions--

Utilisez la notation dans le sens des aiguilles d'une montre pour donner à la classe `.blue-box` un `padding` de `40px` en haut et à gauche, mais seulement `20px` en bas et à droite.

# --hints--

Votre classe `blue-box` devrait donner au haut des éléments `40px` de `padding`.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

Votre classe `blue-box` devrait donner à la droite des éléments `20px` de `padding`.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

Your `blue-box` class should give the bottom of elements `20px` of `padding`.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

Votre classe `blue-box` devrait donner à la gauche des éléments `40px` de `padding`.

```js
assert($('.blue-box').css('padding-left') === '40px');
```

Vous devez utiliser la notation dans le sens des aiguilles d'une montre pour définir le remplissage de la classe `blue-box`.

```js
assert(
  /\.blue-box\s*{[\s\S]*padding[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
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
    padding: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
