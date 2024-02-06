---
id: 5cfa3679138e7d9595b9d9d4
title: Remplacer les boucles par des récursions
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
dashedName: replace-loops-using-recursion
---

# --description--

La récursion est le concept selon lequel une fonction peut être exprimée en fonction d'elle-même. Pour mieux comprendre, commencez par penser à la tâche suivante : multiplier les `n` premiers éléments d'un tableau pour créer le produit de ces éléments. En utilisant une boucle `for`, vous pourriez faire ceci :

```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```

Cependant, remarquez que `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. Cela signifie que vous pouvez réécrire `multiply` en termes d'elle-même et ne jamais avoir besoin d'utiliser une boucle.

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

La version récursive de `multiply` se décompose comme suit. Dans le cas de base, lorsque `n <= 0`, elle retourne 1. Pour des valeurs plus grandes de `n`, elle s'appelle elle-même, mais avec `n - 1`. Cet appel de fonction est évalué de la même manière, en appelant `multiply` à nouveau jusqu'à ce que `n <= 0`. À ce stade, toutes les fonctions peuvent revenir et la fonction originale `multiply` renvoie la réponse.

**Note:** Les fonctions récursives doivent avoir un cas de base où elles retournent sans appeler la fonction à nouveau (dans cet exemple, lorsque `n <= 0`), sinon elles ne peuvent jamais terminer leur exécution.

# --instructions--

Ecrivez une fonction récursive, `sum(arr, n)`, qui retourne la somme des `n` premiers éléments d'un tableau `arr`.

# --hints--

`sum([1], 0)` devrait être égal à 0.

```js
assert.equal(sum([1], 0), 0);
```

`sum([2, 3, 4], 1)` devrait être égal à 2.

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

`sum([2, 3, 4, 5], 3)` devrait être égal à 9.

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
```

Votre code ne doit pas reposer sur des boucles (`for` ou `while` ou des fonctions d'ordre supérieur telles que `forEach`, `map`, `filter`, ou `reduce`.).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Vous devez utiliser la récursion pour résoudre ce problème.

```js
assert(
  sum.toString().match(/sum\(.*\)/g).length > 1
);
```

# --seed--

## --seed-contents--

```js
function sum(arr, n) {
  // Ne changez que le code en dessous de cette ligne

  // Ne changez que le code au-dessus de cette ligne
}
```

# --solutions--

```js
function sum(arr, n) {
  // Ne changez que le code en dessous de cette ligne
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Ne changez que le code au-dessus de cette ligne
}
```
