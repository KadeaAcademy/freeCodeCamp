---
id: 587d7db6367417b2b2512b9a
title: Trouver des caractères qui apparaissent zéro ou plusieurs fois.
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

Le dernier défi utilisait le signe plus `+` pour rechercher les caractères qui apparaissent une ou plusieurs fois. Il existe également une option qui permet de rechercher les caractères qui apparaissent zéro fois ou plus.

Le caractère à utiliser est l'astérisque ou l'étoile : `*`.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

Dans l'ordre, les trois appels à `match` renverront les valeurs `["goooooooo"]`, `["g"]` et `null`.

# --instructions--

Pour ce défi, `chewieQuote` a été initialisé comme la chaîne de caractères `Aaaaaaaaaaaaaaaarrrgh!` dans les coulisses. Créez une regex `chewieRegex` qui utilise le caractère `*` pour faire correspondre un caractère `A` majuscule immédiatement suivi de zéro ou plus caractères `a` minuscules dans `chewieQuote`. Votre regex n'a pas besoin de drapeaux ou de classes de caractères, et elle ne doit pas correspondre à d'autres guillemets.

# --hints--

Votre regex `chewieRegex` doit utiliser le caractère `*` pour correspondre à zéro ou plusieurs caractères `a`.

```js
assert(/\*/.test(chewieRegex.source));
```

Votre regex doit correspondre à la chaîne `A` dans `chewieQuote`.

```js
assert(result[0][0] === 'A');
```

Votre regex doit correspondre à la chaîne `Aaaaaaaaaaaaaaa` dans `chewieQuote`.

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

Votre regex `chewieRegex` doit correspondre à 16 caractères dans `chewieQuote`.

```js
assert(result[0].length === 16);
```

Votre regex ne doit correspondre à aucun caractère de la chaîne `He made a fair move. Screaming about it can't help you.`

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

Votre regex ne doit correspondre à aucun caractère de la chaîne de caractères `Let him have it. It's not wise to upset a Wookiee.`

```js
assert(
  !"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex)
);
```

# --seed--

## --before-user-code--

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
```

## --seed-contents--

```js
// Ne modifiez que le code sous cette ligne
let chewieRegex = /change/; // Modifiez cette ligne
// Ne modifiez que le code au-dessus de cette ligne

let result = chewieQuote.match(chewieRegex);
```

# --solutions--

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```
