---
id: cf1111c1c11feddfaeb7bdef
title: Imbriquer un tableau dans un autre tableau
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

Vous pouvez également imbriquer des tableaux dans d'autres tableaux, comme ci-dessous :

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

On l'appelle également un <dfn>tableau multidimensionnel</dfn>.

# --instructions--

Créez un tableau imbriqué appelé `myArray`.

# --hints--

`myArray` devrait avoir au moins un tableau imbriqué dans un autre tableau.

```js
assert(Array.isArray(myArray) && myArray.some(Array.isArray));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Ne changez que le code en dessous de cette ligne
const myArray = [];
```

# --solutions--

```js
const myArray = [[1, 2, 3]];
```
