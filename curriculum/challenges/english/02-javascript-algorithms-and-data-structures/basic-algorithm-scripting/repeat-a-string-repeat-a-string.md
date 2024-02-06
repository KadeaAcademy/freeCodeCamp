---
id: afcc8d540bea9ea2669306b6
title: Répéter une chaîne Répéter une chaîne
challengeType: 5
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

Répète une chaîne donnée `str` (premier argument) pour `num` fois (deuxième argument). Retournez une chaîne vide si `num` n'est pas un nombre positif. Pour les besoins de ce défi, n'utilisez *pas* la méthode intégrée `.repeat()`.

# --hints--

`repeatStringNumTimes("*", 3)` doit retourner la chaîne `***`.

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` doit retourner la chaîne `abcabcabc`.

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` doit retourner la chaîne `abcabcabcabc`.

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` doit retourner la chaîne `abc`.

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` doit retourner la chaîne `********`.

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

`repeatStringNumTimes("abc", -2)` doit retourner une chaîne vide (`""`).

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

The built-in `repeat()` ne doit pas être utilisée.

```js
assert(!/\.repeat/g.test(code));
```

`repeatStringNumTimes("abc", 0)` doit retourner `""`.

```js
assert(repeatStringNumTimes('abc', 0) === '');
```

# --seed--

## --seed-contents--

```js
function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);
```

# --solutions--

```js
function repeatStringNumTimes(str, num) {
  if (num < 1) return '';
  return num === 1 ? str : str + repeatStringNumTimes(str, num-1);
}

repeatStringNumTimes("abc", 3);
```
