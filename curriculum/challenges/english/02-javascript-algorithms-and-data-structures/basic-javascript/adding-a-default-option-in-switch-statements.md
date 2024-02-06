---
id: 56533eb9ac21ba0edf2244de
title: Ajouter une option par défaut dans les instructions Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

Dans une instruction `switch`, il se peut que vous ne puissiez pas spécifier toutes les valeurs possibles comme instructions `case`. À la place, vous pouvez ajouter l'instruction `default` qui sera exécutée si aucune instruction `case` correspondante n'est trouvée. Considérez-la comme la dernière instruction `else` dans une chaîne `if/else`.

Une instruction `default` devrait être le dernier cas.

```js
switch (num) {
  case valeur1:
    Instruction1;
    break;
  case valeur2:
    Instruction2;
    break;
...
  default:
    InstructionParDefaut;
    break;
}
```

# --instructions--

Rédigez une instruction switch pour spécifier `answer` pour les conditions suivantes : 

`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` doit retourner la chaine `apple`

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` doit retourner la chaine `bird`

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` doit retourner la chaine `cat`

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` doit retourner la chaine `stuff`

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` doit retourner la chaine `stuff`

```js
assert(switchOfStuff(4) === 'stuff');
```

Vous ne devez pas utiliser d'instructions `if` ou `else`.

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Vous devez utiliser une instruction `default`.

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

Vous devez avoir au moins 3 déclarations `break`.

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function switchOfStuff(val) {
  let answer = "";
  // Ne changez que le code en dessous de cette ligne



  // Ne changez que le code au-dessus de cette ligne
  return answer;
}

switchOfStuff(1);
```

# --solutions--

```js
function switchOfStuff(val) {
  let answer = "";

  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
```
