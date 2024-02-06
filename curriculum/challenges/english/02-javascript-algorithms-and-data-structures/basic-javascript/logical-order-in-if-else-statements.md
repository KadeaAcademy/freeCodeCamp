---
id: 5690307fddb111c6084545d7
title: Ordre logique dans les instructions If Else
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

L'ordre est important dans les instructions `if`, `else if`.

La fonction est exécutée de haut en bas, vous devez donc faire attention à l'instruction qui vient en premier.

Prenons l'exemple de ces deux fonctions.

Voici la première :

```js
function foo(x) {
  if (x < 1) {
    return "Moins d'un";
  } else if (x < 2) {
    return "Moins de deux";
  } else {
    return "Supérieur ou égal à deux";
  }
}
```

Et la deuxième change simplement l'ordre des déclarations :

```js
function bar(x) {
  if (x < 2) {
    return "Moins de deux";
  } else if (x < 1) {
    return "Moins d'un";
  } else {
    return "Supérieur ou égal à deux";
  }
}
```

Bien que ces deux fonctions soient presque identiques, si nous passons un nombre aux deux, nous obtenons des résultats différents.

```js
foo(0)
bar(0)
```

`foo(0)` renverra la chaîne `Moins d'un`, et `bar(0)` renverra la chaîne `Moins de deux`.

# --instructions--

Modifiez l'ordre de la logique dans la fonction afin qu'elle renvoie les déclarations correctes dans tous les cas.

# --hints--

`orderMyLogic(4)` devrait retourner la chaîne de caractères `Moins de 5`.

```js
assert(orderMyLogic(4) === 'Moins de 5');
```

`orderMyLogic(6)` devrait retourner la chaîne `Moins de 10`.

```js
assert(orderMyLogic(6) === 'Moins de 10');
```

`orderMyLogic(11)` devrait retourner la chaîne de caractères `Supérieur ou égal à 10`.

```js
assert(orderMyLogic(11) === 'Supérieur ou égal à 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Moins de 10";
  } else if (val < 5) {
    return "Moins de 5";
  } else {
    return "Supérieur ou égal à 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Moins de 5";
  } else if (val < 10) {
    return "Moins de 10";
  } else {
    return "Supérieur ou égal à 10";
  }
}
```
