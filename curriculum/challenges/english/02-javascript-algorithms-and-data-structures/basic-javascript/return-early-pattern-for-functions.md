---
id: 56533eb9ac21ba0edf2244c4
title: Modèle de retour anticipé des fonctions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

Lorsqu'une instruction `return` est atteinte, l'exécution de la fonction en cours s'arrête et le contrôle revient à l'emplacement de l'appelant.

**Exemple**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

La fonction ci-dessus affichera la chaîne `Hello` dans la console, et retournera la chaîne `World`. La chaîne `byebye` ne s'affichera jamais dans la console, car la fonction se termine à l'instruction `return`.

# --instructions--

Modifiez la fonction `abTest` pour que si `a` ou `b` sont inférieurs à `0`, la fonction se termine immédiatement avec une valeur `undefined`.

**Astuce**  
Rappelez-vous que [`undefined` est un mot-clé](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables), pas une chaîne de caratctères.

# --hints--

`abTest(2, 2)` doit retourner un nombre

```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2, 2)` doit retourner `8`

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2, 2)` doit retourner `undefined`

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2, -2)` doit retourner `undefined`

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2, 8)` doit retourner `18`

```js
assert(abTest(2, 8) === 18);
```

`abTest(3, 3)` doit retourner `12`

```js
assert(abTest(3, 3) === 12);
```

`abTest(0, 0)` doit retourner `0`

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function abTest(a, b) {
  // Ne changez que le code en dessous de cette ligne



  // Ne changez que le code au-dessus de cette ligne

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

# --solutions--

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```
