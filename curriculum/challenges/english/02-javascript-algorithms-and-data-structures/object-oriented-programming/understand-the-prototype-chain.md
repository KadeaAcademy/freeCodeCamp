---
id: 587d7db0367417b2b2512b82
title: Comprendre la chaîne du prototype
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

Tous les objets en JavaScript (à quelques exceptions près) ont un `prototype`. De plus, le `prototype` d'un objet est lui-même un objet.

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

Parce qu'un `prototype` est un objet, un `prototype` peut avoir son propre `prototype` ! Dans ce cas, le `prototype` de `Bird.prototype` est `Object.prototype` :

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

En quoi cela est-il utile ? Vous vous souvenez peut-être de la méthode `hasOwnProperty` utilisée dans un défi précédent :

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

La méthode `hasOwnProperty` est définie dans `Object.prototype`, auquel on peut accéder par `Bird.prototype`, auquel on peut ensuite accéder par `duck`. Ceci est un exemple de la chaîne `prototype`. Dans cette chaîne de `prototypes`, `Bird` est le `supertype` de `duck`, tandis que `duck` est le `sous-type`. `Objet` est un `supertype` pour `Bird` et `duck`. `Object` est un `supertype` pour tous les objets en JavaScript. Par conséquent, tout objet peut utiliser la méthode `hasOwnProperty`.

# --instructions--

Modifiez le code pour montrer la chaîne de prototypes correcte.

# --hints--

Votre code doit montrer que `Object.prototype` est le prototype de `Dog.prototype`.

```js
assert(/Object\.prototype\.isPrototypeOf/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // donne true

// Corrigez le code ci-dessous de manière à ce qu'il soit évalué à true (vrai)
???.isPrototypeOf(Dog.prototype);
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```
