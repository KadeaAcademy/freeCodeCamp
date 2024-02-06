---
id: 56533eb9ac21ba0edf2244b2
title: Affectation composée avec division augmentée
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvKT2'
forumTopicId: 16659
dashedName: compound-assignment-with-augmented-division
---

# --description--

L'opérateur `/=` divise une variable par un autre nombre.

```js
myVar = myVar / 5;
```

Divise `myVar` par `5`. Ceci peut être réécrit comme suit :

```js
myVar /= 5;
```

# --instructions--

Convertissez les affectations pour `a`, `b`, et `c` pour utiliser l'opérateur `/=`.

# --hints--

`a` devrait être égal à `4`.

```js
assert(a === 4);
```

`b` devrait être égal à `27`.

```js
assert(b === 27);
```

`c` devrait être égal à `3`.

```js
assert(c === 3);
```

Vous devez utiliser l'opérateur `/=` pour chaque variable.

```js
assert(code.match(/\/=/g).length === 3);
```

Vous ne devez pas modifier le code au-dessus du commentaire spécifié.

```js
assert(
  /let a = 48;/.test(code) &&
    /let b = 108;/.test(code) &&
    /let c = 33;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 48;
let b = 108;
let c = 33;

// Ne changez que le code en dessous de cette ligne
a = a / 12;
b = b / 4;
c = c / 11;
```

# --solutions--

```js
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;
```
