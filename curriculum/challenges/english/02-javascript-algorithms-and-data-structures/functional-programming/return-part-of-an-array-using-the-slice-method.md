---
id: 587d7b90367417b2b2512b65
title: Retourner une partie d'un tableau à l'aide de la méthode slice
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

La méthode `slice` renvoie une copie de certains éléments d'un tableau. Elle peut prendre deux arguments, le premier donne l'index de l'endroit où commencer la tranche, le second est l'index de l'endroit où terminer la tranche (et il n'est pas inclusif). Si les arguments ne sont pas fournis, la valeur par défaut est de commencer au début du tableau jusqu'à la fin, ce qui est un moyen facile de faire une copie du tableau entier. La méthode `slice` ne modifie pas le tableau original, mais en renvoie un nouveau.

Voici un exemple :

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
```

`newArray` aurait la valeur `["Dog", "Tiger"]`.

# --instructions--

Utilisez la méthode `slice` de la fonction `sliceArray` pour retourner une partie du tableau `anim` en fonction des indices `beginSlice` et `endSlice` fournis. La fonction doit retourner un tableau.

# --hints--

Votre code doit utiliser la méthode `slice`.

```js
assert(code.match(/\.slice/g));
```

La variable `inputAnim` ne doit pas changer.

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` devrait retourner `["Dog", "Tiger"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` devrait retourner `["Cat"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` devrait retourner `["Dog", "Tiger", "Zebra"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)) ===
    JSON.stringify(['Dog', 'Tiger', 'Zebra'])
);
```

# --seed--

## --seed-contents--

```js
function sliceArray(anim, beginSlice, endSlice) {
// Ne modifiez que le code situé en dessous de cette ligne


// Ne modifiez que le code au-dessus de cette ligne
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

# --solutions--

```js
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
```
