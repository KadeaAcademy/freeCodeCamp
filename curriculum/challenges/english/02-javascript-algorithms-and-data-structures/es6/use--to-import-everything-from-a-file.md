---
id: 587d7b8c367417b2b2512b57
title: Utiliser * pour tout importer d'un fichier
challengeType: 1
forumTopicId: 301210
dashedName: use--to-import-everything-from-a-file
---

# --description--

Supposons que vous ayez un fichier et que vous souhaitiez importer tout son contenu dans le fichier courant. Ceci peut être fait avec la syntaxe `import * as`. Voici un exemple où le contenu d'un fichier nommé `math_functions.js` est importé dans un fichier situé dans le même répertoire :

```js
import * as myMathModule from "./math_functions.js";
```

L'instruction `import` ci-dessus va créer un objet appelé `myMathModule`. C'est juste un nom de variable, vous pouvez le nommer comme vous voulez. L'objet contiendra toutes les exportations de `math_functions.js`, vous pourrez donc accéder aux fonctions comme vous le feriez avec n'importe quelle autre propriété d'objet. Voici comment vous pouvez utiliser les fonctions `add` et `subtract` qui ont été importées :

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

# --instructions--

Le code dans ce fichier nécessite le contenu du fichier : `string_functions.js`, qui se trouve dans le même répertoire que le fichier courant. Utilisez la syntaxe `import * as` pour importer tout ce qui se trouve dans le fichier dans un objet appelé `stringFunctions`.

# --hints--

Votre code devrait utiliser correctement la syntaxe `import * as`.

```js
assert(
  code.match(
    /import\s*\*\s*as\s+stringFunctions\s+from\s*('|")\.\/string_functions\.js\1/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Ne changez que le code au-dessus de cette ligne

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

# --solutions--

```js
import * as stringFunctions from "./string_functions.js";

// ajouter le code au-dessus de cette ligne
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```
