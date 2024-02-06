---
id: 587d7b8e367417b2b2512b5c
title: Comprendre la terminologie de la programmation fonctionnelle
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

L'équipe Kadea a eu un changement d'humeur et veut maintenant deux types de thé : le thé vert et le thé noir. Fait général : les sautes d'humeur des clients sont assez courantes.

Avec cette information, nous allons devoir revisiter la fonction `getTea` du dernier défi pour gérer les différentes demandes de thé. Nous pouvons modifier `getTea` pour qu'elle accepte une fonction comme paramètre afin de pouvoir changer le type de thé qu'elle prépare. Cela rend `getTea` plus flexible, et donne au programmeur plus de contrôle lorsque les demandes des clients changent.

Mais tout d'abord, abordons un peu de terminologie fonctionnelle :

Les <dfn>Callbacks</dfn> sont des fonctions qui sont glissées ou passées dans une autre fonction pour décider de l'invocation de cette fonction. Vous avez peut-être déjà vu ces fonctions passées à d'autres méthodes, par exemple dans `filter`, la fonction de rappel indique à JavaScript les critères de filtrage d'un tableau.

Les fonctions qui peuvent être assignées à une variable, passées à une autre fonction ou retournées par une autre fonction comme n'importe quelle autre valeur normale, sont appelées fonctions de première classe. En JavaScript, toutes les fonctions fonctions de première classe.

Les fonctions qui prennent une fonction comme argument ou renvoient une fonction comme valeur de retour sont appelées <dfn>fonctions d'ordre supérieur</dfn>.

Lorsque des fonctions sont transmises à une autre fonction ou renvoyées par celle-ci, ces fonctions transmises ou renvoyées peuvent être appelées lambda.

# --instructions--

Préparez 27 tasses de thé vert et 13 tasses de thé noir et stockez-les dans les variables `tea4GreenTeamKadea` et `tea4BlackTeamKadea`, respectivement. Notez que la fonction `getTea` a été modifiée pour prendre une fonction comme premier argument.

Note: La donnée (le nombre de tasses de thé) est fournie comme dernier argument. Nous en reparlerons dans les leçons suivantes.

# --hints--

La variable `tea4GreenTeamKadea` doit contenir 27 tasses de thé vert pour l'équipe.

```js
assert(tea4GreenTeamKadea.length === 27);
```

La variable `tea4GreenTeamKadea` doit contenir des tasses de thé vert (green tea).

```js
assert(tea4GreenTeamKadea[0] === 'greenTea');
```

La variable `tea4BlackTeamKadea` doit contenir 13 tasses de thé noir.

```js
assert(tea4BlackTeamKadea.length === 13);
```

La variable `tea4BlackTeamKadea` doit contenir des tasses de thé noir.

```js
assert(tea4BlackTeamKadea[0] === 'blackTea');
```

# --seed--

## --seed-contents--

```js
// Fonction qui renvoie une chaîne de caractères représentant une tasse de thé vert
const prepareGreenTea = () => 'greenTea';

// Fonction qui renvoie une chaîne de caractères représentant une tasse de thé noir
const prepareBlackTea = () => 'blackTea';

/*
Étant donné une fonction (représentant le type de thé) et le nombre de tasses nécessaires, la fonction suivante renvoie un tableau de chaînes (chacune représentant une tasse d'un type de thé spécifique).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Ne modifiez que le code situé en dessous de cette ligne
const tea4GreenTeamKadea = null;
const tea4BlackTeamKadea = null;
// Ne modifiez que le code au-dessus de cette ligne

console.log(
  tea4GreenTeamKadea,
  tea4BlackTeamKadea
);
```

# --solutions--

```js
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4BlackTeamKadea = getTea(prepareBlackTea, 13);
const tea4GreenTeamKadea = getTea(prepareGreenTea, 27);
```
