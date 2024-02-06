---
id: 587d7db9367417b2b2512ba4
title: Correspondance des caractères sans espace
challengeType: 1
forumTopicId: 18210
dashedName: match-non-whitespace-characters
---

# --description--

Vous avez appris à rechercher les espaces en utilisant `\s`, avec un `s` minuscule. Vous pouvez également rechercher tout ce qui n'est pas un espace blanc.

Recherchez les espaces non-blancs à l'aide de `\S`, qui est un `s` majuscule. Ce motif ne correspondra pas aux caractères d'espacement, de retour chariot, de tabulation, de saut de page et de nouvelle ligne. Il peut être assimilé à la classe de caractères `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Les espaces. Des espaces partout !"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

La valeur renvoyée par la méthode `.length` serait `29`.

# --instructions--

Changez la regex `countNonWhiteSpace` pour rechercher plusieurs caractères sans espace dans une chaîne.

# --hints--

Votre regex doit utiliser le marqueur global.

```js
assert(countNonWhiteSpace.global);
```

Votre expression rationnelle doit utiliser le caractère raccourci `\S` pour correspondre à tous les caractères qui ne sont pas des espaces.

```js
assert(/\\S/.test(countNonWhiteSpace.source));
```

Votre regex devrait trouver 41 non-espaces dans la chaîne `Les hommes viennent de Mars et les femmes de Vénus.`.

```js
assert(
  'Les hommes viennent de Mars et les femmes de Vénus.'.match(countNonWhiteSpace)
    .length == 42
);
```

Votre regex devrait trouver 27 non-espaces dans la chaîne `Espace: la dernière frontière.`.

```js
assert('Espace: la dernière frontière.'.match(countNonWhiteSpace).length == 27);
```

Votre regex devrait trouver 21 non-espaces dans la chaîne de caractères `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countNonWhiteSpace).length == 21);
```

# --seed--

## --seed-contents--

```js
let sample = "Les espaces sont importants pour séparer les mots";
let countNonWhiteSpace = /change/; // Modifiez cette ligne
let result = sample.match(countNonWhiteSpace);
```

# --solutions--

```js
let sample = "Les espaces sont importants pour séparer les mots";
let countNonWhiteSpace = /\S/g; // Modifiez cette ligne
let result = sample.match(countNonWhiteSpace);
```
