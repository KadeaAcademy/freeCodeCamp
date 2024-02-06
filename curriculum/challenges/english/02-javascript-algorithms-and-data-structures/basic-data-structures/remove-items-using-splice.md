---
id: 587d78b2367417b2b2512b10
title: Supprimer des éléments en utilisant splice()
challengeType: 1
forumTopicId: 301166
dashedName: remove-items-using-splice
---

# --description--

Nous avons appris à retirer des éléments du début et de la fin d'un tableau à l'aide de shift() et pop(), mais que faire si nous voulons retirer un élément au milieu ? Ou supprimer plus d'un élément à la fois ? C'est là que la fonction splice() intervient. splice() nous permet de faire exactement cela : retirer un nombre quelconque d'éléments consécutifs de n'importe où dans un tableau.

`splice()` peut prendre jusqu'à 3 paramètres, mais pour l'instant, nous allons nous concentrer sur les 2 premiers. Les deux premiers paramètres de `splice()` sont des entiers qui représentent les indices, ou positions, du tableau sur lequel `splice()` est appelé. Rappelez-vous que les tableaux sont indexés à zéro, donc pour indiquer le premier élément d'un tableau, nous utiliserons 0. Le premier paramètre de `splice()` représente l'index du tableau à partir duquel il faut commencer à supprimer des éléments, tandis que le second paramètre indique le nombre d'éléments à supprimer. Par exemple :

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
```

Ici, nous supprimons 2 éléments, en commençant par le troisième élément (à l'indice 2). `array` aurait la valeur `['today', 'was', 'great']`.

`splice()` ne modifie pas seulement le tableau sur lequel il est appelé, mais il retourne également un nouveau tableau contenant la valeur des éléments supprimés :

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
```

`newArray` a pour valeur`['really', 'happy']`.

# --instructions--

Nous avons initialisé un tableau `arr`. Utilisez `splice()` pour supprimer des éléments de `arr`, de sorte qu'il ne contienne que des éléments dont la somme est égale à la valeur de `10`.

# --hints--

Vous ne devez pas modifier la ligne originale de `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/constarr=\[2,4,5,1,7,5,2,1\];?/)
);
```

`arr` ne doit contenir que des éléments dont la somme est égale à `10`.

```js
assert.strictEqual(
  arr.reduce((a, b) => a + b),
  10
);
```

Votre code devrait utiliser la méthode `splice()` sur `arr`.

```js
assert(__helpers.removeWhiteSpace(code).match(/arr\.splice\(/));
```

Le splice doit uniquement supprimer des éléments de `arr` et ne pas ajouter d'éléments supplémentaires à `arr`.

```js
assert(
  !__helpers.removeWhiteSpace(code).match(/arr\.splice\(\d+,\d+,\d+.*\)/g)
);
```

# --seed--

## --seed-contents--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Ne changez que le code en dessous de cette ligne

// Ne changez que le code au-dessus de cette ligne
console.log(arr);
```

# --solutions--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
```
