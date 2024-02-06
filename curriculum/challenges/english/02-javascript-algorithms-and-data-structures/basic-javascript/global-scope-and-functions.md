---
id: 56533eb9ac21ba0edf2244be
title: Portée et fonctions globales
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

En JavaScript, la <dfn>portée</dfn> fait référence à la visibilité des variables. Les variables définies en dehors d'une fonction ont une portée <dfn>globale</dfn>. Cela signifie qu'elles peuvent être vues partout dans votre code JavaScript.

Les variables déclarées sans les mots clés `let` ou `const` sont automatiquement créées dans la portée `global`. Cela peut créer des conséquences inattendues ailleurs dans votre code ou lors de la réexécution d'une fonction. Vous devez toujours déclarer vos variables avec `let` ou `const`.

# --instructions--

En utilisant `let` ou `const`, déclarez une variable globale nommée `myGlobal` en dehors de toute fonction. Initialisez-la avec la valeur `10`.

À l'intérieur de la fonction `fun1`, affectez la valeur `5` à la variable globale `myGlobal` ***sans*** utiliser les mots-clés `let` ou `const`.

# --hints--

`myGlobal` doit être défini

```js
assert(typeof myGlobal != 'undefined');
```

La valeur de `myGlobal` devrait être de `10`.

```js
assert(myGlobal === 10);
```

`myGlobal` doit être déclaré en utilisant les mots-clés `let` ou `const`.

```js
assert(/(let|const)\s+myGlobal/.test(code));
```

`oopsGlobal` doit être une variable globale et avoir une valeur de `5`.

```js
assert(typeof oopsGlobal != 'undefined' && oopsGlobal === 5);
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput = message;
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
var oopsGlobal;
capture();
```

## --after-user-code--

```js
fun1();
fun2();
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

## --seed-contents--

```js
// Déclarer la variable myGlobal sous cette ligne


function fun1() {
  // Affecter 5 à oopsGlobal Ici

}

// Ne changez que le code au-dessus de cette ligne

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

# --solutions--

```js
const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
