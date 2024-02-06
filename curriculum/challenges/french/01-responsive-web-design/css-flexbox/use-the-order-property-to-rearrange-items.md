---
id: 587d78ae367417b2b2512aff
title: Utilisez la propriété order pour réorganiser les éléments
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
dashedName: use-the-order-property-to-rearrange-items
---

# --description--

La propriété `order` est utilisée pour indiquer à CSS l'ordre dans lequel les éléments flex apparaissent dans le conteneur flex. Par défaut, les éléments apparaîtront dans l'ordre où ils sont présentés dans le code HTML source. La propriété prend des nombres comme valeurs, et des nombres négatifs peuvent être utilisés.

# --instructions--

Ajoutez la propriété CSS `order` aux deux `#box-1` et `#box-2`. Donnez à `#box-1` une valeur de `2` et à `#box-2` une valeur de `1`.

# --hints--

La propriété `order` de l'élément `#box-1` doit prendre la valeur `2`.

```js
assert($('#box-1').css('order') == '2');
```

La propriété `order` de l'élément `#box-2` doit prendre la valeur `1`.

```js
assert($('#box-2').css('order') == '1');
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
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
