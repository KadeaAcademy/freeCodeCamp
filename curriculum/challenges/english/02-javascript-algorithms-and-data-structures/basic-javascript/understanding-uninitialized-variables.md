---
id: 56533eb9ac21ba0edf2244aa
title: Comprendre les variables non initialisées
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

Lorsque des variables JavaScript sont déclarées, elles ont une valeur initiale de `undefined`. Si vous effectuez une opération mathématique sur une variable `undefined`, votre résultat sera `NaN`, ce qui signifie <dfn>"Pas un nombre"</dfn>. Si vous concaténez une chaîne avec une variable `undefined`, vous obtiendrez une <dfn>chaîne</dfn> littérale de `undefined`.

# --instructions--

Initialisez les trois variables `a`, `b`, et `c` avec respectivement `5`, `10`, et `"Je suis un"` afin qu'elles ne soient pas `undefined`.

# --hints--

`a` doit être défini et évalué pour avoir la valeur de `6`.

```js
assert(typeof a === 'number' && a === 6);
```

`b` doit être défini et évalué pour avoir la valeur de `15`.

```js
assert(typeof b === 'number' && b === 15);
```

`c` ne doit pas contenir `undefined` et doit avoir une valeur de la chaîne `I am a String!`.

```js
assert(!/undefined/.test(c) && c === 'Je suis un String!');
```

Vous ne devez pas modifier le code en dessous du commentaire spécifié.

```js
assert(
  /a = a \+ 1;/.test(code) &&
    /b = b \+ 5;/.test(code) &&
    /c = c \+ " String!";/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

## --seed-contents--

```js
// Ne changez que le code sous cette ligne
var a;
var b;
var c;
// Ne changez que le code au-dessus de cette ligne

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "Je suis un";
a = a + 1;
b = b + 5;
c = c + " String!";
```
