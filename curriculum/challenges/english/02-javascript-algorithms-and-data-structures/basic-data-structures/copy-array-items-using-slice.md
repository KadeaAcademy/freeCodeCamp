---
id: 587d7b7a367417b2b2512b12
title: Copier les éléments d'un tableau en utilisant slice()
challengeType: 1
forumTopicId: 301158
dashedName: copy-array-items-using-slice
---

# --description--

La prochaine méthode que nous allons aborder est `slice()`. Plutôt que de modifier un tableau, `slice()` copie ou *extrait* un nombre donné d'éléments dans un nouveau tableau, laissant le tableau sur lequel il est appelé intact. `slice()` ne prend que 2 paramètres - le premier est l'indice à partir duquel l'extraction doit commencer, et le second est l'indice auquel l'extraction doit s'arrêter (l'extraction se fera jusqu'à, mais sans inclure l'élément à cet indice). Considérez ceci :

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
```

`todaysWeather` aurait la valeur `['snow', 'sleet']`, tandis que `weatherConditions` aurait toujours la valeur `['rain', 'snow', 'sleet', 'hail', 'clear']`.

En fait, nous avons créé un nouveau tableau en extrayant des éléments d'un tableau existant.

# --instructions--

Nous avons défini une fonction, `forecast`, qui prend un tableau comme argument. Modifiez la fonction en utilisant `slice()` pour extraire des informations du tableau d'arguments et renvoyer un nouveau tableau qui contient les chaînes de caractères `warm` et `sunny`.

# --hints--

`forecast` devrait renvoyer `["warm", "sunny"]`

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

La fonction `forecast` doit utiliser la méthode `slice()`.

```js
assert(/\.slice\(/.test(code));
```

# --seed--

## --seed-contents--

```js
function forecast(arr) {
  // Ne changez que le code en dessous de cette ligne

  return arr;
}

// Ne changez que le code au-dessus de cette ligne
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

# --solutions--

```js
function forecast(arr) {
  return arr.slice(2,4);
}
```
