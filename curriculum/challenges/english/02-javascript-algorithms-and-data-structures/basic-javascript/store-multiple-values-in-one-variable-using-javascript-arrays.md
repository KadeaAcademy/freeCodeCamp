---
id: bd7993c9c69feddfaeb8bdef
title: Stocker plusieurs valeurs dans une variable à l'aide de tableaux JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

Avec les tableaux de variables JavaScript, nous pouvons stocker plusieurs éléments de données en un seul endroit.

On commence une déclaration de tableau par un crochet ouvrant, on la termine par un crochet fermant, et on met une virgule entre chaque élément, comme ceci :

```js
const sandwich = ["beurre d'arachide", "gélatine", "pain"];
```

# --instructions--

Modifiez le nouveau tableau `myArray` pour qu'il contienne à la fois une chaîne de caractères et un nombre (dans cet ordre).

# --hints--

`myArray` doit être un tableau.

```js
assert(typeof myArray == 'object');
```

Le premier élément de `myArray` doit être une chaîne de caractères.

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

Le deuxième élément de `myArray` doit être un nombre.

```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myArray);
```

## --seed-contents--

```js
// Ne changez que le code en dessous de cette ligne
const myArray = [];
```

# --solutions--

```js
const myArray = ["The Answer", 42];
```
