---
id: 56533eb9ac21ba0edf2244d4
title: Comparaison avec l'opérateur plus grand que
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
dashedName: comparison-with-the-greater-than-operator
---

# --description--

L'opérateur supérieur à (`>`) compare les valeurs de deux nombres. Si le nombre à gauche est plus grand que le nombre à droite, il renvoie `true`. Sinon, il renvoie `false`.

Comme l'opérateur d'égalité, l'opérateur <dfn>supérieur à</dfn> convertit les types de données des valeurs lors de la comparaison.

**Exemples**

```js
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
```

# --instructions--

Ajoutez l'opérateur <dfn>plus grand que</dfn> aux lignes indiquées afin que les déclarations de retour aient un sens.

# --hints--

`testGreaterThan(0)` devrait retourner la chaîne `10 ou moins`.

```js
assert(testGreaterThan(0) === '10 ou moins');
```

`testGreaterThan(10)` doit retourner la chaîne `10 ou moins`

```js
assert(testGreaterThan(10) === '10 ou moins');
```

`testGreaterThan(11)` doit retourner la chaîne `Plus de 10`

```js
assert(testGreaterThan(11) === 'Plus de 10');
```

`testGreaterThan(99)` doit retourner la chaîne `Plus de 10`

```js
assert(testGreaterThan(99) === 'Plus de 10');
```

`testGreaterThan(100)` doit retourner la chaîne `Plus de 10`

```js
assert(testGreaterThan(100) === 'Plus de 10');
```

`testGreaterThan(101)` doit retourner la chaîne `Plus de 100`

```js
assert(testGreaterThan(101) === 'Plus de 100');
```

`testGreaterThan(150)` doit retourner la chaîne `Plus de 100`

```js
assert(testGreaterThan(150) === 'Plus de 100');
```

Vous devez utiliser l'opérateur `>` au moins deux fois.

```js
assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterThan(val) {
  if (val) {  // Modifiez cette ligne
    return "Plus de 100";
  }

  if (val) {  // Modifiez cette ligne
    return "Plus de 10";
  }

  return "10 ou moins";
}

testGreaterThan(10);
```

# --solutions--

```js
function testGreaterThan(val) {
  if (val > 100) {  // Modifiez cette ligne
    return "Plus de 100";
  }
  if (val > 10) {  // Modifiez cette ligne
    return "Plus de 10";
  }
  return "10 ou moins";
}
```
