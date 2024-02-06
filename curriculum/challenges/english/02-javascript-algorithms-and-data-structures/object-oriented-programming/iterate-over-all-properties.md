---
id: 587d7daf367417b2b2512b7d
title: Itérer sur toutes les propriétés
challengeType: 1
forumTopicId: 301320
dashedName: iterate-over-all-properties
---

# --description--

Vous avez maintenant vu deux types de propriétés : les propriétés propres et les propriétés `prototypes`. Les propriétés propres sont définies directement sur l'instance de l'objet elle-même. Les propriétés de type prototype sont définies sur le `prototype`.

```js
function Bird(name) {
  this.name = name;  //propriéte propre
}

Bird.prototype.numLegs = 2; // propriété prototype 

let duck = new Bird("Donald");
```

Voici comment ajouter les propriétés de `duck` au tableau `ownProps` et les propriétés `prototype` au tableau `prototypeProps` :

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
```

`console.log(ownProps)` afficherait `["name"]` dans la console, et `console.log(prototypeProps)` afficherait `["numLegs"]`.

# --instructions--

Ajouter toutes les propriétés propres de `beagle` au tableau `ownProps`. Ajoutez toutes les propriétés `prototype` de `Dog` au tableau `prototypeProps`.

# --hints--

Le tableau `ownProps` ne doit contenir que `name`.

```js
assert.deepEqual(ownProps, ['name']);
```

Le tableau `prototypeProps` ne doit contenir que `numLegs`.

```js
assert.deepEqual(prototypeProps, ['numLegs']);
```

Vous devez résoudre ce problème sans utiliser la méthode intégrée `Object.keys()`.

```js
assert(!/\Object.keys/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Ne modifiez que le code situé en dessous de cette ligne
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
```
