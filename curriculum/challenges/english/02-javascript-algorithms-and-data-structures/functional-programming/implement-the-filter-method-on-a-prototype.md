---
id: 587d7b8f367417b2b2512b64
title: Implémenter la méthode de filtrage sur un prototype
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

Vous pourriez en apprendre beaucoup sur la méthode `filter` en implémentant votre propre version de celle-ci. Il est recommandé d'utiliser une boucle `for` ou `Array.prototype.forEach()`.

# --instructions--

Ecrivez votre propre `Array.prototype.myFilter()`, qui devrait se comporter exactement comme `Array.prototype.filter()`. Vous ne devez pas utiliser la méthode intégrée `filter`. L'instance `Array` peut être accédée dans la méthode `myFilter` en utilisant `this`.

# --hints--

`new_s` devrait être égal à `[23, 65, 5]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
```

Votre code ne doit pas utiliser la méthode `filter`.

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
// La variable globale
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Ne modifiez que le code situé en dessous de cette ligne
  const newArray = [];
  // Ne modifiez que le code au-dessus de cette ligne
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) newArray.push(this[i]);
  }
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```
