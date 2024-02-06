---
id: 56533eb9ac21ba0edf2244d8
title: Comparaisons avec l'opérateur logique Et
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
dashedName: comparisons-with-the-logical-and-operator
---

# --description--

Parfois, vous devrez tester plus d'une chose à la fois. L'opérateur <dfn>logique et</dfn> (`&&`) renvoie `true` si et seulement si les <dfn>opérandes</dfn> à sa gauche et à sa droite sont vrais.

Le même effet pourrait être obtenu en imbriquant une instruction if dans une autre if :

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

ne renverra `Yes` que si `num` est supérieur à `5` et inférieur à `10`. La même logique peut s'écrire :

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

# --instructions--

Remplacez les deux instructions if par une seule, en utilisant l'opérateur `&&`, qui renverra la chaîne `Yes` si `val` est inférieur ou égal à `50` et supérieur ou égal à `25`. Sinon, renverra la chaîne `No`.

# --hints--

Vous devez utiliser l'opérateur `&&` une fois

```js
assert(code.match(/&&/g).length === 1);
```

Vous ne devriez avoir qu'une seule instruction `if`

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalAnd(0)` doit renvoyer la chaîne `No`

```js
assert(testLogicalAnd(0) === 'No');
```

`testLogicalAnd(24)` doit renvoyer la chaîne `No`

```js
assert(testLogicalAnd(24) === 'No');
```

`testLogicalAnd(25)` doit renvoyer la chaîne `Yes`

```js
assert(testLogicalAnd(25) === 'Yes');
```

`testLogicalAnd(30)` doit renvoyer la chaîne `Yes`

```js
assert(testLogicalAnd(30) === 'Yes');
```

`testLogicalAnd(50)` doit renvoyer la chaîne `Yes`

```js
assert(testLogicalAnd(50) === 'Yes');
```

`testLogicalAnd(51)` doit renvoyer la chaîne `No`

```js
assert(testLogicalAnd(51) === 'No');
```

`testLogicalAnd(75)` doit renvoyer la chaîne `No`

```js
assert(testLogicalAnd(75) === 'No');
```

`testLogicalAnd(80)` doit renvoyer la chaîne `No`

```js
assert(testLogicalAnd(80) === 'No');
```

# --seed--

## --seed-contents--

```js
function testLogicalAnd(val) {
  // Ne modifiez le code qu'en dessous de cette ligne

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Ne modifiez que le code au-dessus de cette ligne
  return "No";
}

testLogicalAnd(10);
```

# --solutions--

```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```
