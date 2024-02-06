---
id: 56533eb9ac21ba0edf2244da
title: Introduction des instructions Else
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
dashedName: introducing-else-statements
---

# --description--

Lorsqu'une condition d'une instruction `if` est vraie, le bloc de code qui la suit est exécuté. Qu'en est-il lorsque cette condition est fausse ? Normalement, il ne se passe rien. Avec une instruction `else`, un autre bloc de code peut être exécuté.

```js
if (num > 10) {
  return "Plus grand que 10";
} else {
  return "10 ou moins";
}
```

# --instructions--

Combinez les instructions `if` en une seule instruction `if/else`.

# --hints--

Vous ne devez avoir qu'une seule instruction `if` dans l'éditeur.

```js
assert(code.match(/if/g).length === 1);
```

Vous devez utiliser une instruction `else`.

```js
assert(/else/g.test(code));
```

`testElse(4)` devrait renvoyer la chaîne `5 ou plus petit`.

```js
assert(testElse(4) === '5 ou plus petit');
```

`testElse(5)` devrait renvoyer la chaîne `5 ou plus petit`

```js
assert(testElse(5) === '5 ou plus petit');
```

`testElse(6)` devrait renvoyer la chaîne `Plus grand que 5`

```js
assert(testElse(6) === 'Plus grand que 5');
```

`testElse(10)` devrait renvoyer la chaîne `Plus grand que 5`

```js
assert(testElse(10) === 'Plus grand que 5');
```

Vous ne devez pas modifier le code au-dessus ou au-dessous des commentaires spécifiés.

```js
assert(/let result = "";/.test(code) && /return result;/.test(code));
```

# --seed--

## --seed-contents--

```js
function testElse(val) {
  let result = "";
  // Ne changez que le code en dessous de cette ligne

  if (val > 5) {
    result = "Plus grand que 5";
  }

  if (val <= 5) {
    result = "5 ou plus petit";
  }

  // Ne changez que le code au-dessus de cette ligne
  return result;
}

testElse(4);
```

# --solutions--

```js
function testElse(val) {
  let result = "";
  if(val > 5) {
    result = "Plus grand que 5";
  } else {
    result = "5 ou plus petit";
  }
  return result;
}
```
