---
id: 5cdafbe72913098997531682
title: Gérer une promesse rejetée avec catch
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

`catch` est la méthode utilisée lorsque votre promesse a été rejetée. Elle est exécutée immédiatement après l'appel de la méthode `reject` d'une promesse. Voici la syntaxe :

```js
myPromise.catch(error => {
  
});
```

`error` est l'argument passé à la méthode `reject`.

# --instructions--

Ajoutez la méthode `catch` à votre promesse. Utilisez `error` comme paramètre de sa fonction de rappel et affichez `error` dans la console.

# --hints--

Vous devez appeler la méthode `catch` sur la promesse.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

Votre méthode `catch` doit avoir une fonction de rappel avec `error` comme paramètre.

```js
assert(errorIsParameter);
```

Vous devriez afficher le message `error` dans la console.

```js
assert(
  errorIsParameter &&
    __helpers
      .removeWhiteSpace(code)
      .match(/\.catch\(.*?error.*?console.log\(error\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const errorIsParameter = /\.catch\((function\(error\){|error|\(error\)=>)/.test(__helpers.removeWhiteSpace(code));
```

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
// responseFromServer est défini à false pour représenter une réponse infructueuse d'un serveur.
  let responseFromServer = false;
    
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

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
 // responseFromServer est défini à false pour représenter une réponse infructueuse d'un serveur.
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
```
