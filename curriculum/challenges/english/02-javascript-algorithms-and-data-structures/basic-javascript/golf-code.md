---
id: 5664820f61c48e80c9fa476c
title: Code du golf
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

Dans le jeu de [golf](https://en.wikipedia.org/wiki/Golf), chaque trou a un `par`, c'est-à-dire le nombre moyen de `coups` qu'un golfeur est censé faire afin d'envoyer la balle dans le trou pour terminer le jeu. Selon que vous êtes au-dessus ou au-dessous de `par`, vos `coups` auront un surnom différent.

Votre fonction recevra les arguments `par` et `coups`. Elle renvoie la chaîne correcte en fonction de ce tableau qui liste les coups par ordre de priorité, du haut (le plus élevé) au bas (le plus bas) :

<table class='table table-striped'><thead><tr><th>Coups</th><th>Retourne</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par` et `coups` seront toujours numériques et positifs. Nous avons ajouté un tableau de tous les noms pour votre commodité.

# --hints--

`golfScore(4, 1)` doit retourner la chaîne `Hole-in-one!`

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)` doit retourner la chaîne `Eagle`

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)` doit retourner la chaîne `Eagle`

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)` doit retourner la chaîne `Birdie`

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)` doit retourner la chaîne `Par`

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)` doit retourner la chaîne `Hole-in-one!`

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)` doit retourner la chaîne `Par`

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)` doit retourner la chaîne `Bogey`

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)` doit retourner la chaîne `Double Bogey`

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)` doit retourner la chaîne `Go Home!`

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)` doit retourner la chaîne `Go Home!`

```js
assert(golfScore(5, 9) === 'Go Home!');
```

# --seed--

## --seed-contents--

```js
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, coups) {
  // Ne changez que le code en dessous de cette ligne


  return "Change Me";
  // Ne changez que le code au-dessus de cette ligne
}

golfScore(5, 4);
```

# --solutions--

```js
function golfScore(par, coups) {
  if (coups === 1) {
    return "Hole-in-one!";
  }

  if (coups <= par - 2) {
    return "Eagle";
  }

  if (coups === par - 1) {
    return "Birdie";
  }

  if (coups === par) {
    return "Par";
  }

  if (coups === par + 1) {
    return "Bogey";
  }

  if(coups === par + 2) {
    return "Double Bogey";
  }

  return "Go Home!";
}
```
