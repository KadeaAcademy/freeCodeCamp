---
id: 587d7db5367417b2b2512b96
title: Faire correspondre les lettres de l'alphabet
challengeType: 1
forumTopicId: 301354
dashedName: match-letters-of-the-alphabet
---

# --description--

Vous avez vu comment vous pouvez utiliser <dfn>les jeux de caractères</dfn> pour spécifier un groupe de caractères à faire correspondre, mais cela fait beaucoup de frappe lorsque vous devez faire correspondre une large gamme de caractères (par exemple, chaque lettre de l'alphabet). Heureusement, il existe une fonctionnalité intégrée qui rend cette opération courte et simple.

À l'intérieur d'un jeu de caractères, vous pouvez définir une plage de caractères à faire correspondre en utilisant le caractère trait d'union : `-`.

Par exemple, pour faire correspondre les lettres minuscules `a` à `e`, vous utiliserez `[a-e]`.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

Dans l'ordre, les trois appels `match` renverraient les valeurs `["cat"]`, `["bat"]`, et `null`.

# --instructions--

Faites correspondre toutes les lettres de la chaîne `quoteSample`.

**Note** : Veillez à faire correspondre les lettres majuscules et minuscules.

# --hints--

Votre regex `alphabetRegex` devrait correspondre à 35 éléments.

```js
assert(result.length == 35);
```

Votre regex `alphabetRegex` devrait utiliser le marqueur global.

```js
assert(alphabetRegex.flags.match(/g/).length == 1);
```

Votre regex `alphabetRegex` devrait utiliser le marqueur insensible à la casse.

```js
assert(alphabetRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Modifiez cette ligne
let result = alphabetRegex; // Modifiez cette ligne
```

# --solutions--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Modifiez cette ligne
let result = quoteSample.match(alphabetRegex); // Modifiez cette ligne
```
