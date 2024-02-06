---
id: 587d7b83367417b2b2512b37
title: Comprendre les différences entre la console de freeCodeCamp et celle du navigateur
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

Vous avez peut-être remarqué que certains défis de freeCodeCamp incluent leur propre console. Cette console se comporte un peu différemment de la console du navigateur.

Il y a plusieurs méthodes à utiliser avec `console` pour sortir des messages. `log`, `warn`, et `clear` pour en nommer quelques unes. La console de freeCodeCamp ne peut afficher que les messages `log`, alors que la console du navigateur affiche tous les messages. Quand vous faites des changements à votre code, il sera automatiquement exécuté et montrera les logs. La console de freeCodeCamp est alors effacée à chaque fois que votre code s'exécute.

# --instructions--

Tout d'abord, ouvrez la console de votre navigateur afin de pouvoir voir les logs. Pour ce faire, vous pouvez faire un clic droit sur la barre de navigation de freeCodeCamp en haut et cliquer sur `inspecter` sur la plupart des navigateurs. Ensuite, trouvez l'onglet `console` dans la fenêtre qui s'ouvre.

Après cela, utilisez `console.log` pour enregistrer la variable `output`. Regardez les deux consoles pour voir le journal. Enfin, utilisez `console.clear` après votre log pour effacer la console du navigateur. Regardez la différence entre les deux consoles.

# --hints--

Vous devriez utiliser `console.log()` pour imprimer la variable `output`.

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

Vous devez utiliser `console.clear()` pour effacer la console du navigateur.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

Vous devez effacer la console après votre log.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console\.log\(output\)[\s\S]*console.clear\(\)/)
);
```

# --seed--

## --seed-contents--

```js
let output = "Faites en sorte que cela s'affiche une fois dans la console de freeCodeCamp et pas du tout dans la console du navigateur.";

```

# --solutions--

```js
let output = "Faites en sorte que cela s'affiche une fois dans la console de freeCodeCamp et pas du tout dans la console du navigateur.";

console.log(output);
console.clear();
```
