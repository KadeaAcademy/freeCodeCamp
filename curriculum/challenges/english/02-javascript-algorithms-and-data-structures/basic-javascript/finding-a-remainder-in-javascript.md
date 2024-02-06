---
id: 56533eb9ac21ba0edf2244ae
title: Trouver un reste en JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

L'opérateur <dfn>reste</dfn> `%` donne le reste de la division de deux nombres.

**Exemple**

<blockquote>5 % 2 = 1 parce que <br>Math.floor(5 / 2) = 2 (Quotient)<br>2 * 2 = 4<br>5 - 4 = 1 (Restant)</blockquote>

**Utilisation**  
En mathématiques, on peut vérifier qu'un nombre est pair ou impair en vérifiant le reste de la division du nombre par `2`.

<blockquote>17 % 2 = 1 (17 est impair)<br>48 % 2 = 0 (48 est pair)</blockquote>

**Note:** L'opérateur <dfn>reste</dfn> est parfois appelé à tort l'opérateur modulo. Il est très similaire au modulo, mais ne fonctionne pas correctement avec les nombres négatifs.

# --instructions--

Donnez à `remainder` une valeur égale au reste de `11` divisé par `3` en utilisant l'opérateur <dfn>reste</dfn> (`%`).

# --hints--

La variable `remainder` doit être initialisée.

```js
assert(/(const|let|var)\s+?remainder/.test(code));
```

La valeur de `remainder` devrait être `2`.

```js
assert(remainder === 2);
```

Vous devez utiliser l'opérateur `%`.

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(y){return 'remainder = '+y;})(remainder);
```

## --seed-contents--

```js
const remainder = 0;
```

# --solutions--

```js
const remainder = 11 % 3;
```
