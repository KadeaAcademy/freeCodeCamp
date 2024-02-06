---
id: 587d7b8b367417b2b2512b50
title: Écrire des fonctions déclaratives concises avec ES6
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

Lorsque l'on définit des fonctions dans des objets en ES5, il faut utiliser le mot-clé `function` comme suit :

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

Avec ES6, vous pouvez supprimer le mot-clé `function` et les deux points pour définir des fonctions dans les objets. Voici un exemple de cette syntaxe :

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

Reformulez la fonction `setGear` dans l'objet `bicycle` pour utiliser la syntaxe raccourcie décrite ci-dessus.

# --hints--

L'expression traditionnelle des fonctions ne doit pas être utilisée.

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` devrait être une fonction déclarative.

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` devrait changer la valeur de `gear` à 48.

```js
assert(new bicycle.setGear(48).gear === 48);
```

# --seed--

## --seed-contents--

```js
// Ne changez que le code en dessous de cette ligne
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Ne changez que le code au-dessus de cette ligne
bicycle.setGear(3);
console.log(bicycle.gear);
```

# --solutions--

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```
