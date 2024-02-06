---
id: 56105e7b514f539506016a5e
title: Compter à rebours avec une boucle For
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

Une boucle for peut également compter à rebours, pour autant que nous puissions définir les bonnes conditions.

Pour pouvoir décrémenter de deux à chaque itération, nous devons modifier notre initialisation, notre condition et notre expression finale.

Nous allons commencer à `i = 10` et boucler pendant que `i > 0`. Nous allons décrémenter `i` de 2 à chaque boucle avec `i -= 2`.

```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` contiendra maintenant `[10, 8, 6, 4, 2]`. Modifions notre initialisation et notre expression finale afin de pouvoir compter à rebours par deux pour créer un tableau de nombres impairs décroissants.

# --instructions--

Insérez les nombres impairs de 9 à 1 dans `myArray` en utilisant une boucle `for`

# --hints--

Vous devriez utiliser une boucle `for` pour cela.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

Vous devriez utiliser la méthode de tableau `push`.

```js
assert(code.match(/myArray.push/));
```

`myArray` devrait être égal à `[9, 7, 5, 3, 1]`.

```js
assert.deepEqual(myArray, [9, 7, 5, 3, 1]);
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
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```
