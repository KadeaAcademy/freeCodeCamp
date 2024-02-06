---
id: bad87fee1348bd9aedf08736
title: Styliser l'élément HTML Body
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

Maintenant, recommençons à zéro et parlons de l'héritage CSS.

Chaque page HTML possède un élément `body`.

# --instructions--

Nous pouvons prouver que l'élément `body` existe ici en lui donnant une `background-color` de couleur noire.

Nous pouvons le faire en ajoutant ce qui suit à notre élément `style` :

```css
body {
  background-color: black;
}
```

# --hints--

Votre élément `body` devrait avoir la `background-color` de noir.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Votre règle CSS doit être correctement formatée avec des accolades ouvrantes et fermantes.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

Votre règle CSS doit se terminer par un point-virgule.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>
```

# --solutions--

```html
<style>
body {
  background-color: black;
}
</style>
```
