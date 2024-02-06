---
id: 587d7b87367417b2b2512b41
title: Déclarer une variable en lecture seule avec le mot-clé const
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

Le mot-clé `let` n'est pas la seule nouvelle façon de déclarer des variables. Dans ES6, vous pouvez également déclarer des variables en utilisant le mot-clé `const`.

Le mot-clé `const` possède les mêmes caractéristiques que le mot-clé `let`, avec en prime le fait que les variables déclarées à l'aide de `const` sont en lecture seule. Elles sont une valeur constante, ce qui signifie qu'une fois qu'une variable est affectée avec `const`, elle ne peut pas être réaffectée :

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

La console affichera une erreur due à la réaffectation de la valeur de `FAV_PET`.

Vous devriez toujours nommer les variables que vous ne voulez pas réaffecter en utilisant le mot-clé `const`. Ceci est utile lorsque vous tentez accidentellement de réaffecter une variable qui est censée rester constante.

**Note:** Il est courant pour les développeurs d'utiliser des identifiants de variables en majuscules pour les valeurs immuables et en minuscules ou en camelCase pour les valeurs mutables (objets et tableaux). Vous en apprendrez davantage sur les objets, les tableaux et les valeurs immuables et mutables dans les prochains défis. Vous verrez également dans les prochains défis des exemples d'identifiants de variables en majuscules, minuscules ou camelCase.

# --instructions--

Modifiez le code de sorte que toutes les variables soient déclarées à l'aide de `let` ou de `const`. Utilisez `let` lorsque vous voulez que la variable change, et `const` lorsque vous voulez que la variable reste constante. Renommez également les variables déclarées avec `const` pour vous conformer aux pratiques courantes.

# --hints--

`var` ne doit pas exister dans votre code.

```js
assert.notMatch(code, /var/g);
```

Vous devriez changer `fCC` en majuscules.

```js
assert.match(code, /(FCC)/);
assert.notMatch(code, /(fCC)/);
```

`FCC` devrait être une constante déclarée avec `const`.

```js
assert.equal(FCC, 'freeCodeCamp');
assert.match(code, /const\s+FCC/);
```

`fact` doit être déclaré avec `let`.

```js
assert.match(code, /(let\s+fact)/g);
```

`console.log` doit être modifié pour imprimer les variables `FCC` et `fact`.

```js
assert.match(code, /console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g);
```

# --seed--

## --seed-contents--

```js
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
```

# --solutions--

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```
