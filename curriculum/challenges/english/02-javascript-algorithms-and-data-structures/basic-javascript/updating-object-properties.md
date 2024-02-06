---
id: 56bbb991ad1ed5201cd392d1
title: Mettre à jour les propriétés des objets
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yEJT4'
forumTopicId: 18336
dashedName: updating-object-properties
---

# --description--

Une fois que vous avez créé un objet JavaScript, vous pouvez mettre à jour ses propriétés à tout moment, comme vous le feriez pour n'importe quelle autre variable. Vous pouvez utiliser la notation par points ou par crochets pour mettre à jour.

Par exemple, regardons `ourDog` :

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

Puisque c'est un chien particulièrement heureux, changeons son nom par la chaîne `Happy Camper`. Voici comment mettre à jour la propriété name de son objet : `ourDog.name = "Happy Camper";` ou `ourDog["name"] = "Happy Camper";` Maintenant, lorsque nous évaluons `ourDog.name`, au lieu d'obtenir `Camper`, nous obtiendrons son nouveau nom, `Happy Camper`.

# --instructions--

Mettez à jour la propriété name de l'objet `myDog`. Changeons son nom de `Coder` en `Happy Coder`. Vous pouvez utiliser la notation par points ou par parenthèses.

# --hints--

Vous devriez mettre à jour la propriété `name` de `myDog` pour qu'elle soit égale à la chaîne `Happy Coder`.

```js
assert(/happy coder/gi.test(myDog.name));
```

Vous ne devez pas modifier la définition de `myDog`.

```js
assert(/"name": "Coder"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Ne changez que le code en dessous de cette ligne

```

# --solutions--

```js
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```
