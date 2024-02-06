---
id: bad87fee1348bd9aedf06756
title: Remplacer les déclarations de classe par des styles en ligne
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDRha'
forumTopicId: 18252
dashedName: override-class-declarations-with-inline-styles
---

# --description--

Nous avons donc prouvé que les déclarations d'identifiants remplacent les déclarations de classes, quel que soit l'endroit où elles sont déclarées dans votre élément CSS `style`.

Il existe d'autres façons de remplacer les éléments CSS. Vous vous souvenez des styles en ligne ?

# --instructions--

Utilisez un style en ligne pour essayer de rendre notre élément `h1` blanc. Rappelez-vous, les styles en ligne ressemblent à ceci :

```html
<h1 style="color: green;">
```

Laissez les classes `blue-text` et `pink-text` sur votre élément `h1`.

# --hints--

Votre élément `h1` doit avoir la classe `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Votre élément `h1` doit avoir la classe `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Votre élément `h1` devrait avoir l'id de `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Votre élément `h1` doit avoir un style en ligne.

```js
assert(document.querySelector('h1[style]'));
```

Votre élément `h1` doit être blanc.

```js
assert($('h1').css('color') === 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Bonjour le monde !</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Bonjour le monde !</h1>
```
