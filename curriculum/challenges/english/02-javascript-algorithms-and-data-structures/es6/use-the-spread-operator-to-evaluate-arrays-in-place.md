---
id: 587d7b89367417b2b2512b48
title: Utilisez l'opérateur d'étalement (Spread) pour évaluer des tableaux sur place.
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 introduit l'opérateur <dfn>spread</dfn>, qui nous permet d'étendre les tableaux et autres expressions dans les endroits où plusieurs paramètres ou éléments sont attendus.

Le code ES5 ci-dessous utilise `apply()` pour calculer la valeur maximale dans un tableau :

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

La valeur de `maximus` serait de `89`.

Nous avons dû utiliser `Math.max.apply(null, arr)` car `Math.max(arr)` renvoie `NaN`. `Math.max()` attend des arguments séparés par des virgules, mais pas un tableau. L'opérateur d'étalement rend cette syntaxe beaucoup plus facile à lire et à maintenir.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

La valeur de `maximus` serait de `89`.

`...arr` renvoie un tableau non empaqueté. En d'autres termes, il *étale* le tableau. Cependant, l'opérateur d'étalement ne fonctionne que sur place, comme dans un argument d'une fonction ou dans un littéral de tableau. Le code suivant ne fonctionnera pas :

```js
const spreaded = ...arr;
```

# --instructions--

Copiez tout le contenu de `arr1` dans un autre tableau `arr2` en utilisant l'opérateur d'étalement.

# --hints--

`arr2` doit être une copie correcte de `arr1`.

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

L'opérateur d'étalement `...` doit être utilisé pour dupliquer `arr1`.

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` doit rester inchangé lorsque `arr1` est modifié.

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Modifiez cette ligne

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
