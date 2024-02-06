---
id: 587d7db4367417b2b2512b90
title: Faire correspondre une chaîne littérale avec différentes possibilités
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

En utilisant des regex comme `/coding/`, vous pouvez rechercher le motif `coding` dans une autre chaîne.

Cette méthode est puissante pour rechercher des chaînes de caractères uniques, mais elle est limitée à un seul motif. Vous pouvez rechercher plusieurs motifs en utilisant l'opérateur `alternation` ou `OR` : `|`.

Cet opérateur fait correspondre les motifs qui le précèdent ou le suivent. Par exemple, si vous voulez faire correspondre les chaînes de caractères `yes` ou `no`, la regex que vous voulez est `/yes|no/`.

Vous pouvez également rechercher plus de deux motifs. Pour ce faire, ajoutez plusieurs motifs en les séparant par des opérateurs `OR`, comme `/yes|no|maybe/`.

# --instructions--

Complétez la regex `petRegex` pour correspondre aux animaux de compagnie `dog`, `cat`, `bird`, ou `fish`.

# --hints--

Votre regex `petRegex` devrait retourner `true` pour la chaîne `John has a pet dog.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

Votre regex `petRegex` devrait retourner `false` pour la chaîne de caractères `Emma has a pet rock.`.

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

Votre regex `petRegex` devrait retourner `true` pour la chaîne `Emma has a pet bird`.

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

Votre regex `petRegex` devrait retourner `true` pour la chaîne de caractères `Liz has a pet cat.`.

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

Votre regex `petRegex` devrait retourner `false` pour la chaîne de caractères `Kara has a pet dolphin.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

Votre regex `petRegex` devrait retourner `true` pour la chaîne `Alice has a pet fish`.

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

Votre regex `petRegex` devrait retourner `false` pour la chaîne `Jimmy has a pet computer.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Modifiez cette ligne
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Modifiez cette ligne
let result = petRegex.test(petString);
```
