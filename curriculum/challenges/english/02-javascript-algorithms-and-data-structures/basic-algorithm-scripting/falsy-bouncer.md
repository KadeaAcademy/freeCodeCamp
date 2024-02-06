---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
challengeType: 5
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

Supprime toutes les valeurs falsy d'un tableau.

Les valeurs faibles en JavaScript sont `false`, `null`, `0`, `""`, `undefined`, et `NaN`.

Astuce : Essayez de convertir chaque valeur en booléen.

# --hints--

`bouncer([7, "ate", "", false, 9])` doit retourner `[7, "ate", 9]`.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` doit retourner `["a", "b", "c"]`.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` doit retourner `[]`.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` doit retourner `[1, 2]`.

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

# --seed--

## --seed-contents--

```js
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

# --solutions--

```js
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, "ate", "", false, 9]);
```
