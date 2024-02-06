---
id: 587d7b8a367417b2b2512b4d
title: Utiliser l'assignation de déstructuration pour passer un objet comme paramètre d'une fonction
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

Dans certains cas, vous pouvez déstructurer l'objet dans un argument de fonction lui-même.

Considérez le code ci-dessous :

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

Cela déstructure effectivement l'objet envoyé dans la fonction. Cela peut également être fait en place :

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

Lorsque `profileData` est transmis à la fonction ci-dessus, les valeurs sont déstructurées à partir du paramètre de fonction pour être utilisées dans la fonction.

# --instructions--

Utilisez l'affectation de déstructuration dans l'argument de la fonction `half` pour envoyer uniquement `max` et `min` à l'intérieur de la fonction.

# --hints--

`stats` devrait être un `objet`.

```js
assert(typeof stats === 'object');
```

`half(stats)` devrait être `28.015`

```js
assert(half(stats) === 28.015);
```

La déstructuration doit être utilisée.

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

Il faut utiliser un paramètre déstructuré.

```js
assert(!code.match(/stats\.max|stats\.min/));
```

# --seed--

## --seed-contents--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Ne changez que le code en dessous de cette ligne
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Ne changez que le code au-dessus de cette ligne
```

# --solutions--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ( {max, min} ) => (max + min) / 2.0;
```
