---
id: 56533eb9ac21ba0edf2244bd
title: Passer des valeurs aux fonctions avec des arguments
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

<dfn>Les paramètres</dfn> sont des variables qui servent de caractères de substitution pour les valeurs qui doivent être entrées dans une fonction lorsqu'elle est appelée. Lorsqu'une fonction est définie, elle est généralement définie avec un ou plusieurs paramètres. Les valeurs réelles qui sont entrées (ou <dfn>"passées"</dfn>) dans une fonction lorsqu'elle est appelée sont appelées <dfn>arguments</dfn>.

Voici une fonction avec deux paramètres, `param1` et `param2` :

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Nous pouvons alors appeler `testFun` comme ceci : `testFun("Hello", "World");`. Nous avons passé deux arguments de type chaîne, `Hello` et `World`. Dans la fonction, `param1` sera égal à la chaîne `Hello` et `param2` sera égal à la chaîne `World`. Notez que vous pouvez appeler `testFun` à nouveau avec des arguments différents et les paramètres prendront la valeur des nouveaux arguments.

# --instructions--

<ol><li>Créez une fonction appelée <code>functionWithArgs</code> qui accepte deux arguments et affiche leur somme dans la console dev.</li><li>Invoquez la fonction avec des nombres comme arguments</li></ol>

# --hints--

`functionWithArgs` doit être une fonction.

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` devrait afficher `3`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)` devrait afficher `16`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

Vous devez appeler `functionWithArgs` avec deux chiffres après l'avoir défini.

```js
assert(
  /functionWithArgs\([-+]?\d*\.?\d*,[-+]?\d*\.?\d*\)/.test(
    code.replace(/\s/g, '')
  )
);
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        if(message) logOutput = JSON.stringify(message).trim();
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = originalConsole.log;
}

capture();
```

## --after-user-code--

```js
uncapture();

if (typeof functionWithArgs !== "function") { 
  (function() { return "functionWithArgs is not defined"; })();
} else {
  (function() { return logOutput || "console.log never called"; })();
}
```

## --seed-contents--

```js

```

# --solutions--

```js
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);
```
