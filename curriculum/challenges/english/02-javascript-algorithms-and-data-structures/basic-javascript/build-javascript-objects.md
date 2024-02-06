---
id: 56bbb991ad1ed5201cd392d0
title: Construire des objets JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

Vous avez peut-être déjà entendu le terme "objet".

Les objets sont similaires aux tableaux, sauf qu'au lieu d'utiliser des indices pour accéder à leurs données et les modifier, vous accédez aux données des objets par le biais de ce que l'on appelle des "propriétés".

Les objets sont utiles pour stocker des données de manière structurée, et peuvent représenter des objets du monde réel, comme un chat.

Voici un exemple d'objet chat :

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

Dans cet exemple, toutes les propriétés sont stockées sous forme de chaînes de caractères, telles que `name`, `legs`, et `tails`. Cependant, vous pouvez également utiliser des nombres comme propriétés. Vous pouvez même omettre les guillemets pour les propriétés de chaînes de caractères d'un seul mot, comme suit :

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

Toutefois, si votre objet possède des propriétés autres que des chaînes de caractères, JavaScript les convertira automatiquement en chaînes de caractères.

# --instructions--

Créez un objet représentant un chien appelé `myDog` qui contient les propriétés `name` (une chaîne), `legs`, `tails` et `friends`.

Vous pouvez donner à ces propriétés d'objet les valeurs que vous voulez, à condition que `name` soit une chaîne de caractères, que `legs` et `tails` soient des nombres et que `friends` soit un tableau.

# --hints--

`myDog` doit contenir la propriété `name` et doit être une `string`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('name') &&
      z.name !== undefined &&
      typeof z.name === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` doit contenir la propriété `legs` et doit être un `number`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('legs') &&
      z.legs !== undefined &&
      typeof z.legs === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` doit contenir la propriété `tails` et doit être un `nombre`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('tails') &&
      z.tails !== undefined &&
      typeof z.tails === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` doit contenir la propriété `friends` et doit être un `tableau`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('friends') &&
      z.friends !== undefined &&
      Array.isArray(z.friends)
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` ne doit contenir que toutes les propriétés données.

```js
assert(
  (function (z) {
    return Object.keys(z).length === 4;
  })(myDog)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
// Ne changez que le code en dessous de cette ligne


// Ne changez que le code au-dessus de cette ligne
};
```

# --solutions--

```js
const myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
