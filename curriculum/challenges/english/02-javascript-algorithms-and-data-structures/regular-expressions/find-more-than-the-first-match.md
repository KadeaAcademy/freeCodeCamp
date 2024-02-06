---
id: 587d7db4367417b2b2512b93
title: Trouver plus que la première correspondance
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

Jusqu'à présent, vous n'avez pu extraire ou rechercher un motif qu'une seule fois.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

Ici, `match` renverrait `["Repeat"]`.

Pour rechercher ou extraire un motif plus d'une fois, vous pouvez utiliser le drapeau `g`.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

Et ici `match` renvoie la valeur `["Repeat", "Repeat", "Repeat"]`.

# --instructions--

En utilisant la regex `starRegex`, trouvez et extrayez les deux mots `Twinkle` de la chaîne `twinkleStar`.

**Note**  
Vous pouvez avoir plusieurs marqueurs sur votre regex comme `/search/gi`.

# --hints--

Votre regex `starRegex` doit utiliser le marqueur global `g`.

```js
assert(starRegex.flags.match(/g/).length == 1);
```

Votre regex `starRegex` doit utiliser le marqueur insensible à la casse `i`.

```js
assert(starRegex.flags.match(/i/).length == 1);
```

Votre correspondance doit correspondre aux deux occurrences du mot `Twinkle`.

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

Votre match `result` doit contenir deux éléments.

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Modifiez cette ligne
let result = twinkleStar; // Modifiez cette ligne
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```
