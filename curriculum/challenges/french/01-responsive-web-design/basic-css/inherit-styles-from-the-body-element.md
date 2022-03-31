---
id: bad87fee1348bd9aedf08746
title: Hériter des styles de l'élément Body
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
dashedName: inherit-styles-from-the-body-element
---

# --description--

Nous avons maintenant prouvé que chaque page HTML possède un élément `body`, et que cet élément `body` peut aussi être stylisé avec CSS.

N'oubliez pas que vous pouvez donner un style à votre élément `body` comme à tout autre élément HTML, et que tous vos autres éléments hériteront des styles de votre élément `body`.
# --instructions--

Tout d'abord, créez un élément `h1` avec le texte `Hello World`.

Ensuite, donnez à tous les éléments de votre page la couleur `green` en ajoutant `color : green;` à la déclaration de style de votre élément `body`.

Enfin, donnez à votre élément `body` la famille de caractères `monospace` en ajoutant `font-family : monospace;` à la déclaration de style de votre élément `body`.
# --hints--

Vous devez créer un élément `h1`.

```js
assert($('h1').length > 0);
```

Votre élément `h1` doit contenir le texte `Hello World`.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);
```

Votre élément `h1` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

Votre élément `body` devrait avoir la propriété `color` égale à `green`.

```js
assert($('body').css('color') === 'rgb(0, 128, 0)');
```

Votre élément `body` doit avoir la propriété `font-family` égale à `monospace`.

```js
assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);
```

Votre élément `h1` devrait hériter de la police `monospace` de votre élément `body`.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);
```

Votre élément `h1` devrait hériter de la couleur verte de votre élément `body`.

```js
assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }

</style>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }

</style>
<h1>Hello World!</h1>
```
