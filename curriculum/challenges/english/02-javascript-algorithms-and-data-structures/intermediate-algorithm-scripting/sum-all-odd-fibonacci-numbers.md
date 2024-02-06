---
id: a5229172f011153519423690
title: Somme de tous les nombres impairs de Fibonacci
challengeType: 5
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

Étant donné un entier positif `num`, retourner la somme de tous les nombres impairs de Fibonacci qui sont inférieurs ou égaux à `num`.

Les deux premiers nombres de la suite de Fibonacci sont 1 et 1. Chaque nombre supplémentaire de la suite est la somme des deux nombres précédents. Les six premiers nombres de la suite de Fibonacci sont 1, 1, 2, 3, 5 et 8.

Par exemple, `sumFibs(10)` devrait retourner `10` car tous les nombres impairs de Fibonacci inférieurs ou égaux à `10` sont 1, 1, 3 et 5.

# --hints--

`sumFibs(1)` devrait retourner un nombre.

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` devrait retourner 1785.

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` devrait retourner 4613732.

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` devrait retourner 5.

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` devrait retourner 60696.

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` devrait retourner 135721.

```js
assert(sumFibs(75025) === 135721);
```

# --seed--

## --seed-contents--

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);
```

# --solutions--

```js
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```
