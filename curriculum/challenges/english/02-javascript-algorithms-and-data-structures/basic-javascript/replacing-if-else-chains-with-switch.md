---
id: 56533eb9ac21ba0edf2244e0
title: Remplacer les chaînes "If Else" par "Switch".
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
dashedName: replacing-if-else-chains-with-switch
---

# --description--

Si vous avez de nombreuses options parmi lesquelles choisir, une instruction `switch` peut être plus facile à écrire que plusieurs instructions `if`/`else if` enchaînées. Les suivantes :

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

peuvent être remplacées par :

```js
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

# --instructions--

Changez les instructions enchaînées `if` et `else if` en une instruction `switch`.

# --hints--

Vous ne devez pas utiliser d'instructions `else` dans l'éditeur.

```js
assert(!/else/g.test(code));
```

Vous ne devez pas utiliser d'instructions `if` dans l'éditeur.

```js
assert(!/if/g.test(code));
```

Vous devez avoir au moins quatre déclarations `break`.

```js
assert(code.match(/break/g).length >= 4);
```

`chainToSwitch("bob")` devrait être la chaîne `Marley`.

```js
assert(chainToSwitch('bob') === 'Marley');
```

`chainToSwitch(42)` devrait être la chaîne `La Réponse`.

```js
assert(chainToSwitch(42) === 'La Réponse');
```

`chainToSwitch(1)` devrait être la chaîne `Il n'y a pas de #1`.

```js
assert(chainToSwitch(1) === "Il n'y a pas de #1");
```

`chainToSwitch(99)` devrait être la chaîne `Tu m'as raté de peu !`

```js
assert(chainToSwitch(99) === "Tu m'as raté de peu !");
```

`chainToSwitch(7)` devrait être la chaîne `Mangé neuf`

```js
assert(chainToSwitch(7) === 'Mangé neuf');
```

`chainToSwitch("John")` devrait être `""` (chaîne vide)

```js
assert(chainToSwitch('John') === '');
```

`chainToSwitch(156)` devrait être `""` (chaîne vide)

```js
assert(chainToSwitch(156) === '');
```

# --seed--

## --seed-contents--

```js
function chainToSwitch(val) {
  let answer = "";
  // Ne changez que le code en dessous de cette ligne

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "La Réponse";
  } else if (val === 1) {
    answer = "Il n'y a pas de #1";
  } else if (val === 99) {
    answer = "Tu m'as raté de peu !";
  } else if (val === 7) {
    answer = "Mangé neuf";
  }

  // Ne changez que le code au-dessus de cette ligne
  return answer;
}

chainToSwitch(7);
```

# --solutions--

```js
function chainToSwitch(val) {
  let answer = "";

  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "La Réponse";
      break;
    case 1:
      answer = "Il n'y a pas de #1";
      break;
    case 99:
      answer = "Tu m'as raté de peu !";
      break;
    case 7:
      answer = "Mangé neuf";
  }
  return answer;
}
```
