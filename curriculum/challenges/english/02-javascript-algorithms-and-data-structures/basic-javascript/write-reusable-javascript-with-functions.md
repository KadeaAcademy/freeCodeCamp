---
id: 56bbb991ad1ed5201cd392cf
title: Écrire du JavaScript réutilisable avec des fonctions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
dashedName: write-reusable-javascript-with-functions
---

# --description--

En JavaScript, nous pouvons diviser notre code en parties réutilisables appelées <dfn>fonctions</dfn>.

Voici un exemple de fonction :

```js
function functionName() {
  console.log("Hello World");
}
```

Vous pouvez appeler ou <dfn>invoquer</dfn> cette fonction en utilisant son nom suivi de parenthèses, comme ceci : `functionName();` Chaque fois que la fonction est appelée, elle imprimera le message `Hello World` sur la console dev. Tout le code entre les accolades sera exécuté à chaque fois que la fonction sera appelée.

# --instructions--

<ol>
  <li>
    Créez une fonction appelée  <code>reusableFunction</code> qui imprime la chaîne <code>Hi World</code> sur la console dev.
  </li>
  <li>
    Appelez la fonction.
  </li>
</ol>

# --hints--

`reusableFunction` devrait être une fonction.

```js
assert(typeof reusableFunction === 'function');
```

Si `reusableFunction` est appelée, elle devrait afficher la chaîne de caractères `Hi World` sur la console.

```js
assert(testConsole());
```

Vous devez appeler `reusableFunction` une fois qu'elle est définie.

```js
const functionStr = reusableFunction && __helpers.removeWhiteSpace(reusableFunction.toString());
const codeWithoutFunction = __helpers.removeWhiteSpace(code).replace(/reusableFunction\(\)\{/g, '');
assert(/reusableFunction\(\)/.test(codeWithoutFunction));
```

# --seed--

## --after-user-code--

```js

function testConsole() {
  var logOutput = "";
  var originalConsole = console;
  var nativeLog = console.log;
  var hiWorldWasLogged = false;
  console.log = function (message) {
    if(message === 'Hi World')  {
      console.warn(message)
      hiWorldWasLogged = true;
    }
    if(message && message.trim) logOutput = message.trim();
    if(nativeLog.apply) {
      nativeLog.apply(originalConsole, arguments);
    } else {
      var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
      nativeLog(nativeMsg);
    }
  };
  reusableFunction();
  console.log = nativeLog;
  return hiWorldWasLogged;
}

```

## --seed-contents--

```js

```

# --solutions--

```js
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
```
