---
id: 56533eb9ac21ba0edf2244d9
title: Comparaisons avec l'opérateur logique ou
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--

L'opérateur logique ou (`||`) renvoie `true` si l'un des opérandes est `true`. Dans le cas contraire, il renvoie `false`.

L'opérateur logique ou est composé de deux symboles de tuyau : (`||`). On le trouve généralement entre les touches Backspace et Enter.

Le modèle ci-dessous devrait vous sembler familier d'après les points de repère précédents :

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

retournera `Yes` seulement si `num` est compris entre `5` et `10` (5 et 10 inclus). La même logique peut être écrite comme suit :

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

Combinez les deux instructions `if` en une seule instruction qui renvoie la chaîne `Outside` si `val` n'est pas comprise entre `10` et `20`, inclusivement. Sinon, elle renvoie la chaîne `Inside`.

# --hints--

Vous devez utiliser l'opérateur `||` une fois.

```js
assert(code.match(/\|\|/g).length === 1);
```

Vous ne devez avoir qu'une seule instruction `if`.

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalOr(0)` devrait retourner la chaîne `Outside`.

```js
assert(testLogicalOr(0) === 'Outside');
```

`testLogicalOr(9)` devrait retourner la chaîne `Outside`

```js
assert(testLogicalOr(9) === 'Outside');
```

`testLogicalOr(10)` devrait retourner la chaîne `Inside`

```js
assert(testLogicalOr(10) === 'Inside');
```

`testLogicalOr(15)` devrait retourner la chaîne `Inside`

```js
assert(testLogicalOr(15) === 'Inside');
```

`testLogicalOr(19)` devrait retourner la chaîne `Inside`

```js
assert(testLogicalOr(19) === 'Inside');
```

`testLogicalOr(20)` devrait retourner la chaîne `Inside`

```js
assert(testLogicalOr(20) === 'Inside');
```

`testLogicalOr(21)` devrait retourner la chaîne `Outside`

```js
assert(testLogicalOr(21) === 'Outside');
```

`testLogicalOr(25)` devrait retourner la chaîne `Outside`

```js
assert(testLogicalOr(25) === 'Outside');
```

# --seed--

## --seed-contents--

```js
function testLogicalOr(val) {
  // Ne changez que le code en dessous de cette ligne

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Ne changez que le code au-dessus de cette ligne
  return "Inside";
}

testLogicalOr(15);
```

# --solutions--

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
```
