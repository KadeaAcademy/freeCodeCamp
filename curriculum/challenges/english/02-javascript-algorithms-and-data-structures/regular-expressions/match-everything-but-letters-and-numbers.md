---
id: 587d7db8367417b2b2512ba0
title: Faites correspondre tout sauf les lettres et les chiffres 
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

Vous avez appris que vous pouvez utiliser un raccourci pour faire correspondre les caractères alphanumériques `[A-Za-z0-9_]` en utilisant ``w`. Un motif naturel que vous pourriez vouloir rechercher est l'opposé des caractères alphanumériques.

Vous pouvez rechercher l'opposé du `\w` avec `\W`. Notez que le motif opposé utilise une lettre majuscule. Ce raccourci est identique à `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

Le premier appel à `match` renverrait la valeur `["%"]` et le deuxième renverrait `[" !"]`.

# --instructions--

Utilisez la classe de caractères raccourcis `\W` pour compter le nombre de caractères non alphanumériques dans diverses citations et chaînes de caractères.

# --hints--

Votre regex doit utiliser le marqueur global.

```js
assert(nonAlphabetRegex.global);
```

Votre regex doit trouver 6 caractères non-alphanumériques dans la chaîne de caractères `The five boxing wizards jump quickly.`.

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

Votre regex doit utiliser le caractère abrégé pour correspondre aux caractères non alphanumériques.

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

Votre regex doit trouver 8 caractères non-alphanumériques dans la chaîne de caractères `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

Votre regex doit trouver 6 caractères non-alphanumériques dans la chaîne de caractères `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

Votre regex devrait trouver 12 caractères non alphanumériques dans la chaîne de caractères `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(nonAlphabetRegex)
    .length == 12
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Modifiez cette ligne
let result = quoteSample.match(nonAlphabetRegex).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; // Modifiez cette ligne
let result = quoteSample.match(nonAlphabetRegex).length;
```
