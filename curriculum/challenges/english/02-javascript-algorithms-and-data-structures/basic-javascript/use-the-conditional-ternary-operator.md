---
id: 587d7b7e367417b2b2512b24
title: Utiliser l'opérateur conditionnel (ternaire)
challengeType: 1
forumTopicId: 301181
dashedName: use-the-conditional-ternary-operator
---

# --description--

L'<dfn>opérateur conditionnel</dfn>, également appelé <dfn>opérateur ternaire</dfn>, peut être utilisé comme une expression if-else sur une ligne.

La syntaxe est `a ? b : c`, où `a` est la condition, `b` est le code à exécuter lorsque la condition retourne `vrai`, et `c` est le code à exécuter lorsque la condition retourne `faux`.

La fonction suivante utilise une instruction `if/else` pour vérifier une condition :

```js
function findGreater(a, b) {
  if(a > b) {
    return "a est plus grand";
  }
  else {
    return "b est plus grand ou égal";
  }
}
```

Cela peut être réécrit en utilisant l'opérateur conditionnel :

```js
function findGreater(a, b) {
  return a > b ? "a est plus grand" : "b est plus grand ou égal";
}
```

# --instructions--

Utilisez l'opérateur conditionnel dans la fonction `checkEqual` pour vérifier si deux nombres sont égaux ou non. La fonction doit retourner soit la chaîne `Equal`, soit la chaîne `Not Equal`

# --hints--

`checkEqual` devrait utiliser l'opérateur conditionnel

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

`checkEqual(1, 2)` devrait retourner la chaîne de caractères `Not Equal`.

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

`checkEqual(1, 1)` devrait retourner la chaîne de caractères `Equal`

```js
assert(checkEqual(1, 1) === 'Equal');
```

`checkEqual(1, -1)` devrait retourner la chaîne de caractères `Not Equal`

```js
assert(checkEqual(1, -1) === 'Not Equal');
```

# --seed--

## --seed-contents--

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);
```

# --solutions--

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```
