---
id: 587d7db7367417b2b2512b9c
title: Trouver un ou plusieurs criminels dans une chasse
challengeType: 1
forumTopicId: 301343
dashedName: find-one-or-more-criminals-in-a-hunt
---

# --description--

Il est temps de faire une pause et de tester vos nouvelles compétences en écriture de regex. Un groupe de criminels s'est échappé de prison et s'est enfui, mais vous ne savez pas combien ils sont. Cependant, vous savez qu'ils restent groupés lorsqu'ils sont en présence d'autres personnes. Vous êtes chargé de retrouver tous les criminels en même temps.

Voici un exemple pour revoir comment faire :

La regex `/z+/` correspond à la lettre `z` lorsqu'elle apparaît une ou plusieurs fois de suite. Elle trouverait des correspondances dans toutes les chaînes de caractères suivantes :

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

Mais il ne trouve pas de correspondance dans les chaînes suivantes car il n'y a pas de caractères `z` :

```js
""
"ABC"
"abcabc"
```

# --instructions--

Écrivez une regex gourmande qui trouve un ou plusieurs criminels dans un groupe d'autres personnes. Un criminel est représenté par la lettre majuscule `C`.

# --hints--

Votre regex doit correspondre à un criminel (`C`) dans la chaîne `C`.

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

Votre regex doit correspondre à deux criminels (`CC`) dans la chaîne `CC`

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

Votre regex doit correspondre à trois criminels (`CCC`) dans la chaîne `P1P5P4CCCcP2P6P3`.

```js
assert(
  'P1P5P4CCCcP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCcP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

Votre regex doit correspondre à cinq criminels (`CCCCC`) dans la chaîne `P6P2P7P4P5CCCCCP3P1`

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

Votre regex ne doit pas correspondre aux criminels de la chaîne vide `""`.

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test(''));
```

Votre regex ne doit pas correspondre aux criminels de la chaîne `P1P2P3`.

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test('P1P2P3'));
```

Votre regex doit correspondre à 50 criminels(`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`) dans la chaîne `P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3`.

```js
assert(
  'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
    reCriminals
  ) &&
    'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
      reCriminals
    )[0] == 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'
);
```

# --seed--

## --seed-contents--

```js
let reCriminals = /./; // Modifiez cette ligne
```

# --solutions--

```js
let reCriminals = /C+/; // Modifiez cette ligne
```
