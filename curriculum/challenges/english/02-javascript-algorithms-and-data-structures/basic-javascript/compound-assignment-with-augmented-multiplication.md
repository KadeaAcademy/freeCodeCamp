---
id: 56533eb9ac21ba0edf2244b1
title: Assignation composée avec multiplication augmentée
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
dashedName: compound-assignment-with-augmented-multiplication
---

# --description--

L'opérateur `*=` multiplie une variable par un nombre.

```js
myVar = myVar * 5;
```

va multiplier `myVar` par `5`. Ceci peut être réécrit comme suit :

```js
myVar *= 5;
```

# --instructions--

Convertissez les affectations pour `a`, `b`, et `c` pour utiliser l'opérateur `*=`.

# --hints--

`a` devrait être égal à `25`.

```js
assert(a === 25);
```

`b` devrait être égal à `36`.

```js
assert(b === 36);
```

`c` devrait être égal à `46`.

```js
assert(c === 46);
```

Vous devez utiliser l'opérateur `*=` pour chaque variable.

```js
assert(code.match(/\*=/g).length === 3);
```

Vous ne devez pas modifier le code au-dessus du commentaire spécifié.

```js
assert(
  /let a = 5;/.test(code) &&
    /let b = 12;/.test(code) &&
    /let c = 4\.6;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 5;
let b = 12;
let c = 4.6;

// Ne changez que le code sous cette ligne
a = a * 5;
b = 3 * b;
c = c * 10;
```

# --solutions--

```js
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```
