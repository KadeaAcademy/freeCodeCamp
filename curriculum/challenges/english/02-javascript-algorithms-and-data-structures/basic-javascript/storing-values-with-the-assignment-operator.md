---
id: 56533eb9ac21ba0edf2244a8
title: Stockage des valeurs avec l'opérateur d'affectation
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

En JavaScript, vous pouvez stocker une valeur dans une variable avec l'opérateur d'affectation (=).

```js
maVariable = 5;
```

Ceci affecte la valeur numérique  `5` à `maVariable`.

S'il y a des calculs à droite de l'opérateur `=`, ils sont effectués avant que la valeur soit affectée à la variable à gauche de l'opérateur.

```js
var maVar ;
maVar = 5 ;
```

Tout d'abord, ce code crée une variable nommée `maVar`. Ensuite, le code affecte `5` à `maVar`. Maintenant, si `maVar` réapparaît dans le code, le programme la traitera comme s'il s'agissait de "5".

# --instructions--

Affectez la valeur `7` à la variable `a`.

# --hints--

Vous ne devez pas modifier le code au-dessus du commentaire spécifié.

```js
assert(/var a;/.test(code));
```

`a` devrait avoir la valeur 7.

```js
assert(typeof a === 'number' && a === 7);
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Configuration
var a;

// Ne modifiez que le code sous cette ligne
```

# --solutions--

```js
var a;
a = 7;
```
