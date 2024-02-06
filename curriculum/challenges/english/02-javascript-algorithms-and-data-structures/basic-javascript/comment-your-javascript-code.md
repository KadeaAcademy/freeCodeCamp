---
id: bd7123c9c441eddfaeb4bdef
title: Commentez votre code JavaScript
challengeType: 1
removeComments: false
videoUrl: 'https://scrimba.com/c/c7ynnTp'
forumTopicId: 16783
dashedName: comment-your-javascript-code
---

# --description--

Les commentaires sont des lignes de code que JavaScript ignore intentionnellement. Les commentaires sont un excellent moyen de laisser des notes à vous-même et aux autres personnes qui devront plus tard comprendre ce que fait ce code.

Il existe deux façons d'écrire des commentaires en JavaScript :

L'utilisation de `//` indique à JavaScript d'ignorer le reste du texte de la ligne en cours. Il s'agit d'un commentaire en ligne :

```js
// Il s'agit d'un commentaire en ligne.
```

Vous pouvez faire un commentaire de plusieurs lignes commençant par `/*` et finissant par `*/`. Ceci est un commentaire de plusieurs lignes :

```js
/* Il s'agit d'un
commentaire de plusieurs lignes */
```

**NOTE:** Lorsque vous écrivez du code, vous devriez régulièrement ajouter des commentaires pour clarifier la fonction de certaines parties de votre code. Un bon commentaire peut aider à communiquer l'intention de votre code - à la fois pour les autres *et* pour vous-même dans le futur.

# --instructions--

Essayez de créer un commentaire de chaque type.

# --hints--

Vous devez créer un commentaire de style `//` qui contient au moins cinq lettres.

```js
assert(code.match(/(\/\/)...../g));
```

Vous devez créer un commentaire de style `/* */` qui contient au moins cinq lettres.

```js
assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
// Fake Comment
/* Another Comment */
```
