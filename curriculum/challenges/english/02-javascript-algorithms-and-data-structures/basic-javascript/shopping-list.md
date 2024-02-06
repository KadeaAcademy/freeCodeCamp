---
id: 56533eb9ac21ba0edf2244bc
title: Liste d'achats
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

Créez une liste de commandes dans la variable `maListe`. La liste doit être un tableau multidimensionnel contenant plusieurs sous-tableaux.

Le premier élément de chaque sous-tableau doit contenir une chaîne de caractères avec le nom de l'article. Le deuxième élément doit être un nombre représentant la quantité, par ex.

```js
["Chocolate Bar", 15]
```

Il doit y avoir au moins 5 sous-tableaux dans la liste.

# --hints--

`maListe` doit être un tableau.

```js
assert(isArray);
```

Les premiers éléments de chacun de vos sous-tableaux doivent tous être des chaînes de caractères.

```js
assert(hasString);
```

Les seconds éléments de chacun de vos sous-tableaux doivent tous être des chiffres.

```js
assert(hasNumber);
```

Vous devriez avoir au moins 5 éléments dans votre liste.

```js
assert(count > 4);
```

# --seed--

## --after-user-code--

```js
var count = 0;
var isArray = false;
var hasString = false;
var hasNumber = false;
(function(list){
  if(Array.isArray(maListe)) {
    isArray = true;
    if(maListe.length > 0) {
      hasString = true;
      hasNumber = true;
      for (var elem of maListe) {
        if(!elem || !elem[0] || typeof elem[0] !== 'string') {
          hasString = false;
        }
        if(!elem || typeof elem[1] !== 'number') {
          hasNumber = false;
        }
      }
    }
    count = maListe.length;
    return JSON.stringify(maListe);
  } else {
    return "maListe n'est pas un tableau.";
  }

})(maListe);
```

## --seed-contents--

```js
const maListe = [];
```

# --solutions--

```js
const maListe = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```
