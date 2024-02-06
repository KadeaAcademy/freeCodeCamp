---
id: 587d7db4367417b2b2512b92
title: Extraire les correspondances
challengeType: 1
forumTopicId: 301340
dashedName: extract-matches
---

# --description--

Jusqu'à présent, vous n'avez fait que vérifier si un motif existe ou non dans une chaîne de caractères. Vous pouvez également extraire les correspondances que vous avez trouvées avec la méthode `.match()`.

Pour utiliser la méthode `.match()`, appliquez la méthode sur une chaîne et passez la regex entre les parenthèses.

Voici un exemple :

```js
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

Ici, le premier `match` renverrait `["Hello"]` et le second renverrait `["expressions"]`.

Notez que la syntaxe `.match` est le "contraire" de la méthode `.test` que vous avez utilisée jusqu'à présent :

```js
'string'.match(/regex/);
/regex/.test('string');
```

# --instructions--

Appliquez la méthode `.match()` pour extraire la chaîne `coding`.

# --hints--

Le `resultat` doit avoir la chaîne `coding`.

```js
assert(result.join() === 'coding');
```

Votre regex `codingRegex` doit rechercher la chaîne `coding`.

```js
assert(codingRegex.source === 'coding');
```

Vous devez utiliser la méthode `.match()`.

```js
assert(code.match(/\.match\(.*\)/));
```

# --seed--

## --seed-contents--

```js
let extractStr = "Extraire le mot 'coding' de cette chaîne.";
let codingRegex = /change/; // Modifiez cette ligne
let result = extractStr; // Modifiez cette ligne
```

# --solutions--

```js
let extractStr = "Extraire le mot 'coding' de cette chaîne.";
let codingRegex = /coding/; // Modifiez cette ligne
let result = extractStr.match(codingRegex); // Modifiez cette ligne
```
