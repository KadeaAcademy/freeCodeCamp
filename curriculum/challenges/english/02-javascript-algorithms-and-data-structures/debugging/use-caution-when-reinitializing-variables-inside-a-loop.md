---
id: 587d7b86367417b2b2512b3c
title: Soyez prudent lorsque vous réinitialisez des variables à l'intérieur d'une boucle
challengeType: 1
forumTopicId: 301194
dashedName: use-caution-when-reinitializing-variables-inside-a-loop
---

# --description--

Il est parfois nécessaire de sauvegarder des informations, d'incrémenter des compteurs ou de réinitialiser des variables dans une boucle. Un problème potentiel se pose lorsque les variables devraient être réinitialisées et ne le sont pas, ou vice versa. Ceci est particulièrement dangereux si vous réinitialisez accidentellement la variable utilisée pour la condition terminale, provoquant une boucle infinie.

L'impression des valeurs des variables à chaque cycle de votre boucle en utilisant `console.log()` peut découvrir un comportement bogué lié à la réinitialisation ou à l'absence de réinitialisation d'une variable.

# --instructions--

La fonction suivante est censée créer un tableau bidimensionnel avec `m` lignes et `n` colonnes de zéros. Malheureusement, elle ne produit pas le résultat attendu car la variable `row` n'est pas réinitialisée (remise à un tableau vide) dans la boucle externe. Corrigez le code pour qu'il renvoie un tableau 3x2 de zéros correct, qui ressemble à `[[0, 0], [0, 0], [0, 0]]`.

# --hints--

Votre code doit définir la variable `matrix` comme un tableau contenant 3 rangées et 2 colonnes de zéros chacune.

```js
assert(JSON.stringify(matrix) == '[[0,0],[0,0],[0,0]]');
```

La variable `matrix` devrait avoir 3 lignes.

```js
assert(matrix.length == 3);
```

La variable `matrix` doit avoir 2 colonnes dans chaque ligne.

```js
assert(
  matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2
);
```

`zeroArray(4,3)` devrait retourner un tableau contenant 4 lignes et 3 colonnes de zéros chacune.

```js
assert(JSON.stringify(zeroArray(4,3)) == '[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]');
```

# --seed--

## --seed-contents--

```js
function zeroArray(m, n) {
  // Crée un tableau 2-D avec m lignes et n colonnes de zéros.
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Ajoute la m-ième ligne à newArray.

    for (let j = 0; j < n; j++) {
      // Ajoute n zéros dans la ligne actuelle pour créer les colonnes.
      row.push(0);
    }
    // La ligne actuelle, qui contient maintenant n zéros, est ajoutée au tableau.
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```

# --solutions--

```js
function zeroArray(m, n) {
 // Crée un tableau 2-D avec m lignes et n colonnes de zéros.
 let newArray = [];
 for (let i = 0; i < m; i++) {
   let row = [];
   // Ajoute la m-ième ligne à newArray.

   for (let j = 0; j < n; j++) {
     // Ajoute n zéros dans la ligne actuelle pour créer les colonnes.
     row.push(0);
   }
   // La ligne actuelle, qui contient maintenant n zéros, est ajoutée au tableau.
   newArray.push(row);
 }
 return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```
