---
id: 587d7b7b367417b2b2512b16
title: Créer des tableaux multidimensionnels complexes
challengeType: 1
forumTopicId: 301159
dashedName: create-complex-multi-dimensional-arrays
---

# --description--

Génial ! Vous venez d'en apprendre beaucoup sur les tableaux ! Il s'agissait d'une vue d'ensemble de haut niveau, et il y a encore beaucoup à apprendre sur le travail avec les tableaux, que vous verrez en grande partie dans les sections suivantes. Mais avant de passer à l'étude des <dfn>objets</dfn>, regardons encore une fois comment les tableaux peuvent devenir un peu plus complexes que ce que nous avons vu dans les défis précédents.

L'une des caractéristiques les plus puissantes des tableaux en tant que structures de données est qu'ils peuvent contenir d'autres tableaux, voire être entièrement constitués de tableaux. Nous avons vu des tableaux qui contiennent des tableaux dans les défis précédents, mais des tableaux assez simples. Cependant, les tableaux peuvent contenir une profondeur infinie de tableaux qui peuvent contenir d'autres tableaux, chacun avec ses propres niveaux arbitraires de profondeur, et ainsi de suite. De cette façon, un tableau peut très rapidement devenir une structure de données très complexe, connue sous le nom de tableau <dfn>multidimensionnel</dfn> ou imbriqué. Prenons l'exemple suivant :

```js
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
```

Le tableau `deep` est imbriqué sur 2 niveaux de profondeur. Les tableaux `deeper` ont 3 niveaux de profondeur. Les tableaux `deepest` sont à 4 niveaux, et le `deepest?` est à 5 niveaux.

Bien que cet exemple puisse sembler alambiqué, ce niveau de complexité n'est pas inconnu, ni même inhabituel, lorsqu'on traite de grandes quantités de données. Cependant, nous pouvons toujours accéder très facilement aux niveaux les plus profonds d'un tableau aussi complexe avec la notation entre parenthèses :

```js
console.log(nestedArray[2][1][0][0][0]);
```

Cela affiche la chaîne `deepest-est?`. Et maintenant que nous savons où se trouve cette donnée, nous pouvons la réinitialiser si nécessaire :

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

Maintenant, il affiche `deeper still`.

# --instructions--

Nous avons défini une variable, `myNestedArray`, égale à un tableau. Modifiez `myNestedArray`, en utilisant n'importe quelle combinaison de chaînes de caractères, de nombres et de booléens pour les éléments de données, de façon à ce qu'il ait exactement cinq niveaux de profondeur (rappelez-vous, le tableau le plus externe est le niveau 1). Quelque part au troisième niveau, incluez la chaîne `deep`, au quatrième niveau, incluez la chaîne `deeper`, et au cinquième niveau, incluez la chaîne `deepest`.

# --hints--

`myNestedArray` ne doit contenir que des nombres, des booléens et des chaînes de caractères comme éléments de données.

```js
assert.strictEqual(
  (function (arr) {
    let flattened = (function flatten(arr) {
      const flat = [].concat(...arr);
      return flat.some(Array.isArray) ? flatten(flat) : flat;
    })(arr);
    for (let i = 0; i < flattened.length; i++) {
      if (
        typeof flattened[i] !== 'number' &&
        typeof flattened[i] !== 'string' &&
        typeof flattened[i] !== 'boolean'
      ) {
        return false;
      }
    }
    return true;
  })(myNestedArray),
  true
);
```

`myNestedArray` doit avoir exactement 5 niveaux de profondeur.

```js
assert.strictEqual(
  (function (arr) {
    let depth = 0;
    function arrayDepth(array, i, d) {
      if (Array.isArray(array[i])) {
        arrayDepth(array[i], 0, d + 1);
      } else {
        depth = d > depth ? d : depth;
      }
      if (i < array.length) {
        arrayDepth(array, i + 1, d);
      }
    }
    arrayDepth(arr, 0, 0);
    return depth;
  })(myNestedArray),
  4
);
```

`myNestedArray` doit contenir exactement une occurrence de la chaîne `deep` dans un tableau imbriqué à 3 niveaux de profondeur.

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deep').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deep')[0] === 2
);
```

`myNestedArray` doit contenir exactement une occurrence de la chaîne `deeper` dans un tableau imbriqué à 4 niveaux de profondeur.

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deeper').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deeper')[0] === 3
);
```

`myNestedArray` doit contenir exactement une occurrence de la chaîne `deepest` dans un tableau imbriqué à 5 niveaux de profondeur.

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deepest').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deepest')[0] === 4
);
```

# --seed--

## --seed-contents--

```js
let myNestedArray = [
  // Ne changez que le code en dessous de cette ligne
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Ne changez que le code au-dessus de cette ligne
];
```

# --solutions--

```js
let myNestedArray = [
  ['unshift', ['deep', ['deeper', ['deepest']]],false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
```
