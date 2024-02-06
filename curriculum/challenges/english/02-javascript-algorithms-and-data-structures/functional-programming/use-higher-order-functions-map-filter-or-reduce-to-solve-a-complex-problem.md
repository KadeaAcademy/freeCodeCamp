---
id: 587d7b88367417b2b2512b45
title: Utiliser des fonctions d'ordre supérieur (map, filter ou reduce) pour résoudre un problème complexe
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

Maintenant que vous avez relevé quelques défis en utilisant des fonctions d'ordre supérieur comme `map()`, `filter()`, et `reduce()`, vous pouvez les appliquer pour résoudre un défi plus complexe.

# --instructions--

Complétez le code de la fonction `squareList` en utilisant n'importe quelle combinaison de `map()`, `filter()`, et `reduce()`. La fonction doit retourner un nouveau tableau contenant les carrés *uniquement* des entiers positifs (les nombres décimaux ne sont pas des entiers) lorsqu'un tableau de nombres réels lui est passé. Un exemple de tableau de nombres réels est `[-3, 4.8, 5, 3, -3.2]`.

**Note:** Votre fonction ne doit pas utiliser de boucles `for` ou `while` ou la fonction `forEach()`.

# --hints--

`squareList` devrait être une `function`.

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

`for`, `while` et `forEach` ne doivent pas être utilisés.

```js
assert(!code.match(/for|while|forEach/g));
```

`map`, `filter`, ou `reduce` doit être utilisé.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
```

La fonction doit retourner un `tableau`.

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` doit retourner `[16, 1764, 36]`.

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` doit retourner `[9, 100, 49]`.

```js
assert.deepStrictEqual(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]), [
  9,
  100,
  49
]);
```

# --seed--

## --seed-contents--

```js
const squareList = arr => {
  // Ne modifiez que le code situé en dessous de cette ligne
  return arr;
  // Ne modifiez que le code au-dessus de cette ligne
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

# --solutions--

```js
const squareList = arr => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
```
