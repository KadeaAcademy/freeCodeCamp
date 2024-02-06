---
id: 567af2437cbaa8c51670a16c
title: Vérifier la présence de propriétés dans les objets
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

Il est parfois utile de vérifier si la propriété d'un objet donné existe ou non. Nous pouvons utiliser la méthode `.hasOwnProperty(propname)` des objets pour déterminer si cet objet possède le nom de la propriété donnée. `.hasOwnProperty()` renvoie `true` ou `false` si la propriété est trouvée ou non.

**Exemple**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

Le premier `hasOwnProperty` renvoie `true`, tandis que le second renvoie `false`.

# --instructions--

Modifiez la fonction `checkObj` pour tester si un objet passé à la fonction (`obj`) contient une propriété spécifique (`checkProp`). Si la propriété est trouvée, elle renvoie la valeur de cette propriété. Sinon, elle renvoie "Not Found".

# --hints--

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` devrait retourner la chaîne `pony`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` devrait retourner la chaîne `kitten`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` devrait retourner la chaîne `Not Found`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

`checkObj({city: "Seattle"}, "city")` devrait retourner la chaîne `Seattle`.

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

`checkObj({city: "Seattle"}, "district")` devrait retourner la chaîne `Not Found`.

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

`checkObj({pet: "kitten", bed: "sleigh"}, "gift")` devrait retourner la chaîne `Not Found`.

```js
assert(checkObj({ pet: 'kitten', bed: 'sleigh' }, 'gift') === 'Not Found');
```

# --seed--

## --seed-contents--

```js
function checkObj(obj, checkProp) {
  // Ne changez que le code en dessous de cette ligne
  return "Change Me!";
  // Ne changez que le code au-dessus de cette ligne
}
```

# --solutions--

```js
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
```
