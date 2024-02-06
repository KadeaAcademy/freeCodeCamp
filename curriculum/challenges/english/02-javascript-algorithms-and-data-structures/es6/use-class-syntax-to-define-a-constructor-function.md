---
id: 587d7b8b367417b2b2512b53
title: Utiliser la syntaxe des classes pour définir une fonction constructrice
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 fournit une nouvelle syntaxe pour créer des objets, en utilisant le mot-clé <dfn>class</dfn>.

Il convient de noter que la syntaxe `class` n'est qu'un sucre syntaxique, et non une implémentation à part entière, basée sur les classes, d'un paradigme orienté objet, contrairement à des langages tels que Java, Python, Ruby, etc.

Dans ES5, nous définissons généralement une fonction `constructeur` et utilisons le mot-clé `new` pour instancier un objet.

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

La syntaxe `class` remplace simplement la création de la fonction `constructor` :

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

Il est à noter que le mot-clé `class` déclare une nouvelle fonction, à laquelle on ajoute un constructeur. Ce constructeur est invoqué lorsque `new` est appelé pour créer un nouvel objet.

**Note:** Les majuscules doivent être utilisées par convention pour les noms de classes ES6, comme dans `SpaceShuttle` utilisé ci-dessus.

La méthode `constructor` est une méthode spéciale pour créer et initialiser un objet créé avec une classe. Vous en apprendrez davantage à ce sujet dans la section Programmation orientée objet de la certification Algorithmes et Structures de données en JavaScript .

# --instructions--

Utilisez le mot-clé `class` et écrivez un `constructor` pour créer la classe `Vegetable`.

La classe `Vegetable` vous permet de créer un objet vegetable avec une propriété `name` qui est passée au `constructor`.

# --hints--

`Vegetable` devrait être une `classe` avec une méthode `constructor` définie.

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

Le mot-clé `class` doit être utilisé.

```js
assert(code.match(/class/g));
```

`Vegetable` doit pouvoir être instancié.

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` doit retourner `carrot`.

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// Ne changez que le code en dessous de cette ligne

// Ne changez que le code au-dessus de cette ligne

const carrot = new Vegetable('carrot');
console.log(carrot.name); // devrait afficher 'carrot'
```

# --solutions--

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```
