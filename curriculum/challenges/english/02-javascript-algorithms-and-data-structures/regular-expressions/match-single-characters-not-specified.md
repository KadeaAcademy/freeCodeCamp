---
id: 587d7db6367417b2b2512b98
title: Faire correspondre des caractères uniques non spécifiés
challengeType: 1
forumTopicId: 301358
dashedName: match-single-characters-not-specified
---

# --description--

Jusqu'à présent, vous avez créé un jeu de caractères que vous souhaitez faire correspondre, mais vous pouvez également créer un jeu de caractères que vous ne souhaitez pas faire correspondre. Ces types de jeux de caractères sont appelés jeux de caractères négatifs.

Pour créer un jeu de caractères négatifs, vous placez un signe d'insertion (`^`) après la parenthèse ouvrante et avant les caractères que vous ne voulez pas faire correspondre.

Par exemple, `/[^aeiou]/gi` correspond à tous les caractères qui ne sont pas des voyelles. Notez que les caractères comme `.`, `!`, `[`, `@`, `/` et les espaces sont pris en compte - le jeu de caractères de voyelles négatives n'exclut que les voyelles.

# --instructions--

Créez une seule regex qui correspond à tous les caractères qui ne sont pas un nombre ou une voyelle. N'oubliez pas d'inclure les marqueurs appropriés dans la regex.

# --hints--

Votre regex `myRegex` doit correspondre à 9 éléments.

```js
assert(result.length == 9);
```

Votre regex `myRegex` doit utiliser le marqueur global.

```js
assert(myRegex.flags.match(/g/).length == 1);
```

Votre regex `myRegex` doit utiliser le marqueur insensible à la casse.

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Modifiez cette ligne
let result = myRegex; // Modifiez cette ligne
```

# --solutions--

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Modifiez cette ligne
let result = quoteSample.match(myRegex); // Modifiez cette ligne
```
