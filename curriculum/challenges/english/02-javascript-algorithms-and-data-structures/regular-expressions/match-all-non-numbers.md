---
id: 587d7db8367417b2b2512ba1
title: Faire correspondre tous les non-nombres
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

Le dernier défi montrait comment rechercher des chiffres à l'aide du raccourci `\d` avec un `d` minuscule. Vous pouvez également rechercher des caractères autres que des chiffres à l'aide d'un raccourci similaire qui utilise un `D` majuscule à la place.

Le raccourci pour rechercher les caractères non numériques est `\D`. Il correspond à la classe de caractères `[^0-9]`, qui recherche un caractère unique qui n'est pas un nombre compris entre zéro et neuf.

# --instructions--

Utilisez la classe de caractères abrégés pour les chiffres non numériques `\D` pour compter le nombre de caractères non numériques dans les titres de films.

# --hints--

Votre regex doit utiliser le caractère de raccourci pour correspondre aux caractères non numériques.

```js
assert(/\\D/.test(noNumRegex.source));
```

Votre regex doit utiliser le marqueur global.

```js
assert(noNumRegex.global);
```

Votre regex ne doit pas trouver de non-digits dans la chaîne `9`.

```js
assert('9'.match(noNumRegex) == null);
```

Votre regex devrait trouver 6 non-digits dans la chaîne de caractères `Catch 22`.

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

Votre regex devrait trouver 11 non-digits dans la chaîne de caractères `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

Votre regex devrait trouver 15 non-digits dans la chaîne de caractères `One, Two, Three`.

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

Votre regex devrait trouver 12 non-digits dans la chaîne de caractères `21 Jump Street`.

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

Votre regex devrait trouver 17 non-digits dans la chaîne de caractères `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Modifiez cette ligne
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Modifiez cette ligne
let result = movieName.match(noNumRegex).length;
```
