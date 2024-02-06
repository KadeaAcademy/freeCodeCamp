---
id: 56533eb9ac21ba0edf2244db
title: Introduction des instructions Else If
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJ2hm'
forumTopicId: 18206
dashedName: introducing-else-if-statements
---

# --description--

Si plusieurs conditions doivent être prises en compte, vous pouvez enchaîner les instructions `if` avec des instructions `else if`.

```js
if (num > 15) {
  return "Plus grand que 15";
} else if (num < 5) {
  return "Plus petit que 5";
} else {
  return "Entre 5 et 15";
}
```

# --instructions--

Convertissez la logique pour utiliser les instructions `else if`.

# --hints--

Vous devez avoir au moins deux instructions `else`

```js
assert(code.match(/else/g).length > 1);
```

Vous devez avoir au moins deux instructions `if`.

```js
assert(code.match(/if/g).length > 1);
```

Vous devez avoir des accolades fermantes et ouvrantes pour chaque bloc de code `if else`.

```js
assert(
  code.match(
    /if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s+if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/
  )
);
```

`testElseIf(0)` devrait retourner la chaîne `Plus petit que 5`.

```js
assert(testElseIf(0) === 'Plus petit que 5');
```

`testElseIf(5)` devrait retourner la chaîne `Entre 5 et 10`

```js
assert(testElseIf(5) === 'Entre 5 et 10');
```

`testElseIf(7)` devrait retourner la chaîne `Entre 5 et 10`

```js
assert(testElseIf(7) === 'Entre 5 et 10');
```

`testElseIf(10)` devrait retourner la chaîne `Entre 5 et 10`

```js
assert(testElseIf(10) === 'Entre 5 et 10');
```

`testElseIf(12)` devrait retourner la chaîne `Plus grand que 10`

```js
assert(testElseIf(12) === 'Plus grand que 10');
```

# --seed--

## --seed-contents--

```js
function testElseIf(val) {
  if (val > 10) {
    return "Plus grand que 10";
  }

  if (val < 5) {
    return "Plus petit que 5";
  }

  return "Entre 5 et 10";
}

testElseIf(7);
```

# --solutions--

```js
function testElseIf(val) {
  if(val > 10) {
    return "Plus grand que 10";
  } else if(val < 5) {
    return "Plus petit que 5";
  } else {
    return "Entre 5 et 10";
  }
}
```
