---
id: 587d7db1367417b2b2512b88
title: Surcharger les méthodes héritées
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

Dans les leçons précédentes, vous avez appris qu'un objet peut hériter de son comportement (méthodes) d'un autre objet en faisant référence à son objet `prototype` :

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Ensuite, le `ChildObject` (objet-enfant) reçoit ses propres méthodes en les enchaînant à son `prototype` :

```js
ChildObject.prototype.methodName = function() {...};
```

Il est possible de surcharger une méthode héritée. Cela se fait de la même manière - en ajoutant une méthode à `ChildObject.prototype` en utilisant le même nom de méthode que celle à surcharger. Voici un exemple où `Bird` surcharge la méthode `eat()` héritée de `Animal` :

```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

Si vous avez une instance `let duck = new Bird();` et que vous appelez `duck.eat()`, voici comment JavaScript recherche la méthode sur la chaîne `prototype` de `duck` :

1.  `duck` => Est-ce que `eat()` est défini ici ? Non.
2.  `Bird` => Est-ce que `eat()` est défini ici ? => Oui. Exécutez-le et arrêtez la recherche.
3.  `Animal` => `eat()` est aussi défini, mais JavaScript a arrêté la recherche avant d'atteindre ce niveau.
4.  Objet => JavaScript a arrêté sa recherche avant d'atteindre ce niveau.

# --instructions--

Surchargez la méthode `fly()` de `Penguin` pour qu'elle retourne la chaîne `Alas, this is a flightless bird.` (Hélas, c'est un oiseau qui ne vole pas).

# --hints--

`penguin.fly()` devrait retourner la chaîne de caractères `Alas, this is a flightless bird.`

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

La méthode `bird.fly()` doit retourner la chaîne de caractères `I am flying!`

```js
assert(new Bird().fly() === 'I am flying!');
```

# --seed--

## --seed-contents--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Ne modifiez que le code situé en dessous de cette ligne



// Ne modifiez que le code au-dessus de cette ligne

let penguin = new Penguin();
console.log(penguin.fly());
```

# --solutions--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
let penguin = new Penguin();
console.log(penguin.fly());
```
