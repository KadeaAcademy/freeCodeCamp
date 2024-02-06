---
id: 587d7b7b367417b2b2512b13
title: Copier un tableau avec l'opérateur d'étalement
challengeType: 1
forumTopicId: 301157
dashedName: copy-an-array-with-the-spread-operator
---

# --description--

Alors que `slice()` nous permet d'être sélectif quant aux éléments d'un tableau à copier, parmi plusieurs autres tâches utiles, le nouvel opérateur <dfn>spread</dfn> de ES6 nous permet de copier facilement *tous* les éléments d'un tableau, dans l'ordre, avec une syntaxe simple et très lisible. La syntaxe spread se présente simplement comme suit : `...`

En pratique, nous pouvons utiliser l'opérateur d'étalement pour copier un tableau comme suit :

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

`thatArray` est égal à `[true, true, undefined, false, null]`. `thisArray` reste inchangé et `thatArray` contient les mêmes éléments que `thisArray`.

# --instructions--

Nous avons défini une fonction, `copyMachine` qui prend `arr` (un tableau) et `num` (un nombre) comme arguments. La fonction est censée retourner un nouveau tableau composé de `num` copies de `arr`. Nous avons fait le plus gros du travail pour vous, mais cela ne fonctionne pas encore tout à fait correctement. Modifiez la fonction en utilisant la syntaxe de l'étalement pour qu'elle fonctionne correctement (indice : une autre méthode que nous avons déjà couverte pourrait s'avérer utile ici !)

# --hints--

`copyMachine([true, false, true], 2)` devrait renvoyer `[[true, false, true], [true, false, true]]`

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

`copyMachine([1, 2, 3], 5)` devrait rennvoyer `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

`copyMachine([true, true, null], 1)` devrait rennvoyer `[[true, true, null]]`

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

`copyMachine(["it works"], 3)` devrait rennvoyer `[["it works"], ["it works"], ["it works"]]`

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

La fonction `copyMachine` doit utiliser l'opérateur `spread` avec le tableau `arr`.

```js
assert(code.match(/\.\.\.arr/));
```

# --seed--

## --seed-contents--

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Ne changez que le code en dessous de cette ligne

    // Ne changez que le code au-dessus de cette ligne
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

# --solutions--

```js
function copyMachine(arr,num){
    let newArr=[];
    while(num >=1){
    newArr.push([...arr]);
    num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
```
