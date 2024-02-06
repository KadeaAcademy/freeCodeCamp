---
id: 56533eb9ac21ba0edf2244df
title: Plusieurs options identiques dans les déclarations Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

Si l'instruction `break` est omise dans la `case` d'une instruction `switch`, la ou les instructions `case` suivantes sont exécutées jusqu'à ce qu'une `break` soit rencontrée. Si vous avez plusieurs entrées avec la même sortie, vous pouvez les représenter dans une instruction `switch` comme ceci :

```js
let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, ou 3";
    break;
  case 4:
    result = "4 seul";
}
```

Les cas 1, 2 et 3 donneront tous le même résultat.

# --instructions--

Écrivez une instruction switch pour déterminer la réponse `answer` des plages suivantes :

`1-3` - `Low`  
`4-6` - `Mid`  
`7-9` - `High`

**Remarque :** Vous devrez avoir une déclaration `case` pour chaque nombre de la plage.

# --hints--

`sequentialSizes(1)` devrait retourner la chaîne `Low`.

```js
assert(sequentialSizes(1) === 'Low');
```

`sequentialSizes(2)` devrait retourner la chaîne `Low`

```js
assert(sequentialSizes(2) === 'Low');
```

`sequentialSizes(3)` devrait retourner la chaîne `Low`

```js
assert(sequentialSizes(3) === 'Low');
```

`sequentialSizes(4)` devrait retourner la chaîne `Mid`

```js
assert(sequentialSizes(4) === 'Mid');
```

`sequentialSizes(5)` devrait retourner la chaîne `Mid`

```js
assert(sequentialSizes(5) === 'Mid');
```

`sequentialSizes(6)` devrait retourner la chaîne `Mid`

```js
assert(sequentialSizes(6) === 'Mid');
```

`sequentialSizes(7)` devrait retourner la chaîne `High`

```js
assert(sequentialSizes(7) === 'High');
```

`sequentialSizes(8)` devrait retourner la chaîne `High`

```js
assert(sequentialSizes(8) === 'High');
```

`sequentialSizes(9)` devrait retourner la chaîne `High`

```js
assert(sequentialSizes(9) === 'High');
```

Vous ne devez pas utiliser d'instructions `if` ou `else`.

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Vous devriez avoir neuf déclarations `case`.

```js
assert(code.match(/case/g).length === 9);
```

# --seed--

## --seed-contents--

```js
function sequentialSizes(val) {
  let answer = "";
  // Ne changez que le code en dessous de cette ligne



  // Ne changez que le code au-dessus de cette ligne
  return answer;
}

sequentialSizes(1);
```

# --solutions--

```js
function sequentialSizes(val) {
  let answer = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```
