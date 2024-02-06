---
id: 587d7b8d367417b2b2512b59
title: Importer un export par défaut
challengeType: 1
forumTopicId: 301205
dashedName: import-a-default-export
---

# --description--

Dans le dernier défi, vous vous êtes familiarisé avec `export default` et ses utilisations. Pour importer une exportation par défaut, vous devez utiliser une syntaxe `import` différente. Dans l'exemple suivant, `add` est l'exportation par défaut du fichier `math_functions.js`. Voici comment l'importer :

```js
import add from "./math_functions.js";
```

La syntaxe diffère à un endroit clé. La valeur importée, `add`, n'est pas entourée d'accolades (`{}`). `add` ici est simplement un nom de variable pour ce qui est l'exportation par défaut du fichier `math_functions.js`. Vous pouvez utiliser n'importe quel nom ici lorsque vous importez un défaut.

# --instructions--

Dans le code suivant, importez l'exportation par défaut du fichier `math_functions.js`, qui se trouve dans le même répertoire que ce fichier. Donnez à l'import le nom de `subtract`.

# --hints--

Vous devez importer correctement `subtract` de `math_functions.js`.

```js
assert(code.match(/import\s+subtract\s+from\s+('|")\.\/math_functions\.js\1/g));
```

# --seed--

## --seed-contents--

```js
  
// Ne changez que le code au-dessus de cette ligne

subtract(7,4);
```

# --solutions--

```js
import subtract from "./math_functions.js";

subtract(7,4);
```
