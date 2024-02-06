---
id: aaa48de84e1ecc7c742e1124
title: Vérificateur de palindromes
challengeType: 5
forumTopicId: 16004
dashedName: palindrome-checker
---

# --description--

Retourne `vrai` si la chaîne donnée est un palindrome. Sinon, elle renvoie `false`.

Un palindrome est un mot ou une phrase qui s'écrit de la même façon en avant et en arrière, sans tenir compte de la ponctuation, de la casse et de l'espacement.

**Note:** Vous devrez supprimer **tous les caractères non alphanumériques** (ponctuation, espaces et symboles) et tout mettre dans la même casse (minuscule ou majuscule) afin de vérifier les palindromes.

Nous passerons des chaînes avec des formats variés, comme `racecar`, `RaceCar`, et `race CAR` parmi d'autres.

Nous passerons également des chaînes avec des symboles spéciaux, comme `2A3*3a2`, `2A3 3a2`, et `2_A3*3#A2`.

# --hints--

`palindrome("eye")` devrait retourner un booléen.

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome("eye")` devrait retourner `true`.

```js
assert(palindrome('eye') === true);
```

`palindrome("_eye")` devrait retourner `true`.

```js
assert(palindrome('_eye') === true);
```

`palindrome("race car")` devrait retourner `true`.

```js
assert(palindrome('race car') === true);
```

`palindrome("not a palindrome")` devrait retourner `false`.

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome("A man, a plan, a canal. Panama")` devrait retourner `true`.

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome("never odd or even")` devrait retourner `true`.

```js
assert(palindrome('never odd or even') === true);
```

`palindrome("nope")` devrait retourner `false`.

```js
assert(palindrome('nope') === false);
```

`palindrome("almostomla")` devrait retourner `false`.

```js
assert(palindrome('almostomla') === false);
```

`palindrome("My age is 0, 0 si ega ym.")` devrait retourner `true`.

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome("1 eye for of 1 eye.")` devrait retourner `false`.

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")` devrait retourner `true`.

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome("five|\_/|four")` devrait retourner `false`.

```js
assert(palindrome('five|_/|four') === false);
```

# --seed--

## --seed-contents--

```js
function palindrome(str) {
  return true;
}

palindrome("eye");
```

# --solutions--

```js
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
```
