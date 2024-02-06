---
id: 587d7daf367417b2b2512b7f
title: Changer le prototype du nouvel objet
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

Jusqu'à présent, vous avez ajouté des propriétés au `prototype` individuellement :

```js
Bird.prototype.numLegs = 2;
```

Cette opération devient fastidieuse après quelques propriétés.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

Une méthode plus efficace consiste à attribuer au `prototype` un nouvel objet qui contient déjà les propriétés. De cette façon, les propriétés sont ajoutées en une seule fois :

```js
Bird.prototype = {
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

Ajoutez la propriété `numLegs` et les deux méthodes `eat()` et `describe()` au `prototype` de `Dog` en définissant le `prototype` comme un nouvel objet.

# --hints--

`Dog.prototype` doit être remplacé par un nouvel objet.

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` doit avoir la propriété `numLegs`.

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` doit avoir la méthode `eat()`.

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` doit avoir la méthode `describe()`.

```js
assert(typeof Dog.prototype.describe === 'function');
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Ne modifiez que le code situé en dessous de cette ligne

};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```
