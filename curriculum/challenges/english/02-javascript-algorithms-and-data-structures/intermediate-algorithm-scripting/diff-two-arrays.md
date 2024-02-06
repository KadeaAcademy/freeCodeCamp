---
id: a5de63ebea8dbee56860f4f2
title: Différence entre deux tableaux
challengeType: 5
forumTopicId: 16008
dashedName: diff-two-arrays
---

# --description--

Compare deux tableaux et renvoie un nouveau tableau contenant tous les éléments qui ne se trouvent que dans l'un des deux tableaux donnés, mais pas dans les deux. En d'autres termes, il s'agit de la différence symétrique des deux tableaux.

**Note:** Vous pouvez retourner le tableau avec ses éléments dans n'importe quel ordre.

# --hints--

`diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])` devrait retourner un tableau.

```js
assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === 'object');
```

`["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` devrait retourner `["pink wool"]`.

```js
assert.sameMembers(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ),
  ['pink wool']
);
```

`["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` doit retourner un tableau avec un seul élément.

```js
assert(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 1
);
```

`["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` devrait retourner `["diorite", "pink wool"]`.

```js
assert.sameMembers(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ),
  ['diorite', 'pink wool']
);
```

`["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` doit retourner un tableau avec deux éléments.

```js
assert(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 2
);
```

`["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` devrait retourner `[]`.

```js
assert.sameMembers(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  ),
  []
);
```

`["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` doit retourner un tableau vide.

```js
assert(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 0
);
```

`[1, 2, 3, 5], [1, 2, 3, 4, 5]` devrait retourner `[4]`.

```js
assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
```

`[1, 2, 3, 5], [1, 2, 3, 4, 5]` doit retourner un tableau avec un seul élément.

```js
assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length === 1);
```

`[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` devrait retourner `["piglet", 4]`.

```js
assert.sameMembers(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]), [
  'piglet',
  4
]);
```

`[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` doit retourner un tableau avec deux éléments.

```js
assert(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]).length === 2);
```

`[], ["snuffleupagus", "cookie monster", "elmo"]` devrait retourner `["snuffleupagus", "cookie monster", "elmo"]`.

```js
assert.sameMembers(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']), [
  'snuffleupagus',
  'cookie monster',
  'elmo'
]);
```

`[], ["snuffleupagus", "cookie monster", "elmo"]` doit renvoyer un tableau à trois éléments.

```js
assert(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']).length === 3);
```

`[1, "calf", 3, "piglet"], [7, "filly"]` devrait retourner `[1, "calf", 3, "piglet", 7, "filly"]`.

```js
assert.sameMembers(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']), [
  1,
  'calf',
  3,
  'piglet',
  7,
  'filly'
]);
```

`[1, "calf", 3, "piglet"], [7, "filly"]` doit renvoyer un tableau de six éléments.

```js
assert(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']).length === 6);
```

# --seed--

## --seed-contents--

```js
function diffArray(arr1, arr2) {
  const newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

# --solutions--

```js
function diffArray(arr1, arr2) {
  const newArr = [];
  const h1 = Object.create(null);
  arr1.forEach(function(e) {
    h1[e] = e;
  });
  const h2 = Object.create(null);
  arr2.forEach(function(e) {
    h2[e] = e;
  });

  Object.keys(h1).forEach(function(e) {
     if (!(e in h2)) newArr.push(h1[e]);
  });
  Object.keys(h2).forEach(function(e) {
     if (!(e in h1)) newArr.push(h2[e]);
  });
  return newArr;
}
```
