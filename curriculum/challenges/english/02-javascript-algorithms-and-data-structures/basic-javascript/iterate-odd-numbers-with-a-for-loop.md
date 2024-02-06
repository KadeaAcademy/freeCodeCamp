---
id: 56104e9e514f539506016a5c
title: Itérer des nombres impairs avec une boucle For
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

Les boucles For n'ont pas besoin d'itérer une par une. En changeant notre `expression finale`, nous pouvons compter par nombres pairs.

Nous allons commencer à `i = 0` et boucler pendant que `i < 10`. Nous incrémenterons `i` de 2 à chaque boucle avec `i += 2`.

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` contiendra maintenant `[0, 2, 4, 6, 8]`. Changeons notre `initialisation` pour pouvoir compter par nombres impairs.

# --instructions--

Insérez les nombres impairs de 1 à 9 dans `myArray` en utilisant une boucle `for`.

# --hints--

Vous devriez utiliser une boucle `for` pour cela.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` devrait être égal à `[1, 3, 5, 7, 9]`.

```js
assert.deepEqual(myArray, [1, 3, 5, 7, 9]);
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
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
