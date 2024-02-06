---
id: acda2fb1324d9b0fa741e6b5
title: Confirmer la fin
challengeType: 5
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

Vérifier si une chaîne (premier argument, `str`) se termine par la chaîne cible donnée (deuxième argument, `target`).

Ce défi *peut* être résolu avec la méthode `.endsWith()`, qui a été introduite dans ES2015. Mais pour les besoins de ce défi, nous aimerions que vous utilisiez plutôt l'une des méthodes de sous-chaîne JavaScript.
# --hints--

`confirmEnding("Bastian", "n")` doit renvoyer `true`.

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")` doit renvoyer `true`.

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")` doit renvoyer `false`.

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` doit renvoyer `false`.

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")` doit renvoyer `true`.

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")` doit renvoyer `true`.

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` doit renvoyer `false`.

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")` doit renvoyer `false`.

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` doit renvoyer `false`.

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` doit renvoyer `true`.

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

Votre code ne doit pas utiliser la méthode intégrée `.endsWith()` pour résoudre le défi.

```js
assert(!/\.endsWith\(.*?\)\s*?;?/.test(code) && !/\['endsWith'\]/.test(code));
```

# --seed--

## --seed-contents--

```js
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
```

# --solutions--

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
```
