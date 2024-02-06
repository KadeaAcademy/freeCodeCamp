---
id: 587d7b7e367417b2b2512b20
title: Utiliser un tableau pour stocker une collection de données
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

L'exemple ci-dessous illustre l'implémentation la plus simple d'une structure de données de type tableau. C'est ce qu'on appelle un tableau unidimensionnel, ce qui signifie qu'il n'a qu'un seul niveau, ou qu'il n'a pas d'autres tableaux imbriqués en son sein. Remarquez qu'il contient des <dfn>booléens</dfn>, des <dfn>chaînes de caractères</dfn> et des <dfn>nombres</dfn>, parmi d'autres types de données JavaScript valides :

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

L'appel `console.log` affiche `7`.

Tous les tableaux ont une propriété de longueur, qui, comme indiqué ci-dessus, peut être très facilement accessible avec la syntaxe `Array.length`. Une implémentation plus complexe d'un tableau peut être vue ci-dessous. C'est ce qu'on appelle un tableau multidimensionnel, ou un tableau qui contient d'autres tableaux. Remarquez que ce tableau contient également des objets JavaScript, que nous examinerons de très près dans notre prochaine section, mais pour l'instant, tout ce que vous devez savoir est que les tableaux sont également capables de stocker des objets complexes.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

# --instructions--

Nous avons défini une variable appelée `yourArray`. Complétez l'énoncé en assignant un tableau d'au moins 5 éléments à la variable `yourArray`. Votre tableau doit contenir au moins une <dfn>chaîne de caractères</dfn>, un <dfn>nombre</dfn> et un <dfn>booléen</dfn>.

# --hints--

`yourArray` devrait être un tableau.

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` doit comporter au moins 5 éléments.

```js
assert.isAtLeast(yourArray.length, 5);
```

`yourArray` doit contenir au moins un `boolean`.

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

`yourArray` doit contenir au moins un `number`.

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

`yourArray` doit contenir au moins un `string`.

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --seed--

## --seed-contents--

```js
let yourArray; // Modifiez cette ligne
```

# --solutions--

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```
