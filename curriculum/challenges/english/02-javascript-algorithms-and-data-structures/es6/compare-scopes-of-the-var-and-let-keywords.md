---
id: 587d7b87367417b2b2512b40
title: Comparer les portées des mots-clés var et let
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

Si vous n'êtes pas familier avec `let`, consultez [ce défi](/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords).

Lorsque vous déclarez une variable avec le mot-clé `var`, elle est déclarée globalement, ou localement si elle est déclarée à l'intérieur d'une fonction.

Le mot-clé `let` se comporte de manière similaire, mais avec quelques caractéristiques supplémentaires. Lorsque vous déclarez une variable avec le mot-clé `let` à l'intérieur d'un bloc, d'une déclaration ou d'une expression, sa portée est limitée à ce bloc, cette déclaration ou cette expression.

Par exemple :

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Ici, la console affichera les valeurs `[0, 1, 2]` et `3`.

Avec le mot-clé `var`, `i` est déclaré globalement. Ainsi, lorsque `i++` est exécuté, il met à jour la variable globale. Ce code est similaire à ce qui suit :

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Ici, la console affichera les valeurs `[0, 1, 2]` et `3`.

Ce comportement posera des problèmes si vous créez une fonction et la stockez pour une utilisation ultérieure dans une boucle `for` qui utilise la variable `i`. En effet, la fonction stockée fera toujours référence à la valeur de la variable globale `i` mise à jour.

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

Ici, la console affichera la valeur `3`.

Comme vous pouvez le voir, `printNumTwo()` imprime 3 et non 2. C'est parce que la valeur assignée à `i` a été mise à jour et que le `printNumTwo()` renvoie la valeur globale `i` et non la valeur que `i` avait lorsque la fonction a été créée dans la boucle for. Le mot-clé `let` ne suit pas ce comportement :

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

Ici, la console affichera la valeur `2`, et une erreur indiquant que `i` n'est pas défini`.

`i` n'est pas défini car il n'a pas été déclaré dans la portée globale. Il n'est déclaré que dans l'instruction de la boucle `for`. `printNumTwo()` renvoie la valeur correcte parce que trois variables `i` différentes avec des valeurs uniques (0, 1, et 2) ont été créées par le mot-clé `let` dans l'instruction de boucle.

# --instructions--

Corrigez le code pour que `i` déclaré dans l'instruction `if` soit une variable distincte de `i` déclaré dans la première ligne de la fonction. Veillez à ne pas utiliser le mot-clé `var` ailleurs dans votre code.

Cet exercice est conçu pour illustrer la différence entre la façon dont les mots-clés `var` et `let` assignent la portée à la variable déclarée. Lorsque vous programmez une fonction similaire à celle utilisée dans cet exercice, il est souvent préférable d'utiliser des noms de variables différents pour éviter toute confusion.
# --hints--

`var` ne doit pas exister dans le code.

```js
assert(!code.match(/var/g));
```

La variable `i` déclarée dans l'instruction `if` doit être égale à la chaîne `block scope`.

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

`checkScope()` devrait retourner la chaîne de caractères `function scope`.

```js
assert(checkScope() === 'function scope');
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
 
  console.log('Function scope i is: ', i);
  return i;
}
```
