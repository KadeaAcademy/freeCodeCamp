---
id: 587d7db3367417b2b2512b8f
title: Faire correspondre des chaînes littérales
challengeType: 1
forumTopicId: 301355
dashedName: match-literal-strings
---

# --description--

Dans le dernier défi, vous avez recherché le mot `Hello` à l'aide de l'expression régulière `/Hello/`. Cette expression régulière recherchait une correspondance littérale de la chaîne `Hello`. Voici un autre exemple de recherche d'une correspondance littérale de la chaîne `Kevin` :

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
```

Cet appel de `test` retournera `true`.

Toute autre forme de `Kevin` ne correspondra pas. Par exemple, l'expression rationnelle `/Kevin/` ne correspondra pas à `kevin` ou `KEVIN`.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
```

Cet appel `test` retournera `false`.

Un prochain défi montrera comment faire correspondre ces autres formes également.

# --instructions--

Complétez la regex `waldoRegex` pour trouver `"Waldo"` dans la chaîne `waldoIsHiding` avec une correspondance littérale.

# --hints--

Votre regex `waldoRegex` devrait trouver la chaîne `Waldo`.

```js
waldoRegex.lastIndex = 0;
assert(waldoRegex.test(waldoIsHiding));
```

Votre regex `waldoRegex` ne doit pas chercher autre chose.

```js
waldoRegex.lastIndex = 0;
assert(!waldoRegex.test('Somewhere is hiding in this text.'));
```

Vous devez effectuer une correspondance de chaîne littérale avec votre regex.

```js
assert(!/\/.*\/i/.test(code));
```

# --seed--

## --seed-contents--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Modifiez cette ligne
let result = waldoRegex.test(waldoIsHiding);
```

# --solutions--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Modifiez cette ligne
let result = waldoRegex.test(waldoIsHiding);
```
