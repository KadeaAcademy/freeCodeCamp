---
id: 587d78ae367417b2b2512afd
title: Utiliser la propriété flex-basis pour définir la taille initiale d'un élément
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c3d9nCa'
forumTopicId: 301108
dashedName: use-the-flex-basis-property-to-set-the-initial-size-of-an-item
---

# --description--

La propriété `flex-basis` spécifie la taille initiale de l'élément avant que CSS ne fasse des ajustements avec `flex-shrink` ou `flex-grow`.

Les unités utilisées par la propriété `flex-basis` sont les mêmes que celles des autres propriétés de taille (`px`, `em`, `%`, etc.). La valeur `auto` permet de dimensionner les éléments en fonction de leur contenu.

# --instructions--

Définissez la taille initiale des boîtes en utilisant `flex-basis`. Ajoutez la propriété CSS `flex-basis` à `#box-1` et `#box-2`. Donnez à `#box-1` une valeur de `10em` et à `#box-2` une valeur de `20em`.

# --hints--

L'élément `#box-1` doit avoir la propriété `flex-basis`.

```js
assert($('#box-1').css('flex-basis') != 'auto');
```

L'élément `#box-1` doit avoir une valeur `flex-basis` de `10em`.

```js
assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g));
```

L'élément `#box-2` doit avoir la propriété `flex-basis`.

```js
assert($('#box-2').css('flex-basis') != 'auto');
```

L'élément `#box-2` doit avoir une valeur `flex-basis` de `20em`.

```js
assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g));
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
    flex-basis: 10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
