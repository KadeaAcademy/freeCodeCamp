---
id: 5679ceb97cbaa8c51670a16b
title: Renvoyer des valeurs booléennes à partir de fonctions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp62qAQ'
forumTopicId: 18273
dashedName: returning-boolean-values-from-functions
---

# --description--

Vous vous souvenez peut-être de [Comparaison avec l'opérateur d'égalité](/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator) que tous les opérateurs de comparaison retournent une valeur booléenne `true` ou `false`.

Parfois, on utilise une instruction `if/else` pour effectuer une comparaison, comme ceci :

```js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

Mais il y a un meilleur moyen de le faire. Puisque `===` renvoie `true` ou `false`, nous pouvons renvoyer le résultat de la comparaison :

```js
function isEqual(a, b) {
  return a === b;
}
```

# --instructions--

Modifie la fonction `isLess` en supprimant les instructions `if/else`.

# --hints--

`isLess(10, 15)` devrait retourner `true`

```js
assert(isLess(10, 15) === true);
```

`isLess(15, 10)` devrait retourner `false`

```js
assert(isLess(15, 10) === false);
```

Vous ne devez pas utiliser d'instructions `if` ou `else`.

```js
assert(!/if|else/g.test(code));
```

# --seed--

## --seed-contents--

```js
function isLess(a, b) {
  // Ne changez que le code en dessous de cette ligne
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Ne changez que le code au-dessus de cette ligne
}

isLess(10, 15);
```

# --solutions--

```js
function isLess(a, b) {
  return a < b;
}
```
