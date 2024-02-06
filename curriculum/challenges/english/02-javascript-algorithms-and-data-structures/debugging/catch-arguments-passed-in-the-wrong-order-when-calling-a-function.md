---
id: 587d7b85367417b2b2512b3a
title: Attraper les arguments passés dans le mauvais ordre lors de l'appel d'une fonction
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

Pour poursuivre la discussion sur l'appel de fonctions, le prochain bogue à surveiller est celui des arguments d'une fonction fournis dans un ordre incorrect. Si les arguments sont de types différents, comme dans le cas d'une fonction qui attend un tableau et un entier, une erreur d'exécution sera probablement générée. Si les arguments sont du même type (tous des entiers, par exemple), la logique du code n'aura pas de sens. Veillez à fournir tous les arguments requis, dans le bon ordre, pour éviter ces problèmes.

# --instructions--

La fonction `raiseToPower` élève une base à un exposant. Malheureusement, elle n'est pas appelée correctement - corrigez le code pour que la valeur de `power` soit le 8 attendu.

# --hints--

Votre code devrait corriger la variable `power` pour qu'elle soit égale à 2 élevé à la 3e puissance, et non à 3 élevé à la 2e puissance.

```js
assert(power == 8);
```

Votre code doit utiliser l'ordre correct des arguments pour l'appel de la fonction `raiseToPower`.

```js
assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));
```

# --seed--

## --seed-contents--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

# --solutions--

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```
