---
id: af2170cad53daa0770fabdea
title: Mutations
challengeType: 5
forumTopicId: 16025
dashedName: mutations
---

# --description--

Retourne `true` si la chaîne de caractères du premier élément du tableau contient toutes les lettres de la chaîne de caractères du second élément du tableau.

Par exemple, `["hello", "Hello"]`, devrait retourner `true` car toutes les lettres de la seconde chaîne sont présentes dans la première, sans tenir compte de la casse.

Les arguments `["hello", "hey"]` devraient retourner `false` parce que la chaîne `hello` ne contient pas de `y`.

Enfin, `["Alien", "line"]`, devrait retourner `vrai` car toutes les lettres de `line` sont présentes dans `Alien`.

# --hints--

`mutation(["hello", "hey"])` devrait retourner `false`.

```js
assert(mutation(['hello', 'hey']) === false);
```

`mutation(["hello", "Hello"])` devrait retourner `true`.

```js
assert(mutation(['hello', 'Hello']) === true);
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` devrait retourner `true`.

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

`mutation(["Mary", "Army"])` devrait retourner `true`.

```js
assert(mutation(['Mary', 'Army']) === true);
```

`mutation(["Mary", "Aarmy"])` devrait retourner `true`.

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

`mutation(["Alien", "line"])` devrait retourner `true`.

```js
assert(mutation(['Alien', 'line']) === true);
```

`mutation(["floor", "for"])` devrait retourner `true`.

```js
assert(mutation(['floor', 'for']) === true);
```

`mutation(["hello", "neo"])` devrait retourner `false`.

```js
assert(mutation(['hello', 'neo']) === false);
```

`mutation(["voodoo", "no"])` devrait retourner `false`.

```js
assert(mutation(['voodoo', 'no']) === false);
```

`mutation(["ate", "date"])` devrait retourner `false`.

```js
assert(mutation(['ate', 'date']) === false);
```

`mutation(["Tiger", "Zebra"])` devrait retourner `false`.

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

`mutation(["Noel", "Ole"])` devrait retourner `true`.

```js
assert(mutation(['Noel', 'Ole']) === true);
```

# --seed--

## --seed-contents--

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
```

# --solutions--

```js
function mutation(arr) {
  let hash = Object.create(null);

  arr[0].toLowerCase().split('').forEach(c => hash[c] = true);

  return !arr[1].toLowerCase().split('').filter(c => !hash[c]).length;
}

mutation(["hello", "hey"]);
```
