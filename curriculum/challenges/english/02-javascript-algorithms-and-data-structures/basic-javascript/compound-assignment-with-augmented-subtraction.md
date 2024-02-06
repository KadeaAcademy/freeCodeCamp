---
id: 56533eb9ac21ba0edf2244b0
title: Affectation composée avec soustraction augmentée
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

Comme l'opérateur `+=`, `-=` soustrait un nombre d'une variable.

```js
myVar = myVar - 5;
```

va soustraire `5` de `myVar`. Ceci peut être réécrit comme suit :

```js
myVar -= 5;
```

# --instructions--

Convertissez les affectations pour `a`, `b`, et `c` pour utiliser l'opérateur `-=`.

# --hints--

`a` devrait être égal à `5`.

```js
assert(a === 5);
```

`b` devrait être égal à `-6`.

```js
assert(b === -6);
```

`c` devrait être égal à `2`.

```js
assert(c === 2);
```

Vous devez utiliser l'opérateur `-=` pour chaque variable.

```js
assert(code.match(/-=/g).length === 3);
```

Vous ne devez pas modifier le code au-dessus du commentaire spécifié.

```js
assert(
  /let a = 11;/.test(code) && /let b = 9;/.test(code) && /let c = 3;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

# --solutions--

```js
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;
```
