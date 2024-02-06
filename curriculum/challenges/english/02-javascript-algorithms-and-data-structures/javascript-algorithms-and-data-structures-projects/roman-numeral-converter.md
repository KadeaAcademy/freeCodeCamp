---
id: a7f4d8f2483413a6ce226cac
title: Convertisseur de chiffres romains
challengeType: 5
forumTopicId: 16044
dashedName: roman-numeral-converter
---

# --description--

Convertir le nombre donné en chiffre romain.

Toutes les réponses en [chiffres romains](http://www.mathsisfun.com/roman-numerals.html) doivent être fournies en majuscules.

# --hints--

`convertToRoman(2)` devrait retourner la chaîne `II`.

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` devrait retourner la chaîne `III`.

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` devrait retourner la chaîne `IV`.

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` devrait retourner la chaîne `V`.

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` devrait retourner la chaîne `IX`.

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` devrait retourner la chaîne `XII`.

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` devrait retourner la chaîne `XVI`.

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` devrait retourner la chaîne `XXIX`.

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` devrait retourner la chaîne `XLIV`.

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` devrait retourner la chaîne `XLV`.

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` devrait retourner la chaîne `LXVIII`

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` devrait retourner la chaîne `LXXXIII`

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` devrait retourner la chaîne `XCVII`

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` devrait retourner la chaîne `XCIX`

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` devrait retourner la chaîne `CD`

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` devrait retourner la chaîne `D`

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` devrait retourner la chaîne `DI`

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` devrait retourner la chaîne `DCXLIX`

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` devrait retourner la chaîne `DCCXCVIII`

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` devrait retourner la chaîne `DCCCXCI`

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` devrait retourner la chaîne `M`

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` devrait retourner la chaîne `MIV`

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` devrait retourner la chaîne `MVI`

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` devrait retourner la chaîne `MXXIII`

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` devrait retourner la chaîne `MMXIV`

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` devrait retourner la chaîne `MMMCMXCIX`

```js
assert.deepEqual(convertToRoman(3999), 'MMMCMXCIX');
```

# --seed--

## --seed-contents--

```js
function convertToRoman(num) {
 return num;
}

convertToRoman(36);
```

# --solutions--

```js
function convertToRoman(num) {
  var ref = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
  var res = [];
  ref.forEach(function(p) {
    while (num >= p[1]) {
      res.push(p[0]);
      num -= p[1];
    }
  });
  return res.join('');
}
```
