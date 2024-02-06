---
id: 587d7b87367417b2b2512b3f
title: Explorer les différences entre les mots-clés var et let
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

L'un des plus gros problèmes de la déclaration de variables avec le mot-clé `var` est que vous pouvez facilement écraser les déclarations de variables :

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

Dans le code ci-dessus, la variable `camper` est initialement déclarée comme étant `James`, et est ensuite remplacée par `David`. La console affiche alors la chaîne `David`.

Dans une petite application, vous ne rencontrerez peut-être pas ce type de problème. Mais à mesure que votre base de code s'élargit, vous pouvez accidentellement écraser une variable que vous n'aviez pas l'intention d'écraser. Comme ce comportement n'entraîne pas d'erreur, la recherche et la correction des bogues deviennent plus difficiles.

Un mot-clé appelé `let` a été introduit dans ES6, une mise à jour majeure de JavaScript, pour résoudre ce problème potentiel avec le mot-clé `var`. Vous découvrirez d'autres fonctionnalités de l'ES6 dans des défis ultérieurs.

Si vous remplacez `var` par `let` dans le code ci-dessus, il en résulte une erreur :

```js
let camper = "James";
let camper = "David";
```

L'erreur peut être vue dans la console de votre navigateur.

Ainsi, contrairement à `var`, lorsque vous utilisez `let`, une variable avec le même nom ne peut être déclarée qu'une seule fois.

# --instructions--

Mettez à jour le code pour qu'il n'utilise que le mot-clé `let`.

# --hints--

`var` ne doit pas exister dans le code.

```js
assert.notMatch(code, /var/g);
```

`catName` doit être la chaîne `Oliver`.

```js
assert.equal(catName, 'Oliver');
```

`catSound` devrait être la chaîne `Meow!`.

```js
assert.equal(catSound, 'Meow!');
```

# --seed--

## --seed-contents--

```js
var catName = "Oliver";
var catSound = "Meow!";
```

# --solutions--

```js
let catName = "Oliver";
let catSound = "Meow!";
```
