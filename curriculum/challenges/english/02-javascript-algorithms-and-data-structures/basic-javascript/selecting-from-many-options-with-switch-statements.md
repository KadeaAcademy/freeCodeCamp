---
id: 56533eb9ac21ba0edf2244dd
title: Sélection entre plusieurs options avec les instructions Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

Si vous avez plusieurs options parmi lesquelles choisir, utilisez une instruction switch. Une instruction `switch` teste une valeur et peut avoir plusieurs instructions case qui définissent diverses valeurs possibles. Les instructions sont exécutées à partir de la première valeur `case` trouvée jusqu'à ce qu'un `break` soit rencontré.

Voici un exemple d'instruction `switch` :

```js
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

Les valeurs `case` sont testées avec une égalité stricte (`===`). L'élément `break` indique à JavaScript d'arrêter l'exécution des instructions. Si le `break` est omis, l'instruction suivante sera exécutée.

# --instructions--

Écrivez une instruction switch qui teste `val` et définit `answer` pour les conditions suivantes :
 
`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)` devrait avoir la chaîne `alpha` comme valeur.

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` devrait avoir la chaîne `beta` comme valeur.

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` devrait avoir la chaîne `gamma` comme valeur.

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` devrait avoir la chaîne `delta` comme valeur.

```js
assert(caseInSwitch(4) === 'delta');
```

Vous ne devez pas utiliser d'instructions `if` ou `else`.

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Vous devez avoir au moins 3 déclarations `break`

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function caseInSwitch(val) {
  let answer = "";
  // Ne changez que le code en dessous de cette ligne



  // Ne changez que le code au-dessus de cette ligne
  return answer;
}

caseInSwitch(1);
```

# --solutions--

```js
function caseInSwitch(val) {
  let answer = "";

  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
```
