---
id: 587d7dbb367417b2b2512bac
title: Supprimer les espaces blancs au début et à la fin
challengeType: 1
forumTopicId: 301362
dashedName: remove-whitespace-from-start-and-end
---

# --description--

Parfois, les caractères d'espacement autour des chaînes de caractères ne sont pas souhaités mais sont présents. Le traitement typique des chaînes de caractères consiste à supprimer les espaces au début et à la fin de la chaîne.

# --instructions--

Écrivez une expression rationnelle et utilisez les méthodes appropriées pour supprimer les espaces au début et à la fin des chaînes de caractères.

**Note :** La méthode `String.prototype.trim()` fonctionnerait ici, mais vous devrez relever ce défi en utilisant des expressions régulières.

# --hints--

`result` doit être égal à la chaîne de caractères `Hello, World!`

```js
assert(result === 'Hello, World!');
```

Votre solution ne doit pas utiliser la méthode `String.prototype.trim()`.

```js
assert(!code.match(/\.?[\s\S]*?trim/));
```

La variable `result` ne doit pas être directement définie comme une chaîne de caractères.

```js
assert(!code.match(/result\s*=\s*["'`].*?["'`]/));
```

La valeur de la variable `hello` ne doit pas être modifiée.

```js
assert(hello === '   Hello, World!  ');
```

# --seed--

## --seed-contents--

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Modifiez cette ligne
let result = hello; // Modifiez cette ligne
```

# --solutions--

```js
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
let result = hello.replace(wsRegex, '$2');
```
