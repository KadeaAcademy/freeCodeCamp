---
id: 587d78a3367417b2b2512ad0
title: Centrer un élément horizontalement à l'aide de la propriété margin
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

Une autre technique de positionnement consiste à centrer horizontalement un élément de bloc. Pour ce faire, il suffit de lui attribuer la valeur auto pour sa marge (`margin`).

Cette méthode fonctionne également pour les images. Par défaut, les images sont des éléments en ligne, mais elles peuvent être transformées en éléments de type bloc lorsque vous définissez la propriété `display` sur `block`.

# --instructions--

Centrez la `div` sur la page en ajoutant une propriété `margin` avec la valeur `auto`.

# --hints--

La `div` doit avoir une `margin` définie sur `auto`.

```js
assert(new __helpers.CSSHelp(document).getStyle('div')?.margin === 'auto');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

# --solutions--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```
