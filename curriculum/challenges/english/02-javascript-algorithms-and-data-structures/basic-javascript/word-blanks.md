---
id: 56533eb9ac21ba0edf2244bb
title: Mots blancs
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

Nous allons maintenant utiliser nos connaissances sur les chaînes de caractères pour construire un jeu de mots de style "[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)" que nous appelons "Word Blanks". Vous allez créer une phrase (éventuellement humoristique) du style "Remplir les blancs".

Dans un jeu "Mad Libs", on vous fournit des phrases avec des mots manquants, comme des noms, des verbes, des adjectifs et des adverbes. Vous remplissez ensuite les parties manquantes avec les mots de votre choix de manière à ce que la phrase complète ait un sens.

Prenons cette phrase : C'était vraiment **\_\_\_\_\_**, et nous nous **\_\_\_\_\_** sommes **\_\_\_\_\_**. Il manque trois éléments à cette phrase : un adjectif, un verbe et un adverbe, et nous pouvons ajouter les mots de notre choix pour la compléter. Nous pouvons ensuite attribuer la phrase complétée à une variable comme suit :

```js
const sentence = "Il faisait vraiment " + "chaud" + ", et nous " + "riions" + " bêtement" + ".";
```

# --instructions--

Dans ce défi, nous vous fournissons un nom, un verbe, un adjectif et un adverbe. Vous devez former une phrase complète en utilisant les mots de votre choix, ainsi que les mots que nous vous fournissons.

Vous devrez utiliser l'opérateur de concaténation de chaînes de caractères `+` pour construire une nouvelle chaîne, en utilisant les variables fournies : `monNom`, `monAdjectif`, `monVerbe`, et `monAdverbe`. Vous assignerez ensuite la chaîne formée à la variable `wordBlanks`. Vous ne devez pas modifier les mots affectés aux variables.

Vous devrez également tenir compte des espaces dans votre chaîne, de sorte que la phrase finale ait des espaces entre tous les mots. Le résultat doit être une phrase complète.

# --hints--

`wordBlanks` doit être une chaîne de caractères.

```js
assert(typeof wordBlanks === 'string');
```

Vous ne devez pas modifier les valeurs attribuées à `monNom`, `monVerbe`, `monAdjectif` ou `monAdverbe`.

```js
assert(
  monNom === 'chien' &&
    monVerbe === 'courait' &&
    monAdjectif === 'gros' &&
    monAdverbe === 'rapidement'
);
```

Vous ne devez pas utiliser directement les valeurs `chien`, `courait`, `gros`, ou `rapidement` pour créer des `wordBlanks`.

```js
const newCode = removeAssignments(code);
assert(
  !/chien/.test(newCode) &&
    !/courait/.test(newCode) &&
    !/gros/.test(newCode) &&
    !/rapidement/.test(newCode)
);
```

`wordBlanks` doit contenir tous les mots assignés aux variables `monNom`, `monVerbe`, `monAdjectif` et `monAdverbe` séparés par des caractères non-mots (et tout mot supplémentaire dans votre madlib).

```js
assert(
  /\bchien\b/.test(wordBlanks) &&
    /\bgros\b/.test(wordBlanks) &&
    /\bcourait\b/.test(wordBlanks) &&
    /\brapidement\b/.test(wordBlanks)
);
```

# --seed--

## --after-user-code--

```js
const removeAssignments = str => str
  .replace(/monNom\s*=\s*["']chien["']/g, '')
  .replace(/monAdjectif\s*=\s*["']gros["']/g, '')
  .replace(/monVerbe\s*=\s*["']courait["']/g, '')
  .replace(/monAdverbe\s*=\s*["']rapidement["']/g, '');
```

## --seed-contents--

```js
const monNom = "chien";
const monAdjectif = "gros";
const monVerbe = "courait";
const monAdverbe = "rapidement";

// Ne changez que le code en dessous de cette ligne
const wordBlanks = ""; // Modifiez cette ligne
// Ne changez que le code au-dessus de cette ligne
```

# --solutions--

```js
const monNom = "chien";
const monAdjectif = "gros";
const monVerbe = "courait";
const monAdverbe = "rapidement";

let wordBlanks = "Il y avait autrefois un " + monNom + " qui était très " + monAdjectif + ". ";
wordBlanks += "Il " + monVerbe + " " + monAdverbe + " dans la cour.";
```
