---
id: 587d7db1367417b2b2512b87
title: Ajouter des méthodes après l'héritage
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

Une fonction constructeur qui hérite son objet `prototype` d'une fonction constructeur supertype peut toujours avoir ses propres méthodes en plus des méthodes héritées.

Par exemple, `Bird` est un constructeur qui hérite son `prototype` de `Animal` :

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

En plus de ce qui est hérité de `Animal`, vous voulez ajouter un comportement unique aux objets `Bird`. Ici, `Bird` aura une fonction `fly()`. Les fonctions sont ajoutées au `prototype` de `Bird` de la même manière que n'importe quelle fonction constructeur :

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Maintenant, les instances de `Bird` auront les deux méthodes `eat()` et `fly()` :

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` afficherait la chaîne `nom nom nom` dans la console, et `duck.fly()` afficherait la chaîne `I'm flying!`.

# --instructions--

Ajoutez tout le code nécessaire pour que l'objet `Dog` hérite de `Animal` et que le constructeur `prototype` du `Dog` soit mis à `Dog`. Ensuite, ajoutez une méthode `bark()` à l'objet `Dog` pour que `beagle` puisse à la fois `eat()` et `bark()`. La méthode `bark()` devrait imprimer `Woof!` sur la console.

# --hints--

`Animal` ne doit pas répondre à la méthode `bark()`.

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` doit hériter de la méthode `eat()` de `Animal`.

```js
assert(typeof Dog.prototype.eat == 'function');
```

Le prototype `Dog` doit avoir une méthode `bark()`.

```js
assert('bark' in Dog.prototype);
```

`beagle` devrait être une `instance de` `Animal`.

```js
assert(beagle instanceof Animal);
```

Le constructeur de `beagle` doit être défini comme `Dog`.

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` devrait afficher la chaîne de caractères `nom nom nom`

```js
console.log = function (msg) {
  throw msg;
};
assert.throws(() => beagle.eat(), 'nom nom nom');
```

`beagle.bark()` devrait afficher la chaîne de caractères `Woof!`

```js
console.log = function (msg) {
  throw msg;
};
assert.throws(() => beagle.bark(), 'Woof!');
```

# --seed--

## --seed-contents--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Ne modifiez que le code situé en dessous de cette ligne




// Ne modifiez que le code au-dessus de cette ligne

let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```
