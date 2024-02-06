---
id: 5ee127a03c3b35dd45426493
title: Assigner la valeur d'une variable à une autre
challengeType: 1
videoUrl: ''
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

Une fois qu'une valeur est affectée à une variable à l'aide de l'opérateur <dfn>affectation</dfn>, vous pouvez affecter la valeur de cette variable à une autre variable à l'aide de l'opérateur <dfn>affectation</dfn>.

```js
var maVar ;
maVar = 5 ;
var monNum ;
monNum = maVar ;
```

L'exemple ci-dessus déclare une variable `maVar` sans valeur, puis lui attribue la valeur `5`. Ensuite, une variable nommée `monNum` est déclarée sans valeur. Ensuite, le contenu de `maVar` (qui est `5`) est affecté à la variable `monNum`. Maintenant, la valeur de la variable `monNum` est également égale à `5`.

# --instructions--

Assignez le contenu de `a` à la variable `b`.

# --hints--

Vous ne devez pas modifier le code au-dessus du commentaire spécifié.

```js
assert(/var a;/.test(code) && /a = 7;/.test(code) && /var b;/.test(code));
```

`b` devrait avoir la valeur `7`.

```js
assert(typeof b === 'number' && b === 7);
```

`a` doit être assigné à `b` avec `=`.

```js
assert(/b\s*=\s*a\s*/g.test(code));
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

## --after-user-code--

```js
(function(a, b) {
  return 'a = ' + a + ', b = ' + b;
})(a, b);
```

## --seed-contents--

```js
// Configuration
var a;
a = 7;
var b;

// Ne modifiez que le code en dessous de cette ligne
```

# --solutions--

```js
var a;
a = 7;
var b;
b = a;
```
