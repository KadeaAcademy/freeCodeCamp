---
id: 587d7db9367417b2b2512ba7
title: Précisez le nombre exact de correspondances
challengeType: 1
forumTopicId: 301365
dashedName: specify-exact-number-of-matches
---

# --description--

Vous pouvez spécifier le nombre inférieur et supérieur de motifs avec des spécificateurs de quantité en utilisant des accolades. Parfois, vous ne voulez qu'un nombre spécifique de correspondances.

Pour spécifier un certain nombre de motifs, il suffit de placer ce nombre entre les accolades.

Par exemple, pour ne faire correspondre que le mot `hah` avec la lettre `a` `3` fois, votre regex serait `/ha{3}h/`.

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```

Dans l'ordre, les trois appels `test` renverront `false`, `true`, et `false`.

# --instructions--

Modifiez la regex `timRegex` pour qu'elle ne corresponde au mot `Timber` que lorsqu'il contient quatre lettres `m`.

# --hints--

Votre regex doit utiliser des accolades.

```js
assert(timRegex.source.match(/{.*?}/).length > 0);
```

Votre regex ne doit pas correspondre à la chaîne de caractères `Timber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timber'));
```

Votre regex ne doit pas correspondre à la chaîne de caractères `Timmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmber'));
```

Votre regex ne doit pas correspondre à la chaîne de caractères `Timmmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmmber'));
```

Votre regex doit correspondre à la chaîne de caractères `Timmmmber`

```js
timRegex.lastIndex = 0;
assert(timRegex.test('Timmmmber'));
```

Votre regex ne doit pas correspondre à la chaîne `Timber` avec 30 `m` dans celle-ci.

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Ti' + 'm'.repeat(30) + 'ber'));
```

# --seed--

## --seed-contents--

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Modifiez cette ligne
let result = timRegex.test(timStr);
```

# --solutions--

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Modifiez cette ligne
let result = timRegex.test(timStr);
```
