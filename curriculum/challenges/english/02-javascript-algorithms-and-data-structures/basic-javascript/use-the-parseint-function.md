---
id: 587d7b7e367417b2b2512b23
title: Utilisez la fonction parseInt
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
dashedName: use-the-parseint-function
---

# --description--

La fonction `parseInt()` analyse une chaîne de caractères et renvoie un nombre entier. Voici un exemple :

```js
const a = parseInt("007");
```

La fonction ci-dessus convertit la chaîne `007` en un nombre entier `7`. Si le premier caractère de la chaîne ne peut pas être converti en un nombre, elle renvoie `NaN`.

# --instructions--

Utilisez `parseInt()` dans la fonction `convertToInteger` pour qu'elle convertisse la chaîne d'entrée `str` en un entier, et le renvoie.

# --hints--

`convertToInteger` devrait utiliser la fonction `parseInt()`.

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("56")` doit retourner un nombre

```js
assert(typeof convertToInteger('56') === 'number');
```

`convertToInteger("56")` doit retourner 56

```js
assert(convertToInteger('56') === 56);
```

`convertToInteger("77")` doit retourner 77

```js
assert(convertToInteger('77') === 77);
```

`convertToInteger("JamesBond")` doit retourner `NaN`

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("56");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str);
}
```
