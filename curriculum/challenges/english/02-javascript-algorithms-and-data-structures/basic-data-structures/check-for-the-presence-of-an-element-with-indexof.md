---
id: 587d7b7b367417b2b2512b14
title: Vérifier la présence d'un élément avec indexOf()
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

Puisque les tableaux peuvent être modifiés, ou *mutés*, à tout moment, il n'y a aucune garantie quant à l'emplacement d'un élément particulier dans un tableau donné, ou même si cet élément existe toujours. Heureusement, JavaScript nous fournit une autre méthode intégrée, `indexOf()`, qui nous permet de vérifier rapidement et facilement la présence d'un élément dans un tableau. `indexOf()` prend un élément comme paramètre, et lorsqu'il est appelé, il renvoie la position, ou indice, de cet élément, ou `-1` si l'élément n'existe pas dans le tableau.

Par exemple :

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

`indexOf('dates')` renvoie `-1`, `indexOf('oranges')` renvoie `2`, et `indexOf('poires')` renvoie `1` (le premier indice auquel chaque élément existe).

# --instructions--

`indexOf()` peut être incroyablement utile pour vérifier rapidement la présence d'un élément dans un tableau. Nous avons défini une fonction, `quickCheck`, qui prend un tableau et un élément comme arguments. Modifiez la fonction en utilisant `indexOf()` pour qu'elle renvoie `vrai` si l'élément passé existe dans le tableau, et `faux` dans le cas contraire.

# --hints--

La fonction `quickCheck` doit retourner un booléen (`true` ou `false`), et non une chaîne de caractères (`"true"` ou `"false"`)

```js
assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

`quickCheck(["squash", "onions", "shallots"], "mushrooms")` devrait renvoyer `false`

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["onions", "squash", "shallots"], "onions")` devrait renvoyer `true`

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)` devrait renvoyer `true`

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)` devrait renvoyer `false`

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

La fonction `quickCheck` doit utiliser la méthode `indexOf()`.

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --seed--

## --seed-contents--

```js
function quickCheck(arr, elem) {
  // Ne changez que le code en dessous de cette ligne

  // Ne changez que le code au-dessus de cette ligne
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# --solutions--

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```
