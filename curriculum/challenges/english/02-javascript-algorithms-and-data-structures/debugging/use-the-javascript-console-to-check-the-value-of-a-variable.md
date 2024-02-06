---
id: 587d7b83367417b2b2512b33
title: Utiliser la console JavaScript pour vérifier la valeur d'une variable
challengeType: 1
forumTopicId: 18372
dashedName: use-the-javascript-console-to-check-the-value-of-a-variable
---

# --description--

Chrome et Firefox disposent tous deux d'excellentes consoles JavaScript, également appelées DevTools, pour déboguer votre JavaScript.

Vous trouverez les outils du développeur dans le menu de Chrome ou la console Web dans le menu de Firefox. Si vous utilisez un autre navigateur, ou un téléphone portable, nous vous recommandons vivement de passer à Firefox ou Chrome de bureau.

La méthode `console.log()`, qui "imprime" la sortie de ce qui se trouve entre ses parenthèses dans la console, sera probablement l'outil de débogage le plus utile. En la plaçant à des endroits stratégiques de votre code, vous pourrez voir les valeurs intermédiaires des variables. Il est bon d'avoir une idée de ce que devrait être la sortie avant de regarder ce qu'elle est. Le fait d'avoir des points de référence pour voir l'état de vos calculs tout au long de votre code vous aidera à déterminer où se situe le problème.

Voici un exemple pour imprimer la chaîne `Hello world!` à la console :

```js
console.log('Hello world!');
```

# --instructions--

Utilisez la méthode `console.log()` pour imprimer la valeur de la variable `a` à l'endroit indiqué dans le code.

# --hints--

Votre code devrait utiliser `console.log()` pour vérifier la valeur de la variable `a`.

```js
assert(code.match(/console\.log\(a\)/g));
```

# --seed--

## --seed-contents--

```js
let a = 5;
let b = 1;
a++;
// Ne modifiez que le code en dessous de cette ligne


let sumAB = a + b;
console.log(sumAB);
```

# --solutions--

```js
var a = 5; console.log(a);
```
