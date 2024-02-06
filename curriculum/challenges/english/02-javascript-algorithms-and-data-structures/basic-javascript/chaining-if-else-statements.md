---
id: 56533eb9ac21ba0edf2244dc
title: Enchaînement d'instructions If Else
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

Les instructions `if/else` peuvent être enchaînées pour obtenir une logique complexe. Voici le pseudo-code de plusieurs instructions `if` / `else if` enchaînées :

```js
if (condition1) {
  instruction1
} else if (condition2) {
  instruction2
} else if (condition3) {
  instruction3
. . .
} else {
  instructionN
}
```

# --instructions--

Rédigez des instructions `if` et `else if` enchaînées pour remplir les conditions suivantes :

`num < 5` - retourne `Tiny`  
`num < 10` - retourne `Small`  
`num < 15` - retourne `Medium`  
`num < 20` - retourne `Large`  
`num >= 20` - retourne `Huge`

# --hints--

Vous devez avoir au moins quatre instructions `else`.

```js
assert(code.match(/else/g).length > 3);
```

Vous devez avoir au moins quatre instructions `if`.

```js
assert(code.match(/if/g).length > 3);
```

Vous devez avoir au moins une déclaration `return`.

```js
assert(code.match(/return/g).length >= 1);
```

`testSize(0)` doit retourner la chaîne `Tiny`

```js
assert(testSize(0) === 'Tiny');
```

`testSize(4)` doit retourner la chaîne `Tiny`

```js
assert(testSize(4) === 'Tiny');
```

`testSize(5)` doit retourner la chaîne `Small`

```js
assert(testSize(5) === 'Small');
```

`testSize(8)` doit retourner la chaîne `Small`

```js
assert(testSize(8) === 'Small');
```

`testSize(10)` doit retourner la chaîne `Medium`

```js
assert(testSize(10) === 'Medium');
```

`testSize(14)` doit retourner la chaîne `Medium`

```js
assert(testSize(14) === 'Medium');
```

`testSize(15)` doit retourner la chaîne `Large`

```js
assert(testSize(15) === 'Large');
```

`testSize(17)` doit retourner la chaîne `Large`

```js
assert(testSize(17) === 'Large');
```

`testSize(20)` doit retourner la chaîne `Huge`

```js
assert(testSize(20) === 'Huge');
```

`testSize(25)` doit retourner la chaîne `Huge`

```js
assert(testSize(25) === 'Huge');
```

# --seed--

## --seed-contents--

```js
function testSize(num) {
  // Ne changez que le code en dessous de cette ligne


  return "Change Me";
  // Ne changez que le code au-dessus de cette ligne
}

testSize(7);
```

# --solutions--

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
```
