---
id: 56533eb9ac21ba0edf2244b9
title: Construire des chaînes de caractères avec des variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

Vous aurez parfois besoin de construire une chaîne de caractères, à la manière de [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs). En utilisant l'opérateur de concaténation (`+`), vous pouvez insérer une ou plusieurs variables dans une chaîne que vous construisez.

Exemple :

```js
const ourName = "Kadea";
const ourStr = "Bonjour, nous sommes " + ourName + ", comment allez-vous ?";
```

`ourStr` aurait une valeur de chaîne `Bonjour, nous sommes Kadea, comment allez-vous ?`

# --instructions--

Définissez `myName` comme une chaîne de caractères égale à votre nom et construisez `myStr` avec `myName` entre les chaînes de caractères `Je m'appelle ` et ` et je vais bien!`.

# --hints--

`myName` doit être défini comme une chaîne d'au moins 3 caractères.

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

Vous devez utiliser deux opérateurs `+` pour construire `myStr` avec `myName` à l'intérieur.

```js
assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof myName === 'string') {
    output.push('myName = "' + myName + '"');
  } else {
    output.push('myName is not a string');
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
// Ne changez que le code en dessous de cette ligne
const myName = "";
const myStr = "";
```

# --solutions--

```js
const myName = "Bob";
const myStr = "Je m'appelle " + myName + " et je vais bien!";
```
