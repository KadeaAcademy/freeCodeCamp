---
id: a3566b1109230028080c9345
title: Additionner tous les nombres d'une plage
challengeType: 5
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

Nous vous transmettons un tableau de deux nombres. La fonction retourne la somme de ces deux nombres plus la somme de tous les nombres qui les séparent. Le plus petit nombre n'est pas toujours le premier.

Par exemple, `sumAll([4,1])` devrait retourner `10` parce que la somme de tous les nombres entre 1 et 4 (les deux inclus) est `10`.

# --hints--

`sumAll([1, 4])` doit retourner un nombre.

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])` devrait retourner 10.

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])` devrait retourner 10.

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])` devrait retourner 45.

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])` devrait retourner 45.

```js
assert.deepEqual(sumAll([10, 5]), 45);
```

# --seed--

## --seed-contents--

```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

# --solutions--

```js
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
```
