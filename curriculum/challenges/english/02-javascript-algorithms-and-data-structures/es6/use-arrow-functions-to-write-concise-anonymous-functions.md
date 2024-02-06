---
id: 587d7b87367417b2b2512b43
title: Utiliser les fonctions fléchées pour écrire des fonctions anonymes concises
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

En JavaScript, nous n'avons souvent pas besoin de nommer nos fonctions, notamment lorsque nous passons une fonction en argument à une autre fonction. Au lieu de cela, nous créons des fonctions en ligne. Nous n'avons pas besoin de nommer ces fonctions car nous ne les réutilisons pas ailleurs.

Pour ce faire, nous utilisons souvent la syntaxe suivante :

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 nous fournit le sucre syntaxique pour ne pas avoir à écrire des fonctions anonymes de cette façon. Au lieu de cela, vous pouvez utiliser la **syntaxe de fonction fléchée** :

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

Lorsqu'il n'y a pas de corps de fonction, mais seulement une valeur de retour, la syntaxe de la fonction fléchée vous permet d'omettre le mot clé `return` ainsi que les parenthèses entourant le code. Cela permet de simplifier les petites fonctions en une seule ligne :

```js
const myFunc = () => "value";
```

Ce code retournera toujours la chaîne `value` par défaut.

# --instructions--

Réécrivez la fonction affectée à la variable `magic` qui renvoie une `new Date()` pour utiliser la syntaxe de la fonction fléchée. Vérifiez également que rien n'est défini à l'aide du mot-clé `var`.

# --hints--

Vous devez remplacer le mot-clé `var`.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`magic` devrait être une variable constante (en utilisant `const`).

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+magic/g));
```

`magic` devrait être une `fonction`.

```js
assert(typeof magic === 'function');
```

`magic()` devrait retourner la date correcte.

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

Le mot-clé `function` ne doit pas être utilisé.

```js
(getUserInput) => assert(!getUserInput('index').match(/function/g));
```

# --seed--

## --seed-contents--

```js
var magic = function() {
  return new Date();
};
```

# --solutions--

```js
const magic = () => {
  return new Date();
};
```
