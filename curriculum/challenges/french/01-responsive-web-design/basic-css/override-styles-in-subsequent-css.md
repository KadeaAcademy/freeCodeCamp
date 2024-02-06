---
id: bad87fee1348bd9aedf04756
title: Remplacer les styles dans le CSS suivant
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
dashedName: override-styles-in-subsequent-css
---

# --description--

Notre classe `pink-text` a remplacé la déclaration CSS de l'élément `body` !

Nous venons de prouver que nos classes remplacent le CSS de l'élément `body`. La prochaine question logique est donc : que pouvons-nous faire pour remplacer notre classe `pink-text` ?

# --instructions--

Créez une classe CSS supplémentaire appelée `blue-text` qui donne à un élément la couleur bleue. Assurez-vous qu'elle se trouve sous votre déclaration de classe `pink-text`.

Appliquez la classe `blue-text` à votre élément `h1` en plus de votre classe `pink-text`, et voyons lequel des deux gagne.

L'application de plusieurs attributs de classe à un élément HTML se fait en les séparant par un espace comme ceci :

```html
class="class1 class2"
```

**Note:** L'ordre dans lequel les classes sont listées dans l'élément HTML n'a pas d'importance.

Cependant, c'est l'ordre des déclarations `class` dans la section `<style>` qui est important. La deuxième déclaration sera toujours prioritaire sur la première. Comme `.blue-text` est déclaré en second, il prévaut sur les attributs de `.pink-text`.

# --hints--

Votre élément `h1` doit avoir la classe `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Votre élément `h1` doit avoir la classe `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Les deux éléments `blue-text` et `pink-text` doivent appartenir au même élément `h1`.

```js
assert($('.pink-text').hasClass('blue-text'));
```

Votre élément `h1` doit être bleu.

```js
assert($('h1').css('color') === 'rgb(0, 0, 255)');
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
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Bonjour le monde !</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }

  .blue-text {
    color: blue;
  }  
</style>
<h1 class="pink-text blue-text">Bonjour le monde !</h1>
```
