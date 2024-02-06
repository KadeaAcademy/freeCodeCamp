---
id: 587d7daa367417b2b2512b6b
title: Diviser une chaîne de caractères en un tableau à l'aide de la méthode split
challengeType: 1
forumTopicId: 18305
dashedName: split-a-string-into-an-array-using-the-split-method
---

# --description--

La méthode `split` divise une chaîne de caractères en un tableau de chaînes. Elle prend un argument pour le délimiteur, qui peut être un caractère à utiliser pour séparer la chaîne ou une expression régulière. Par exemple, si le délimiteur est un espace, vous obtenez un tableau de mots, et si le délimiteur est une chaîne vide, vous obtenez un tableau de chaque caractère de la chaîne.

Voici deux exemples de séparation d'une chaîne par des espaces, puis d'une autre par des chiffres à l'aide d'une expression régulière :

```js
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
```

`bySpace` aurait la valeur `["Hello", "World"]` et `byDigits` aurait la valeur `["How", "are", "you", "today"]`.

Comme les chaînes de caractères sont immuables, la méthode `split` facilite le travail avec elles.

# --instructions--

Utilisez la méthode `split` à l'intérieur de la fonction `splitify` pour diviser `str` en un tableau de mots. La fonction doit retourner le tableau. Notez que les mots ne sont pas toujours séparés par des espaces, et que le tableau ne doit pas contenir de ponctuation.

# --hints--

Votre code doit utiliser la méthode `split`.

```js
assert(code.match(/\.split/g));
```

`splitify("Hello World,I-am code")` devrait retourner `["Hello", "World", "I", "am", "code"]`.

```js
assert(
  JSON.stringify(splitify('Hello World,I-am code')) ===
    JSON.stringify(['Hello', 'World', 'I', 'am', 'code'])
);
```

`splitify("Earth-is-our home")` devrait retourner `["Earth", "is", "our", "home"]`.

```js
assert(
  JSON.stringify(splitify('Earth-is-our home')) ===
    JSON.stringify(['Earth', 'is', 'our', 'home'])
);
```

`splitify("This.is.a-sentence")` devrait retourner `["This", "is", "a", "sentence"]`.

```js
assert(
  JSON.stringify(splitify('This.is.a-sentence')) ===
    JSON.stringify(['This', 'is', 'a', 'sentence'])
);
```

# --seed--

## --seed-contents--

```js
function splitify(str) {
// Ne modifiez que le code situé en dessous de cette ligne


// Ne modifiez que le code au-dessus de cette ligne
}

splitify("Hello World,I-am code");
```

# --solutions--

```js
function splitify(str) {
  return str.split(/\W/);
}
```
