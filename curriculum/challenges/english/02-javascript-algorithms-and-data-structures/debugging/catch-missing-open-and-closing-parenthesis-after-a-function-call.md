---
id: 587d7b85367417b2b2512b39
title: Attraper les parenthèses ouvertes et fermées manquantes après un appel de fonction
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

Lorsqu'une fonction ou une méthode ne prend pas d'arguments, vous pouvez oublier d'inclure les parenthèses ouvrantes et fermantes (vides) lors de son appel. Il arrive souvent que le résultat d'un appel de fonction soit enregistré dans une variable pour une autre utilisation dans votre code. Cette erreur peut être détectée en enregistrant les valeurs des variables (ou leurs types) dans la console et en constatant que l'une d'entre elles est définie comme une référence de fonction, au lieu de la valeur attendue que la fonction renvoie.

Les variables de l'exemple suivant sont différentes :

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

Ici, `varOne` est la fonction `myFunction`, et `varTwo` est la chaîne `You rock!`.

# --instructions--

Corrigez le code pour que la variable `result` soit définie comme la valeur renvoyée par l'appel de la fonction `getNine`.

# --hints--

Votre code doit ajuster la variable `result` pour qu'elle prenne la valeur du nombre que la fonction `getNine` renvoie.

```js
assert(result == 9);
```

Votre code doit appeler la fonction `getNine`.

```js
assert(code.match(/getNine\(\)/g).length == 2);
```

# --seed--

## --seed-contents--

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

# --solutions--

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```
