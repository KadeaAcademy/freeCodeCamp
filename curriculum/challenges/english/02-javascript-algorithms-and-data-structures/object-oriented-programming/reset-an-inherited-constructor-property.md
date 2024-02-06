---
id: 587d7db1367417b2b2512b86
title: Réinitialiser une propriété de constructeur héritée 
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

Lorsqu'un objet hérite de son `prototype` d'un autre objet, il hérite également de la propriété du constructeur du supertype.

Voici un exemple :

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

Mais `duck` et toutes les instances de `Bird` devraient montrer qu'ils ont été construits par `Bird` et non par `Animal`. Pour ce faire, vous pouvez manuellement définir la propriété constructor de `Bird` à l'objet `Bird` :

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

Corriger le code pour que `duck.constructor` et `beagle.constructor` renvoient leurs constructeurs respectifs.

# --hints--

`Bird.prototype` doit être une instance de `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` devrait retourner `Bird`.

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` doit être une instance de `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` devrait retourner `Dog`.

```js
assert(beagle.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Ne modifiez que le code situé en dessous de cette ligne



let duck = new Bird();
let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
let duck = new Bird();
let beagle = new Dog();
```
