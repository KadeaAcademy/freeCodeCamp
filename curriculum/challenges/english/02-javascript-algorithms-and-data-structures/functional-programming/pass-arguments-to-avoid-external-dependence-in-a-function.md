---
id: 587d7b8e367417b2b2512b5f
title: Passer des arguments pour éviter la dépendance externe dans une fonction
challengeType: 1
forumTopicId: 301234
dashedName: pass-arguments-to-avoid-external-dependence-in-a-function
---

# --description--

Le dernier défi nous a permis de nous rapprocher des principes de la programmation fonctionnelle, mais il manque encore quelque chose.

Nous n'avons pas modifié la valeur de la variable globale, mais la fonction `incrementer` ne fonctionnerait pas sans la présence de la variable globale `fixedValue`.

Un autre principe de la programmation fonctionnelle est de toujours déclarer explicitement ses dépendances. Cela signifie que si une fonction dépend de la présence d'une variable ou d'un objet, il faut passer cette variable ou cet objet directement dans la fonction en tant qu'argument.

Ce principe a plusieurs conséquences positives. La fonction est plus facile à tester, vous savez exactement quelle entrée elle prend, et elle ne dépendra de rien d'autre dans votre programme.

Cela peut vous donner plus de confiance lorsque vous modifiez, supprimez ou ajoutez du code. Vous savez ce que vous pouvez ou ne pouvez pas changer et vous pouvez voir où se trouvent les pièges potentiels.

Enfin, la fonction produira toujours la même sortie pour le même ensemble d'entrées, quelle que soit la partie du code qui l'exécute.

# --instructions--

Mettons à jour la fonction `incrementer` pour déclarer clairement ses dépendances.

Ecrivons la fonction `incrementer` de façon à ce qu'elle prenne un argument, et qu'elle retourne un résultat après avoir augmenté la valeur d'une unité.

# --hints--

Votre fonction `incrementer` ne doit pas changer la valeur de `fixedValue` (qui est `4`).

```js
assert(fixedValue === 4);
```

Votre fonction `incrementer` doit prendre un argument.

```js
assert(incrementer.length === 1);
```

Votre fonction `incrementer` doit retourner une valeur supérieure d'une unité à la valeur `fixedValue`.

```js
const __newValue = incrementer(fixedValue);
assert(__newValue === 5);
```

# --seed--

## --seed-contents--

```js
// La variable globale
let fixedValue = 4;

// Ne modifiez que le code situé en dessous de cette ligne
function incrementer() {


  // Ne modifiez que le code au-dessus de cette ligne
}
```

# --solutions--

```js
let fixedValue = 4;

function incrementer(fixedValue) {
  return fixedValue + 1;
}
```
