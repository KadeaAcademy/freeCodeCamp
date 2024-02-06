---
id: 587d7db1367417b2b2512b85
title: Définir le prototype de l'enfant comme une instance du parent
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

Dans le défi précédent, vous avez vu la première étape pour hériter du comportement du supertype (ou parent) `Animal` : créer une nouvelle instance de `Animal`.

Ce défi couvre l'étape suivante : définir le `prototype` du sous-type (ou enfant) - dans ce cas, `Bird` - comme étant une instance de `Animal`.

```js
Bird.prototype = Object.create(Animal.prototype);
```

Rappelez-vous que le `prototype` est comme la "recette" de la création d'un objet. D'une certaine manière, la recette de `Bird` inclut maintenant tous les "ingrédients" clés de `Animal`.

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` hérite de toutes les propriétés de `Animal`, y compris la méthode `eat`.

# --instructions--

Modifiez le code pour que les instances de `Dog` héritent de `Animal`.

# --hints--

`Dog.prototype` doit être une instance de `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

# --seed--

## --seed-contents--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Ne modifiez que le code situé en dessous de cette ligne


let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
```
