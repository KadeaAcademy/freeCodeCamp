---
id: 56533eb9ac21ba0edf2244d0
title: Comparaison avec l'opérateur d'égalité
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

Il existe de nombreux <dfn>opérateurs de comparaison</dfn> en JavaScript. Tous ces opérateurs renvoient une valeur booléenne `true` ou `false`.

L'opérateur le plus basique est l'opérateur d'égalité `==`. L'opérateur d'égalité compare deux valeurs et renvoie la valeur `true` si elles sont équivalentes ou `false` si elles ne le sont pas. Notez que l'égalité est différente de l'affectation (`=`), qui attribue la valeur à droite de l'opérateur à une variable à gauche.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Egal";
  }
  return "Pas Egal";
}
```

Si `myVal` est égal à `10`, l'opérateur d'égalité renvoie `true`, donc le code entre accolades sera exécuté, et la fonction renverra `Egal`.Sinon, la fonction renvoie `Non Egal`. Pour que JavaScript puisse comparer deux <dfn>types de données</dfn> différents (par exemple, des "nombres" et des "chaînes de caractères"), il doit convertir un type en un autre. Cette opération est connue sous le nom de coercition de type. Mais une fois qu'il l'a fait, il peut comparer les termes comme suit :

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```

# --instructions--

Ajoutez l'opérateur d'égalité à la ligne indiquée pour que la fonction renvoie la chaîne `Egal` lorsque `val` est équivalent à `12`.

# --hints--

`testEqual(10)` devrait retourner la chaîne `Pas Egal`.

```js
assert(testEqual(10) === 'Pas Egal');
```

`testEqual(12)` devrait retourner la chaîne `Egal`.

```js
assert(testEqual(12) === 'Egal');
```

`testEqual("12")` devrait retourner la chaîne `Egal`.

```js
assert(testEqual('12') === 'Egal');
```

Vous devez utiliser l'opérateur `==`.

```js
assert(code.match(/==/g) && !code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function testEqual(val) {
  if (val) { // Modifiez cette ligne
    return "Egal";
  }
  return "Pas Egal";
}

testEqual(10);
```

# --solutions--

```js
function testEqual(val) {
  if (val == 12) {
    return "Egal";
  }
  return "Pas Egal";
}
```
