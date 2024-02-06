---
id: 587d7dad367417b2b2512b78
title: Utiliser un constructeur pour créer des objets
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

Voici le constructeur `Bird` du défi précédent :

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**REMARQUE:** `this` à l'intérieur du constructeur fait toujours référence à l'objet créé.

Notez que l'opérateur `new` est utilisé lors de l'appel d'un constructeur. Cela indique à JavaScript de créer une nouvelle instance de `Bird` appelée `blueBird`. Sans l'opérateur `new`, `this` à l'intérieur du constructeur ne pointerait pas vers l'objet nouvellement créé, ce qui donnerait des résultats inattendus. Maintenant, `blueBird` possède toutes les propriétés définies dans le constructeur `Bird` :

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

Comme tout autre objet, ses propriétés sont accessibles et modifiables :

```js
blueBird.name = 'Elvira';
blueBird.name;
```

# --instructions--

Utilisez le constructeur `Dog` de la dernière leçon pour créer une nouvelle instance de `Dog`, en l'assignant à la variable `hound`.

# --hints--

`hound` doit être créé en utilisant le constructeur `Dog`.

```js
assert(hound instanceof Dog);
```

Votre code doit utiliser l'opérateur `new` pour créer une instance de `Dog`.

```js
assert(code.match(/new/g));
```

# --seed--

## --seed-contents--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Ne modifiez que le code situé en dessous de cette ligne
```

# --solutions--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```
