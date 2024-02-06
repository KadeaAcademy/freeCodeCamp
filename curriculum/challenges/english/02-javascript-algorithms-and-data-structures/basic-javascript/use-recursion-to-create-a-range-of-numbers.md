---
id: 5cc0bd7a49b71cb96132e54c
title: Utiliser la récursion pour créer une plage de nombres
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

Dans la continuité du défi précédent, nous vous offrons une nouvelle occasion de créer une fonction récursive pour résoudre un problème.

# --instructions--

Nous avons défini une fonction appelée `rangeOfNumbers` avec deux paramètres. La fonction doit retourner un tableau d'entiers qui commence par un nombre représenté par le paramètre `startNum` et se termine par un nombre représenté par le paramètre `endNum`. Le nombre de départ sera toujours inférieur ou égal au nombre d'arrivée. Votre fonction doit utiliser la récursion en s'appelant elle-même et ne pas utiliser de boucles d'aucune sorte. Elle doit également fonctionner dans les cas où les paramètres `startNum` et `endNum` sont identiques.

# --hints--

Votre fonction doit retourner un tableau.

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

Votre code ne doit pas utiliser de syntaxe de boucle (`for` ou `while` ou des fonctions d'ordre supérieur telles que `forEach`, `map`, `filter`, ou `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` devrait utiliser la récursion (s'appeler lui-même) pour résoudre ce problème.

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` devrait renvoyer `[1, 2, 3, 4, 5]`.

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` devrait renvoyer `[6, 7, 8, 9]`.

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` devrait retourner `[4]`.

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
