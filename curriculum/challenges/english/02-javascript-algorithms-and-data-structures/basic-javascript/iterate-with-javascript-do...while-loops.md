---
id: 5a2efd662fb457916e1fe604
title: Itérer avec les boucles Do...While de JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqWGcp'
forumTopicId: 301172
dashedName: iterate-with-javascript-do---while-loops
---

# --description--

Le prochain type de boucle que vous allez apprendre s'appelle une boucle `do...while`. Elle est appelée boucle `do...while` parce qu'elle va d'abord "faire" un passage du code à l'intérieur de la boucle, quoi qu'il arrive, puis continuer à exécuter la boucle `tant que` la condition spécifiée est évaluée à `vrai`.

```js
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

L'exemple ci-dessus se comporte comme les autres types de boucles, et le tableau résultant ressemblera à `[0, 1, 2, 3, 4]`. Cependant, ce qui différencie la boucle `do...while` des autres boucles est la façon dont elle se comporte lorsque la condition échoue au premier contrôle. Voyons cela en action : Voici une boucle `while` normale qui exécutera le code dans la boucle tant que `i < 5` :

```js
const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

Dans cet exemple, nous initialisons la valeur de `ourArray` à un tableau vide et la valeur de `i` à 5. Lorsque nous exécutons la boucle `while`, la condition est évaluée à `false` car `i` n'est pas inférieur à 5, donc nous n'exécutons pas le code à l'intérieur de la boucle. Le résultat est que `ourArray` n'aura aucune valeur ajoutée, et ressemblera toujours à `[]` lorsque tout le code de l'exemple ci-dessus aura été exécuté. Maintenant, regardez une boucle `do...while` :

```js
const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

Dans ce cas, nous initialisons la valeur de `i` à 5, comme nous l'avons fait avec la boucle `while`. Lorsque nous arrivons à la ligne suivante, il n'y a pas de condition à évaluer, nous allons donc chercher le code à l'intérieur des accolades et l'exécuter. Nous allons ajouter un seul élément au tableau, puis incrémenter `i` avant de passer à la vérification de la condition. Lorsque nous évaluons finalement la condition `i < 5` sur la dernière ligne, nous voyons que `i` est maintenant 6, ce qui ne satisfait pas à la condition, donc nous sortons de la boucle et nous avons terminé. À la fin de l'exemple ci-dessus, la valeur de `ourArray` est `[5]`. Essentiellement, une boucle `do...while` garantit que le code à l'intérieur de la boucle sera exécuté au moins une fois. Essayons de faire fonctionner une boucle `do...while` en plaçant des valeurs dans un tableau.

# --instructions--

Changez la boucle `while` dans le code en une boucle `do...while` pour que la boucle n'ajoute que le nombre `10` à `myArray`, et que `i` soit égal à `11` lorsque votre code aura fini de s'exécuter.

# --hints--

Vous devriez utiliser une boucle `do...while` pour cet exercice.

```js
assert(code.match(/do/g));
```

`myArray` devrait être égal à `[10]`.

```js
assert.deepEqual(myArray, [10]);
```

`i` devrait être égal à `11`

```js
assert.equal(i, 11);
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
let i = 10;

// Ne changez que le code en dessous de cette ligne
while (i < 5) {
  myArray.push(i);
  i++;
}
```

# --solutions--

```js
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)
```
