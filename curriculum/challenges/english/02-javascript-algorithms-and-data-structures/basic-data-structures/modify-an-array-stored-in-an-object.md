---
id: 587d7b7d367417b2b2512b1f
title: Modifier un tableau stocké dans un objet
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

Maintenant, vous avez vu toutes les opérations de base pour les objets JavaScript. Vous pouvez ajouter, modifier et supprimer des paires clé-valeur, vérifier si les clés existent et itérer sur toutes les clés d'un objet. En poursuivant votre apprentissage de JavaScript, vous découvrirez des applications encore plus polyvalentes des objets. En outre, les leçons sur les structures de données situées dans la section Coding Interview Prep du programme d'études couvrent également les objets <dfn>Map</dfn> et <dfn>Set</dfn> de ES6, qui sont tous deux similaires aux objets ordinaires mais offrent des fonctionnalités supplémentaires. Maintenant que vous avez appris les bases des tableaux et des objets, vous êtes prêt à vous attaquer à des problèmes plus complexes avec JavaScript !

# --instructions--

Regardez l'objet que nous avons fourni dans l'éditeur de code. L'objet `user` contient trois clés. La clé `data` contient cinq clés, dont l'une contient un tableau de `friends`. A partir de là, vous pouvez voir à quel point les objets sont flexibles en tant que structures de données. Nous avons commencé à écrire une fonction `addFriend`. Finissez de l'écrire pour qu'elle prenne un objet `user` et ajoute le nom de l'argument `friend` au tableau stocké dans `user.data.friends` et retourne ce tableau.

# --hints--

L'objet `user` doit avoir les clés `name`, `age`, et `data`.

```js
assert('name' in user && 'age' in user && 'data' in user);
```

La fonction `addFriend` doit accepter un objet `user` et une chaîne `friend` comme arguments et ajouter l'ami au tableau des `friends` de l'objet `user`.

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

`addFriend(user, "Pete")` doit renvoyer `["Sam", "Kira", "Tomo", "Pete"]`.

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --seed--

## --seed-contents--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Ne changez que le code en dessous de cette ligne

  // Ne changez que le code au-dessus de cette ligne
}

console.log(addFriend(user, 'Pete'));
```

# --solutions--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```
