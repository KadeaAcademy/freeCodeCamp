---
id: 5cd9a70215d3c4e65518328f
title: Utiliser la récursion pour créer un compte à rebours
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

Dans un [défi précédent](/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion), vous avez appris à utiliser la récursion pour remplacer une boucle `for`. Maintenant, examinons une fonction plus complexe qui renvoie un tableau d'entiers consécutifs allant de `1` au nombre passé à la fonction.

Comme mentionné dans le défi précédent, il y aura un cas de base. Le cas de base indique à la fonction récursive quand elle n'a plus besoin de s'appeler elle-même. Il s'agit d'un cas simple où la valeur de retour est déjà connue. Il y aura également un appel récursif qui exécutera la fonction originale avec des arguments différents. Si la fonction est écrite correctement, le cas de base sera finalement atteint.

Par exemple, disons que vous voulez écrire une fonction récursive qui renvoie un tableau contenant les nombres `1` à `n`. Cette fonction devra accepter un argument, `n`, représentant le dernier nombre. Elle devra ensuite s'appeler elle-même avec des valeurs de `n` de plus en plus petites jusqu'à ce qu'elle atteigne `1`. Vous pourriez écrire la fonction comme suit :

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

La valeur `[1, 2, 3, 4, 5]` sera affichée dans la console.

Au début, cela semble contre-intuitif puisque la valeur de `n` *décroit*, mais les valeurs dans le tableau final sont *augmentées*. Cela se produit parce que le push se produit en dernier, après que l'appel récursif soit revenu. Au moment où `n` est poussé dans le tableau, `countup(n - 1)` a déjà été évalué et a retourné `[1, 2, ..., n - 1]`.

# --instructions--

Nous avons défini une fonction appelée `countdown` avec un paramètre (`n`). La fonction doit utiliser la récursion pour retourner un tableau contenant les entiers de `n` à `1` en fonction du paramètre `n`. Si la fonction est appelée avec un nombre inférieur à 1, elle doit renvoyer un tableau vide. Par exemple, l'appel de cette fonction avec `n = 5` devrait renvoyer le tableau `[5, 4, 3, 2, 1]`. Votre fonction doit utiliser la récursion en s'appelant elle-même et ne doit pas utiliser de boucles d'aucune sorte.

# --hints--

`countdown(-1)` doit retourner un tableau vide.

```js
assert.isEmpty(countdown(-1));
```

`countdown(10)` doit retourner `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

`countdown(5)` doit retourner `[5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

Votre code ne doit reposer sur aucun type de boucle (`for`, `while` ou les fonctions d'ordre supérieur telles que `forEach`, `map`, `filter` et `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Vous devez utiliser la récursion pour résoudre ce problème.

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

# --seed--

## --seed-contents--

```js
// Ne changez que le code en dessous de cette ligne
function countdown(n){
  return;
}
// Ne changez que le code au-dessus de cette ligne
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
