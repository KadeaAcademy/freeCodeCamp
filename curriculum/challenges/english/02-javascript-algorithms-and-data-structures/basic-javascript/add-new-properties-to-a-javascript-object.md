---
id: 56bbb991ad1ed5201cd392d2
title: Ajouter de nouvelles propriétés à un objet JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

Vous pouvez ajouter de nouvelles propriétés à des objets JavaScript existants de la même manière que vous les modifiez.

Voici comment ajouter la propriété `aboie` à `notreChien` :

```js
notreChien.aboie = "bow-wow";
```

or

```js
notreChien["aboie"] = "bow-wow";
```

Maintenant, lorsque nous évaluons `notreChien.aboie`, nous obtenons son aboiement, `bow-wow`.

Exemple:

```js
const notreChien = {
  "nom": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

notreChien.aboie = "bow-wow";
```

# --instructions--

Ajoutez une propriété `aboie` à `monChien` et attribuez-lui un cri de chien, tel que "woof". Vous pouvez utiliser la notation par points ou par parenthèses.

# --hints--

Vous devez ajouter la propriété `aboie` à `monChien`.

```js
assert(monChien.aboie !== undefined);
```

Vous ne devez pas ajouter `aboie` à l'initialisation de `monChien`.

```js
assert(!/aboie[^\n]:/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(monChien);
```

## --seed-contents--

```js
const monChien = {
  "nom": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


```

# --solutions--

```js
const monChien = {
  "nom": "Happy Coder",
  "pattes": 4,
  "queues": 1,
  "amis": ["freeCodeCamp Campers"]
};
monChien.aboie = "Woof Woof";
```
