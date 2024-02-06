---
id: 587d7da9367417b2b2512b67
title: Ajouter des éléments à la fin d'un tableau en utilisant concat au lieu de push
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

La programmation fonctionnelle consiste à créer et à utiliser des fonctions non mutantes.

Le dernier défi a présenté la méthode `concat` comme un moyen de combiner des tableaux dans un nouveau tableau sans modifier les tableaux d'origine. Comparez `concat` à la méthode `push`. `push` ajoute un élément à la fin du même tableau que celui sur lequel elle est appelée, ce qui modifie ce tableau. Voici un exemple :

```js
const arr = [1, 2, 3];
arr.push([4, 5, 6]);
```

`arr` aurait une valeur modifiée de `[1, 2, 3, [4, 5, 6]]`, ce qui n'est pas la méthode de programmation fonctionnelle.

`concat` offre un moyen d'ajouter de nouveaux éléments à la fin d'un tableau sans effets secondaires de mutation.

# --instructions--

Modifier la fonction `nonMutatingPush` pour qu'elle utilise `concat` pour ajouter `newItem` à la fin de `original` au lieu de `push`. La fonction devrait retourner un tableau.

# --hints--

Votre code doit utiliser la méthode `concat`.

```js
assert(code.match(/\.concat/g));
```

Votre code ne doit pas utiliser la méthode `push`.

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

Le tableau `first` ne doit pas changer.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

Le tableau `second` ne doit pas changer.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingPush([1, 2, 3], [4, 5])` doit retourner `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingPush(original, newItem) {
  // Ne modifiez que le code situé en dessous de cette ligne
  return original.push(newItem);

  // Ne modifiez que le code au-dessus de cette ligne
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
```
