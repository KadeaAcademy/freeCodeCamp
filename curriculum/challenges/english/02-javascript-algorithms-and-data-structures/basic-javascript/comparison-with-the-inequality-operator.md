---
id: 56533eb9ac21ba0edf2244d2
title: Comparaison avec l'opérateur d'inégalité
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
forumTopicId: 16787
dashedName: comparison-with-the-inequality-operator
---

# --description--

L'opérateur d'inégalité (`!=`) est l'opposé de l'opérateur d'égalité. Il signifie non égal et renvoie `false` alors que l'égalité renvoie `true` et *vice versa*. Comme l'opérateur d'égalité, l'opérateur d'inégalité convertit les types de données des valeurs lors de la comparaison.

**Examples**

```js
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
```

# --instructions--

Ajoutez l'opérateur d'inégalité `!=` dans l'instruction `if` pour que la fonction renvoie la chaîne `Pas Egal` lorsque `val` n'est pas équivalent à `99`.

# --hints--

`testNotEqual(99)` devrait retourner la chaîne `Egal`.

```js
assert(testNotEqual(99) === 'Egal');
```

`testNotEqual("99")` devrait retourner la chaîne `Egal`.

```js
assert(testNotEqual('99') === 'Egal');
```

`testNotEqual(12)` doit retourner la chaîne `Pas Egal`

```js
assert(testNotEqual(12) === 'Pas Egal');
```

`testNotEqual("12")` devrait renvoyer la chaîne `Pas Egal`.

```js
assert(testNotEqual('12') === 'Pas Egal');
```

`testNotEqual("bob")` doit retourner la chaîne `Pas Egal`

```js
assert(testNotEqual('bob') === 'Pas Egal');
```

Vous devez utiliser l'opérateur `!=`.

```js
assert(code.match(/(?!!==)!=/));
```

# --seed--

## --seed-contents--

```js
// Setup
function testNotEqual(val) {
  if (val) { // Modifiez cette ligne
    return "Pas Egal";
  }
  return "Egal";
}

testNotEqual(10);
```

# --solutions--

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Pas Egal";
  }
  return "Egal";
}
```
