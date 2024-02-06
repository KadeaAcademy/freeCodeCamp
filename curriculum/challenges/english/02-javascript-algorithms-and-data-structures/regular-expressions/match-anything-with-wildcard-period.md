---
id: 587d7db5367417b2b2512b94
title: Faites correspondre n'importe quoi avec le point 
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

Parfois, vous ne connaîtrez pas (ou n'aurez pas besoin de connaître) les caractères exacts de vos motifs. Penser à tous les mots qui correspondent, par exemple, à une faute d'orthographe, prendrait beaucoup de temps. Heureusement, vous pouvez gagner du temps en utilisant le caractère générique : `.`.

Le caractère générique `.` correspond à n'importe quel caractère. Le caractère générique est également appelé `point`. Vous pouvez utiliser le caractère générique comme n'importe quel autre caractère dans une regex. Par exemple, si vous voulez faire correspondre `présumer`, `prédire`, `précoccuper`, et `président`, vous pouvez utiliser la regex `/pré./` pour faire correspondre les quatre mots.

```js
let presidentStr = "Le président a signé a décret";
let predireStr = "Comment prédire l'avenir";
let preRegex = /pré./;
preRegex.test(presidentStr);
preRegex.test(predireStr);
```

Ces deux appels à `test` renverront `true`.

# --instructions--

Complétez la regex `unRegex` pour qu'elle corresponde aux chaînes de caractères `run`, `sun`, `fun`, `pun`, `nun`, et `bun`. Votre regex doit utiliser le caractère générique.

# --hints--

Vous devez utiliser la méthode `.test()`.

```js
assert(code.match(/\.test\(.*\)/));
```

Vous devez utiliser le caractère générique dans votre regex `unRegex`.

```js
assert(/\./.test(unRegex.source));
```

Votre regex `unRegex` devrait correspondre à `run` dans la chaîne `Let us go on a run.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

Votre regex `unRegex` devrait correspondre à `sun` dans la chaîne de caractères `The sun is out today.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

Votre regex `unRegex` devrait correspondre à `fun` dans la chaîne `Coding is a lot of fun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

Votre regex `unRegex` devrait correspondre à `pun` dans la chaîne `Seven days without a pun makes one weak`.

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

Votre regex `unRegex` devrait correspondre à `nun` dans la chaîne `One takes a vow to be a nun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

Votre regex `unRegex` devrait correspondre à `bun` dans la chaîne `She got fired from the hot dog stand for putting her hair in a bun.`

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

Votre regex `unRegex` ne doit pas correspondre à la chaîne `There is a bug in my code.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

Votre regex `unRegex` ne doit pas correspondre à la chaîne `Catch me if you can.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('Catch me if you can.'));
```

# --seed--

## --seed-contents--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Modifiez cette ligne
let result = unRegex.test(exampleStr);
```

# --solutions--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Modifiez cette ligne
let result = unRegex.test(exampleStr);
```
