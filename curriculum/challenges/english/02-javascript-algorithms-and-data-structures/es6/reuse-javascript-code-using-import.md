---
id: 587d7b8c367417b2b2512b55
title: Réutiliser le code JavaScript en utilisant import
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

`import` vous permet de choisir les parties d'un fichier ou d'un module à charger. Dans la leçon précédente, les exemples ont exporté `add` du fichier `math_functions.js`. Voici comment vous pouvez l'importer pour l'utiliser dans un autre fichier :

```js
import { add } from './math_functions.js';
```

Ici, `import` trouvera `add` dans `math_functions.js`, importera juste cette fonction pour que vous l'utilisiez, et ignorera le reste. Le `./` indique à l'import de chercher le fichier `math_functions.js` dans le même dossier que le fichier actuel. Le chemin d'accès relatif (`./`) et l'extension de fichier (`.js`) sont nécessaires lorsque vous utilisez import de cette manière.

Vous pouvez importer plus d'un élément du fichier en les ajoutant dans l'instruction `import` comme ceci :

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

Ajoutez l'instruction `import` appropriée qui permettra au fichier actuel d'utiliser les fonctions `uppercaseString` et `lowercaseString` que vous avez exportées dans la leçon précédente. Ces fonctions se trouvent dans un fichier appelé `string_functions.js`, qui se trouve dans le même répertoire que le fichier actuel.

# --hints--

Vous devez importer correctement `uppercaseString`.

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

Vous devez importer correctement `lowercaseString`.

```js
assert(
  code.match(
    /import\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

# --seed--

## --seed-contents--

```js
  
// Ne changez que le code au-dessus de cette ligne

uppercaseString("hello");
lowercaseString("WORLD!");
```

# --solutions--

```js
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
```
