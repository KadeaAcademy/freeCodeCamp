---
id: bd7993c9ca9feddfaeb7bdef
title: Diviser un nombre décimal par un autre avec JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZe9AW'
forumTopicId: 18255
dashedName: divide-one-decimal-by-another-with-javascript
---

# --description--

Maintenant, divisons une décimale par une autre.

# --instructions--

Changez le `0.0` pour que le `quotient` soit égal à `2.2`.

# --hints--

La variable `quotient` doit être égale à `2.2`.

```js
assert(quotient === 2.2);
```

Vous devriez utiliser l'opérateur `/` pour diviser 4.4 par 2

```js
assert(/4\.40*\s*\/\s*2\.*0*/.test(code));
```

La variable quotient ne doit être assignée qu'une seule fois.

```js
assert(code.match(/quotient/g).length === 1);
```

# --seed--

## --after-user-code--

```js
(function(y){return 'quotient = '+y;})(quotient);
```

## --seed-contents--

```js
const quotient = 0.0 / 2.0; // Changez cette ligne
```

# --solutions--

```js
const quotient = 4.4 / 2.0;
```
