---
id: 5cdafbb0291309899753167f
title: Créer une promesse en JavaScript
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

Une promesse en JavaScript est exactement ce à quoi elle ressemble : vous l'utilisez pour promettre de faire quelque chose, généralement de manière asynchrone. Lorsque la tâche est terminée, vous remplissez votre promesse ou vous ne la remplissez pas. La fonction `Promise` est une fonction constructeur, vous devez donc utiliser le mot-clé `new` pour en créer une. Elle prend une fonction, comme argument, avec deux paramètres - `resolve` et `reject`. Ce sont des méthodes utilisées pour déterminer le résultat de la promesse. La syntaxe ressemble à ceci :

```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

Créez une nouvelle promesse appelée `makeServerRequest`. Passez une fonction avec les paramètres `resolve` et `reject` au constructeur.

# --hints--

Vous devez assigner une promesse à une variable déclarée nommée `makeServerRequest`.

```js
assert(makeServerRequest instanceof Promise);
```

Votre promesse devrait recevoir une fonction avec `resolve` et `reject` comme paramètres.

```js
assert(
  code.match(
    /Promise\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g
  )
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```
