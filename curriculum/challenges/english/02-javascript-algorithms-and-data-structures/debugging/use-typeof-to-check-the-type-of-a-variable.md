---
id: 587d7b84367417b2b2512b34
title: Utiliser typeof pour vérifier le type d'une variable
challengeType: 1
forumTopicId: 18374
dashedName: use-typeof-to-check-the-type-of-a-variable
---

# --description--

Vous pouvez utiliser `typeof` pour vérifier la structure de données, ou le type, d'une variable. Ceci est utile pour le débogage lorsque vous travaillez avec plusieurs types de données. Si vous pensez que vous additionnez deux nombres, mais que l'un d'eux est en fait une chaîne de caractères, les résultats peuvent être inattendus. Les erreurs de type peuvent se cacher dans les calculs ou les appels de fonction. Soyez particulièrement prudent lorsque vous accédez et travaillez avec des données externes sous la forme d'un objet JavaScript Object Notation (JSON).

Voici quelques exemples d'utilisation de `typeof` :

```js
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
```

Dans l'ordre, la console affichera les chaînes `string`, `number`, `object`, et `object`.

JavaScript reconnaît sept types de données primitives (immuables) : `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` (nouveau avec ES6), et `BigInt` (nouveau avec ES2020), et un type pour les éléments mutables : `Object`. Notez qu'en JavaScript, les tableaux sont techniquement un type d'objet.

# --instructions--

Ajoutez deux instructions `console.log()` pour vérifier le `type` de chacune des deux variables `seven` et `three` dans le code.

# --hints--

Votre code doit utiliser `typeof` dans deux instructions `console.log()` pour vérifier le type des variables.

```js
assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2);
```

Votre code devrait utiliser `typeof` pour vérifier le type de la variable `seven`.

```js
assert(code.match(/typeof[\( ]seven\)?/g));
```

Votre code devrait utiliser `typeof` pour vérifier le type de la variable `three`.

```js
assert(code.match(/typeof[\( ]three\)?/g));
```

# --seed--

## --seed-contents--

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Ne modifiez que le code en dessous de cette ligne
```

# --solutions--

```js
let seven = 7;let three = "3";console.log(typeof seven);
console.log(typeof three);
```
