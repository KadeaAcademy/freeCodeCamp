---
id: 56bbb991ad1ed5201cd392cc
title: Manipuler les tableaux avec pop()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
dashedName: manipulate-arrays-with-pop
---

# --description--

Une autre façon de modifier les données d'un tableau est d'utiliser la fonction `.pop()`.

La fonction `.pop()` est utilisée pour retirer une valeur de la fin d'un tableau. Nous pouvons stocker cette valeur extraite en l'assignant à une variable. En d'autres termes, `.pop()` enlève le dernier élément d'un tableau et retourne cet élément.

N'importe quel type d'entrée peut être supprimé d'un tableau - des nombres, des chaînes de caractères, et même des tableaux imbriqués.

```js
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

Le premier `console.log` affichera la valeur `6`, et le second la valeur `[1, 4]`.

# --instructions--

Utilisez la fonction `.pop()` pour retirer le dernier élément de `monTableau` et affectez la valeur retirée à une nouvelle variable, `retireDeMonTableau`.

# --hints--

`monTableau` ne doit contenir que `[["John", 23]]`.

```js
assert(
  (function (d) {
    if (d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(monTableau)
);
```

Vous devriez utiliser `pop()` sur `monTableau`.

```js
assert(/retireDeMonTableau\s*=\s*monTableau\s*.\s*pop\s*(\s*)/.test(code));
```

`retireDeMonTableau` ne doit contenir que `["cat", 2]`.

```js
assert(
  (function (d) {
    if (d[0] == 'cat' && d[1] === 2 && d[2] == undefined) {
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
const monTableau = [["John", 23], ["cat", 2]];

// Ne changez que le code en dessous de cette ligne

```

# --solutions--

```js
const monTableau = [["John", 23], ["cat", 2]];
const retireDeMonTableau = monTableau.pop();
```
