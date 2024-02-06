---
id: bad87fee1348bd9aedf07756
title: Remplacez tous les autres styles en utilisant Important
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
dashedName: override-all-other-styles-by-using-important
---

# --description--

Hourra ! Nous venons de prouver que les styles en ligne remplacent toutes les déclarations CSS de l'élément `style`.

Mais attendez. Il existe un dernier moyen de remplacer les CSS. C'est la méthode la plus puissante de toutes. Mais avant de le faire, voyons pourquoi vous souhaitez remplacer les feuilles de style CSS.

Dans de nombreuses situations, vous utiliserez des bibliothèques CSS. Celles-ci peuvent accidentellement remplacer votre propre CSS. Ainsi, lorsque vous devez absolument vous assurer qu'un élément possède un CSS spécifique, vous pouvez utiliser `!important`.

Revenons à notre déclaration de classe `pink-text`. Rappelez-vous que notre classe `pink-text` a été remplacée par des déclarations de classe, des déclarations d'identifiant et des styles en ligne ultérieurs.

# --instructions--

Ajoutons le mot-clé `!important` à la déclaration de couleur de votre élément pink-text pour être sûr à 100% que votre élément `h1` sera rose.

Voici un exemple de la façon de procéder :

```css
color: red !important;
```

# --hints--

Votre élément `h1` doit avoir la classe `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Votre élément `h1` doit avoir la classe `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Votre élément `h1` devrait avoir l'`id` de `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Votre élément `h1` devrait avoir le style en ligne de `color : white`.

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

Votre déclaration de classe `pink-text` devrait avoir le mot-clé `!important` pour remplacer toutes les autres déclarations.

```js
assert(
  code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g)
);
```

Votre élément `h1` devrait être rose.

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
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
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Bonjour le monde !</h1>
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
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Bonjour le monde !</h1>
```
