---
id: 56533eb9ac21ba0edf2244af
title: Affectation composée avec addition augmentée
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
dashedName: compound-assignment-with-augmented-addition
---

# --description--

En programmation, il est courant d'utiliser des affectations pour modifier le contenu d'une variable. Rappelez-vous que tout ce qui se trouve à droite du signe égal est évalué en premier, donc on peut dire :

```js
myVar = myVar + 5;
```

pour ajouter `5` à `myVar`. Comme il s'agit d'un modèle très courant, il existe des opérateurs qui effectuent à la fois une opération mathématique et une affectation en une seule étape.

L'un de ces opérateurs est l'opérateur `+=`.

```js
let myVar = 1;
myVar += 5;
console.log(myVar);
```

`6` serait affiché dans la console.

# --instructions--

Convertissez les affectations pour `a`, `b`, et `c` pour utiliser l'opérateur `+=`.

# --hints--

`a` devrait être égal à `15`.

```js
assert(a === 15);
```

`b` devrait être égal à `26`.

```js
assert(b === 26);
```

`c` devrait être égal à `19`.

```js
assert(c === 19);
```

Vous devez utiliser l'opérateur `+=` pour chaque variable.

```js
assert(code.match(/\+=/g).length === 3);
```

Vous ne devez pas modifier le code au-dessus du commentaire spécifié.

```js
assert(
  /let a = 3;/.test(code) &&
    /let b = 17;/.test(code) &&
    /let c = 12;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 3;
let b = 17;
let c = 12;

// Ne changez que le code en dessous de cette ligne
a = a + 12;
b = 9 + b;
c = c + 7;
```

# --solutions--

```js
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;
```
