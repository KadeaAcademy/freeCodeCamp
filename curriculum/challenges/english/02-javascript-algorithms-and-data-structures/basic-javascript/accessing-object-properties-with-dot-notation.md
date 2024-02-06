---
id: 56533eb9ac21ba0edf2244c7
title: Accès aux propriétés des objets avec la notation en points
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

Il existe deux façons d'accéder aux propriétés d'un objet : la notation par points (`.`) et la notation par crochets (`[]`), similaire à celle d'un tableau.

La notation par points est celle que vous utilisez lorsque vous connaissez à l'avance le nom de la propriété à laquelle vous voulez accéder.

Voici un exemple d'utilisation de la notation par points (`.`) pour lire la propriété d'un objet :

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

`prop1val` aura pour valeur la chaîne `val1`, et `prop2val` aura pour valeur la chaîne `val2`.

# --instructions--

Lisez les valeurs des propriétés de `testObj` en utilisant la notation par points. Déclarez la variable `hatValue` avec comme valeur la propriété `hat` de l'objet et déclarez la variable `shirtValue` avec comme valeur la propriété `shirt` de l'objet.

# --hints--

`hatValue` doit être une chaîne de caractères

```js
assert(typeof hatValue === 'string');
```

La valeur de `hatValue` doit être la chaîne `ballcap`.

```js
assert(hatValue === 'ballcap');
```

`shirtValue` devrait être une chaîne de caractères

```js
assert(typeof shirtValue === 'string');
```

La valeur de `shirtValue` doit être la chaîne `jersey`.

```js
assert(shirtValue === 'jersey');
```

Vous devez utiliser la notation par points deux fois

```js
assert(code.match(/testObj\.\w+/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Ne changez que le code en dessous de cette ligne
const hatValue = testObj;      // Modifiez cette ligne
const shirtValue = testObj;    // Modifiez cette ligne
```

# --solutions--

```js
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
```
