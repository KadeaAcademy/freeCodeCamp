---
id: 5675e877dbd60be8ad28edc6
title: Parcourir un tableau avec une boucle For
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

Une tâche courante en JavaScript est de parcourir le contenu d'un tableau. Une façon de le faire est d'utiliser une boucle `for`. Ce code va afficher chaque élément du tableau `arr` sur la console :

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Rappelez-vous que les tableaux ont une indexation basée sur zéro, ce qui signifie que le dernier indice du tableau est `length - 1`. Notre condition pour cette boucle est `i < arr.length`, ce qui arrête la boucle lorsque `i` est égal à `length`. Dans ce cas, la dernière itération est `i === 4`, c'est-à-dire quand `i` devient égal à `arr.length - 1` et sort `6` sur la console. Ensuite, `i` passe à `5`, et la boucle se termine car `i < arr.length` est `false`.

# --instructions--

Déclarez et initialisez une variable `total` à `0`. Utilisez une boucle `for` pour ajouter la valeur de chaque élément du tableau `myArr` à `total`.

# --hints--

`total` doit être déclaré et initialisé à 0.

```js
assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

`total` devrait être égal à 20.

```js
assert(total === 20);
```

Vous devez utiliser une boucle `for` pour itérer dans `myArr`.

```js
assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
```

Vous ne devez pas essayer d'attribuer directement la valeur 20 à `total`.

```js
assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Ne changez que le code en dessous de cette ligne

```

# --solutions--

```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
