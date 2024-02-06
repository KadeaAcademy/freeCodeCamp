---
id: 56533eb9ac21ba0edf2244d5
title: Comparaison avec l'opérateur plus grand que ou égal à
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

L'opérateur supérieur ou égal à (`>=`) compare les valeurs de deux nombres. Si le nombre de gauche est supérieur ou égal à celui de droite, il renvoie "vrai". Sinon, il renvoie " faux ".

Comme l'opérateur d'égalité, l'<dfn>opérateur supérieur ou égal à</dfn> convertit les types de données pendant la comparaison.

**Examples**

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

# --instructions--

Ajoutez l'<dfn>opérateur supérieur ou égal à</dfn> aux lignes indiquées afin que les instructions de retour aient un sens.

# --hints--

`testGreaterOrEqual(0)` devrait retourner la chaîne `Moins de 10`.

```js
assert(testGreaterOrEqual(0) === 'Moins de 10');
```

`testGreaterOrEqual(9)` devrait retourner la chaîne `Moins de 10`.

```js
assert(testGreaterOrEqual(9) === 'Moins de 10');
```

`testGreaterOrEqual(10)` devrait retourner la chaîne `10 ou plus`.

```js
assert(testGreaterOrEqual(10) === '10 ou plus');
```

`testGreaterOrEqual(11)` devrait retourner la chaîne `10 ou plus`.

```js
assert(testGreaterOrEqual(11) === '10 ou plus');
```

`testGreaterOrEqual(19)` devrait renvoyer la chaîne `10 ou plus`.

```js
assert(testGreaterOrEqual(19) === '10 ou plus');
```

`testGreaterOrEqual(100)` devrait renvoyer la chaîne `20 ou plus`.

```js
assert(testGreaterOrEqual(100) === '20 ou plus');
```

`testGreaterOrEqual(21)` devrait renvoyer la chaîne `20 ou plus`.

```js
assert(testGreaterOrEqual(21) === '20 ou plus');
```

Vous devez utiliser l'opérateur ">=" au moins deux fois.

```js
assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // Modifiez cette ligne
    return "20 ou plus";
  }

  if (val) {  // Modifiez cette ligne
    return "10 ou plus";
  }

  return "Moins de 10";
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Modifiez cette ligne
    return "20 ou plus";
  }

  if (val >= 10) {  // Modifiez cette ligne
    return "10 ou plus";
  }

  return "Moins de 10";
}
```
