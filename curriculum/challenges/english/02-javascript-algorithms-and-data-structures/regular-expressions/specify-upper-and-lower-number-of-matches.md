---
id: 587d7db9367417b2b2512ba5
title: Spécifier le nombre supérieur et inférieur de correspondances
challengeType: 1
forumTopicId: 301367
dashedName: specify-upper-and-lower-number-of-matches
---

# --description--

Rappelez-vous que vous utilisez le signe plus `+` pour rechercher un ou plusieurs caractères et l'astérisque `*` pour rechercher zéro ou plusieurs caractères. Ce sont des outils pratiques, mais il arrive parfois que vous souhaitiez faire correspondre un certain nombre de motifs.

Vous pouvez spécifier le nombre inférieur et supérieur de motifs avec des spécificateurs de quantité. Les spécificateurs de quantité sont utilisés avec des accolades (`{` et `}`). Vous placez deux chiffres entre les accolades, pour le nombre inférieur et supérieur de motifs.

Par exemple, pour ne faire correspondre que la lettre `a` apparaissant entre `3` et `5` fois dans la chaîne `ah`, votre regex sera `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

Le premier appel à `test` renverrait `true`, tandis que le second renverrait `false`.

# --instructions--

Changez la regex `ohRegex` pour qu'elle ne corresponde à l'expression entière `Oh no` que lorsqu'elle contient des `h` de 3 à 6 lettres.

# --hints--

Votre regex doit utiliser des accolades.

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

Votre regex ne doit pas correspondre à la chaîne `Ohh no`.

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohh no'));
```

Votre regex doit correspondre à la chaîne `Ohhh no`.

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

Votre regex doit correspondre à la chaîne `Ohhhhh no`.

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

Votre regex doit correspondre à la chaîne `Ohhhhhh no`.

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

Votre regex doit correspondre à la chaîne `Ohhhhhhh no`.

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

Votre regex ne doit pas correspondre à la chaîne `Ohhhhhhh non`.

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohhhhhhh no'));
```

# --seed--

## --seed-contents--

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Modifiez cette ligne
let result = ohRegex.test(ohStr);
```

# --solutions--

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Modifiez cette ligne
let result = ohRegex.test(ohStr);
```
