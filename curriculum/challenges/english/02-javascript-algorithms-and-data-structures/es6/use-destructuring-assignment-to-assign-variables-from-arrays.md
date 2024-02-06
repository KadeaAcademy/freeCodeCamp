---
id: 587d7b89367417b2b2512b4b
title: Utiliser l'affectation de déstructuration pour affecter des variables à partir de tableaux
challengeType: 1
forumTopicId: 301213
dashedName: use-destructuring-assignment-to-assign-variables-from-arrays
---

# --description--

ES6 rend la déstructuration des tableaux aussi facile que la déstructuration des objets.

L'une des principales différences entre l'opérateur d'étalement et la déstructuration des tableaux est que l'opérateur d'étalement décompose tout le contenu d'un tableau en une liste séparée par des virgules. Par conséquent, vous ne pouvez pas choisir les éléments que vous souhaitez affecter à des variables.

La déstructuration d'un tableau nous permet de faire exactement cela :

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

La console affiche les valeurs de `a` et `b` comme `1, 2`.

La variable `a` est affectée à la première valeur du tableau, et `b` à la deuxième valeur du tableau. Nous pouvons également accéder à la valeur de n'importe quel indice dans un tableau avec la déstructuration en utilisant des virgules pour atteindre l'indice désiré :

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

La console affichera les valeurs de `a`, `b`, et `c` comme `1, 2, 5`.

# --instructions--

Utilisez l'affectation de déstructuration pour échanger les valeurs de `a` et `b` de sorte que `a` reçoive la valeur stockée dans `b`, et que `b` reçoive la valeur stockée dans `a`.

# --hints--

La valeur de `a` devrait être `6`, après permutation.

```js
assert(a === 6);
```

La valeur de `b` devrait être `8`, après permutation.

```js
assert(b === 8);
```

Vous devriez utiliser la déstructuration des tableaux pour échanger `a` et `b`.

```js
assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code));
```

# --seed--

## --seed-contents--

```js
let a = 8, b = 6;
// Ne changez que le code en dessous de cette ligne
```

# --solutions--

```js
let a = 8, b = 6;
[a, b] = [b, a];
```
