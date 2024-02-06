---
id: 587d78a3367417b2b2512acf
title: Modifier la position des éléments superposés avec la propriété z-index
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
dashedName: change-the-position-of-overlapping-elements-with-the-z-index-property
---

# --description--

Lorsque des éléments sont positionnés de manière à se chevaucher (c'est-à-dire en utilisant la propriété `position : absolute | relative | fixed | sticky`), l'élément venant en dernier dans le balisage HTML apparaîtra, par défaut, au dessus des autres éléments. Toutefois, la propriété `z-index` permet de spécifier l'ordre dans lequel les éléments sont empilés les uns sur les autres. Il doit s'agir d'un nombre entier (c'est-à-dire un nombre entier et non décimal), et les valeurs les plus élevées de la propriété `z-index` d'un élément le déplacent plus haut dans la pile que les valeurs inférieures.

# --instructions--

Ajoutez une propriété `z-index` à l'élément dont le nom de classe est `first` (le rectangle rouge) et donnez-lui une valeur de 2 pour qu'il couvre l'autre élément (le rectangle bleu).

# --hints--

L'élément avec la classe `first` devrait avoir une valeur `z-index` de 2.

```js
assert($('.first').css('z-index') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

# --solutions--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```
