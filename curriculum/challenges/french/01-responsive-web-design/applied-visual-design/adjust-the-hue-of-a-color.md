---
id: 587d78a4367417b2b2512ad4
title: Ajuster la nuance d'une couleur
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp38TZ'
forumTopicId: 301036
dashedName: adjust-the-hue-of-a-color
---

# --description--

Les couleurs ont plusieurs caractéristiques, notamment la teinte, la saturation et la luminosité. CSS3 a introduit la propriété `hsl()` comme un moyen alternatif de choisir une couleur en énonçant directement ces caractéristiques.

**nuance** est ce que les gens considèrent généralement comme une "couleur". Si vous vous représentez un spectre de couleurs commençant par le rouge à gauche, passant par le vert au milieu et le bleu à droite, la teinte est la position d'une couleur sur cette ligne. Dans `hsl()`, la teinte utilise un concept de roue de couleur au lieu du spectre, où l'angle de la couleur sur le cercle est donné comme une valeur entre 0 et 360.

**saturation** est la quantité de gris dans une couleur. Une couleur entièrement saturée ne contient aucun gris, et une couleur peu saturée est presque entièrement grise. Elle est exprimée en pourcentage, 100 % correspondant à une saturation totale.

**Légèreté** est la quantité de blanc ou de noir dans une couleur. Un pourcentage est donné, allant de 0% (noir) à 100% (blanc), où 50% est la couleur normale.

Voici quelques exemples d'utilisation de `hsl()` avec des couleurs entièrement saturées et de luminosité normale :

<table class='table table-striped'><thead><tr><th>Color</th><th>HSL</th></tr></thead><tbody><tr><td>red</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>yellow</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>green</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>cyan</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>blue</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>magenta</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>

# --instructions--

Changez le `background-color` de chaque élément `div` en fonction des noms de classe (`green`, `cyan`, ou `blue`) en utilisant `hsl()`. Ces trois éléments doivent avoir une saturation complète et une luminosité normale.

# --hints--

Votre code devrait utiliser la propriété `hsl()` pour déclarer la couleur `green`.

```js
assert(code.match(/\.green\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

Votre code devrait utiliser la propriété `hsl()` pour déclarer la couleur `cyan`.

```js
assert(code.match(/\.cyan\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

Votre code devrait utiliser la propriété `hsl()` pour déclarer la couleur `blue`.

```js
assert(code.match(/\.blue\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

L'élément `div` avec la classe `green` doit avoir un `background-color` de couleur verte.

```js
assert($('.green').css('background-color') == 'rgb(0, 255, 0)');
```

L'élément `div` de la classe `cyan` doit avoir un `background-color` de couleur cyan.

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

L'élément `div` avec la classe `blue` doit avoir un `background-color` de couleur bleue.

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: hsl(120, 100%, 50%);
  }

  .cyan {
    background-color:   hsl(180, 100%, 50%);
  }

  .blue {
    background-color: hsl(240, 100%, 50%);
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```
