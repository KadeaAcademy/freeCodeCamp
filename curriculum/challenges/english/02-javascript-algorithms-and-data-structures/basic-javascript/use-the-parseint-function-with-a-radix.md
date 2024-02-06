---
id: 587d7b7e367417b2b2512b22
title: Utiliser la fonction parseInt avec un radix
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
dashedName: use-the-parseint-function-with-a-radix
---

# --description--

La fonction `parseInt()` analyse une chaîne de caractères et renvoie un nombre entier. Elle prend un second argument pour le radix, qui spécifie la base du nombre dans la chaîne. Le radix peut être un nombre entier compris entre 2 et 36.

L'appel de la fonction se présente comme suit :

```js
parseInt(string, radix);
```

Et voici un exemple :

```js
const a = parseInt("11", 2);
```

La variable radix indique que `11` est dans le système binaire, ou base 2. Cet exemple convertit la chaîne `11` en un nombre entier `3`.

# --instructions--

Utilisez `parseInt()` dans la fonction `convertToInteger` pour qu'elle convertisse un nombre binaire en un nombre entier et le renvoie.

# --hints--

`convertToInteger` devrait utiliser la fonction `parseInt()`.

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("10011")` doit retourner un nombre

```js
assert(typeof convertToInteger('10011') === 'number');
```

`convertToInteger("10011")` doit retourner 19

```js
assert(convertToInteger('10011') === 19);
```

`convertToInteger("111001")` doit retourner 57

```js
assert(convertToInteger('111001') === 57);
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

convertToInteger("10011");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
```
