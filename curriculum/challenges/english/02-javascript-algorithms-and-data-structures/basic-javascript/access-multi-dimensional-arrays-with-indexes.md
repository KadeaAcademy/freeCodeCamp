---
id: 56592a60ddddeae28f7aa8e1
title: Accéder aux tableaux multidimensionnels avec des indices
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

Une façon d'envisager un tableau <dfn>multidimensionnel</dfn>, c'est comme un *tableau de tableaux*. Lorsque vous utilisez des parenthèses pour accéder à votre tableau, le premier ensemble de crochets fait référence aux entrées du tableau le plus extérieur (le premier niveau), et chaque paire de crochets supplémentaire fait référence au niveau suivant d'entrées à l'intérieur.

**Example**

```js
const tab = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

tab[3];
tab[3][0];
tab[3][0][1];
```

`tab[3]` est `[[10, 11, 12], 13, 14]`, `tab[3][0]` est `[10, 11, 12]`, et `tab[3][0][1]` est `11`.

**Remarque :** Il ne doit pas y avoir d'espace entre le nom du tableau et les crochets, comme `tableau [0][0]` et même ce `tableau [0] [0]` n'est pas autorisé. Bien que JavaScript soit capable de traiter cela correctement, cela peut perturber les autres programmeurs qui lisent votre code.

# --instructions--

En utilisant la notation entre crochets, sélectionnez un élément de `monTableau` tel que `myData` soit égal à `8`.

# --hints--

`myData` devrait être égal à `8`.

```js
assert(myData === 8);
```

Vous devriez utiliser la notation entre crochets pour lire la valeur correcte de `monTableau`.

```js
assert(/myData=monTableau\[2\]\[1\]/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
if(typeof monTableau !== "undefined"){(function(){return "myData: " + myData + " monTableau: " + JSON.stringify(monTableau);})();}
```

## --seed-contents--

```js
const monTableau = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = monTableau[0][0];
```

# --solutions--

```js
const monTableau = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
const myData = monTableau[2][1];
```
