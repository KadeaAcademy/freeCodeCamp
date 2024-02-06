---
id: 587d7b7e367417b2b2512b21
title: Utiliser plusieurs opérateurs conditionnels (ternaires)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

Dans le défi précédent, vous avez utilisé un seul opérateur conditionnel. Vous pouvez également les enchaîner pour vérifier plusieurs conditions.

La fonction suivante utilise les instructions `if`, `else if` et `else` pour vérifier plusieurs conditions :

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a et b sont égaux";
  }
  else if (a > b) {
    return "a est plus grand";
  }
  else {
    return "b est plus grand";
  }
}
```

La fonction ci-dessus peut être réécrite en utilisant plusieurs opérateurs conditionnels :

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a et b sont égaux" 
    : (a > b) ? "a est plus grand" 
    : "b est plus grand"";
}
```

Il est considéré comme une bonne pratique de formater les opérateurs conditionnels multiples de telle sorte que chaque condition se trouve sur une ligne distincte, comme indiqué ci-dessus. L'utilisation d'opérateurs conditionnels multiples sans indentation appropriée peut rendre votre code difficile à lire. Par exemple :

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

Dans la fonction `checkSign`, utilisez plusieurs opérateurs conditionnels - en suivant le format recommandé utilisé dans `findGreaterOrEqual` - pour vérifier si un nombre est positif, négatif ou nul. La fonction doit renvoyer `positive`, `negative` ou `zero`.

# --hints--

`checkSign` doit utiliser plusieurs opérateurs conditionnels

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` devrait retourner la chaîne `positive`. Notez que les majuscules sont importantes

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` devrait retourner la chaîne `negative`. Notez que les majuscules sont importantes

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` devrait retourner la chaîne `zero`. Notez que les majuscules sont importantes

```js
assert(checkSign(0) === 'zero');
```

# --seed--

## --seed-contents--

```js
function checkSign(num) {

}

checkSign(10);
```

# --solutions--

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```
