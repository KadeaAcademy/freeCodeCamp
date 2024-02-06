---
id: 587d7db0367417b2b2512b83
title: Utiliser l'héritage pour ne pas se répéter
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

Il existe un principe de programmation appelé <dfn>Ne pas se répéter (DRY)</dfn>. La raison pour laquelle le code répété est un problème est que toute modification nécessite de corriger le code à plusieurs endroits. Cela signifie généralement plus de travail pour les programmeurs et plus de risques d'erreurs.

Remarquez dans l'exemple ci-dessous que la méthode `describe` est partagée par `Bird` et `Dog` :

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

La méthode `describe` est répétée à deux endroits. Le code peut être modifié pour suivre le principe DRY en créant un `supertype` (ou parent) appelé `Animal` :

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Puisque `Animal` inclut la méthode `describe`, vous pouvez la supprimer de `Bird` et `Dog` :

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

La méthode `eat` est répétée à la fois dans `Cat` et `Bear`. Modifiez le code dans l'esprit DRY en déplaçant la méthode `eat` dans le `supertype` `Animal`.

# --hints--

`Animal.prototype` doit avoir la propriété `eat`.

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

`Bear.prototype` ne devrait pas avoir la propriété `eat`.

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

`Cat.prototype` ne devrait pas avoir la propriété `eat`.

```js
assert(!Cat.prototype.hasOwnProperty('eat'));
```

# --seed--

## --seed-contents--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

# --solutions--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```
