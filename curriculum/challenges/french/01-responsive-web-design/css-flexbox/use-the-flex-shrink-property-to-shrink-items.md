---
id: 587d78ad367417b2b2512afb
title: Utiliser la propriété flex-shrink pour rétrécir des éléments
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
dashedName: use-the-flex-shrink-property-to-shrink-items
---

# --description--

Jusqu'à présent, toutes les propriétés des défis s'appliquent au conteneur flex (le parent des éléments flex). Cependant, il existe plusieurs propriétés utiles pour les éléments flex.

La première est la propriété `flex-shrink`. Lorsqu'elle est utilisée, elle permet à un élément de rétrécir si le conteneur flexible est trop petit. Les éléments rétrécissent lorsque la largeur du conteneur parent est inférieure aux largeurs combinées de tous les éléments flexibles qu'il contient.

La propriété `flex-shrink` prend des nombres comme valeurs. Plus le nombre est élevé, plus l'élément se rétrécit par rapport aux autres éléments du conteneur. Par exemple, si un élément a une valeur `flex-shrink` de `1` et l'autre une valeur `flex-shrink` de `3`, celui qui a la valeur `3` se rétractera trois fois plus que l'autre.

# --instructions--

Ajoutez la propriété CSS `flex-shrink` aux deux `#box-1` et `#box-2`. Donnez à `#box-1` une valeur de `1` et à `#box-2` une valeur de `2`.

# --hints--

L'élément `#box-1` doit avoir la propriété `flex-shrink` définie sur une valeur de `1`.

```js
assert($('#box-1').css('flex-shrink') == '1');
```

La propriété `flex-shrink` de l'élément `#box-2` doit prendre la valeur `2`.

```js
assert($('#box-2').css('flex-shrink') == '2');
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
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

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
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
