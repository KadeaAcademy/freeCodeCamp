---
id: 587d7db0367417b2b2512b84
title: Hériter des comportements d'un super-type
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

Dans le défi précédent, vous avez créé un `supertype` appelé `Animal` qui définit les comportements partagés par tous les animaux :

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

Ce défi et le suivant vont couvrir la façon de réutiliser les méthodes de `Animal` dans `Bird` et `Dog` sans les définir à nouveau. Cette technique s'appelle l'héritage. Ce défi couvre la première étape : créer une instance du `supertype` (ou parent). Vous connaissez déjà une façon de créer une instance de `Animal` en utilisant l'opérateur `new` :

```js
let animal = new Animal();
```

L'utilisation de cette syntaxe pour l'héritage présente certains inconvénients, qui sont trop complexes pour l'objet de ce défi. Voici donc une approche alternative qui ne présente pas ces inconvénients :

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` crée un nouvel objet, et définit `obj` comme `prototype` du nouvel objet. Rappelons que le `prototype` est comme la "recette" de la création d'un objet. En fixant le `prototype` de `animal` comme étant le `prototype` de `Animal`, vous donnez effectivement à l'instance de `animal` la même "recette" que n'importe quelle autre instance de `Animal`.

```js
animal.eat();
animal instanceof Animal;
```

La méthode `instanceof` retournerait ici `true`.

# --instructions--

Utilisez `Object.create` pour créer deux instances de `Animal` nommées `duck` et `beagle`.

# --hints--

La variable `duck` doit être définie.

```js
assert(typeof duck !== 'undefined');
```

La variable `beagle` doit être définie.

```js
assert(typeof beagle !== 'undefined');
```

La variable `duck` doit être initialisée avec `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

La variable `beagle` doit être initialisée avec `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`duck` devrait avoir un `prototype` de `Animal`.

```js
assert(duck instanceof Animal);
```

`beagle` devrait avoir un `prototype` de `Animal`.

```js
assert(beagle instanceof Animal);
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

// Ne modifiez que le code situé en dessous de cette ligne

let duck; // Modifiez cette ligne
let beagle; // Modifiez cette ligne
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
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```
