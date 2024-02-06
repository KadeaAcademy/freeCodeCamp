---
id: 587d7db7367417b2b2512b9e
title: Faire correspondre des modèles de chaînes de caractères de fin
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

Dans le dernier défi, vous avez appris à utiliser le caractère accentuation pour rechercher des motifs au début des chaînes de caractères. Il existe également un moyen de rechercher des motifs à la fin des chaînes de caractères.

Vous pouvez rechercher la fin des chaînes de caractères en utilisant le signe dollar `$` à la fin de la regex.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

Le premier appel à `test` retournera `true`, tandis que le second retournera `false`.

# --instructions--

Utilisez le caractère d'ancrage (`$`) pour faire correspondre la chaîne `caboose` à la fin de la chaîne `caboose`.

# --hints--

Vous devez rechercher `caboose` avec le signe dollar `$` ancré dans votre regex.

```js
assert(lastRegex.source == 'caboose$');
```

Votre regex ne doit pas utiliser de marqueur.

```js
assert(lastRegex.flags == '');
```

Vous devez faire correspondre `caboose` à la fin de la chaîne `The last car on a train is the caboose`.

```js
lastRegex.lastIndex = 0;
assert(lastRegex.test('The last car on a train is the caboose'));
```

# --seed--

## --seed-contents--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Modifiez cette ligne
let result = lastRegex.test(caboose);
```

# --solutions--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Modifiez cette ligne
let result = lastRegex.test(caboose);
```
