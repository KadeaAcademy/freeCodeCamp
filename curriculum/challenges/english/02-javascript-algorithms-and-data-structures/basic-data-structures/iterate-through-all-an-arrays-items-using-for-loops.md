---
id: 587d7b7b367417b2b2512b15
title: Itérer à travers tous les éléments d'un tableau en utilisant des boucles "For".
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

Parfois, lorsque l'on travaille avec des tableaux, il est très pratique de pouvoir itérer sur chaque élément pour trouver un ou plusieurs éléments dont on pourrait avoir besoin, ou de manipuler un tableau en fonction des éléments de données qui répondent à un certain ensemble de critères. JavaScript propose plusieurs méthodes intégrées qui permettent d'itérer sur des tableaux de manière légèrement différente pour obtenir des résultats différents (comme `every()`, `forEach()`, `map()`, etc.), mais la technique la plus flexible et qui nous offre le plus de contrôle est une simple boucle `for`.

Prenons l'exemple suivant :

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```

En utilisant une boucle `for`, cette fonction parcourt et accède à chaque élément du tableau, et le soumet à un test simple que nous avons créé. De cette façon, nous avons facilement et par programme déterminé quels éléments de données sont supérieurs à `10`, et renvoyé un nouveau tableau, `[12, 14, 80]`, contenant ces éléments.

# --instructions--

Nous avons défini une fonction, `filteredArray`, qui prend `arr`, un tableau imbriqué, et `elem` comme arguments, et retourne un nouveau tableau. `elem` représente un élément qui peut ou non être présent dans un ou plusieurs des tableaux imbriqués dans `arr`. Modifiez la fonction, en utilisant une boucle `for`, pour retourner une version filtrée du tableau passé, de sorte que tout tableau imbriqué dans `arr` contenant `elem` ait été supprimé.

# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` devrait renvoyer `[[10, 8, 3], [14, 6, 23]]`

```js
assert.deepEqual(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6]
    ],
    18
  ),
  [
    [10, 8, 3],
    [14, 6, 23]
  ]
);
```

`filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` devrait renvoyer `[["flutes", 4]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['trumpets', 2],
      ['flutes', 4],
      ['saxophones', 2]
    ],
    2
  ),
  [['flutes', 4]]
);
```

`filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` devrait renvoyer `[["amy", "beth", "sam"]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['amy', 'beth', 'sam'],
      ['dave', 'sean', 'peter']
    ],
    'peter'
  ),
  [['amy', 'beth', 'sam']]
);
```

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` devrait renvoyer `[]`

```js
assert.deepEqual(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  ),
  []
);
```

La fonction `filteredArray` doit utiliser une boucle `for`.

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --seed--

## --seed-contents--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Ne changez que le code en dessous de cette ligne

  // Ne changez que le code au-dessus de cette ligne
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

# --solutions--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```
