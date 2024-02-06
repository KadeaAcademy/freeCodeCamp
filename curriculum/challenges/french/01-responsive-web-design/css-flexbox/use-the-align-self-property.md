---
id: 587d78af367417b2b2512b00
title: Utilisez la propriété align-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

La dernière propriété pour les éléments flexibles est `align-self`. Cette propriété vous permet de régler l'alignement de chaque élément individuellement, au lieu de les régler tous en même temps. C'est utile car les autres techniques d'ajustement courantes utilisant les propriétés CSS `float`, `clear` et `vertical-align` ne fonctionnent pas sur les éléments flex.

`align-self` accepte les mêmes valeurs que `align-items` et remplacera toute valeur définie par la propriété `align-items`.

# --instructions--

Ajoutez la propriété CSS `align-self` aux deux `#box-1` et `#box-2`. Donnez à `#box-1` une valeur de `center` et à `#box-2` une valeur de `flex-end`.

# --hints--

L'élément `#box-1` doit avoir la propriété `align-self` définie sur une valeur de `center`.

```js
assert($('#box-1').css('align-self') == 'center');
```

L'élément `#box-2` doit avoir la propriété `align-self` définie sur une valeur de `flex-end`.

```js
assert($('#box-2').css('align-self') == 'flex-end');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
