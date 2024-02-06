---
id: 56533eb9ac21ba0edf2244d3
title: Comparaison avec l'opérateur d'inégalité stricte
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

L'opérateur d'inégalité stricte (`!==`) est l'opposé logique de l'opérateur d'égalité stricte. Il signifie "Strictement non égal" et renvoie `false` là où une égalité stricte renverrait `true` et *vice versa*. L'opérateur d'inégalité stricte ne convertit pas les types de données.

**Exemples**

```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

# --instructions--

Ajoutez l'opérateur d'inégalité stricte à l'instruction `if` pour que la fonction renvoie la chaîne `Pas Egal` lorsque `val` n'est pas strictement égal à `17`.

# --hints--

`testStrictNotEqual(17)` devrait retourner la chaîne `Egal`.

```js
assert(testStrictNotEqual(17) === 'Egal');
```

`testStrictNotEqual("17")` devrait retourner la chaîne `Pas Egal`.

```js
assert(testStrictNotEqual('17') === 'Pas Egal');
```

`testStrictNotEqual(12)` devrait retourner la chaîne `Pas Egal`.

```js
assert(testStrictNotEqual(12) === 'Pas Egal');
```

`testStrictNotEqual("bob")` devrait retourner la chaîne `Pas Egal`.

```js
assert(testStrictNotEqual('bob') === 'Pas Egal');
```

Vous devez utiliser l'opérateur `!==`.

```js
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Modifiez cette ligne
    return "Pas Egal";
  }
  return "Egal";
}

testStrictNotEqual(10);
```

# --solutions--

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Pas Egal";
  }
  return "Egal";
}
```
