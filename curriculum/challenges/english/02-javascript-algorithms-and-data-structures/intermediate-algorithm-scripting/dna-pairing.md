---
id: afd15382cdfb22c9efe8b7de
title: Appariement de l'ADN
challengeType: 5
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

Il manque l'élément d'appariement du brin d'ADN. Prenez chaque caractère, obtenez sa paire et renvoyez les résultats sous la forme d'un tableau 2d.

Les [paires de bases](http://en.wikipedia.org/wiki/Base_pair) sont une paire de AT et CG. Faire correspondre l'élément manquant au caractère fourni.

Renvoyer le caractère fourni comme premier élément de chaque tableau.

Par exemple, pour l'entrée `GCG`, retournera `[["G", "C"], ["C", "G"], ["G", "C"]]`

Le caractère et sa paire sont associés dans un tableau, et tous les tableaux sont regroupés dans un tableau encapsulant.

# --hints--

`pairElement("ATCGA")` devrait retourner `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`.

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` devrait retourner `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`.

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` devrait retourner `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`.

```js
assert.deepEqual(pairElement('CTCTA'), [
  ['C', 'G'],
  ['T', 'A'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'T']
]);
```

# --seed--

## --seed-contents--

```js
function pairElement(str) {
  return str;
}

pairElement("GCG");
```

# --solutions--

```js
var lookup = Object.create(null);
lookup.A = 'T';
lookup.T = 'A';
lookup.C = 'G';
lookup.G = 'C';

function pairElement(str) {
 return str.split('').map(function(p) {return [p, lookup[p]];});
}
```
