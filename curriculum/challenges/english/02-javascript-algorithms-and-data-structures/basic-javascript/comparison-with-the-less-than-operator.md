---
id: 56533eb9ac21ba0edf2244d6
title: Comparaison avec l'opérateur inférieur à
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVRWtB'
forumTopicId: 16789
dashedName: comparison-with-the-less-than-operator
---

# --description--

L'opérateur inférieur à (`<`) compare les valeurs de deux nombres. Si le nombre à gauche est inférieur au nombre à droite, il renvoie `true`. Sinon, il renvoie `false`. Comme l'opérateur d'égalité, l'opérateur <dfn>inférieur à</dfn> convertit les types de données pendant la comparaison.

**Exemples**

```js
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
```

# --instructions--

Ajoutez l'opérateur <dfn>inférieur à</dfn> sur les lignes indiquées afin que les déclarations de retour aient un sens.

# --hints--

`testLessThan(0)` devrait retourner la chaîne `Moins de 25`.

```js
assert(testLessThan(0) === 'Moins de 25');
```

`testLessThan(24)` devrait retourner la chaîne `Moins de 25`

```js
assert(testLessThan(24) === 'Moins de 25');
```

`testLessThan(25)` devrait retourner la chaîne `Moins de 55`

```js
assert(testLessThan(25) === 'Moins de 55');
```

`testLessThan(54)` devrait retourner la chaîne `Moins de 55`

```js
assert(testLessThan(54) === 'Moins de 55');
```

`testLessThan(55)` devrait retourner la chaîne `55 ou plus`

```js
assert(testLessThan(55) === '55 ou plus');
```

`testLessThan(99)` devrait retourner la chaîne `55 ou plus`

```js
assert(testLessThan(99) === '55 ou plus');
```

You should use the `<` operator at least twice

```js
assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessThan(val) {
  if (val) {  // Modifiez cette ligne
    return "Moins de 25";
  }

  if (val) {  // Modifiez cette ligne
    return "Moins de 55";
  }

  return "55 ou plus";
}

testLessThan(10);
```

# --solutions--

```js
function testLessThan(val) {
  if (val < 25) {  // Modifiez cette ligne
    return "Moins de 25";
  }

  if (val < 55) {  // Modifiez cette ligne
    return "Moins de 55";
  }

  return "55 ou plus";
}
```
