---
id: 587d7dae367417b2b2512b7a
title: Vérifier le constructeur d'un objet avec instanceof
challengeType: 1
forumTopicId: 301337
dashedName: verify-an-objects-constructor-with-instanceof
---

# --description--

Chaque fois qu'une fonction constructeur crée un nouvel objet, on dit que cet objet est une <dfn>instance</dfn> de son constructeur. JavaScript offre un moyen pratique de vérifier cela avec l'opérateur `instanceof`. `instanceof` vous permet de comparer un objet à un constructeur, en retournant `true` ou `false` selon que l'objet a été créé ou non avec le constructeur. Voici un exemple :

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

Cette méthode `instanceof` retournerait `true`.

Si un objet est créé sans utiliser de constructeur, `instanceof` vérifiera qu'il n'est pas une instance de ce constructeur :

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
```

Cette méthode `instanceof` renverrait `false`.

# --instructions--

Créez une nouvelle instance du constructeur `House`, en l'appelant `myHouse` et en lui passant un nombre de chambres. Ensuite, utilisez `instanceof` pour vérifier qu'il s'agit bien d'une instance de `House`.

# --hints--

L'attribut `numBedrooms` de `myHouse` doit être un nombre.

```js
assert(typeof myHouse.numBedrooms === 'number');
```

Vous devez vérifier que `myHouse` est une instance de `House` en utilisant l'opérateur `instanceof`.

```js
assert(/myHouse\s*instanceof\s*House/.test(code));
```

# --seed--

## --seed-contents--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Ne modifiez que le code situé en dessous de cette ligne
```

# --solutions--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```
