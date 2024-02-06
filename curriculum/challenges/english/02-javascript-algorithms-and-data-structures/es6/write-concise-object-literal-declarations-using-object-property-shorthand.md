---
id: 587d7b8a367417b2b2512b4f
title: Écrire des déclarations concises de littéral d'objet en utilisant le raccourci de propriété d'objet
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6 ajoute un support intéressant pour définir facilement les littéraux d'objet.

Considérez le code suivant :

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` est une fonction simple qui renvoie un objet contenant deux propriétés. ES6 fournit le sucre syntaxique pour éliminer la redondance de l'écriture de `x : x`. Vous pouvez simplement écrire `x` une fois, et il sera converti en `x : x` (ou quelque chose d'équivalent) sous le capot. Voici la même fonction que précédemment, réécrite pour utiliser cette nouvelle syntaxe :

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

Utilisez le raccourci de propriété d'objet avec les littéraux d'objet pour créer et retourner un objet avec les propriétés `name`, `age` et `gender`.

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` devrait renvoyer `{name: "Zodiac Hasbro", age: 56, gender: "male"}`.

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

Votre code ne doit pas utiliser `key:value`.

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Ne changez que le code en dessous de cette ligne
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Ne changez que le code au-dessus de cette ligne
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
```
