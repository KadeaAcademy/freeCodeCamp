---
id: 587d7b85367417b2b2512b38
title: Capturer l'utilisation de l'opérateur d'assignation au lieu de l'opérateur d'égalité
challengeType: 1
forumTopicId: 301191
dashedName: catch-use-of-assignment-operator-instead-of-equality-operator
---

# --description--

Les programmes de branchement, c'est-à-dire ceux qui font différentes choses si certaines conditions sont remplies, s'appuient sur les instructions `if`, `else if`, et `else` en JavaScript. La condition prend parfois la forme d'un test pour savoir si un résultat est égal à une valeur.

Cette logique se traduit (en anglais, du moins) par "if x equals y, then ...", ce qui peut se traduire littéralement dans le code par l'utilisation de l'opérateur d'affectation `=`. Cela conduit à un flux de contrôle inattendu dans votre programme.

Comme nous l'avons vu dans les défis précédents, l'opérateur d'affectation (`=`) en JavaScript attribue une valeur à un nom de variable. Et les opérateurs `==` et `===` vérifient l'égalité (le triple `===` teste l'égalité stricte, ce qui signifie que la valeur et le type sont identiques).

Le code ci-dessous attribue à `x` la valeur 2, ce qui est évalué comme `true`. Presque toutes les valeurs en JavaScript sont évalent à `true`, à l'exception de ce que l'on appelle les valeurs " fausses " : `false`, `0`, `""` (une chaîne vide), `NaN`, `undefined`, et `null`.

```js
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

Dans cet exemple, le bloc de code dans l'instruction `if` sera exécuté pour toute valeur de `y`, à moins que `y` ne soit faussé. Le bloc `else`, dont on attend l'exécution ici, ne sera pas exécuté.

# --instructions--

Corriger la condition pour que le programme exécute la bonne branche, et que la valeur appropriée soit assignée à `result`.

# --hints--

Votre code devrait corriger la condition pour qu'il vérifie l'égalité, au lieu d'utiliser l'affectation.

```js
assert(result == 'Not equal!');
```

La condition doit utiliser soit `==` soit `===` pour tester l'égalité.

```js
assert(code.match(/x\s*?===?\s*?y/g));
```

# --seed--

## --seed-contents--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

# --solutions--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```
