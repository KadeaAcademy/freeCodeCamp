---
id: 587d7b84367417b2b2512b36
title: 'Répérer les parenthèses, crochets, accolades et guillemets non fermés'
challengeType: 1
forumTopicId: 301190
dashedName: catch-unclosed-parentheses-brackets-braces-and-quotes
---

# --description--

Une autre erreur syntaxique à connaître est que toutes les parenthèses ouvrantes, les crochets, les accolades et les guillemets ont une paire fermante. L'oubli d'une pièce a tendance à se produire lorsque vous modifiez du code existant et insérez des éléments avec l'un des types de paires. Faites également attention lorsque vous imbriquez des blocs de code dans d'autres, par exemple lorsque vous ajoutez une fonction de rappel en tant qu'argument d'une méthode.

Une façon d'éviter cette erreur consiste à inclure immédiatement la correspondance de fermeture dès que le caractère d'ouverture est tapé, puis à replacer le curseur entre les deux et à poursuivre le codage. Heureusement, la plupart des éditeurs de code modernes génèrent automatiquement la seconde moitié de la paire.

# --instructions--

Corriger les deux erreurs de paire dans le code.

# --hints--

Votre code devrait réparer la partie manquante du tableau.

```js
assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
```

Votre code devrait corriger la partie manquante de la méthode `.reduce()`. La sortie de la console devrait montrer que la "Somme des valeurs du tableau est: 6`.

```js
assert(arraySum === 6);
```

# --seed--

## --seed-contents--

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Somme des valeurs du tableau est: ${arraySum}`);
```

# --solutions--

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Somme des valeurs du tableau est: ${arraySum}`);
```
