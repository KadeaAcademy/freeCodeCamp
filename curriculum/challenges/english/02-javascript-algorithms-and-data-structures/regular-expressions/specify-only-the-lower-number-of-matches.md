---
id: 587d7db9367417b2b2512ba6
title: Spécifier uniquement le nombre inférieur de correspondances
challengeType: 1
forumTopicId: 301366
dashedName: specify-only-the-lower-number-of-matches
---

# --description--

Vous pouvez spécifier le nombre inférieur et supérieur de motifs avec des spécificateurs de quantité utilisant des crochets. Parfois, vous souhaitez uniquement spécifier le nombre inférieur de motifs, sans limite supérieure.

Pour ne spécifier que le nombre inférieur de motifs, gardez le premier nombre suivi d'une virgule.

Par exemple, pour ne faire correspondre que la chaîne `hah` avec la lettre `a` apparaissant au moins `3` fois, votre regex serait `/ha{3,}h/`.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

Dans l'ordre, les trois appels `test` retourneront `true`, `false` et `true`.

# --instructions--

Modifiez la regex `haRegex` pour qu'elle ne corresponde au mot `Hazzah` que lorsqu'il comporte quatre lettres `z` ou plus.

# --hints--

Votre regex doit utiliser des accolades.

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

Votre regex ne doit pas correspondre à la chaîne `Hazzah`.

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzah'));
```

Votre regex ne doit pas correspondre à la chaîne de caractères `Hazzzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzzah'));
```

Votre regex doit correspondre à la chaîne de caractères `Hazzzzah`

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

Votre regex doit correspondre à la chaîne de caractères `Hazzzzzah`

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

Votre regex doit correspondre à la chaîne de caractères `Hazzzzzzah`

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

Votre regex doit correspondre à la chaîne `Hazzah` avec 30 `z` dedans.

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --seed--

## --seed-contents--

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Modifiez cette ligne
let result = haRegex.test(haStr);
```

# --solutions--

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Modifiez cette ligne
let result = haRegex.test(haStr);
```
