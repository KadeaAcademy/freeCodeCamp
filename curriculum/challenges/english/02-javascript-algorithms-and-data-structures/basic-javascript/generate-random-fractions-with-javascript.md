---
id: cf1111c1c11feddfaeb9bdef
title: Générer des fractions aléatoires avec JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJJs3'
forumTopicId: 18185
dashedName: generate-random-fractions-with-javascript
---

# --description--

Les nombres aléatoires sont utiles pour créer un comportement aléatoire.

JavaScript possède une fonction `Math.random()` qui génère un nombre décimal aléatoire entre `0` (inclusif) et `1` (exclusif). Ainsi, `Math.random()` peut retourner un `0` mais jamais un `1`.

**Note:** Comme pour [Stockage des valeurs avec l'opérateur d'affectation](/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator), tous les appels de fonction seront résolus avant l'exécution du `return`, nous pouvons donc `retourner` la valeur de la fonction `Math.random()`.

# --instructions--

Changez `randomFraction` pour retourner un nombre aléatoire au lieu de retourner `0`.

# --hints--

`randomFraction` doit renvoyer un nombre aléatoire.

```js
assert(typeof randomFraction() === 'number');
```

Le nombre retourné par `randomFraction` doit être un décimal.

```js
assert((randomFraction() + '').match(/\./g));
```

Vous devriez utiliser `Math.random` pour générer le nombre décimal aléatoire.

```js
assert(code.match(/Math\.random/g).length >= 0);
```

# --seed--

## --after-user-code--

```js
(function(){return randomFraction();})();
```

## --seed-contents--

```js
function randomFraction() {

  // Ne changez que le code en dessous de cette ligne

  return 0;

  // Ne changez que le code au-dessus de cette ligne
}
```

# --solutions--

```js
function randomFraction() {
  return Math.random();
}
```
