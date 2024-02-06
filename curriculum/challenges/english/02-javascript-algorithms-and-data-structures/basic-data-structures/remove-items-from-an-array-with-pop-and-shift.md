---
id: 587d78b2367417b2b2512b0f
title: Supprimer des éléments d'un tableau avec pop() et shift()
challengeType: 1
forumTopicId: 301165
dashedName: remove-items-from-an-array-with-pop-and-shift
---

# --description--

Les méthodes `push()` et `unshift()` ont des méthodes correspondantes qui sont presque des opposés fonctionnels : `pop()` et `shift()`. Comme vous l'avez peut-être deviné, au lieu d'ajouter, `pop()` supprime* un élément à la fin d'un tableau, tandis que `shift()` supprime un élément au début. La principale différence entre `pop()` et `shift()` et leurs cousines `push()` et `unshift()` est qu'aucune de ces méthodes ne prend de paramètres, et qu'elles ne permettent de modifier un tableau que par un seul élément à la fois.

Voyons cela de plus près :

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
```

`greetings` aurait la valeur `['whats up?', 'hello']`.

```js
greetings.shift();
```

`greetings` aurait la valeur `['hello']`.

We can also return the value of the removed element with either method like this:

```js
let popped = greetings.pop();
```

`greetings` aurait la valeur `[]`, et `popped` aurait la valeur `hello`.

# --instructions--

Nous avons défini une fonction, `popShift`, qui prend un tableau en argument et renvoie un nouveau tableau. Modifiez la fonction, en utilisant `pop()` et `shift()`, pour supprimer le premier et le dernier élément du tableau en argument, et assignez les éléments supprimés à leurs variables correspondantes, de sorte que le tableau retourné contienne leurs valeurs.

# --hints--

`popShift(["challenge", "is", "not", "complete"])` devrait renvoyer `["challenge", "complete"]`

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

La fonction `popShift` doit utiliser la méthode `pop()`.

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

La fonction `popShift` doit utiliser la méthode `shift()`.

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --seed--

## --seed-contents--

```js
function popShift(arr) {
  let popped; // Modifiez cette ligne
  let shifted; // Modifiez cette ligne
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

# --solutions--

```js
function popShift(arr) {
  let popped = arr.pop(); // Modifiez cette ligne
  let shifted = arr.shift(); // Modifiez cette ligne
  return [shifted, popped];
}
```
