---
id: bd7123c9c549eddfaeb5bdef
title: Utiliser la notation entre crochets pour trouver le premier caractère d'une chaîne de caractères
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

<dfn>La notation en crochet</dfn> est un moyen d'obtenir un caractère à un indice spécifique dans une chaîne de caractères.

La plupart des langages de programmation modernes, comme JavaScript, ne commencent pas à compter à 1 comme le font les humains. Ils commencent à 0. C'est ce qu'on appelle l'indexation <dfn>basée sur zéro</dfn>.

Par exemple, le caractère à l'index 0 dans le mot "Charles" est "C". Ainsi, si `const firstName = "Charles"`, vous pouvez obtenir la valeur de la première lettre de la chaîne en utilisant `firstName[0]`.

Exemple:

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` aurait pour valeur la chaîne `C`.

# --instructions--

Utilisez la notation entre crochets pour trouver le premier caractère de la variable `lastName` et l'affecter à `firstLetterOfLastName`.

**Indice:** Essayez de regarder l'exemple ci-dessus si vous êtes bloqué.

# --hints--

La variable `firstLetterOfLastName` doit avoir la valeur `L`.

```js
assert(firstLetterOfLastName === 'L');
```

Vous devez utiliser la notation entre crochets

```js
assert(code.match(/firstLetterOfLastName\s*?=\s*?lastName\[.*?\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(firstLetterOfLastName);
```

## --seed-contents--

```js
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Ne changez que le code sous cette ligne
firstLetterOfLastName = lastName; // Modifiez cette ligne
```

# --solutions--

```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Ne changez que le code en dessous de cette ligne
firstLetterOfLastName = lastName[0];
```
