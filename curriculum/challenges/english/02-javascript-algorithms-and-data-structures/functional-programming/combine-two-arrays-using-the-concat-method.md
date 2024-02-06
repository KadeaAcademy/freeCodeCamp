---
id: 587d7da9367417b2b2512b66
title: Combiner deux tableaux à l'aide de la méthode concat
challengeType: 1
forumTopicId: 301229
dashedName: combine-two-arrays-using-the-concat-method
---

# --description--

<dfn>Concaténation</dfn> signifie joindre des éléments bout à bout. JavaScript propose la méthode `concat` pour les chaînes et les tableaux, qui fonctionne de la même manière. Pour les tableaux, la méthode est appelée sur un tableau, puis un autre tableau est fourni comme argument à `concat`, qui est ajouté à la fin du premier tableau. La méthode renvoie un nouveau tableau et ne modifie aucun des tableaux d'origine. Voici un exemple :

```js
[1, 2, 3].concat([4, 5, 6]);
```

Le tableau retourné devrait être égal à `[1, 2, 3, 4, 5, 6]`.

# --instructions--

Utilisez la méthode `concat` de la fonction `nonMutatingConcat` pour concaténer `attach` à la fin de `original`. La fonction doit retourner le tableau concaténé.

# --hints--

Votre code doit utiliser la méthode `concat`.

```js
assert(code.match(/\.concat/g));
```

Le tableau `first` ne doit pas changer.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

Le tableau `second` ne doit pas changer.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingConcat([1, 2, 3], [4, 5])` devrait retourner `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingConcat(original, attach) {
// Ne modifiez que le code situé en dessous de cette ligne


// Ne modifiez que le code au-dessus de cette ligne
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
```

# --solutions--

```js
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
const first = [1, 2, 3];
const second = [4, 5];
```
