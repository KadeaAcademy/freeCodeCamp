---
id: 587d7db5367417b2b2512b97
title: Associer les chiffres et les lettres de l'alphabet
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

L'utilisation du trait d'union (`-`) pour faire correspondre une série de caractères ne se limite pas aux lettres. Il permet également d'associer une série de chiffres.

Par exemple, `/[0-5]/` correspond à tout nombre compris entre `0` et `5`, y compris le `0` et le `5`.

Il est également possible de combiner une série de lettres et de chiffres dans un seul jeu de caractères.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

Créez une seule regex qui correspond à une plage de lettres entre `h` et `s`, et à une plage de chiffres entre `2` et `6`. N'oubliez pas d'inclure les marqueurs appropriés dans la regex.

# --hints--

Votre regex `myRegex` devrait correspondre à 17 éléments.

```js
assert(result.length == 17);
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
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Modifiez cette ligne
let result = myRegex; // Modifiez cette ligne
```

# --solutions--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Modifiez cette ligne
let result = quoteSample.match(myRegex); // Modifiez cette ligne
```
