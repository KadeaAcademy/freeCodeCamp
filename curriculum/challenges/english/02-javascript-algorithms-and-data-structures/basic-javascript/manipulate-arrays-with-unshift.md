---
id: 56bbb991ad1ed5201cd392ce
title: Manipuler les tableaux avec unshift()
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
dashedName: manipulate-arrays-with-unshift
---

# --description--

Non seulement vous pouvez `shift` des éléments du début d'un tableau, mais vous pouvez aussi `unshift` des éléments du début d'un tableau, c'est-à-dire ajouter des éléments au début du tableau.

`.unshift()` fonctionne exactement comme `.push()`, mais au lieu d'ajouter l'élément à la fin du tableau, `unshift()` ajoute l'élément au début du tableau.

Exemple :

```js
const notreTableau = ["Stimpson", "J", "cat"];
notreTableau.shift();
notreTableau.unshift("Happy");
```

Après le `shift`, `notreTableau` aura comme la valeur `["J", "chat"]`. Après le `unshift`, `notreTableau` aura comme valeur `["Happy", "J", "cat"]`.

# --instructions--

Ajoutez `["Paul", 35]` au début de la variable `monTableau` en utilisant `unshift()`.

# --hints--

`monTableau` devrait maintenant avoir `[["Paul", 35], ["dog", 3]]`.

```js
assert(
  (function (d) {
    if (
      typeof d[0] === 'object' &&
      d[0][0] == 'Paul' &&
      d[0][1] === 35 &&
      d[1][0] != undefined &&
      d[1][0] == 'dog' &&
      d[1][1] != undefined &&
      d[1][1] == 3
    ) {
      return true;
    } else {
      return false;
    }
  })(monTableau)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'monTableau = ' + JSON.stringify(y);})(monTableau);
```

## --seed-contents--

```js
// Setup
const monTableau = [["John", 23], ["dog", 3]];
monTableau.shift();

// Ne changez que le code en dessous de cette ligne

```

# --solutions--

```js
const monTableau = [["John", 23], ["dog", 3]];
monTableau.shift();
monTableau.unshift(["Paul", 35]);
```
