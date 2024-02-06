---
id: 587d78a5367417b2b2512ad6
title: Créer un dégradé linéaire en CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4dpt9'
forumTopicId: 301047
dashedName: create-a-gradual-css-linear-gradient
---

# --description--

L'application d'une couleur sur des éléments HTML ne se limite pas à une teinte uniforme. Les CSS permettent d'utiliser des transitions de couleur, autrement appelées dégradés, sur les éléments. On y accède par la fonction `linear-gradient()` de la propriété `background`. Voici la syntaxe générale :

```css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```

Le premier argument spécifie la direction à partir de laquelle la transition de couleur commence - elle peut être exprimée en degré, où `90deg` fait un gradient horizontal (de gauche à droite) et `45deg` fait un gradient diagonal (du bas à gauche au haut à droite). Les arguments suivants spécifient l'ordre des couleurs utilisées dans le dégradé.

Example:

```css
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```

# --instructions--

Utilisez un `linear-gradient()` pour le `background` de l'élément `div`, et définissez-le dans une direction de 35 degrés pour changer la couleur de `#CCFFFF` à `#FFCCCC`.

# --hints--

L'élément `div` doit avoir un `background` à dégradé linéaire avec la direction et les couleurs spécifiées.

```js
assert(
  $('div')
    .css('background-image')
    .match(
      /linear-gradient\(35deg, rgb\(204, 255, 255\), rgb\(255, 204, 204\)\)/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;

  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
  }
</style>
<div></div>
```
