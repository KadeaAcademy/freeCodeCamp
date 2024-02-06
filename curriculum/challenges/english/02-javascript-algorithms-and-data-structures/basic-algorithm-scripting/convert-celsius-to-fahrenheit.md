---
id: 56533eb9ac21ba0edf2244b3
title: Convertir les Celsius en Fahrenheit
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

L'algorithme de conversion de Celsius en Fahrenheit est la température en Celsius multipliée par `9/5`, plus `32`.

On vous donne une variable `celsius` représentant une température en Celsius. Utilisez la variable `fahrenheit` déjà définie et attribuez-lui la température Fahrenheit équivalente à la température Celsius donnée. Utilisez l'algorithme mentionné ci-dessus pour vous aider à convertir la température Celsius en Fahrenheit.
# --hints--

`convertToF(0)` doit retourner un nombre

```js
assert(typeof convertToF(0) === 'number');
```

`convertToF(-30)` doit retourner la valeur `-22`

```js
assert(convertToF(-30) === -22);
```

`convertToF(-10)` doit retourner la valeur `14`

```js
assert(convertToF(-10) === 14);
```

`convertToF(0)` doit retourner la valeur `32`

```js
assert(convertToF(0) === 32);
```

`convertToF(20)` doit retourner la valeur `68`

```js
assert(convertToF(20) === 68);
```

`convertToF(30)` doit retourner la valeur `86`

```js
assert(convertToF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);
```

# --solutions--

```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertToF(30);
```
