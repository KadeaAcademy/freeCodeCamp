---
id: 587d7db5367417b2b2512b95
title: Faire correspondre un seul caractère avec de multiples possibilités
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

Vous avez appris à faire correspondre des motifs littéraux (`/literal/`) et des caractères génériques (`/./`). Ce sont les extrêmes des expressions régulières, où l'une trouve des correspondances exactes et l'autre correspond à tout. Il existe des options qui constituent un équilibre entre ces deux extrêmes.

Vous pouvez rechercher un motif littéral avec une certaine souplesse grâce aux classes de caractères. Les classes de caractères vous permettent de définir un groupe de caractères que vous souhaitez faire correspondre en les plaçant entre des crochets (`[` et `]`).

Par exemple, vous voulez faire correspondre `bag`, `big`, et `bug` mais pas `bog`. Vous pouvez créer la regex `/b[aiu]g/` pour faire cela. Le `[aiu]` est la classe de caractères qui ne correspondra qu'aux caractères `a`, `i`, ou `u`.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

Dans l'ordre, les quatre appels à `match` renverront les valeurs `["big"]`, `["bag"]`, `["bug"]` et `null`.

# --instructions--

Utilisez une classe de caractères contenant seulement les voyelles (`a`, `e`, `i`, `o`, `u`) dans votre regex `voyelleRegex` pour trouver toutes les voyelles dans la chaîne `phrase`.

**Note:** Veillez à faire correspondre les voyelles en majuscules et en minuscules.

# --hints--

Vous devriez trouver un total de 36 voyelles dans cette phrase.

```js
assert(resultat.length == 36);
```

Votre regex `voyelleRegex` doit utiliser une classe de caractères.

```js
assert(/\[.*\]/.test(voyelleRegex.source));
```

Votre regex `voyelleRegex` doit utiliser le marqueur global.

```js
assert(voyelleRegex.flags.match(/g/).length == 1);
```

Votre regex `voyelleRegex` doit utiliser le marqueur insensible à la casse.

```js
assert(voyelleRegex.flags.match(/i/).length == 1);
```

Votre regex ne doit pas correspondre à des consonnes.

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(resultat.join()));
```

# --seed--

## --seed-contents--

```js
let phrase = "Attention aux bugs dans le code ci-dessus ; je n'ai fait que prouver qu'il est correct, je ne l'ai pas essayé.";
let voyelleRegex = /change/; // Modifiez cette ligne
let resultat = voyelleRegex; // Modifiez cette ligne
```

# --solutions--

```js
let phrase = "Attention aux bugs dans le code ci-dessus ; je n'ai fait que prouver qu'il est correct, je ne l'ai pas essayé.";
let voyelleRegex = /[aeiou]/gi; // Modifiez cette ligne
let resultat = phrase.match(voyelleRegex); // Modifiez cette ligne
```
