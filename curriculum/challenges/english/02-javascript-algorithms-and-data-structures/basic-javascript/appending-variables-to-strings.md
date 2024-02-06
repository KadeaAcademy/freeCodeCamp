---
id: 56533eb9ac21ba0edf2244ed
title: Ajouter des variables aux chaînes de caractères
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

Tout comme nous pouvons construire une chaîne de caractères sur plusieurs lignes à partir de chaînes de caractères <dfn>littérales</dfn>, nous pouvons également ajouter des variables à une chaîne de caractères en utilisant l'opérateur plus égal (`+=`).

Exemple :

```js
const unAdjectif = "formidable!";
let notreChaine = "Kadea est ";
notreChaine += unAdjectif;
```

`notreChaine` aura la valeur `Kadea est formidable!`.

# --instructions--

Affectez à `unCertainAdjectif` une chaîne d'au moins 3 caractères et joignez-la à `myStr` en utilisant l'opérateur `+=`.

# --hints--

`unCertainAdjectif` doit contenir une chaîne d'au moins 3 caractères.

```js
assert(typeof unCertainAdjectif !== 'undefined' && unCertainAdjectif.length > 2);
```

Vous devez annexer `unCertainAdjectif` à `myStr` en utilisant l'opérateur `+=`.

```js
assert(code.match(/myStr\s*\+=\s*unCertainAdjectif\s*/).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof unCertainAdjectif === 'string') {
    output.push('unCertainAdjectif = "' + unCertainAdjectif + '"');
  } else {
    output.push('unCertainAdjectif is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

## --seed-contents--

```js
// Changez le code sous cette ligne
const unCertainAdjectif = "";
let myStr = "Apprendre à coder est ";
```

# --solutions--

```js
const unCertainAdjectif = "génial";
let myStr = "Apprendre à coder est ";
myStr += unCertainAdjectif;
```
