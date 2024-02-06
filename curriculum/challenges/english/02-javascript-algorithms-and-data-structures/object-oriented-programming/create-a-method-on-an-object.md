---
id: 587d7dad367417b2b2512b75
title: Créer une méthode sur un objet
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

Les objets peuvent avoir un type spécial de propriété, appelé <dfn>méthode</dfn>.

Les méthodes sont des propriétés qui sont des fonctions. Elles ajoutent un comportement différent à un objet. Voici l'exemple de `canard` avec une méthode :

```js
let canard = {
  nom: "Aflac",
  nombreDePattes: 2,
  citerLeNom: function() {return "Le nom de ce canard est " + canard.nom + ".";}
};
canard.citerLeNom();
```

L'exemple ajoute la méthode `citerLeNom`, qui est une fonction qui retourne une phrase donnant le nom du `canard`. Notez que la méthode accède à la propriété `nom` dans la déclaration de retour en utilisant `canard.nom`. Le prochain défi couvrira une autre façon de faire cela.

# --instructions--

En utilisant l'objet `chien`, donnez-lui une méthode appelée `compterPattes`. La méthode doit retourner la phrase `Ce chien a 4 pattes`.

# --hints--

`chien.compterPattes()` devrait être une fonction.

```js
assert(typeof chien.compterPattes === 'function');
```

`chien.compterPattes()` doit renvoyer la chaîne donnée - notez que la ponctuation et l'espacement sont importants.

```js
assert(chien.compterPattes() === 'Ce chien a 4 pattes.');
```

# --seed--

## --seed-contents--

```js
let chien = {
  nom: "Spot",
  nombreDePattes: 4,

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
