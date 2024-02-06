---
id: 56533eb9ac21ba0edf2244cd
title: Accéder aux tableaux imbriqués
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

Comme nous l'avons vu dans les exemples précédents, les objets peuvent contenir à la fois des objets imbriqués et des tableaux imbriqués. Comme pour l'accès aux objets imbriqués, la notation des crochets de tableau peut être enchaînée pour accéder aux tableaux imbriqués.

Voici un exemple de la façon d'accéder à un tableau imbriqué :

```js
const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
```

`ourPets[0].names[1]` serait la chaîne `Fluffy`, and `ourPets[1].names[0]` serait la chaîne `Spot`.

# --instructions--

En utilisant la notation par points et crochets, définissez la variable `secondTree` comme étant le deuxième élément de la liste `trees` de l'objet `myPlants`.

# --hints--

`secondTree` doit être égal à la chaîne de caractères `pine`.

```js
assert(secondTree === 'pine');
```

Votre code doit utiliser la notation par points et par crochets pour accéder à `myPlants`.

```js
assert(/=\s*myPlants\[1\].list\[1\]/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(x) {
  if(typeof x != 'undefined') {
    return "secondTree = " + x;
  }
  return "secondTree is undefined";
})(secondTree);
```

## --seed-contents--

```js
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = "";
```

# --solutions--

```js
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
```
