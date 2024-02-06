---
id: 587d7dab367417b2b2512b6f
title: Utiliser la méthode some pour vérifier que tous les éléments d'un tableau répondent à un critère.
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

La méthode `some` travaille avec des tableaux pour vérifier si *un* élément passe un test particulier. Elle retourne une valeur booléenne - `vrai` si l'une des valeurs répond aux critères, `faux` si ce n'est pas le cas.

Par exemple, le code suivant vérifie si un élément du tableau `numbers` est inférieur à 10 :

```js
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

La méthode `some` renverrait `vrai`.

# --instructions--

Utilisez la méthode `some` à l'intérieur de la fonction `checkPositive` pour vérifier si un élément de `arr` est positif. La fonction doit retourner une valeur booléenne.

# --hints--

Votre code devrait utiliser la méthode `some`.

```js
assert(code.match(/\.some/g));
```

`checkPositive([1, 2, 3, -4, 5])` devrait retourner `true`.

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` devrait retourner `true`.

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([-1, -2, -3, -4, -5])` devrait retourner `false`.

```js
assert(!checkPositive([-1, -2, -3, -4, -5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
// Ne modifiez que le code situé en dessous de cette ligne


// Ne modifiez que le code au-dessus de cette ligne
}

checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
```
