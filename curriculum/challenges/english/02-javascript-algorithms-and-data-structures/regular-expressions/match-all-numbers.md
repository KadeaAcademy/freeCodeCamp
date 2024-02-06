---
id: 5d712346c441eddfaeb5bdef
title: Faire correspondre tous les nombres
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

Vous avez appris des raccourcis pour les chaînes de caractères courantes, comme les caractères alphanumériques. Un autre modèle courant est la recherche de chiffres ou de nombres.

Le raccourci pour rechercher les caractères numériques est `\d`, avec un `d` minuscule. Cela équivaut à la classe de caractères `[0-9]`, qui recherche un seul caractère de n'importe quel chiffre entre zéro et neuf.

# --instructions--

Utilisez la classe de caractères raccourcis `d` pour compter le nombre de chiffres dans les titres de films. Les chiffres écrits ("six" au lieu de 6) ne comptent pas.

# --hints--

Votre regex doit utiliser le caractère de raccourci pour correspondre aux caractères numériques.

```js
assert(/\\d/.test(numRegex.source));
```

Votre regex doit utiliser le marqueur global.

```js
assert(numRegex.global);
```

Votre regex doit trouver 1 chiffre dans la chaîne `9`.

```js
assert('9'.match(numRegex).length == 1);
```

Votre regex doit trouver 2 chiffres dans la chaîne `Catch 22`.

```js
assert('Catch 22'.match(numRegex).length == 2);
```

Votre regex doit trouver 3 chiffres dans la chaîne `101 Dalmatiens`.

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

Votre regex ne doit trouver aucun chiffre dans la chaîne `One, Two, Three`.

```js
assert('One, Two, Three'.match(numRegex) == null);
```

Votre regex doit trouver 2 chiffres dans la chaîne `21 Jump Street`.

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

Votre regex devrait trouver 4 chiffres dans la chaîne `2001 : A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Modifiez cette ligne
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Modifiez cette ligne
let result = movieName.match(numRegex).length;
```
