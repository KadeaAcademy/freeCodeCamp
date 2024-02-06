---
id: 56533eb9ac21ba0edf2244e1
title: Embriquer des boucles For
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

Si vous avez un tableau multidimensionnel, vous pouvez utiliser la même logique que le point de repère précédent pour parcourir en boucle le tableau et ses sous tableaux. Voici un exemple :

```js
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

Cela produit chaque sous-élément de `arr` un par un. Notez que pour la boucle interne, nous vérifions la `.length` de `arr[i]`, puisque `arr[i]` est lui-même un tableau.

# --instructions--

Modifiez la fonction `multiplyAll` pour qu'elle renvoie le produit de tous les nombres dans les sous-tableaux de `arr`.

# --hints--

`multiplyAll([[1], [2], [3]])` devrait retourner `6`

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

`multiplyAll([[1, 2], [3, 4], [5, 6, 7]])` devrait retourner `5040`

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

`multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])` devrait retourner `54`

```js
assert(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9]
  ]) === 54
);
```

# --seed--

## --seed-contents--

```js
function multiplyAll(arr) {
  let product = 1;
  // Ne changez que le code en dessous de cette ligne

  // Ne changez que le code au-dessus de cette ligne
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

# --solutions--

```js
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
```
