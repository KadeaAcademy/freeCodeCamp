---
id: bad87fee1348bd9aedf08756
title: Donner la priorité à un style plutôt qu'à un autre
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
forumTopicId: 18258
dashedName: prioritize-one-style-over-another
---

# --description--

Il arrive que vos éléments HTML reçoivent plusieurs styles qui entrent en conflit les uns avec les autres.

Par exemple, votre élément `h1` ne peut pas être vert et rose en même temps.

Voyons ce qui se passe lorsque nous créons une classe qui rend le texte rose, puis que nous l'appliquons à un élément. Notre classe va-t-elle *override* la propriété CSS `color : green;` de l'élément `body` ?

# --instructions--

Créez une classe CSS appelée `pink-text` qui donne à un élément la couleur rose.

Donnez à votre élément `h1` la classe `pink-text`.

# --hints--

Votre élément `h1` doit avoir la classe `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Votre `<style>` devrait avoir une classe CSS `pink-text` qui change la `color`.

```js
assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;?\s*\}/g));
```

Votre élément `h1` devrait être `pink`.

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
</style>
<h1>Bonjour le monde !</h1>
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
</style>
<h1 class="pink-text">Bonjour le monde !</h1>
```
