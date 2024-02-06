---
id: 56533eb9ac21ba0edf2244ca
title: Utilisation d'objets pour les recherches
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

Les objets peuvent être considérés comme un stockage clé/valeur, comme un dictionnaire. Si vous avez des données tabulaires, vous pouvez utiliser un objet pour rechercher des valeurs plutôt qu'une instruction `switch` ou une chaîne `if/else`. Ceci est particulièrement utile lorsque vous savez que vos données d'entrée sont limitées à une certaine plage.

Voici un exemple d'une simple recherche inversée dans l'alphabet :

```js
const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];
```

`alpha[2]` est la chaîne `Y`, `alpha[24]` est la chaîne `C`, et `alpha[valeur]` est la chaîne `Y`.

# --instructions--

Convertissez l'instruction switch en un objet appelé `lookup`. Utilisez-le pour rechercher `val` et assigner la chaîne associée à la variable `result`.

# --hints--

`phoneticLookup("alpha")` devrait être égal à la chaîne `Adams`.

```js
assert(phoneticLookup('alpha') === 'Adams');
```

`phoneticLookup("bravo")` devrait être égal à la chaîne `Boston`.

```js
assert(phoneticLookup('bravo') === 'Boston');
```

`phoneticLookup("charlie")` devrait être égal à la chaîne `Chicago`.

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

`phoneticLookup("delta")` devrait être égal à la chaîne `Denver`.

```js
assert(phoneticLookup('delta') === 'Denver');
```

`phoneticLookup("echo")` devrait être égal à la chaîne `Easy`.

```js
assert(phoneticLookup('echo') === 'Easy');
```

`phoneticLookup("foxtrot")` devrait être égal à la chaîne `Frank`.

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

`phoneticLookup("")` devrait être égal à `undefined`.

```js
assert(typeof phoneticLookup('') === 'undefined');
```

Vous ne devez pas modifier l'instruction `return`.

```js
assert(code.match(/return\sresult;/));
```

Vous ne devez pas utiliser les instructions `case`, `switch` ou `if`.

```js
assert(
  !/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g, ''))
);
```

# --seed--

## --seed-contents--

```js
// Setup
function phoneticLookup(val) {
  let result = "";

  // Ne changez que le code en dessous de cette ligne
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Ne changez que le code au-dessus de cette ligne
  return result;
}

phoneticLookup("charlie");
```

# --solutions--

```js
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```
