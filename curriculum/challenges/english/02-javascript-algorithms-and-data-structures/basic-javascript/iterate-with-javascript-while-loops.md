---
id: cf1111c1c11feddfaeb1bdef
title: Itérer avec les boucles While de JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

Vous pouvez exécuter le même code plusieurs fois en utilisant une boucle.

Le premier type de boucle que nous allons apprendre est appelé boucle `while` parce qu'elle s'exécute tant qu'une condition spécifiée est vraie et s'arrête dès que cette condition n'est plus vraie.

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

Dans l'exemple de code ci-dessus, la boucle `while` s'exécutera 5 fois et ajoutera les chiffres 0 à 4 à `ourArray`.

Essayons de faire fonctionner une boucle while en ajoutant des valeurs à un tableau.

# --instructions--

Ajoutez les nombres 5 à 0 (inclus) dans l'ordre décroissant à `myArray` en utilisant une boucle `while`.

# --hints--

Vous devriez utiliser une boucle `while` pour cela.

```js
assert(code.match(/while/g));
```

`myArray` devrait être égal à `[5, 4, 3, 2, 1, 0]`.

```js
assert.deepEqual(myArray, [5, 4, 3, 2, 1, 0]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Ne changez que le code en dessous de cette ligne

```

# --solutions--

```js
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
```
