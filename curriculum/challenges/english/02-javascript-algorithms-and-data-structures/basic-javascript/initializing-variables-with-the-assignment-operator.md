---
id: 56533eb9ac21ba0edf2244a9
title: Initialisation de variables avec l'opérateur d'affectation
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWJ4Bfb'
forumTopicId: 301171
dashedName: initializing-variables-with-the-assignment-operator
---

# --description--

Il est courant d'<dfn>initialiser</dfn> une variable à une valeur initiale sur la même ligne que sa déclaration.

```js
var maVar = 0;
```

Crée une nouvelle variable appelée `maVar` et lui attribue une valeur initiale de `0`.

# --instructions--

Définissez une variable `a` avec `var` et initialisez-la à la valeur `9`.

# --hints--

Vous devriez initialiser `a` à la valeur `9`.

```js
assert(/var\s+a\s*=\s*9(\s*;?\s*)$/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof a !== 'undefined') {(function(a){return "a = " + a;})(a);} else { (function() {return 'a is undefined';})(); }
```

## --seed-contents--

```js

```

# --solutions--

```js
var a = 9;
```
