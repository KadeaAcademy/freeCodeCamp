---
id: 56533eb9ac21ba0edf2244c6
title: Faire la queue
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
dashedName: stand-in-line
---

# --description--

En informatique, la <dfn>file</dfn> est une <dfn>structure de données</dfn> abstraite dans laquelle les éléments sont conservés dans l'ordre. Les nouveaux éléments peuvent être ajoutés à l'arrière de la file et les anciens éléments sont retirés de l'avant de la file.

# --instructions--

Ecrivez une fonction `nextInLine` qui prend un tableau (`arr`) et un nombre (`item`) comme arguments.

Ajoutez le nombre à la fin du tableau, puis supprimez le premier élément du tableau.

La fonction `nextInLine` doit alors retourner l'élément qui a été supprimé. 

# --hints--

`nextInLine([], 5)` devrait retourner un nombre.

```js
assert.isNumber(nextInLine([], 5));
```

`nextInLine([], 1)` devrait retourner `1`.

```js
assert(nextInLine([], 1) === 1);
```

`nextInLine([2], 1)` devrait renvoyer `2`.

```js
assert(nextInLine([2], 1) === 2);
```

`nextInLine([5,6,7,8,9], 1)` devrait retourner `5`.

```js
assert(nextInLine([5, 6, 7, 8, 9], 1) === 5);
```

Après `nextInLine(testArr, 10)`, `testArr[4]` devrait être `10`.

```js
nextInLine(testArr, 10);
assert(testArr[4] === 10);
```

# --seed--

## --before-user-code--

```js
var logOutput = [];
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput.push(message);
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
testArr = [1,2,3,4,5];
(function() { return logOutput.join("\n");})();
```

## --seed-contents--

```js
function nextInLine(arr, item) {
  // Ne changez que le code en dessous de cette ligne
  
  return item;
  // Ne changez que le code au-dessus de cette ligne
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Code d'affichage
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```

# --solutions--

```js
const testArr = [1, 2, 3, 4, 5];

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
```
