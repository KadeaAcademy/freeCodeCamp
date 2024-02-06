---
id: bd7123c9c452eddfaeb5bdef
title: Utiliser la notation entre crochets pour trouver le énième avant-dernier caractère d'une chaîne de caractères
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

Vous pouvez utiliser le même principe que celui que nous venons d'utiliser pour récupérer le dernier caractère d'une chaîne afin de récupérer le Nième avant-dernier caractère.

Par exemple, vous pouvez obtenir la valeur de la troisième avant-dernière lettre de la chaîne `const firstName = "Augusta"` en utilisant `firstName[firstName.length - 3]`.

Example:

```js
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
```

La valeur de `thirdToLastLetter` doit être la chaîne `s`.

# --instructions--

Utilisez la <dfn>notation entre crochets</dfn> pour trouver l'avant-dernier caractère de la chaîne `lastName`.

**Indice:** Essayez de regarder l'exemple ci-dessus si vous êtes bloqué.

# --hints--

`secondToLastLetterOfLastName` devrait être la lettre `c`.

```js
assert(secondToLastLetterOfLastName === 'c');
```

Vous devez utiliser `.length` pour obtenir l'avant-dernière lettre.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(secondToLastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Ne changez que le code en dessous de cette ligne
const secondToLastLetterOfLastName = lastName; // Modifiez cette ligne
```

# --solutions--

```js
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
```
