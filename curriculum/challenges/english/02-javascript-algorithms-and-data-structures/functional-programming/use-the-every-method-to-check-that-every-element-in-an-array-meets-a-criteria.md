---
id: 587d7dab367417b2b2512b6e
title: Utiliser la méthode every pour vérifier que chaque élément d'un tableau répond à un critère
challengeType: 1
forumTopicId: 301312
dashedName: use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
---

# --description--

La méthode `every` fonctionne avec les tableaux pour vérifier si *chaque* élément passe un test particulier. Elle retourne une valeur booléenne - `vrai` si toutes les valeurs répondent aux critères, `faux` si ce n'est pas le cas.

Par exemple, le code suivant vérifie si chaque élément du tableau `numbers` est inférieur à 10 :

```js
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

La méthode `every` renverrait ici `false`.

# --instructions--

Utilisez la méthode `every` à l'intérieur de la fonction `checkPositive` pour vérifier si chaque élément de `arr` est positif. La fonction doit retourner une valeur booléenne.

# --hints--

Votre code doit utiliser la méthode `every`.

```js
assert(code.match(/\.every/g));
```

`checkPositive([1, 2, 3, -4, 5])` devrait retourner `false`.

```js
assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` devrait retourner `true`.

```js
assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([1, -2, 3, -4, 5])` devrait retourner `false`.

```js
assert.isFalse(checkPositive([1, -2, 3, -4, 5]));
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
  return arr.every(num => num > 0);
}
```
