---
id: a6e40f1041b06c996f7b2406
title: Trouver et garder
challengeType: 5
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

Créez une fonction qui parcourt un tableau `arr` et retourne le premier élément qui passe un 'test de vérité'. Cela signifie que pour un élément `x`, le test de vérité est satisfait si `func(x)` est `vrai`. Si aucun élément ne passe le test, il retourne `undefined`.

# --hints--

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` doit retourner `8`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` doit retourner `undefined`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
  undefined
);
```

# --seed--

## --seed-contents--

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

# --solutions--

```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```
