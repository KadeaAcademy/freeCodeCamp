---
id: bd7123c9c450eddfaeb5bdef
title: Utiliser la notation entre crochets pour trouver le Nième caractère d'une chaîne de caractères
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

Vous pouvez également utiliser la <dfn>notation entre crochets</dfn> pour obtenir le caractère à d'autres positions dans une chaîne.

Rappelez-vous que les ordinateurs commencent à compter à partir de `0`, donc le premier caractère est en fait le caractère zéro.

Exemple :

```js
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` aurait alors pour valeur la chaîne `d`.

# --instructions--

Essayons de définir `thirdLetterOfLastName` de manière à ce qu'il soit égal à la troisième lettre de la variable `lastName` en utilisant la notation entre crochets.

**Indice:** Essayez de regarder l'exemple ci-dessus si vous êtes bloqué.

# --hints--

La variable `thirdLetterOfLastName` doit avoir la valeur `v`.

```js
assert(thirdLetterOfLastName === 'v');
```

Vous devez utiliser la notation entre crochets.

```js
assert(code.match(/thirdLetterOfLastName\s*?=\s*?lastName\[.*?\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(thirdLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Ne changez que le code en dessous de cette ligne
const thirdLetterOfLastName = lastName; // Modifiez cette ligne
```

# --solutions--

```js
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
```
