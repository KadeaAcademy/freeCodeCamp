---
id: 56533eb9ac21ba0edf2244d7
title: Comparaison avec l'opérateur "inférieur ou égal à" 
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
dashedName: comparison-with-the-less-than-or-equal-to-operator
---

# --description--

L'opérateur inférieur ou égal à (`<=`) compare les valeurs de deux nombres. Si le nombre à gauche est inférieur ou égal au nombre à droite, il renvoie `true`. Si le nombre à gauche est supérieur au nombre à droite, il renvoie `false`. Comme l'opérateur d'égalité, l'opérateur inférieur ou égal à convertit les types de données.

**Exemples**

```js
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
```

# --instructions--

Ajoutez l'opérateur inférieur ou égal à sur les lignes indiquées afin que les déclarations de retour aient un sens.

# --hints--

`testLessOrEqual(0)` devrait retourner la chaîne `Inférieur ou égal à 12`.

```js
assert(testLessOrEqual(0) === 'Inférieur ou égal à 12');
```

`testLessOrEqual(11)` devrait retourner la chaîne `Inférieur ou égal à 12`

```js
assert(testLessOrEqual(11) === 'Inférieur ou égal à 12');
```

`testLessOrEqual(12)` devrait retourner la chaîne `Inférieur ou égal à 12`

```js
assert(testLessOrEqual(12) === 'Inférieur ou égal à 12');
```

`testLessOrEqual(23)` devrait retourner la chaîne `Inférieur ou égal à 24`

```js
assert(testLessOrEqual(23) === 'Inférieur ou égal à 24');
```

`testLessOrEqual(24)` devrait retourner la chaîne `Inférieur ou égal à 24`

```js
assert(testLessOrEqual(24) === 'Inférieur ou égal à 24');
```

`testLessOrEqual(25)` devrait retourner la chaîne `Plus de 24`

```js
assert(testLessOrEqual(25) === 'Plus de 24');
```

`testLessOrEqual(55)` devrait retourner la chaîne `Plus de 24`

```js
assert(testLessOrEqual(55) === 'Plus de 24');
```

Vous devez utiliser l'opérateur `<=` au moins deux fois.

```js
assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Inférieur ou égal à 12";
  }

  if (val) {  // Change this line
    return "Inférieur ou égal à 24";
  }

  return "Plus de 24";
}

testLessOrEqual(10);
```

# --solutions--

```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Inférieur ou égal à 12";
  }

  if (val <= 24) {  // Change this line
    return "Inférieur ou égal à 24";
  }

  return "Plus de 24";
}
```
