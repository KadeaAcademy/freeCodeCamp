---
id: 587d78b2367417b2b2512b0e
title: Ajouter des éléments à un tableau avec push() et unshift()
challengeType: 1
forumTopicId: 301151
dashedName: add-items-to-an-array-with-push-and-unshift
---

# --description--

La longueur d'un tableau, comme les types de données qu'il peut contenir, n'est pas fixe. Les tableaux peuvent être définis avec une longueur de n'importe quel nombre d'éléments, et des éléments peuvent être ajoutés ou supprimés au fil du temps ; en d'autres termes, les tableaux sont mutables. Dans ce défi, nous allons examiner deux méthodes qui permettent de modifier un tableau de manière programmatique : `Array.push()` and `Array.unshift()`.

Ces deux méthodes prennent un ou plusieurs éléments comme paramètres et ajoutent ces éléments au tableau sur lequel la méthode est appelée ; la méthode `push()` ajoute des éléments à la fin d'un tableau, et `unshift()` ajoute des éléments au début. Considérez l'exemple suivant :

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
```

`romanNumerals` aura la valeur `['XIX', 'XX', 'XXI', 'XXII']`.

```js
romanNumerals.push(twentyThree);
```

`romanNumerals` aura la valeur `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']`. Remarquez que nous pouvons également passer des variables, ce qui nous donne encore plus de flexibilité pour modifier dynamiquement les données de notre tableau.

# --instructions--

Nous avons défini une fonction, `mixedNumbers`, à laquelle nous passons un tableau comme argument. Modifiez la fonction en utilisant `push()` et `unshift()` pour ajouter `'I', 2, 'three'` au début du tableau et `7, 'VIII', 9` à la fin de sorte que le tableau retourné contienne des représentations des nombres 1-9 dans l'ordre.

# --hints--

`mixedNumbers(["IV", 5, "six"])` devrait maintenant retourner `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`

```js
assert.deepEqual(mixedNumbers(['IV', 5, 'six']), [
  'I',
  2,
  'three',
  'IV',
  5,
  'six',
  7,
  'VIII',
  9
]);
```

La fonction `mixedNumbers` doit utiliser la méthode `push()`.

```js
assert(mixedNumbers.toString().match(/\.push/));
```

La fonction `mixedNumbers` doit utiliser la méthode `unshift()`.

```js
assert(mixedNumbers.toString().match(/\.unshift/));
```

# --seed--

## --seed-contents--

```js
function mixedNumbers(arr) {
// Ne changez que le code en dessous de cette ligne

// Ne changez que le code au-dessus de cette ligne
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
```

# --solutions--

```js
function mixedNumbers(arr) {
  arr.push(7,'VIII',9);
  arr.unshift('I',2,'three');
  return arr;
}
```
