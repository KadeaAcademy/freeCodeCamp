---
id: 587d7da9367417b2b2512b69
title: Trier un tableau par ordre alphabétique à l'aide de la méthode de tri
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

La méthode `sort` trie les éléments d'un tableau selon la fonction de rappel.

Par exemple, la méthode `sort` permet de trier les éléments d'un tableau selon la fonction de rappel :

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
```

Cela renverrait la valeur `[1, 2, 3, 4, 5]`.

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

Cela renverrait la valeur `['z', 's', 'l', 'h', 'b']`.

La méthode de tri par défaut de JavaScript est la valeur ponctuelle Unicode de la chaîne de caractères, ce qui peut donner des résultats inattendus. Il est donc recommandé de fournir une fonction de rappel pour spécifier comment trier les éléments du tableau. Lorsqu'une telle fonction de rappel, normalement appelée `compareFunction`, est fournie, les éléments du tableau sont triés en fonction de la valeur de retour de la `compareFunction` : Si `compareFunction(a,b)` renvoie une valeur inférieure à 0 pour deux éléments `a` et `b`, alors `a` sera placé avant `b`. Si `compareFunction(a,b)` retourne une valeur supérieure à 0 pour deux éléments `a` et `b`, alors `b` viendra avant `a`. Si `compareFunction(a,b)` retourne une valeur égale à 0 pour deux éléments `a` et `b`, alors `a` et `b` resteront inchangés.

# --instructions--

Utilisez la méthode `sort` de la fonction `alphabeticalOrder` pour trier les éléments de `arr` par ordre alphabétique. La fonction doit renvoyer le tableau trié.

# --hints--

Votre code doit utiliser la méthode `sort`.

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` devrait retourner `["a", "a", "c", "d", "g", "z"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` devrait retourner `["a", "h", "m", "m", "n", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` devrait retourner `["a", "a", "a", "a", "t", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) ===
    JSON.stringify(['a', 'a', 'a', 'a', 't', 'x'])
);
```

# --seed--

## --seed-contents--

```js
function alphabeticalOrder(arr) {
  // Ne modifiez que le code situé en dessous de cette ligne

  return arr
  // Ne modifiez que le code au-dessus de cette ligne
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

# --solutions--

```js
function alphabeticalOrder(arr) {
  return arr.sort();
}
```
