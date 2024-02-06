---
id: 587d7dac367417b2b2512b73
title: Créer un objet JavaScript de base
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

Pensez à des choses que l'on voit tous les jours, comme les voitures, les magasins et les oiseaux. Ce sont tous des <dfn>objets</dfn> : des choses tangibles que l'on peut observer et avec lesquelles on peut interagir.

Quelles sont les qualités de ces objets ? Une voiture a des roues. Les magasins vendent des articles. Les oiseaux ont des ailes.

Ces qualités, ou <dfn>propriétés</dfn>, définissent ce qui constitue un objet. Notez que des objets similaires partagent les mêmes propriétés, mais peuvent avoir des valeurs différentes pour ces propriétés. Par exemple, toutes les voitures ont des roues, mais toutes n'ont pas le même nombre de roues.

Les objets en JavaScript sont utilisés pour modéliser des objets du monde réel, en leur donnant des propriétés et un comportement identiques à ceux de leurs homologues du monde réel. Voici un exemple utilisant ces concepts pour créer un objet `canard` :

```js
let canard = {
  nom : "Aflac",
  nombreDePattes : 2
} ;
```

Cet objet `canard` a deux paires propriété/valeur : un `nom` de `Aflac` et un `nombreDePattes` de 2.

# --instructions--

Créez un objet `chien` avec les propriétés `nom` et `nombreDePattes`, et définissez-les respectivement à une chaîne de caractères et à un nombre.

# --hints--

`chien` devrait être un objet

```js
assert(typeof chien === 'object');
```

`chien` doit avoir une propriété `nom` qui est une chaîne de caractères.

```js
assert(typeof chien.nom === 'string');
```

`chien` doit avoir une propriété `nombreDePattes` qui doit être un nombre.

```js
assert(typeof chien.nombreDePattes === 'number');
```

# --seed--

## --seed-contents--

```js
let chien = {

};
```

# --solutions--

```js
let chien = {
  nom: '',
  nombreDePattes: 4
};
```
