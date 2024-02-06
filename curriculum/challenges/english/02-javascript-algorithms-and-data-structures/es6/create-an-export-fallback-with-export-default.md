---
id: 587d7b8c367417b2b2512b58
title: Créer un export fallback avec export default
challengeType: 1
forumTopicId: 301199
dashedName: create-an-export-fallback-with-export-default
---

# --description--

Dans la leçon `export`, vous avez appris la syntaxe de l'exportation nommée. Elle vous permet de mettre à disposition plusieurs fonctions et variables pour les utiliser dans d'autres fichiers.

Il existe une autre syntaxe `export` que vous devez connaître, appelée export default. En général, vous utiliserez cette syntaxe si une seule valeur est exportée d'un fichier. Elle est également utilisée pour créer une valeur de repli pour un fichier ou un module.

Voici des exemples d'utilisation de `export default` :

```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```

La première est une fonction nommée, et la seconde est une fonction anonyme.

Comme `export default` est utilisé pour déclarer une valeur de repli pour un module ou un fichier, vous ne pouvez avoir qu'une seule valeur d'exportation par défaut dans chaque module ou fichier. De plus, vous ne pouvez pas utiliser `export default` avec `var`, `let` ou `const`.

# --instructions--

La fonction suivante doit être la valeur de repli pour le module. Veuillez ajouter le code nécessaire à cet effet.

# --hints--

Votre code devrait utiliser une solution de repli `export`.

```js
assert(
  code.match(
    /export\s+default\s+function(\s+subtract\s*|\s*)\(\s*x,\s*y\s*\)\s*{/g
  )
);
```

# --seed--

## --seed-contents--

```js
function subtract(x, y) {
  return x - y;
}
```

# --solutions--

```js
export default function subtract(x, y) {
  return x - y;
}
```
