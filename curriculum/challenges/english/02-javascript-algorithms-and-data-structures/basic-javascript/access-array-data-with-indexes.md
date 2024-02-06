---
id: 56bbb991ad1ed5201cd392ca
title: Accéder aux données d'un tableau avec des indices
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

Nous pouvons accéder aux données contenues dans les tableaux à l'aide des indices.

Les indices des tableaux sont écrits dans la même notation entre crochets que les chaînes de caractères, sauf qu'au lieu de spécifier un caractère, ils spécifient une entrée dans le tableau. Comme les chaînes de caractères, les tableaux utilisent une indexation basée sur zéro, de sorte que le premier élément d'un tableau a un indice de `0`.

<br>

**Exemple**

```js
const array = [50, 60, 70];
array[0];
const data = array[1];
```

`array[0]` est maintenant `50`, et `data` a la valeur `60`.

**Remarque:** Il ne doit pas y avoir d'espace entre le nom du tableau et les crochets, comme "tableau [0]". Bien que JavaScript soit capable de traiter cela correctement, cela peut perturber les autres programmeurs qui lisent votre code.

# --instructions--

Créez une variable appelée `myData` et attribuez-lui comme valeur le premier élément de `myArray` en utilisant la notation entre crochets.

# --hints--

La variable `myData` doit être égale à la première valeur de `myArray`.

```js
assert(
  (function () {
    if (
      typeof myArray !== 'undefined' &&
      typeof myData !== 'undefined' &&
      myArray[0] === myData
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

Les données de la variable `myArray` doivent être accessibles en utilisant la notation entre crochets.

```js
assert(
  (function () {
    if (code.match(/\s*=\s*myArray\[0\]/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

## --seed-contents--

```js
const myArray = [50, 60, 70];


```

# --solutions--

```js
const myArray = [50, 60, 70];
const myData = myArray[0];
```
