---
id: 587d7b8f367417b2b2512b62
title: Implémenter map sur un prototype
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

Comme vous l'avez vu en appliquant `Array.prototype.map()`, ou simplement `map()` plus tôt, la méthode `map` retourne un tableau de la même longueur que celui sur lequel elle a été appelée. Elle ne modifie pas non plus le tableau original, tant que sa fonction de rappel ne le fait pas.

En d'autres termes, `map` est une fonction pure, et sa sortie dépend uniquement de ses entrées. De plus, elle prend une autre fonction comme argument.

Vous pourriez en apprendre beaucoup sur la méthode `map` si vous implantiez votre propre version de celle-ci. Il est recommandé d'utiliser une boucle `for` ou `Array.prototype.forEach()`.
# --instructions--

Ecrivez votre propre `Array.prototype.myMap()`, qui devrait se comporter exactement comme `Array.prototype.map()`. Vous ne devez pas utiliser la méthode intégrée `map`. L'instance `Array` peut être accédée dans la méthode `myMap` en utilisant `this`.

# --hints--

`new_s` devrait être égal `[46, 130, 196, 10]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
```

Votre code ne doit pas utiliser la méthode `map`.

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
// La variable globale
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
// Ne modifiez que le code situé en dessous de cette ligne

// Ne modifiez que le code au-dessus de cette ligne
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (const elem of this) {
    newArray.push(callback(elem));
  }
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```
