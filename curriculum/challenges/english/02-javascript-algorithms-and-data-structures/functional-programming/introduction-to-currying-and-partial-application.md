---
id: 587d7dab367417b2b2512b70
title: Introduction au curage et à l'application partielle
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

Par arité d'une fonction, on entend le nombre d'arguments qu'elle requiert. Le curage d'une fonction consiste à convertir une fonction d'arité N en N fonctions d'arité 1.

En d'autres termes, il s'agit de restructurer une fonction de manière à ce qu'elle prenne un argument, puis renvoie une autre fonction qui prend l'argument suivant, et ainsi de suite.

Voici un exemple :

```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

`curried(1)(2)` retournerait `3`.

Ceci est utile dans votre programme si vous ne pouvez pas fournir tous les arguments d'une fonction en même temps. Vous pouvez enregistrer chaque appel de fonction dans une variable, qui contiendra la référence de la fonction retournée qui prendra le prochain argument lorsqu'il sera disponible. Voici un exemple utilisant la fonction curried de l'exemple ci-dessus :

```js
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

De même, <dfn>l'application partielle</dfn> peut être décrite comme l'application de quelques arguments à une fonction à la fois et le retour d'une autre fonction qui est appliquée à plus d'arguments. Voici un exemple :

```js
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

Remplir le corps de la fonction `add` pour qu'elle utilise le curage pour ajouter les paramètres `x`, `y`, et `z`.

# --hints--

`add(10)(20)(30)` devrait retourner `60`.

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` devrait retourner `6`.

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` devrait retourner `66`.

```js
assert(add(11)(22)(33) === 66);
```

Votre code doit inclure une déclaration finale qui renvoie `x + y + z`.

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
// Ne modifiez que le code situé en dessous de cette ligne


// Ne modifiez que le code au-dessus de cette ligne
}

add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```
