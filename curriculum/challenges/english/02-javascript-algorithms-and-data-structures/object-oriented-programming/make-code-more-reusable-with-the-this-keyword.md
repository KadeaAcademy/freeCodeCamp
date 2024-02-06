---
id: 587d7dad367417b2b2512b76
title: Rendre le code plus réutilisable avec le mot-clé this
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

Le dernier défi a introduit une méthode dans l'objet `canard`. Elle utilise la notation pointée `canard.nom` pour accéder à la valeur de la propriété `nom` dans la déclaration de retour :

```js
citerLeNom: function() {return "Le nom de ce canard est " + canard.name + ".";}
```

Bien qu'il s'agisse d'un moyen valable d'accéder à la propriété de l'objet, il y a un piège à éviter. Si le nom de la variable change, tout code faisant référence au nom original devra également être mis à jour. Dans une courte définition d'objet, ce n'est pas un problème, mais si un objet a de nombreuses références à ses propriétés, le risque d'erreur est plus grand.

Le mot-clé `this` permet d'éviter ces problèmes :

```js
let canard = {
  name: "Aflac",
  nombreDePattes: 2,
  citerLeNom: function() {return "Le nom de ce canard est " + this.name + ".";}
};
```

`this` est un sujet profond, et l'exemple ci-dessus n'est qu'une façon de l'utiliser. Dans le contexte actuel, `this` fait référence à l'objet auquel la méthode est associée : `canard`. Si le nom de l'objet est changé en `mallard`, il n'est pas nécessaire de trouver toutes les références à `canard` dans le code. Cela rend le code réutilisable et plus facile à lire.

# --instructions--

Modifiez la méthode `chien.compterPattes` pour supprimer toute référence à `chien`. Utilisez l'exemple `canard` pour vous guider.

# --hints--

`chien.compterPattes()` doit renvoyer la chaîne choisie.

```js
assert(chien.compterPattes() === 'Ce chien a 4 pattes.');
```

Votre code doit utiliser le mot-clé `this` pour accéder à la propriété `nombreDePattes` de `chien`.

```js
assert(code.match(/this\.nombreDePattes/g));
```

# --seed--

## --seed-contents--

```js
let chien = {
  nom: "Spot",
  nombreDePattes: 4,
  compterPattes: function() {return "Ce chien a " + chien.nombreDePattes + " pattes.";}
};

chien.compterPattes();
```

# --solutions--

```js
let chien = {
  nom: "Spot",
  nombreDePattes: 4,
  compterPattes () {
    return 'Ce chien a ' + this.nombreDePattes + ' pattes.';
  }
};

chien.compterPattes();
```
