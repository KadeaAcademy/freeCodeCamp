---
id: 56533eb9ac21ba0edf2244b8
title: Concaténer des chaînes de caractères avec l'opérateur Plus-Egal
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

Nous pouvons également utiliser l'opérateur `+=` pour <dfn>concaténer</dfn> une chaîne de caractères à la fin d'une variable chaîne existante. Cela peut être très utile pour casser une longue chaîne sur plusieurs lignes.

**Note:** Faites attention aux espaces. La concaténation n'ajoute pas d'espaces entre les chaînes concaténées, vous devrez donc les ajouter vous-même.

Exemple :

```js
let ourStr = "Je suis le premier. ";
ourStr += "Je viens en second.";
```

`ourStr` a maintenant une valeur de chaîne `Je suis le premier. Je viens en second.`

# --instructions--

Construisez `myStr` sur plusieurs lignes en concaténant ces deux chaînes de caractères : `Voici la première phrase.` et `Voici la deuxième phrase.`, en utilisant l'opérateur "+=". Utilisez l'opérateur `+=` de la même manière que dans l'exemple et assurez-vous d'inclure un espace entre les deux chaînes de caractères. Commencez par affecter la première chaîne à `myStr`, puis ajoutez la deuxième chaîne.

# --hints--

`myStr` devrait avoir une valeur de chaîne `Voici la première phrase. Voici la deuxième phrase.`

```js
assert(myStr === 'Voici la première phrase. Voici la deuxième phrase.');
```

Vous devez utiliser l'opérateur `+=` pour construire `myStr`.

```js
assert(code.match(/myStr\s*\+=\s*(["']).*\1/g));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
let myStr;
```

# --solutions--

```js
let myStr = "Voici la première phrase. ";
myStr += "Voici la deuxième phrase.";
```
