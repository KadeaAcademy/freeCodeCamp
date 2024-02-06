---
id: 587d7db7367417b2b2512b9d
title: Correspondre aux modèles de chaînes de caractères de début
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

Les défis précédents ont montré que les expressions régulières peuvent être utilisées pour rechercher un certain nombre de correspondances. Elles sont également utilisées pour rechercher des motifs à des positions spécifiques dans des chaînes de caractères.

Dans un défi précédent, vous avez utilisé le signe d'insertion (`^`) à l'intérieur d'un jeu de caractères pour créer un jeu de caractères négatif sous la forme `[^choses qui ne seront pas correspondantes]`. En dehors d'un jeu de caractères, le signe d'insertion est utilisé pour rechercher des motifs au début des chaînes de caractères.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

Le premier appel à `test` renverrait `true`, tandis que le second renverrait `false`.

# --instructions--

Utilisez le caractère caret dans une regex pour trouver `Cal` uniquement au début de la chaîne `rickyAndCal`.

# --hints--

Votre regex doit rechercher la chaîne `Cal` avec une majuscule.

```js
assert(calRegex.source == '^Cal');
```

Votre regex ne doit pas utiliser de marqueurs.

```js
assert(calRegex.flags == '');
```

Votre regex doit correspondre à la chaîne `Cal` au début de la chaîne.

```js
calRegex.lastIndex = 0;
assert(calRegex.test('Cal and Ricky both like racing.'));
```

Votre regex ne doit pas correspondre à la chaîne `Cal` au milieu d'une chaîne.

```js
calRegex.lastIndex = 0;
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Modifiez cette ligne
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Modifiez cette ligne
let result = calRegex.test(rickyAndCal);
```
