---
id: 579e2a2c335b9d72dd32e05c
title: Slice et Splice
challengeType: 5
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

On vous donne deux tableaux et un index.

Copiez chaque élément du premier tableau dans le second, dans l'ordre.

Commencez à insérer des éléments à l'index `n` du second tableau.

Retournez le tableau résultant. Les tableaux d'entrée doivent rester les mêmes après l'exécution de la fonction.

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` doit retourner `[4, 1, 2, 3, 5]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` doit retourner `["a", 1, 2, "b"]`.

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` doit retourner `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`.

```js
assert.deepEqual(
  frankenSplice(
    ['claw', 'tentacle'],
    ['head', 'shoulders', 'knees', 'toes'],
    2
  ),
  ['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']
);
```

Tous les éléments du premier tableau doivent être ajoutés au second tableau dans leur ordre initial. `frankenSplice([1, 2, 3, 4], [], 0)` doit retourner `[1, 2, 3, 4]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

Le premier tableau doit rester le même après l'exécution de la fonction.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

Le deuxième tableau doit rester le même après l'exécution de la fonction.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr2, ['a', 'b']);
```

# --seed--

## --after-user-code--

```js
let testArr1 = [1, 2];
let testArr2 = ["a", "b"];
```

## --seed-contents--

```js
function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

# --solutions--

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n+i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5], 1);
```
