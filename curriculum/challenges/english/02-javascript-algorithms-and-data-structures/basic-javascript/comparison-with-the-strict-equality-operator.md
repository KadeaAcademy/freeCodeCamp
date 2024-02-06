---
id: 56533eb9ac21ba0edf2244d1
title: Comparaison avec l'opérateur d'égalité stricte
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
dashedName: comparison-with-the-strict-equality-operator
---

# --description--

L'égalité stricte (`===`) est la contrepartie de l'opérateur d'égalité (`==`). Toutefois, contrairement à l'opérateur d'égalité, qui tente de convertir les deux valeurs comparées en un type commun, l'opérateur d'égalité stricte n'effectue pas de conversion de type.

Si les valeurs comparées ont des types différents, elles sont considérées comme inégales et l'opérateur d'égalité stricte renvoie false.

**Exemples**

```js
3 ===  3  // true
3 === '3' // false
```

Dans le deuxième exemple, `3` est un type "Nombre" et `'3'` est de type `String`.

# --instructions--

Utilisez l'opérateur d'égalité stricte dans l'instruction `if` pour que la fonction renvoie la chaîne `Egal` lorsque `val` est strictement égal à `7`.

# --hints--

`testStrict(10)` devrait retourner la chaîne `Pas Egal`.

```js
assert(testStrict(10) === 'Pas Egal');
```

`testStrict(7)` devrait retourner la chaîne `Egal`.

```js
assert(testStrict(7) === 'Egal');
```

`testStrict("7")` devrait retourner la chaîne `Pas Egal`.

```js
assert(testStrict('7') === 'Pas Egal');
```

Vous devez utiliser l'opérateur `===`.

```js
assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrict(val) {
  if (val) { // Modifiez cette ligne
    return "Egal";
  }
  return "Pas Egal";
}

testStrict(10);
```

# --solutions--

```js
function testStrict(val) {
  if (val === 7) {
    return "Egal";
  }
  return "Pas Egal";
}
```
