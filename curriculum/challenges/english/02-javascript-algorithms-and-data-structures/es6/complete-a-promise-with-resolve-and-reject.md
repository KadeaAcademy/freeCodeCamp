---
id: 5cdafbc32913098997531680
title: Compléter une promesse avec resolve et reject
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

Une promesse a trois états : `pending`, `fulfilled`, et `rejected`. La promesse que vous avez créée dans le dernier défi est à jamais bloquée dans l'état `pending` parce que vous n'avez pas ajouté un moyen de compléter la promesse. Les paramètres `resolve` et `reject` donnés à l'argument de la promesse sont utilisés à cet effet. `resolve` est utilisé quand vous voulez que votre promesse réussisse, et `reject` est utilisé quand vous voulez qu'elle échoue. Ce sont des méthodes qui prennent un argument, comme on le voit ci-dessous.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

L'exemple ci-dessus utilise des chaînes de caractères comme argument de ces fonctions, mais il peut s'agir de n'importe quoi. Souvent, il s'agit d'un objet dont vous utilisez les données pour les mettre sur votre site Web ou ailleurs.

# --instructions--

Faites en sorte que la promesse gère les succès et les échecs. Si `responseFromServer` est `true`, appelez la méthode `resolve` pour terminer la promesse avec succès. Passez à `resolve` une chaîne avec la valeur `We got the data`. Si `responseFromServer` est `false`, utilisez la méthode `reject` à la place et passez-lui la chaîne : `Data not received`.

# --hints--

`resolve` doit être appelé avec la chaîne attendue lorsque la condition `if` est `true`.

```js
assert(
  code.match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

`reject` doit être appelé avec la chaîne attendue lorsque la condition `if` est `false`.

```js
assert(
  code.match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g)
);
```

# --seed--

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer représente une réponse provenant d'un serveur
  let responseFromServer;
    
  if(responseFromServer) {
    // Modifiez cette ligne
  } else {  
    // Modifiez cette ligne
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```
