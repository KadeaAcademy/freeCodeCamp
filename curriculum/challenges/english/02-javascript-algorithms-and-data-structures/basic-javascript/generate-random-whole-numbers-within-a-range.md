---
id: cf1111c1c12feddfaeb2bdef
title: Générer des nombres entiers aléatoires dans une plage de valeurs
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

Au lieu de générer un nombre entier aléatoire entre zéro et un nombre donné comme nous l'avons fait auparavant, nous pouvons générer un nombre entier aléatoire qui se situe dans un intervalle de deux nombres spécifiques.

Pour ce faire, nous allons définir un nombre minimum `min` et un nombre maximum `max`.

Voici la formule que nous allons utiliser. Prenez un moment pour la lire et essayez de comprendre ce que fait ce code :

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Créez une fonction appelée `randomRange` qui prend un intervalle `myMin` et `myMax` et retourne un nombre entier aléatoire supérieur ou égal à `myMin`, et inférieur ou égal à `myMax`, inclus.

# --hints--

Le plus petit nombre aléatoire qui peut être généré par `randomRange` doit être égal à votre nombre minimum, `myMin`.

```js
assert(calcMin === 5);
```

Le nombre aléatoire le plus élevé qui peut être généré par `randomRange` doit être égal à votre nombre maximum, `myMax`.

```js
assert(calcMax === 15);
```

Le nombre aléatoire généré par `randomRange` doit être un entier, et non un décimal.

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` devrait utiliser à la fois `myMax` et `myMin`, et retourner un nombre aléatoire dans votre gamme.

```js
assert(
  (function () {
    if (
      code.match(/myMax/g).length > 1 &&
      code.match(/myMin/g).length > 2 &&
      code.match(/Math.floor/g) &&
      code.match(/Math.random/g)
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
var calcMin = 100;
var calcMax = -100;
for(var i = 0; i < 100; i++) {
  var result = randomRange(5,15);
  calcMin = Math.min(calcMin, result);
  calcMax = Math.max(calcMax, result);
}
(function(){
  if(typeof myRandom === 'number') {
    return "myRandom = " + myRandom;
  } else {
    return "myRandom undefined";
  }
})()
```

## --seed-contents--

```js
function randomRange(myMin, myMax) {
  // Ne changez que le code en dessous de cette ligne
  return 0;
  // Ne changez que le code au-dessus de cette ligne
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```
