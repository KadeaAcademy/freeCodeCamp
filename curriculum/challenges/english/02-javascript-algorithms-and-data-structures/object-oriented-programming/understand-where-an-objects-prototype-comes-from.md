---
id: 587d7db0367417b2b2512b81
title: Comprendre l'origine du prototype d'un objet
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

Tout comme les gens héritent des gènes de leurs parents, un objet hérite de son `prototype` directement de la fonction constructeur qui l'a créé. Par exemple, ici le constructeur `Bird` crée l'objet `duck` :

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` hérite son `prototype` de la fonction constructeur `Bird`. Vous pouvez montrer cette relation avec la méthode `isPrototypeOf` :

```js
Bird.prototype.isPrototypeOf(duck);
```

Cela renverrait `vrai`.

# --instructions--

Utilisez `isPrototypeOf` pour vérifier le `prototype` de `beagle`.

# --hints--

Vous devez montrer que `Dog.prototype` est le `prototype` de `beagle`

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Ne modifiez que le code situé en dessous de cette ligne
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```
