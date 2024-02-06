---
id: 56bbb991ad1ed5201cd392cb
title: Manipuler les tableaux avec push()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnqmVtJ'
forumTopicId: 18237
dashedName: manipulate-arrays-with-push
---

# --description--

La façon la plus simple d'ajouter des données à la fin d'un tableau est d'utiliser la fonction `push()`.

`.push()` prend un ou plusieurs <dfn>paramètres</dfn> et les " insère " à la fin du tableau.

Exemples :

```js
const tab1 = [1, 2, 3];
tab1.push(4);

const tab2 = ["Stimpson", "J", "cat"];
tab2.push(["happy", "joy"]);
```

`tab1` a maintenant la valeur `[1, 2, 3, 4]` et `tab2` a la valeur `["Stimpson", "J", "cat", ["happy", "joy"]]`.

# --instructions--

Insérez `["dog", 3]` à la fin de la variable `monTableau`.

# --hints--

`monTableau` devrait maintenant être égal à `[["John", 23], ["cat", 2], ["dog", 3]]`.

```js
assert(
  (function (d) {
    if (
      d[2] != undefined &&
      d[0][0] == 'John' &&
      d[0][1] === 23 &&
      d[2][0] == 'dog' &&
      d[2][1] === 3 &&
      d[2].length == 2
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
(function(z){return 'monTableau = ' + JSON.stringify(z);})(monTableau);
```

## --seed-contents--

```js
// Setup
const monTableau = [["John", 23], ["cat", 2]];

// Ne changez que le code en dessous de cette ligne

```

# --solutions--

```js
const monTableau = [["John", 23], ["cat", 2]];
monTableau.push(["dog",3]);
```
