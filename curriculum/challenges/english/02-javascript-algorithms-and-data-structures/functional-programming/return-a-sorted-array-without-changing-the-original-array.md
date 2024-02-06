---
id: 587d7da9367417b2b2512b6a
title: Renvoyer un tableau trié sans modifier le tableau d'origine
challengeType: 1
forumTopicId: 301237
dashedName: return-a-sorted-array-without-changing-the-original-array
---

# --description--

Un effet secondaire de la méthode `sort` est qu'elle change l'ordre des éléments dans le tableau original. En d'autres termes, elle modifie le tableau en place. Une façon d'éviter cela est de concaténer un tableau vide au tableau à trier (rappelez-vous que `slice` et `concat` renvoient un nouveau tableau), puis d'exécuter la méthode `sort`.

# --instructions--

Utilisez la méthode `sort` dans la fonction `nonMutatingSort` pour trier les éléments d'un tableau par ordre croissant. La fonction doit retourner un nouveau tableau et ne pas modifier la variable `globalArray`.

# --hints--

Votre code doit utiliser la méthode `sort`.

```js
assert(nonMutatingSort.toString().match(/\.sort/g));
```

La variable `globalArray` ne doit pas changer.

```js
assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]));
```

`nonMutatingSort(globalArray)` devrait retourner `[2, 3, 5, 6, 9]`.

```js
assert(
  JSON.stringify(nonMutatingSort(globalArray)) ===
    JSON.stringify([2, 3, 5, 6, 9])
);
```

`nonMutatingSort(globalArray)` ne doit pas être codée en dur.

```js
assert(!nonMutatingSort.toString().match(/\[.*?[23569].*?\]/gs));
```

La fonction doit renvoyer un nouveau tableau, et non le tableau qui lui a été transmis.

```js
assert(nonMutatingSort(globalArray) !== globalArray);
```

`nonMutatingSort([1, 30, 4, 21, 100000])` doit retourner `[1, 4, 21, 30, 100000]`.

```js
assert(JSON.stringify(nonMutatingSort([1, 30, 4, 21, 100000])) ===
    JSON.stringify([1, 4, 21, 30, 100000]))
```

`nonMutatingSort([140000, 104, 99])` doit retourner `[99, 104, 140000]`.

```js
assert(JSON.stringify(nonMutatingSort([140000, 104, 99])) ===
    JSON.stringify([99, 104, 140000]))
```

# --seed--

## --seed-contents--

```js
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
// Ne modifiez que le code situé en dessous de cette ligne


// Ne modifiez que le code au-dessus de cette ligne
}

nonMutatingSort(globalArray);
```

# --solutions--

```js
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a,b) => a-b);
}
```
