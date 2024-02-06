---
id: bd7123c9c444eddfaeb5bdef
title: Déclarer des variables de type String
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

Auparavant, vous avez utilisé le code suivant pour déclarer une variable :

```js
var monNom;
```

Mais vous pouvez aussi déclarer une variable de type chaîne de caractères comme ceci :

```js
var monNom = "votre nom" ;
```

`"votre nom"` est une <dfn>chaîne</dfn> <dfn>littérale</dfn>. Une chaîne littérale, ou chaîne, est une série de zéro ou de plusieurs caractères entre guillemets simples ou doubles.

# --instructions--

Créez deux nouvelles variables de type chaîne : `monPrenom` et `monNom` et attribuez-leur les valeurs de votre prénom et de votre nom, respectivement.

# --hints--

`monPrenom` doit être une chaîne de caractères contenant au moins un caractère.

```js
assert(
  (function () {
    if (
      typeof monPrenom !== 'undefined' &&
      typeof monPrenom === 'string' &&
      monPrenom.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

`monNom` doit être une chaîne de caractères contenant au moins un caractère.

```js
assert(
  (function () {
    if (
      typeof monNom !== 'undefined' &&
      typeof monNom === 'string' &&
      monNom.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof monPrenom !== "undefined" && typeof monNom !== "undefined"){(function(){return monPrenom + ', ' + monNom;})();}
```

## --seed-contents--

```js

```

# --solutions--

```js
var monPrenom = "Alan";
var monNom = "Turing";
```
