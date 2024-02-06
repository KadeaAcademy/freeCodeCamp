---
id: 587d78ab367417b2b2512af2
title: Utiliser la propriété flex-direction pour constituer une ligne
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

L'ajout de `display : flex` à un élément le transforme en un conteneur flex. Cela permet de disposer les enfants de cet élément en lignes ou en colonnes. Pour ce faire, ajoutez la propriété `flex-direction` à l'élément parent et attribuez-lui la valeur row ou column. Si vous créez une ligne, les enfants seront alignés horizontalement, et si vous créez une colonne, les enfants seront alignés verticalement.

Les autres options pour `flex-direction` sont `row-reverse` et `column-reverse`.

**Note:** La valeur par défaut de la propriété `flex-direction` est `row`.

# --instructions--

Ajoutez la propriété CSS `flex-direction` à l'élément `#box-container`, et donnez-lui la valeur `row-reverse`.

# --hints--

L'élément `#box-container` doit avoir une propriété `flex-direction` définie sur `row-reverse`.

```js
assert($('#box-container').css('flex-direction') == 'row-reverse');
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
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
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
    flex-direction: row-reverse;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
