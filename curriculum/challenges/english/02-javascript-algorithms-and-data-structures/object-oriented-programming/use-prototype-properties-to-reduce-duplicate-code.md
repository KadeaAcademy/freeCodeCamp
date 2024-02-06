---
id: 587d7dae367417b2b2512b7c
title: Utiliser les propriétés des prototypes pour réduire le code dupliqué
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

Puisque `numLegs` aura probablement la même valeur pour toutes les instances de `Bird`, vous avez essentiellement une variable dupliquée `numLegs` à l'intérieur de chaque instance de `Bird`.

Ce n'est peut-être pas un problème lorsqu'il n'y a que deux instances, mais imaginez qu'il y ait des millions d'instances. Cela ferait beaucoup de variables dupliquées.

Une meilleure façon est d'utiliser le `prototype` de `Bird`. Les propriétés du `prototype` sont partagées par TOUTES les instances de `Bird`. Voici comment ajouter `numLegs` au `prototype` de Bird :

```js
Bird.prototype.numLegs = 2;
```

Maintenant, toutes les instances de `Bird` ont la propriété `numLegs`.

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

Puisque toutes les instances ont automatiquement les propriétés du `prototype`, pensez à un `prototype` comme une "recette" pour créer des objets. Notez que le `prototype` pour `duck` et `canary` fait partie du constructeur de `Bird` en tant que `Bird.prototype`. Presque tous les objets en JavaScript ont une propriété `prototype` qui fait partie de la fonction du constructeur qui l'a créé.

# --instructions--

Ajouter la propriété `numLegs` au `prototype` de `Dog`.

# --hints--

`beagle` devrait avoir une propriété `numLegs`.

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` doit être un nombre.

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` devrait être une propriété de `prototype` et non une propriété propre.

```js
assert(beagle.hasOwnProperty('numLegs') === false);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}



// Ne modifiez que le code au-dessus de cette ligne
let beagle = new Dog("Snoopy");
```

# --solutions--

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```
