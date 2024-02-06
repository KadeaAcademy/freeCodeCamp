---
id: 587d78b3367417b2b2512b11
title: Ajouter des éléments en utilisant splice()
challengeType: 1
forumTopicId: 301152
dashedName: add-items-using-splice
---

# --description--

Vous vous souvenez que dans le dernier défi, nous avons mentionné que `splice()` peut prendre jusqu'à trois paramètres ? Eh bien, vous pouvez utiliser le troisième paramètre, composé d'un ou plusieurs éléments, pour l'ajouter au tableau. Cela peut être très utile pour remplacer rapidement un élément, ou un ensemble d'éléments, par un autre.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
```

La deuxième occurrence de `12` est supprimée, et nous ajoutons `13` et `14` au même index. Le tableau `numbers` sera maintenant `[ 10, 11, 12, 13, 14, 15 ]`.

Ici, nous commençons avec un tableau de nombres. Ensuite, nous passons les éléments suivants à `splice()` : L'indice auquel on commence à supprimer des éléments (3), le nombre d'éléments à supprimer (1), et les arguments restants (13, 14) seront insérés à partir de ce même indice. Notez qu'il peut y avoir n'importe quel nombre d'éléments (séparés par des virgules) suivant `amountToDelete`, chacun d'entre eux étant inséré.

# --instructions--

Nous avons défini une fonction, `htmlColorNames`, qui prend un tableau de couleurs HTML comme argument. Modifiez la fonction en utilisant `splice()` pour supprimer les deux premiers éléments du tableau et ajouter `'DarkSalmon'` et `'BlanchedAlmond'` à leurs places respectives.

# --hints--

`htmlColorNames` devrait renvoyer `["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]`

```js
assert.deepEqual(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]),
  [
    'DarkSalmon',
    'BlanchedAlmond',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]
);
```

La fonction `htmlColorNames` doit utiliser la méthode `splice()`.

```js
assert(/.splice/.test(code));
```

Vous ne devez pas utiliser `shift()` ou `unshift()`.

```js
assert(!/shift|unshift/.test(code));
```

Vous ne devez pas utiliser la notation par crochets.

```js
assert(!/\[\d\]\s*=/.test(code));
```

# --seed--

## --seed-contents--

```js
function htmlColorNames(arr) {
 // Ne changez que le code en dessous de cette ligne

  // Ne changez que le code au-dessus de cette ligne
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```

# --solutions--

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```
