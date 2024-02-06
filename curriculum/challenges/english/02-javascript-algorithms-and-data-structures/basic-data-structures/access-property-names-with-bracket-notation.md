---
id: 587d7b7c367417b2b2512b1a
title: Noms de propriétés d'accès avec la notation entre crochets
challengeType: 1
forumTopicId: 301150
dashedName: access-property-names-with-bracket-notation
---

# --description--

Dans le premier défi objet, nous avons mentionné l'utilisation de la notation entre crochets comme moyen d'accéder aux valeurs des propriétés en utilisant l'évaluation d'une variable. Par exemple, imaginons que notre objet `fruits` soit utilisé dans un programme pour une caisse enregistreuse de supermarché. Nous avons une fonction qui définit la variable `fruitSelectionne` et nous voulons vérifier la présence de cet aliment dans notre objet `fruits`. Cela pourrait ressembler à ceci :

```js
let fruitSelectionne = getCurrentFood(fruitScanne);
let stock = fruits[fruitSelectionne];
```

Ce code va évaluer la valeur stockée dans la variable `fruitSelectionne` et retourner la valeur de cette clé dans l'objet `fruits`, ou `undefined` si elle n'est pas présente. La notation entre parenthèses est très utile car parfois les propriétés des objets ne sont pas connues avant l'exécution ou nous devons y accéder d'une manière plus dynamique.

# --instructions--

Nous avons défini une fonction, `verifierStock`, qui reçoit un élément scanné comme argument. Elle renvoie la valeur actuelle de la clé `fruitScanne` dans l'objet `fruits`. Vous pouvez supposer que seules des clés valides seront fournies comme argument à `verifierStock`. 

# --hints--

`verifierStock` devrait être une fonction.

```js
assert.strictEqual(typeof verifierStock, 'function');
```

L'objet `fruits` ne doit contenir que les paires clé-valeur suivantes : `pommes: 25`, `oranges: 32`, `prunes: 28`, `bananes: 13`, `raisins: 35`, `fraises: 27`.

```js
assert.deepEqual(fruits, {
  pommes : 25,
  oranges : 32,
  prunes : 28,
  bananes : 13,
  raisins : 35,
  fraises : 27
});
```

`verifierStock("apples")` should return `25`.

```js
assert.strictEqual(verifierStock('pommes'), 25);
```

`verifierStock("bananas")` should return `13`.

```js
assert.strictEqual(verifierStock('bananes'), 13);
```

`verifierStock("strawberries")` should return `27`.

```js
assert.strictEqual(verifierStock('fraises'), 27);
```

# --seed--

## --seed-contents--

```js
let fruits = {
  pommes : 25,
  oranges : 32,
  prunes : 28,
  bananes : 13,
  raisins : 35,
  fraises : 27
};

function verifierStock(fruitScanne) {
  // Ne changez que le code en dessous de cette ligne

  // Ne changez que le code au-dessus de cette ligne
}

console.log(verifierStock("pommes"));
```

# --solutions--

```js
let fruits = {
  pommes : 25,
  oranges : 32,
  prunes : 28,
  bananes : 13,
  raisins : 35,
  fraises : 27
};

function verifierStock(fruitScanne) {
  return fruits[fruitScanne];
}
```
