---
id: 587d7db2367417b2b2512b89
title: Utiliser un Mixin pour ajouter un comportement commun à des objets non apparentés
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

Comme vous l'avez vu, le comportement est partagé par l'héritage. Cependant, dans certains cas, l'héritage n'est pas la meilleure solution. En effet, l'héritage ne fonctionne pas bien pour des objets non apparentés comme 'Bird' (oiseau) et 'Airplane' (avion). Ils peuvent tous deux voler, mais un `Oiseau` n'est pas un type de `Avion` et vice versa.

Pour les objets non liés, il est préférable d'utiliser des <dfn>mixins</dfn>. Un mixin permet à d'autres objets d'utiliser une collection de fonctions.

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

Le `flyMixin` prend n'importe quel objet et lui donne la méthode `fly`.

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

Ici, `bird` et `plane` sont passés à `flyMixin`, qui assigne la fonction `fly` à chaque objet. Maintenant, `bird` et `plane` peuvent tous deux voler :

```js
bird.fly();
plane.fly();
```

La console affichera la chaîne `Flying, wooosh!` deux fois, une fois pour chaque appel à `.fly()`.

Notez que le mixin permet à la même méthode `fly` d'être réutilisée par les objets non apparentés `bird` et `plane`.

# --instructions--

Créez un mixin nommé `glideMixin` qui définit une méthode nommée `glide`. Utilisez ensuite le `glideMixin` pour donner à `bird` et `boat` la possibilité de planer (glide).

# --hints--

Votre code doit déclarer une variable `glideMixin` qui est une fonction.

```js
assert(typeof glideMixin === 'function');
```

Votre code doit utiliser le `glideMixin` sur l'objet `bird` pour lui donner la méthode `glide`.

```js
assert(typeof bird.glide === 'function');
```

Votre code doit utiliser le `glideMixin` sur l'objet `boat` pour lui donner la méthode `glide`.

```js
assert(typeof boat.glide === 'function');
```

# --seed--

## --seed-contents--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Ne modifiez que le code situé en dessous de cette ligne
```

# --solutions--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
function glideMixin (obj) {
  obj.glide = () => 'Gliding!';
}

glideMixin(bird);
glideMixin(boat);
```
