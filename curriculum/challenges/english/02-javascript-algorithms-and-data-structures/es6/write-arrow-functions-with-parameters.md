---
id: 587d7b88367417b2b2512b44
title: Écrire des fonctions fléchées avec des paramètres
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

Tout comme une fonction ordinaire, vous pouvez passer des arguments à une fonction fléchée.

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` renverrait la valeur `8`.

Si une fonction fléchée a un seul paramètre, les parenthèses entourant le paramètre peuvent être omises.

```js
const doubler = item => item * 2;
```

Il est possible de passer plus d'un argument à une fonction fléchée.

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` renverrait la valeur `8`.

# --instructions--

Réécrivez la fonction `myConcat` qui ajoute le contenu de `arr2` à `arr1` pour que la fonction utilise la syntaxe des fonctions fléchées.

# --hints--

Vous devez remplacer le mot-clé `var`.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`myConcat` devrait être une constante (en utilisant `const`).

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+myConcat/g));
```

`myConcat` doit être une fonction fléchée avec deux paramètres

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`myConcat()` devrait retourner `[1, 2, 3, 4, 5]`.

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

Le mot-clé `function` ne doit pas être utilisé.

```js
(getUserInput) => assert(!getUserInput('index').match(/function/g));
```

# --seed--

## --seed-contents--

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

# --solutions--

```js
const myConcat = (arr1, arr2) =>  {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```
