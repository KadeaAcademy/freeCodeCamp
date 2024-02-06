---
id: 587d7dba367417b2b2512ba8
title: Vérifier tout ou rien
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

Parfois, les motifs que vous souhaitez rechercher peuvent comporter des parties qui peuvent ou non exister. Cependant, il peut être important de les vérifier quand même.

Vous pouvez spécifier l'existence possible d'un élément avec un point d'interrogation, `?`. Cela permet de vérifier si l'élément précédent existe ou non. On peut considérer que ce symbole signifie que l'élément précédent est facultatif.

Par exemple, il existe de légères différences entre l'anglais américain et l'anglais britannique, et vous pouvez utiliser le point d'interrogation pour vérifier les deux orthographes.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

Les deux utilisations de la méthode `test` retourneraient `true`.

# --instructions--

Changez la regex `favRegex` pour qu'elle corresponde à la fois à la version anglaise américaine (`favorite`) et à la version anglaise britannique (`favourite`) du mot.

# --hints--

Votre regex doit utiliser le symbole optionnel, `?`.

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

Votre regex doit correspondre à la chaîne `favorite`.

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

Votre regex doit correspondre à la chaîne `favourite`.

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

Votre regex ne doit pas correspondre à la chaîne `fav`.

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // Modifiez cette ligne
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```
