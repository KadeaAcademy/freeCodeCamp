---
id: a5deed1811a43193f9f1c841
title: Laissez tomber
challengeType: 5
forumTopicId: 16010
dashedName: drop-it
---

# --description--

Étant donné le tableau `arr`, itérer et enlever chaque élément en commençant par le premier (l'index 0) jusqu'à ce que la fonction `func` retourne `vrai` quand l'élément itéré est passé à travers elle.

Retournez ensuite le reste du tableau une fois que la condition est satisfaite, sinon, `arr` doit être retourné comme un tableau vide.

# --hints--

`dropElements([1, 2, 3, 4], function(n) {return n >= 3;})` devrait retourner `[3, 4]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  [3, 4]
);
```

`dropElements([0, 1, 0, 1], function(n) {return n === 1;})` devrait retourner `[1, 0, 1]`.

```js
assert.deepEqual(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  [1, 0, 1]
);
```

`dropElements([1, 2, 3], function(n) {return n > 0;})` devrait retourner `[1, 2, 3]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
  [1, 2, 3]
);
```

`dropElements([1, 2, 3, 4], function(n) {return n > 5;})` devrait retourner `[]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
  []
);
```

`dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})` devrait retourner `[7, 4]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
  [7, 4]
);
```

`dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})` devrait retourner `[3, 9, 2]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
  [3, 9, 2]
);
```

# --seed--

## --seed-contents--

```js
function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

# --solutions--

```js
function dropElements(arr, func) {
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```
