---
id: 587d78ad367417b2b2512afa
title: Utiliser la propriété flex-wrap pour envelopper une ligne ou une colonne
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

La fonction flexbox de CSS permet de diviser un élément flex en plusieurs lignes (ou colonnes). Par défaut, un conteneur flex s'adapte à tous les éléments flex ensemble. Par exemple, une rangée sera sur une seule ligne.

Cependant, l'utilisation de la propriété `flex-wrap` indique à CSS d'envelopper les éléments. Cela signifie que les éléments supplémentaires sont déplacés dans une nouvelle ligne ou colonne. Le point de rupture où l'habillage se produit dépend de la taille des éléments et de la taille du conteneur.

CSS dispose également d'options pour la direction de l'habillage :

<ul><li><code>nowrap</code>: il s'agit du paramètre par défaut, qui n'englobe pas les éléments.</li><li><code>wrap</code>: enveloppe les éléments sur plusieurs lignes de haut en bas s'ils sont en lignes et de gauche à droite s'ils sont en colonnes.</li><li><code>wrap-reverse</code>: enveloppe les éléments sur plusieurs lignes de bas en haut s'ils sont en lignes et de droite à gauche s'ils sont en colonnes..</li></ul>

# --instructions--

La disposition actuelle comporte trop de boîtes pour une seule ligne. Ajoutez la propriété CSS `flex-wrap` à l'élément `#box-container`, et donnez-lui une valeur de `wrap`.

# --hints--

L'élément `#box-container` doit avoir la propriété `flex-wrap` définie sur une valeur de `wrap`.

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```
