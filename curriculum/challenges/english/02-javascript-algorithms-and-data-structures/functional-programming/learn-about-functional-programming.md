---
id: 587d7b8d367417b2b2512b5b
title: Apprendre la programmation fonctionnelle
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

La programmation fonctionnelle est un style de programmation dans lequel les solutions sont des fonctions simples et isolées, sans effets secondaires en dehors de la portée de la fonction : `ENTRÉE -> PROCESSUS -> SORTIE`

La programmation fonctionnelle, ça concerne.. :

1) Fonctions isolées - il n'y a pas de dépendance à l'égard de l'état du programme, ce qui inclut les variables globales susceptibles d'être modifiées.

2) Fonctions pures - la même entrée donne toujours la même sortie

3) Fonctions avec effets secondaires limités - tout changement, ou mutation, de l'état du programme en dehors de la fonction est soigneusement contrôlé.

# --instructions--

Les membres de Kadea aiment le thé.

Dans l'éditeur de code, les fonctions `prepareTea` et `getTea` sont déjà définies pour vous. Appelez la fonction `getTea` pour obtenir 40 tasses de thé pour l'équipe, et stockez-les dans la variable `tea4TeamKadea`.

# --hints--

La variable `tea4TeamKadea` doit contenir 40 tasses de thé pour l'équipe.

```js
assert(tea4TeamKadea.length === 40);
```

La variable `tea4TeamKadea` doit contenir des tasses de thé vert (green tea).

```js
assert(tea4TeamKadea[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// Fonction qui renvoie une chaîne de caractères représentant une tasse de thé vert
const prepareTea = () => 'greenTea';

/*
Étant donné une fonction (représentant le type de thé) et le nombre de tasses nécessaires, la fonction suivante renvoie un tableau de chaînes de caractères (chacune représentant une tasse d'un type de thé spécifique).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Ne modifiez que le code situé en dessous de cette ligne
const tea4TeamKadea = null;
// Ne modifiez que le code au-dessus de cette ligne
```

# --solutions--

```js
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];
  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamKadea = getTea(40); 
```
