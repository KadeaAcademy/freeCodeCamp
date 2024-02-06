---
id: 56533eb9ac21ba0edf2244c2
title: Retourner une valeur à partir d'une fonction avec Return
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
dashedName: return-a-value-from-a-function-with-return
---

# --description--

On peut passer des valeurs dans une fonction avec <dfn>arguments</dfn>. On peut utiliser une instruction `return` pour renvoyer une valeur depuis une fonction.

**Example**

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` a la valeur `8`.

`plusThree` prend un <dfn>argument</dfn> pour `num` et retourne une valeur égale à `num + 3`.

# --instructions--

Créez une fonction `timesFive` qui accepte un argument, le multiplie par `5`, et retourne la nouvelle valeur.

# --hints--

`timesFive` devrait être une fonction

```js
assert(typeof timesFive === 'function');
```

`timesFive(5)` devrait donner `25`.

```js
assert(timesFive(5) === 25);
```

`timesFive(2)` devrait retourner `10`.

```js
assert(timesFive(2) === 10);
```

`timesFive(0)` devrait retourner `0`.

```js
assert(timesFive(0) === 0);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```
