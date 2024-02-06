---
id: 56bbb991ad1ed5201cd392cd
title: Manipuler les tableaux avec shift()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

`pop()` supprime toujours le dernier élément d'un tableau. Et si vous vouliez enlever le premier ?

C'est là que `.shift()` entre en jeu. Il fonctionne exactement comme `.pop()`, sauf qu'il supprime le premier élément au lieu du dernier.

Exemple :

```js
const notreTableau = ["Stimpson", "J", ["cat"]];
const retireDeNotreTableau = notreTableau.shift();
```

`retireDeNotreTableau` aurait une valeur de la chaîne `Stimpson`, et `notreTableau` aurait `["J", ["cat"]]`.

# --instructions--

Utilisez la fonction `.shift()` pour supprimer le premier élément de `monTableau` et affectez la valeur "décalée" à une nouvelle variable, `retireDeMonTableau`.

# --hints--

`monTableau` devrait maintenant être égal à `["dog", 3]]`.

```js
assert(
  (function (d) {
    if (d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(monTableau)
);
```

`retireDeMonTableau` devrait contenir `["John", 23]`.

```js
assert(
  (function (d) {
    if (
      d[0] == 'John' &&
      d[1] === 23 &&
      typeof retireDeMonTableau === 'object'
    ) {
      return true;
    } else {
      return false;
    }
  })(retireDeMonTableau)
);
```

# --seed--

## --after-user-code--

```js
if (typeof retireDeMonTableau !== 'undefined') (function(y, z){return 'monTableau = ' + JSON.stringify(y) + ' & retireDeMonTableau = ' + JSON.stringify(z);})(monTableau, retireDeMonTableau);
```

## --seed-contents--

```js
// Setup
const monTableau = [["John", 23], ["dog", 3]];

// Ne changez que le code en dessous de cette ligne
```

# --solutions--

```js
const monTableau = [["John", 23], ["dog", 3]];

// Ne changez que le code en dessous de cette ligne
const retireDeMonTableau = monTableau.shift();
```
