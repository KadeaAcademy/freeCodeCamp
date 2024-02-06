---
id: 587d7b88367417b2b2512b47
title: Utiliser le paramètre Rest avec les paramètres de fonction
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

Afin de nous aider à créer des fonctions plus flexibles, ES6 introduit le <dfn>paramètre rest</dfn> pour les paramètres de fonction. Avec le paramètre rest, vous pouvez créer des fonctions qui prennent un nombre variable d'arguments. Ces arguments sont stockés dans un tableau auquel on peut accéder ultérieurement depuis l'intérieur de la fonction.

Regardez ce code :

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

La console affichera les chaînes `Vous avez passé 3 arguments.` et `Vous avez passé 4 arguments.`.

Le paramètre rest élimine le besoin de vérifier le tableau `args` et nous permet d'appliquer `map()`, `filter()` et `reduce()` sur le tableau des paramètres.

# --instructions--

Modifiez la fonction `sum` en utilisant le paramètre rest de manière à ce que la fonction `sum` soit capable de prendre un nombre quelconque d'arguments et de retourner leur somme.

# --hints--

Le résultat de `sum(0,1,2)` doit être 3.

```js
assert(sum(0, 1, 2) === 3);
```

Le résultat de `sum(1,2,3,4)` doit être 10.

```js
assert(sum(1, 2, 3, 4) === 10);
```

Le résultat de `sum(5)` devrait être 5.

```js
assert(sum(5) === 5);
```

Le résultat de `sum()` devrait être 0

```js
assert(sum() === 0);
```

`sum` devrait être une fonction fléchée qui utilise la syntaxe du paramètre rest (`...`) sur le paramètre `args`.

```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
```

# --solutions--

```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
```
