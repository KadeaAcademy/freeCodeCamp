---
id: 587d781c367417b2b2512ac4
title: Définir la taille de la police du texte du paragraphe
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJ36Cr'
forumTopicId: 301068
dashedName: set-the-font-size-of-paragraph-text
---

# --description--

La propriété `font-size` en CSS n'est pas limitée aux titres, elle peut être appliquée à tout élément contenant du texte.

# --instructions--

Changez la valeur de la propriété `font-size` pour le paragraphe à 16px pour le rendre plus visible.

# --hints--

Votre balise `p` doit avoir une `font-size` de 16 pixels.

```js
assert($('p').css('font-size') == '16px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 10px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 16px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```
