---
id: 587d7dae367417b2b2512b79
title: Étendre les constructeurs pour recevoir des arguments
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

Les constructeurs `Bird` et `Dog` du dernier défi ont bien fonctionné. Cependant, remarquez que tous les `Birds` (oiseaux) créés avec le constructeur `Bird` sont automatiquement nommés Albert, sont de couleur bleue et ont deux pattes. Que faire si vous voulez des oiseaux avec des valeurs différentes pour le nom et la couleur ? Il est possible de changer les propriétés de chaque oiseau manuellement, mais cela représente beaucoup de travail :

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Supposons que vous écriviez un programme pour suivre des centaines, voire des milliers d'oiseaux (birds) différents dans une volière. Cela prendrait beaucoup de temps de créer tous les oiseaux, puis de changer les propriétés pour des valeurs différentes pour chacun d'entre eux. Pour créer plus facilement différents objets `Bird` (oiseau), vous pouvez concevoir votre constructeur d'oiseau de manière à ce qu'il accepte des paramètres :

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Passez ensuite les valeurs comme arguments pour définir chaque oiseau unique dans le constructeur `Bird` : `let cardinal = new Bird("Bruce", "red");` Cela donne une nouvelle instance de `Bird` avec les propriétés `name` et `color` qui valent respectivement `Bruce` et `red`. La propriété `numLegs` est toujours fixée à 2. Le `cardinal` possède les propriétés suivantes :

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

Le constructeur est plus flexible. Il est maintenant possible de définir les propriétés de chaque `Bird` au moment où il est créé, ce qui est l'une des raisons pour lesquelles les constructeurs JavaScript sont si utiles. Ils regroupent les objets sur la base de caractéristiques et de comportements communs et définissent un plan qui automatise leur création.

# --instructions--

Créez un autre constructeur `Dog`. Cette fois, configurez-le pour qu'il prenne les paramètres `name` et `color`, et que la propriété `numLegs` soit égale à 4. Ensuite, créez un nouveau `Dog` sauvegardé dans la variable `terrier`. Passez-lui deux chaînes de caractères comme arguments pour les propriétés `name` et `color`.

# --hints--

`Dog` doit recevoir un argument pour `name`.

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` doit recevoir un argument pour `color`.

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

La propriété `numLegs` de `Dog` doit être égale à 4.

```js
assert(new Dog('Clifford').numLegs === 4);
```

`terrier` doit être créé en utilisant le constructeur `Dog`.

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```
