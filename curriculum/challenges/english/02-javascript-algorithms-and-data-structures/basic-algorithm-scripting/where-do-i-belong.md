---
id: a24c1a4622e3c05097f71d67
title: Quelle est ma place ?
challengeType: 5
forumTopicId: 16094
dashedName: where-do-i-belong
---

# --description--

Renvoie l'indice le plus bas auquel une valeur (deuxième argument) doit être insérée dans un tableau (premier argument) une fois qu'il a été trié. La valeur retournée doit être un nombre.

Par exemple, `getIndexToIns([1,2,3,4], 1.5)` devrait retourner `1` car il est supérieur à `1` (index 0), mais inférieur à `2` (index 1).

De même, `getIndexToIns([20,3,5], 19)` devrait retourner `2` car une fois le tableau trié, il ressemblera à `[3,5,20]` et `19` est inférieur à `20` (index 2) et supérieur à `5` (index 1).

# --hints--

`getIndexToIns([10, 20, 30, 40, 50], 35)` doit retourner `3`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
```

`getIndexToIns([10, 20, 30, 40, 50], 35)` doit retourner un nombre.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 35) === 'number');
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` doit retourner `2`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` doit retourner un nombre.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 30) === 'number');
```

`getIndexToIns([40, 60], 50)` doit retourner `1`.

```js
assert(getIndexToIns([40, 60], 50) === 1);
```

`getIndexToIns([40, 60], 50)` doit retourner un nombre.

```js
assert(typeof getIndexToIns([40, 60], 50) === 'number');
```

`getIndexToIns([3, 10, 5], 3)` doit retourner `0`.

```js
assert(getIndexToIns([3, 10, 5], 3) === 0);
```

`getIndexToIns([3, 10, 5], 3)` doit retourner un nombre.

```js
assert(typeof getIndexToIns([3, 10, 5], 3) === 'number');
```

`getIndexToIns([5, 3, 20, 3], 5)` doit retourner `2`.

```js
assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
```

`getIndexToIns([5, 3, 20, 3], 5)` doit retourner un nombre.

```js
assert(typeof getIndexToIns([5, 3, 20, 3], 5) === 'number');
```

`getIndexToIns([2, 20, 10], 19)` doit retourner `2`.

```js
assert(getIndexToIns([2, 20, 10], 19) === 2);
```

`getIndexToIns([2, 20, 10], 19)` doit retourner un nombre.

```js
assert(typeof getIndexToIns([2, 20, 10], 19) === 'number');
```

`getIndexToIns([2, 5, 10], 15)` doit retourner `3`.

```js
assert(getIndexToIns([2, 5, 10], 15) === 3);
```

`getIndexToIns([2, 5, 10], 15)` doit retourner a number.

```js
assert(typeof getIndexToIns([2, 5, 10], 15) === 'number');
```

`getIndexToIns([], 1)` doit retourner `0`.

```js
assert(getIndexToIns([], 1) === 0);
```

`getIndexToIns([], 1)` doit retourner a number.

```js
assert(typeof getIndexToIns([], 1) === 'number');
```

# --seed--

## --seed-contents--

```js
function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);
```

# --solutions--

```js
function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);
```
