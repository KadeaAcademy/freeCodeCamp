---
id: ae9defd7acaf69703ab432ea
title: Plus petit multiple commun
challengeType: 5
forumTopicId: 16075
dashedName: smallest-common-multiple
---

# --description--

Trouvez le plus petit multiple commun des paramètres fournis qui peut être divisé uniformément par les deux, ainsi que par tous les nombres séquentiels dans l'intervalle entre ces paramètres.

L'intervalle sera un tableau de deux nombres qui ne seront pas nécessairement dans l'ordre numérique.

Par exemple, si l'on vous donne 1 et 3, trouvez le plus petit multiple commun de 1 et 3 qui soit également divisible par tous les nombres situés entre 1 et 3. La réponse serait ici 6.

# --hints--

`smallestCommons([1, 5])` devrait retourner un nombre.

```js
assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
```

`smallestCommons([1, 5])` devrait retourner 60.

```js
assert.deepEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` devrait retourner 60.

```js
assert.deepEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` devrait retourner 2520.

```js
assert.deepEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` devrait retourner 360360.

```js
assert.deepEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` devrait retourner 6056820.

```js
assert.deepEqual(smallestCommons([23, 18]), 6056820);
```

# --seed--

## --seed-contents--

```js
function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);
```

# --solutions--

```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```
