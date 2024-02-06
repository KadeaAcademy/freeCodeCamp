---
id: a97fd23d9b809dac9921074f
title: Arguments Optionnels
challengeType: 5
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

Créez une fonction qui additionne deux arguments. Si un seul argument est fourni, alors une fonction qui attend un argument et renvoie la somme sera renvoyée.

Par exemple, `addTogether(2, 3)` devrait retourner `5`, et `addTogether(2)` devrait retourner une fonction.

L'appel de cette fonction retournée avec un seul argument renverra alors la somme :

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` renvoie `5`.

Si l'un des arguments n'est pas un nombre valide, la fonction retourne undefined.

# --hints--

`addTogether(2, 3)` devrait retourner 5.

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23, 30)` devrait retourner 53.

```js
assert.deepEqual(addTogether(23, 30), 53);
```

`addTogether(5)(7)` devrait retourner 12.

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` devrait retourner `undefined`.

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(2, "3")` devrait retourner `undefined`.

```js
assert.isUndefined(addTogether(2, '3'));
```

`addTogether(2)([3])` devrait retourner `undefined`.

```js
assert.isUndefined(addTogether(2)([3]));
```

`addTogether("2", 3)` devrait retourner `undefined`.

```js
assert.isUndefined(addTogether('2', 3));
```

# --seed--

## --seed-contents--

```js
function addTogether() {
  return false;
}

addTogether(2,3);
```

# --solutions--

```js
function addTogether() {
  var a = arguments[0];
  if (toString.call(a) !== '[object Number]') return;
  if (arguments.length === 1) {
    return function(b) {
      if (toString.call(b) !== '[object Number]') return;
      return a + b;
    };
  }
  var b = arguments[1];
  if (toString.call(b) !== '[object Number]') return;
  return a + arguments[1];
}
```
