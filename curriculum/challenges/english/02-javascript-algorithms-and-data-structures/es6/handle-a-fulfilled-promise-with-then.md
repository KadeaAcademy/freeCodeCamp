---
id: 5cdafbd72913098997531681
title: Gérer une promesse tenue avec ten
challengeType: 1
forumTopicId: 301203
dashedName: handle-a-fulfilled-promise-with-then
---

# --description--

Les promesses sont très utiles lorsque vous avez un processus qui prend un temps inconnu dans votre code (c'est-à-dire quelque chose d'asynchrone), souvent une requête de serveur. Lorsque vous faites une requête au serveur, elle prend un certain temps, et après qu'elle soit terminée, vous voulez généralement faire quelque chose avec la réponse du serveur. Pour ce faire, vous pouvez utiliser la méthode `then`. La méthode `then` est exécutée immédiatement après que votre promesse ait été remplie avec `resolve`. Voici un exemple :

```js
myPromise.then(result => {
  
});
```

`result` provient de l'argument donné à la méthode `resolve`.

# --instructions--

Ajoutez la méthode `then` à votre promesse. Utilisez `result` comme paramètre de sa fonction de rappel et affichez `result` dans la console.

# --hints--

Vous devez appeler la méthode `then` sur la promesse.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.then\(/g)
);
```

Votre méthode `then` doit avoir une fonction de rappel avec `result` comme paramètre.

```js
assert(resultIsParameter);
```

Vous devriez afficher `result` dans la console.

```js
assert(
  resultIsParameter &&
    __helpers
      .removeWhiteSpace(code)
      .match(/\.then\(.*?result.*?console.log\(result\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const resultIsParameter = /\.then\((function\(result\){|result|\(result\)=>)/.test(__helpers.removeWhiteSpace(code));
```

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer est défini à true pour représenter une réponse réussie d'un serveur.
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer est défini à true pour représenter une réponse réussie d'un serveur.
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
```
