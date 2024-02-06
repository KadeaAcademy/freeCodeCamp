---
id: 598e8944f009e646fc236146
title: Comprendre la valeur indéfinie renvoyée par une fonction
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

Une fonction peut inclure l'instruction `return`, mais ce n'est pas obligatoire. Dans le cas où la fonction n'a pas d'instruction `return`, lorsque vous l'appelez, la fonction traite le code interne mais la valeur retournée est `undefined`.

**Example**

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

`addSum` est une fonction sans instruction 'return'. La fonction modifiera la variable globale `sum` mais la valeur retournée par la fonction est `undefined`.

# --instructions--

Créez une fonction `addFive` sans aucun argument. Cette fonction ajoute 5 à la variable `sum`, mais sa valeur retournée est `undefined`.

# --hints--

`addFive` devrait être une fonction.

```js
assert(typeof addFive === 'function');
```

Une fois les deux fonctions exécutées, la "somme" (`sum`) devrait être égale à "8".

```js
assert(sum === 8);
```

La valeur retournée par `addFive` devrait être `undefined`.

```js
assert(addFive() === undefined);
```

Dans la fonction `addFive`, vous devez ajouter `5` à la variable `sum`.

```js
assert(
  __helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/)
);
```

# --seed--

## --seed-contents--

```js
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Ne changez que le code en dessous de cette ligne


// Ne changez que le code au-dessus de cette ligne

addThree();
addFive();
```

# --solutions--

```js
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
```
