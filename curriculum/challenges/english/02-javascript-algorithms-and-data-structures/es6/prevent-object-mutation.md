---
id: 598f48a36c8c40764b4e52b3
title: Empêcher la mutation des objets
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

Comme nous l'avons vu dans le défi précédent, la déclaration `const` seule ne protège pas vraiment vos données de la mutation. Pour s'assurer que vos données ne changent pas, JavaScript fournit une fonction `Object.freeze` pour empêcher la mutation des données.

Toute tentative de modification de l'objet sera rejetée, avec une erreur lancée si le script est exécuté en mode strict.

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

Les affectations `obj.review` et `obj.newProp` entraîneront des erreurs, car notre éditeur fonctionne en mode strict par défaut, et la console affichera la valeur `{ name : "FreeCodeCamp", review : "Awesome" }`.

# --instructions--

Dans ce défi, vous allez utiliser `Object.freeze` pour empêcher les constantes mathématiques de changer. Vous devez geler l'objet `MATH_CONSTANTS` afin que personne ne puisse modifier la valeur de `PI`, ajouter ou supprimer des propriétés.

# --hints--

Vous ne devez pas remplacer le mot-clé `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS` devrait être une variable constante (en utilisant `const`).

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

Vous ne devez pas modifier la déclaration initiale de `MATH_CONSTANTS`.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g
    )
  );
```

`PI` devrait être égal à `3.14`.

```js
assert(PI === 3.14);
```

# --seed--

## --seed-contents--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Ne changez que le code en dessous de cette ligne


  // Ne changez que le code au-dessus de cette ligne
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

# --solutions--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```
