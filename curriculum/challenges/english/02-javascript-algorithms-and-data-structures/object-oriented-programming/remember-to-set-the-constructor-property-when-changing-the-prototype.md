---
id: 587d7daf367417b2b2512b80
title: N'oubliez pas de définir la propriété du constructeur lorsque vous modifiez le prototype
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

Il y a un effet secondaire crucial à définir manuellement le prototype d'un nouvel objet. Il efface la propriété `constructor` ! Cette propriété peut être utilisée pour vérifier quelle fonction constructeur a créé l'instance, mais comme la propriété a été écrasée, elle donne maintenant de faux résultats :

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

Dans l'ordre, ces expressions seraient évaluées à `false`, `true`, et `true`.

Pour remédier à cela, chaque fois qu'un prototype est défini manuellement pour un nouvel objet, n'oubliez pas de définir la propriété `constructor` :

```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

# --instructions--

Définir la propriété `constructor` sur le `prototype` de `Dog`.

# --hints--

`Dog.prototype` doit définir la propriété `constructor`.

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Ne modifiez que le code situé en dessous de cette ligne
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
