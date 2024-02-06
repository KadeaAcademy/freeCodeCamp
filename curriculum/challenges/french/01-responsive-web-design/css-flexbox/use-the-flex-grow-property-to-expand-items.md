---
id: 587d78ae367417b2b2512afc
title: Utilisez la propriété flex-grow pour étendre des éléments
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 301111
dashedName: use-the-flex-grow-property-to-expand-items
---

# --description--

L'opposé de `flex-shrink` est la propriété `flex-grow`. Rappelez-vous que la propriété `flex-shrink` contrôle la taille des éléments lorsque le conteneur rétrécit. La propriété `flex-grow` contrôle la taille des éléments lorsque le conteneur parent s'étend.

En utilisant un exemple similaire au dernier défi, si un élément a une valeur `flex-grow` de `1` et l'autre une valeur `flex-grow` de `3`, celui qui a la valeur `3` va grandir trois fois plus que l'autre.

# --instructions--

Ajoutez la propriété CSS `flex-grow` à la fois à `#box-1` et `#box-2`. Donnez à `#box-1` une valeur de `1` et à `#box-2` une valeur de `2`.

# --hints--

L'élément `#box-1` doit avoir la propriété `flex-grow` définie sur une valeur de `1`.

```js
assert($('#box-1').css('flex-grow') == '1');
```

L'élément `#box-2` doit avoir la propriété `flex-grow` définie sur une valeur de `2`.

```js
assert($('#box-2').css('flex-grow') == '2');
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

  }

  #box-2 {
    background-color: orangered;
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
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
