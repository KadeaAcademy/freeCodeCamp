---
id: 56533eb9ac21ba0edf2244bf
title: Portée locale et fonctions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

Les variables qui sont déclarées dans une fonction, ainsi que les paramètres de la fonction, ont une portée <dfn>locale</dfn>. Cela signifie qu'elles ne sont visibles qu'au sein de cette fonction.

Voici une fonction `myTest` avec une variable locale appelée `loc`.

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

L'appel à la fonction "myTest()`" affichera la chaîne "foo" dans la console. La ligne `console.log(loc)` (en dehors de la fonction `myTest`) provoquera une erreur, car `loc` n'est pas défini en dehors de la fonction.

# --instructions--

L'éditeur a deux `console.log`s pour vous aider à voir ce qui se passe. Vérifiez la console pendant que vous codez pour voir comment elle change. Déclarez une variable locale `myVar` dans `myLocalScope` et exécutez les tests.

**Remarque:** La console affichera toujours `ReferenceError : myVar is not defined`, mais cela ne fera pas échouer les tests.

# --hints--

Le code ne doit pas contenir une variable globale `myVar`.

```js
function declared() {
  myVar;
}

assert.throws(declared, ReferenceError);
```

Vous devez ajouter une variable locale `myVar`.

```js
assert(
  /functionmyLocalScope\(\)\{.*(var|let|const)myVar[\s\S]*}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

# --seed--

## --seed-contents--

```js
function myLocalScope() {
  // Ne changez que le code en dessous de cette ligne

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Exécuter et vérifier la console
// myVar n'est pas définie en dehors de myLocalScope
console.log('outside myLocalScope', myVar);
```

# --solutions--

```js
function myLocalScope() {
  // Ne changez que le code en dessous de cette ligne
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Exécuter et vérifier la console
// myVar n'est pas définie en dehors de myLocalScope
console.log('outside myLocalScope', myVar);
```
