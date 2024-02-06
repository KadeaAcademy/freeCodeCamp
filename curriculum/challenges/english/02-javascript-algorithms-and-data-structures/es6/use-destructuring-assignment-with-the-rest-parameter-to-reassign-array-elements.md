---
id: 587d7b8a367417b2b2512b4c
title: >-
  Utiliser l'affectation de déstructuration avec le paramètre Rest pour réaffecter les éléments d'un tableau
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

Dans certaines situations impliquant une déstructuration du tableau, nous pourrions vouloir rassembler le reste des éléments dans un tableau séparé.

Le résultat est similaire à `Array.prototype.slice()`, comme indiqué ci-dessous :

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

La console affichera les valeurs `1, 2` et `[3, 4, 5, 7]`.

Les variables `a` et `b` prennent la première et la deuxième valeur du tableau. Ensuite, en raison de la présence du paramètre rest, `arr` obtient le reste des valeurs sous la forme d'un tableau. L'élément rest ne fonctionne correctement que comme dernière variable de la liste. En d'autres termes, vous ne pouvez pas utiliser le paramètre rest pour attraper un sous tableau qui laisse de côté le dernier élément du tableau original.

# --instructions--

Utilisez l'affectation de déstructuration avec le paramètre rest pour effectuer un `Array.prototype.slice()` efficace de sorte que `arr` soit un sous tableau du tableau original `source` avec les deux premiers éléments omis.

# --hints--

`arr` devrait être `[3,4,5,6,7,8,9,10]`

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

`source` devrait être `[1,2,3,4,5,6,7,8,9,10]`

```js
assert(source.every((v, i) => v === i + 1) && source.length === 10);
```

`Array.slice()` ne doit pas être utilisé.

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

Il faut utiliser la déstructuration sur `list`.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Ne changez que le code en dessous de cette ligne
  const arr = list; // Modifiez cette ligne
  // Ne changez que le code au-dessus de cette ligne
  return arr;
}
const arr = removeFirstTwo(source);
```

# --solutions--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
```
