---
id: 587d7b7b367417b2b2512b17
title: Combiner des tableaux avec l'opérateur d'étalement
challengeType: 1
forumTopicId: 301156
dashedName: combine-arrays-with-the-spread-operator
---

# --description--

Un autre avantage énorme de l'opérateur <dfn>spread</dfn> est la possibilité de combiner des tableaux, ou d'insérer tous les éléments d'un tableau dans un autre, à n'importe quel index. Avec des syntaxes plus traditionnelles, nous pouvons concaténer des tableaux, mais cela ne nous permet de combiner des tableaux qu'à la fin de l'un, et au début d'un autre. La syntaxe Spread rend l'opération suivante extrêmement simple :

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```

`thatArray` devrait avoir la valeur `['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']`.

En utilisant la syntaxe étalée (Spread), nous venons de réaliser une opération qui aurait été plus complexe et plus verbeuse si nous avions utilisé les méthodes traditionnelles.

# --instructions--

Nous avons défini une fonction `spreadOut` qui renvoie la variable `sentence`. Modifiez la fonction en utilisant l'opérateur <dfn>spread</dfn> de façon à ce qu'elle renvoie le tableau `['learning', 'to', 'code', 'is', 'fun']`.

# --hints--

`spreadOut` devrait renvoyer `["learning", "to", "code", "is", "fun"]`

```js
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
```

La fonction `spreadOut` doit utiliser la syntaxe spread.

```js
assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);
```

# --seed--

## --seed-contents--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Modifiez cette ligne
  return sentence;
}

console.log(spreadOut());
```

# --solutions--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
```
