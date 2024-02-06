---
id: 587d7dad367417b2b2512b77
title: Définir une fonction constructrice
challengeType: 1
forumTopicId: 16804
dashedName: define-a-constructor-function
---

# --description--

Les <dfn>constructeurs</dfn> sont des fonctions qui créent de nouveaux objets. Ils définissent les propriétés et les comportements qui appartiendront au nouvel objet. Il s'agit en quelque sorte d'un plan pour la création de nouveaux objets.

Voici un exemple de constructeur :

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

Ce constructeur définit un objet `Bird` dont les propriétés `name`, `color` et `numLegs` sont respectivement Albert, blue et 2. Les constructeurs suivent quelques conventions :

<ul><li>Les constructeurs sont définis avec un nom en majuscules afin de les distinguer des autres fonctions qui ne sont pas des <code>constructeurs</code>.</li><li>Les constructeurs utilisent le mot-clé <code>this</code> pour définir les propriétés de l'objet qu'ils vont créer. À l'intérieur du constructeur, <code>this</code> fait référence au nouvel objet qu'il va créer.</li><li>Les constructeurs définissent des propriétés et des comportements au lieu de renvoyer une valeur comme le feraient d'autres fonctions.</li></ul>

# --instructions--

Créer un constructeur, `Dog`, avec les propriétés `name`, `color`, et `numLegs` qui sont respectivement une chaîne de caractères, une chaîne de caractères et un nombre.

# --hints--

La propriété `Dog` doit avoir une propriété `name` qui doit être une chaîne de caractères.

```js
assert(typeof new Dog().name === 'string');
```

La propriété `color` de `Dog` doit être une chaîne de caractères.

```js
assert(typeof new Dog().color === 'string');
```

La propriété `Dog` doit avoir la valeur `numLegs` fixée à un nombre.

```js
assert(typeof new Dog().numLegs === 'number');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```
