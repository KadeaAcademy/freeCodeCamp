---
id: 587d7db7367417b2b2512b9f
title: Faites correspondre toutes les lettres et tous les chiffres
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

En utilisant les classes de caractères, vous avez pu rechercher toutes les lettres de l'alphabet avec `[a-z]`. Ce type de classe de caractères est suffisamment courant pour qu'il existe un raccourci, bien qu'il comprenne également quelques caractères supplémentaires.

La classe de caractères la plus proche de l'alphabet en JavaScript est `w`. Ce raccourci est égal à `[A-Za-z0-9_]`. Cette classe de caractères correspond aux lettres majuscules et minuscules ainsi qu'aux chiffres. Notez que cette classe de caractères comprend également le caractère de soulignement (`_`).

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
```

Ces quatre appels à `test` renverront tous `true`.

Ces classes de caractères raccourcis sont également connues sous le nom de classes de caractères sténographiques.

# --instructions--

Utilisez la classe de caractères abrégés `\w` pour compter le nombre de caractères alphanumériques dans diverses citations et chaînes de caractères.

# --hints--

Votre regex doit utiliser le marqueur global.

```js
assert(alphabetRegexV2.global);
```

Votre regex doit utiliser le caractère raccourci `\w` pour correspondre à tous les caractères qui sont alphanumériques.

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

Votre regex devrait trouver 31 caractères alphanumériques dans la chaîne `The five boxing wizards jump quickly.`

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

Votre regex doit trouver 32 caractères alphanumériques dans la chaîne de caractères `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

Votre regex doit trouver 30 caractères alphanumériques dans la chaîne de caractères `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

Votre regex devrait trouver 36 caractères alphanumériques dans la chaîne de caractères `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(alphabetRegexV2)
    .length === 36
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Modifiez cette ligne
let result = quoteSample.match(alphabetRegexV2).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Modifiez cette ligne
let result = quoteSample.match(alphabetRegexV2).length;
```
