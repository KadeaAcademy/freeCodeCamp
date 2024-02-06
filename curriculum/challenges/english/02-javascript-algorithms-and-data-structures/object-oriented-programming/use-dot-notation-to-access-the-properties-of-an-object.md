---
id: 587d7dac367417b2b2512b74
title: Utiliser la notation pointée pour accéder aux propriétés d'un objet
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

Le dernier défi a permis de créer un objet doté de diverses propriétés. Vous allez maintenant voir comment accéder aux valeurs de ces propriétés. Voici un exemple :

```js
let canard = {
  nom: "Aflac",
  nombreDePattes: 2
};
console.log(canard.nom);
```

La notation pointée est utilisée sur le nom de l'objet, `canard`, suivi du nom de la propriété, `nom`, pour accéder à la valeur de `Aflac`.

# --instructions--

Affichez les deux propriétés de l'objet `chien` sur votre console.

# --hints--

Votre code doit utiliser `console.log` pour afficher la valeur de la propriété `nom` de l'objet `chien`.

```js
assert(/console.log\(.*chien\.nom.*\)/g.test(code));
```

Votre code doit utiliser `console.log` pour afficher la valeur de la propriété `nombreDePattes` de l'objet `chien`.

```js
assert(/console.log\(.*chien\.nombreDePattes.*\)/g.test(code));
```

# --seed--

## --seed-contents--

```js
let chien = {
  nom: "Spot",
  nombreDePattes: 4
};
// Ne modifier que le code situé en dessous de cette ligne
```

# --solutions--

```js
let chien = {
  nom: "Spot",
  nombreDePattes: 4
};
console.log(chien.nom);
console.log(chien.nombreDePattes);
```
