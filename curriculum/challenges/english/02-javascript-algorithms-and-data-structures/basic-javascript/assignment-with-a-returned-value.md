---
id: 56533eb9ac21ba0edf2244c3
title: Affectation avec une valeur renvoyée
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

Si vous vous souvenez de notre discussion sur [le stockage des valeurs avec l'opérateur d'affectation](/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator), tout ce qui se trouve à droite du signe égal est résolu avant l'affectation de la valeur. Cela signifie que nous pouvons prendre la valeur de retour d'une fonction et l'affecter à une variable.

Supposons que nous ayons prédéfini une fonction `sum` qui ajoute deux nombres ensemble, alors :

```js
ourSum = sum(5, 12);
```

appelle la fonction `sum`, qui retourne la valeur `17` et l'affecte à la variable `ourSum`.

# --instructions--

Appelez la fonction `processArg` avec pour argument `7` et affectez sa valeur de retour à la variable `processed`.

# --hints--

`processed` devrait avoir comme valeur `2`.

```js
assert(processed === 2);
```

Vous devez affecter `processArg` à `processed`.

```js
assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){return "processed = " + processed})();
```

## --seed-contents--

```js
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Ne changez que le code en dessous de cette ligne

```

# --solutions--

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```
