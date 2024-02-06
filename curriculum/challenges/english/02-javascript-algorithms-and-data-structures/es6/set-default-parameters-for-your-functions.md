---
id: 587d7b88367417b2b2512b46
title: Définir les paramètres par défaut de vos fonctions
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

Afin de nous aider à créer des fonctions plus flexibles, ES6 introduit des <dfn>paramètres par défaut</dfn> pour les fonctions.

Regardez ce code :

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

La console affichera les chaînes `Hello John` et `Hello Anonymous`.

Le paramètre par défaut intervient lorsque l'argument n'est pas spécifié (il est indéfini). Comme vous pouvez le voir dans l'exemple ci-dessus, le paramètre `name` recevra sa valeur par défaut `Anonymous` si vous ne fournissez pas de valeur pour le paramètre. Vous pouvez ajouter des valeurs par défaut pour autant de paramètres que vous le souhaitez.

# --instructions--

Modifiez la fonction `increment` en ajoutant des paramètres par défaut afin qu'elle ajoute 1 à `number` si `value` n'est pas spécifié.

# --hints--

Le résultat de `increment(5, 2)` devrait être `7`.

```js
assert(increment(5, 2) === 7);
```

Le résultat de `increment(5)` devrait être `6`.

```js
assert(increment(5) === 6);
```

Une valeur de paramètre par défaut de `1` doit être utilisée pour `value`.

```js
assert(code.match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// Ne changez que le code en dessous de cette ligne
const increment = (number, value) => number + value;
// Ne changez que le code au-dessus de cette ligne
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```
