---
id: cf1391c1c11feddfaeb4bdef
title: Créer des nombres décimaux avec JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

Nous pouvons également stocker des nombres décimaux dans des variables. Les nombres décimaux sont parfois appelés <dfn>nombres à virgule flottante</dfn> ou <dfn>flottants</dfn>.

**Remarque :** Tous les nombres réels ne peuvent pas être représentés avec précision en <dfn>virgule flottante</dfn>. Cela peut entraîner des erreurs d'arrondi. [Détails ici](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems).

# --instructions--

Créez une variable `myDecimal` et donnez-lui une valeur décimale avec une partie décimale (par exemple `5.7`).

# --hints--

`myDecimal` doit être un nombre.

```js
assert(typeof myDecimal === 'number');
```

`myDecimal` doit avoir un point décimal

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
const ourDecimal = 5.7;

// Ne changez que le code sous cette ligne

```

# --solutions--

```js
const myDecimal = 9.9;
```
