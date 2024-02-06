---
id: 9d7123c8c441eeafaeb5bdef
title: Supprimer des éléments d'un tableau en utilisant slice au lieu de splice
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

Il est fréquent de travailler avec des tableaux lorsque l'on souhaite supprimer des éléments tout en conservant le reste du tableau. JavaScript propose pour cela la méthode `splice`, qui prend en argument l'index de l'endroit où commencer à supprimer des éléments, puis le nombre d'éléments à supprimer. Si le second argument n'est pas fourni, la valeur par défaut est de retirer les éléments jusqu'à la fin. Cependant, la méthode `splice` modifie le tableau original sur lequel elle est appelée. Voici un exemple :

```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

Ici, `splice` retourne la chaîne `London` et la supprime du tableau des villes. `cities` aura la valeur `["Chicago", "Delhi", "Islamabad", "Berlin"]`.

Comme nous l'avons vu dans le dernier défi, la méthode `slice` ne modifie pas le tableau original, mais renvoie un nouveau tableau qui peut être sauvegardé dans une variable. Rappelons que la méthode `slice` prend deux arguments pour les indices de début et de fin de la tranche (la fin n'est pas inclusive), et renvoie ces éléments dans un nouveau tableau. L'utilisation de la méthode `slice` au lieu de `splice` permet d'éviter les effets de bord qui modifient les tableaux.

# --instructions--

Réécrivez la fonction `nonMutatingSplice` en utilisant `slice` au lieu de `splice`. Elle devrait limiter le tableau `cities` fourni à une longueur de 3, et retourner un nouveau tableau avec seulement les trois premiers éléments.

Ne pas modifier le tableau original fourni à la fonction.

# --hints--

Votre code doit utiliser la méthode `slice`.

```js
assert(code.match(/\.slice/g));
```

Votre code ne doit pas utiliser la méthode `splice`.

```js
assert(!code.match(/\.?[\s\S]*?splice/g));
```

Le tableau `inputCities` ne doit pas changer.

```js
assert(
  JSON.stringify(inputCities) ===
    JSON.stringify(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
);
```

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` doit retourner `["Chicago", "Delhi", "Islamabad"]`.

```js
assert(
  JSON.stringify(
    nonMutatingSplice(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
  ) === JSON.stringify(['Chicago', 'Delhi', 'Islamabad'])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingSplice(cities) {
  // Ne modifiez que le code situé en dessous de cette ligne
  return cities.splice(3);

  // Ne modifiez que le code au-dessus de cette ligne
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
```
