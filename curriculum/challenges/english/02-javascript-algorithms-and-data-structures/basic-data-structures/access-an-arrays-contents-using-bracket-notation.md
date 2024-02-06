---
id: 5a661e0f1068aca922b3ef17
title: Accéder au contenu d'un tableau en utilisant la notation des crochets
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

La caractéristique fondamentale de toute structure de données est, bien sûr, la capacité non seulement de stocker des données, mais aussi de pouvoir les récupérer sur commande. Donc, maintenant que nous avons appris à créer un tableau, commençons à réfléchir à la façon dont nous pouvons accéder aux informations de ce tableau.

Lorsque nous définissons un tableau simple, comme indiqué ci-dessous, il contient 3 éléments :

```js
let ourArray = ["a", "b", "c"];
```

Dans un tableau, chaque élément du tableau a un indice. Cet indice sert à déterminer la position de l'élément dans le tableau et à le référencer. Cependant, il est important de noter que les tableaux JavaScript sont à indexation zéro, ce qui signifie que le premier élément d'un tableau se trouve en fait à la position ***zéro***, et non à la première. Afin de récupérer un élément d'un tableau, nous pouvons mettre un indice entre crochets et l'ajouter à la fin d'un tableau, ou plus communément, à une variable qui fait référence à un objet tableau. C'est ce qu'on appelle la notation entre crochets. Par exemple, si nous voulons récupérer le `a` de `ourArray` et l'assigner à une variable, nous pouvons le faire avec le code suivant :

```js
let ourVariable = ourArray[0];
```

Maintenant, `ourVariable` a la valeur `a`.

En plus d'accéder à la valeur associée à un indice, vous pouvez également *fixer* un indice à une valeur en utilisant la même notation :

```js
ourArray[1] = "not b anymore";
```

En utilisant la notation entre crochets, nous avons maintenant réinitialisé l'élément à l'indice 1 de la chaîne `b`, en `not b anymore`. Maintenant, `ourArray` est `["a", "not b anymore", "c"]`.

# --instructions--

Pour relever ce défi, donnez à la deuxième position ( indice `1`) de `myArray` la valeur que vous voulez, à part la lettre `b`.

# --hints--

`myArray[0]` doit être égal à la lettre `a`

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]` ne doit pas être égal à la lettre `b`

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]` doit être égal à la lettre `c`

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]` doit être égal à la lettre `d`

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// Ne changez que le code en dessous de cette ligne

// Ne changez que le code au-dessus de cette ligne
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```
