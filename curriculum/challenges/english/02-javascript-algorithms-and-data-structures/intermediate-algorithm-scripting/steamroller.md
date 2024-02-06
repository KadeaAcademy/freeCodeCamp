---
id: ab306dbdcc907c7ddfc30830
title: Rouleau compresseur
challengeType: 5
forumTopicId: 16079
dashedName: steamroller
---

# --description--

Aplatir un tableau imbriqué. Vous devez tenir compte des différents niveaux d'imbrication.

# --hints--

`steamrollArray([[["a"]], [["b"]]])` devrait retourner `["a", "b"]`.

```js
assert.deepEqual(steamrollArray([[['a']], [['b']]]), ['a', 'b']);
```

`steamrollArray([1, [2], [3, [[4]]]])` devrait retourner `[1, 2, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
```

`steamrollArray([1, [], [3, [[4]]]])` devrait retourner `[1, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
```

`steamrollArray([1, {}, [3, [[4]]]])` devrait retourner `[1, {}, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
```

Votre solution ne doit pas utiliser les méthodes `Array.prototype.flat()` ou `Array.prototype.flatMap()`.

```js
assert(!code.match(/\.\s*flat\s*\(/) && !code.match(/\.\s*flatMap\s*\(/));
```

# --seed--

## --seed-contents--

```js
function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
```

# --solutions--

```js
function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  var out = [];
  arr.forEach(function(e) {
    steamrollArray(e).forEach(function(v) {
      out.push(v);
    });
  });
  return out;
}
```
