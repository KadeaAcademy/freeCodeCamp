---
id: bd7123c9c451eddfaeb5bdef
title: Utiliser la notation entre crochets pour trouver le dernier caractère d'une chaîne de caractères
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

Afin d'obtenir la dernière lettre d'une chaîne de caractères, vous pouvez soustraire un de la longueur de la chaîne.

Par exemple, si `const firstName = "Ada"`, vous pouvez obtenir la valeur de la dernière lettre de la chaîne en utilisant `firstName[firstName.length - 1]`.

Exemple :

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter` aura comme valeur la chaîne `a`.

# --instructions--

Utilisez la <dfn>notation entre crochets</dfn> pour trouver le dernier caractère de la variable `lastName`.

**Indice:** Essayez de regarder l'exemple ci-dessus si vous êtes bloqué.

# --hints--

`lastLetterOfLastName` doit être la lettre `e`.

```js
assert(lastLetterOfLastName === 'e');
```

Vous devriez utiliser `.length` pour obtenir la dernière lettre.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Ne changez que le code en dessous de cette ligne
const lastLetterOfLastName = lastName; // Modifiez cette ligne
```

# --solutions--

```js
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
```
