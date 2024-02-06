---
id: 56533eb9ac21ba0edf2244c8
title: Accéder aux propriétés d'un objet avec la notation entre crochets
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

La deuxième façon d'accéder aux propriétés d'un objet est la notation entre crochets (`[]`). Si la propriété de l'objet auquel vous essayez d'accéder comporte un espace dans son nom, vous devrez utiliser la notation entre crochets.

Cependant, vous pouvez toujours utiliser la notation entre crochets pour les propriétés d'un objet sans espace.

Voici un exemple d'utilisation de la notation entre crochets pour lire la propriété d'un objet :

```js
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

`myObj["Space Name"]` serait la chaîne `Kirk`, `myObj["More Space"]` serait la chaîne `Spock`, et `myObj["NoSpace"]` serait la chaîne `USS Enterprise`.

Notez que les noms de propriétés contenant des espaces doivent être placés entre guillemets (simples ou doubles).

# --instructions--

Lisez les valeurs des propriétés `an entree` et `the drink` de `testObj` en utilisant la notation entre crochets et affectez-les respectivement à `entreeValue` et `drinkValue`.

# --hints--

`entreeValue` doit être une chaîne de caractères

```js
assert(typeof entreeValue === 'string');
```

La valeur de `entreeValue` doit être la chaîne de caractères `hamburger`.

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` doit être une chaîne de caractères.

```js
assert(typeof drinkValue === 'string');
```

La valeur de `drinkValue` doit être la chaîne `water`.

```js
assert(drinkValue === 'water');
```

Vous devez utiliser la notation entre crochets deux fois

```js
assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Ne changez que le code en dessous de cette ligne
const entreeValue = testObj;   // Modifiez cette ligne
const drinkValue = testObj;    // Modifiez cette ligne
```

# --solutions--

```js
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj['the drink'];
```
