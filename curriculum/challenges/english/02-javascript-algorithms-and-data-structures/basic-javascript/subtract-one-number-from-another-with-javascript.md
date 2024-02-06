---
id: cf1111c1c11feddfaeb4bdef
title: Soustraire un nombre d'un autre avec JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cP3yQtk'
forumTopicId: 18314
dashedName: subtract-one-number-from-another-with-javascript
---

# --description--

On peut aussi soustraire un nombre à un autre.

JavaScript utilise le symbole `-` pour la soustraction.

**Example**

```js
const myVar = 12 - 6;
```

`myVar` aurait la valeur `6`.
# --instructions--

Changez le `0` pour que la différence soit de `12`.

# --hints--

La variable `difference` doit être égale à 12.

```js
assert(difference === 12);
```

Vous ne devez soustraire qu'un seul nombre de 45.

```js
assert(/difference=45-33;?/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'difference = '+z;})(difference);
```

## --seed-contents--

```js
const difference = 45 - 0;
```

# --solutions--

```js
const difference = 45 - 33;
```
