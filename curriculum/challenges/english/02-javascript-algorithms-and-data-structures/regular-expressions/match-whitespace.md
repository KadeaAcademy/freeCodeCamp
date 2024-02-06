---
id: 587d7db8367417b2b2512ba3
title: Faire correspondre les espaces blancs
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

Jusqu'à présent, les défis ont porté sur la correspondance des lettres de l'alphabet et des chiffres. Vous pouvez également faire correspondre les espaces entre les lettres.

Vous pouvez rechercher les espaces en utilisant `\s`, qui est un `s` minuscule. Ce motif ne correspond pas seulement aux espaces, mais aussi aux caractères retour chariot, tabulation, saut de page et nouvelle ligne. Vous pouvez le considérer comme similaire à la classe de caractères `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Les espaces. Des espaces partout !"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

Cet appel à `match` renvoie `[" ", " ", " ", " "]`.
# --instructions--

Changez la regex `countWhiteSpace` pour rechercher les caractères d'espacement multiples dans une chaîne.

# --hints--

Votre regex doit utiliser le marqueur global.

```js
assert(countWhiteSpace.global);
```

Votre regex doit utiliser le caractère raccourci `\s` pour correspondre à tous les caractères d'espacement.

```js
assert(/\\s/.test(countWhiteSpace.source));
```

Votre regex doit trouver huit espaces dans la chaîne de caractères `Les hommes viennent de Mars et les femmes de Vénus.`

```js
assert(
  'Les hommes viennent de Mars et les femmes de Vénus.'.match(countWhiteSpace).length ==
    9
);
```

Votre regex doit trouver trois espaces dans la chaîne de caractères `L'espace: la dernière frontière.`

```js
assert("L'espace: la dernière frontière.".match(countWhiteSpace).length == 3);
```

Votre regex ne doit pas trouver d'espace dans la chaîne de caractères `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Les espaces sont importants pour séparer les mots";
let countWhiteSpace = /change/; // Modifiez cette ligne
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Les espaces sont importants pour séparer les mots";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
