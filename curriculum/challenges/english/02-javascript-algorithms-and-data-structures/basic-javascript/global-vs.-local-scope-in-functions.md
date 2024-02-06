---
id: 56533eb9ac21ba0edf2244c0
title: Portée globale versus locale dans les fonctions
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QwKH2'
forumTopicId: 18194
dashedName: global-vs--local-scope-in-functions
---

# --description--

Il est possible d'avoir des variables locales et globales portant le même nom. Lorsque vous faites cela, la variable locale a la priorité sur la variable globale.

Dans cet exemple :

```js
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
```

La fonction `myFun` retournera la chaîne `Head` car la version locale de la variable est présente.

# --instructions--

Ajoutez une variable locale à la fonction `myOutfit` pour remplacer la valeur de `outerWear` par la chaîne `sweater`.

# --hints--

Vous ne devez pas modifier la valeur de la variable globale `outerWear`. 

```js
assert(outerWear === 'T-Shirt');
```

`myOutfit` devrait retourner la chaîne `sweater`.

```js
assert(myOutfit() === 'sweater');
```

Vous ne devez pas modifier la déclaration de retour.

```js
assert(/return outerWear/.test(code));
```

# --seed--

## --seed-contents--

```js
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
// Ne changez que le code en dessous de cette ligne

  // Ne changez que le code au-dessus de cette ligne
  return outerWear;
}

myOutfit();
```

# --solutions--

```js
const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}
```
