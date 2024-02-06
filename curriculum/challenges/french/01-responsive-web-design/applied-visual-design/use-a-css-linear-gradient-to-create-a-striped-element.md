---
id: 587d78a5367417b2b2512ad7
title: Utilisez un dégradé linéaire CSS pour créer un élément rayé
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
dashedName: use-a-css-linear-gradient-to-create-a-striped-element
---

# --description--

La fonction `repeating-linear-gradient()` est très similaire à `linear-gradient()` avec la différence majeure qu'elle répète le motif de dégradé spécifié. `repeating-linear-gradient()` accepte une variété de valeurs, mais pour plus de simplicité, vous travaillerez avec une valeur d'angle et des valeurs d'arrêt de couleur dans ce défi.

La valeur de l'angle correspond à la direction du dégradé. Les arrêts de couleur sont comme des valeurs de largeur qui marquent l'endroit où une transition a lieu, et sont donnés avec un pourcentage ou un nombre de pixels.

Dans l'exemple présenté dans l'éditeur de code, le dégradé commence par la couleur `yellow` à 0 pixel, qui se fond dans la deuxième couleur `blue` à 40 pixels du début. Comme le prochain arrêt de couleur est également à 40 pixels, le dégradé passe immédiatement à la troisième couleur `green`, qui elle-même se fond dans la quatrième couleur `red` qui se trouve à 80 pixels du début du dégradé.

Pour cet exemple, il est utile de considérer les arrêts de couleur comme des paires où toutes les deux couleurs se fondent ensemble.

```css
0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px
```

Si toutes les deux valeurs d'arrêt de couleur sont de la même couleur, le mélange n'est pas perceptible car il se fait entre la même couleur, suivie d'une transition difficile vers la couleur suivante, ce qui donne des rayures.

# --instructions--

Faites des rayures en modifiant la fonction `repeating-linear-gradient()` pour utiliser un angle de gradient de `45deg`, puis définissez les deux premiers arrêts de couleur sur `yellow`, et enfin les deux seconds arrêts de couleur sur `black`.

# --hints--

L'angle de la fonction `repeating-linear-gradient()` doit être de 45deg.

```js
assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
```

L'angle de la fonction `repeating-linear-gradient()` ne doit plus être de 90 degrés.

```js
assert(!code.match(/90deg/gi));
```

L'arrêt de la couleur à 0 pixel doit être `yellow`.

```js
assert(code.match(/yellow\s+?0(px)?/gi));
```

Un arrêt de couleur à 40 pixels devrait être `yellow`.

```js
assert(code.match(/yellow\s+?40px/gi));
```

Le deuxième arrêt de couleur à 40 pixels doit être `black`.

```js
assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
```

Le dernier arrêt de couleur à 80 pixels doit être `black`.

```js
assert(code.match(/black\s+?80px/gi));
```

# --seed--

## --seed-contents--

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```
