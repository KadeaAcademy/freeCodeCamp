---
id: 587d7b7d367417b2b2512b1c
title: Vérifier si un objet a une propriété
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

Nous pouvons maintenant ajouter, modifier et supprimer les clés des objets. Mais que faire si nous voulons simplement savoir si un objet possède une propriété spécifique ? JavaScript nous fournit deux façons différentes de le faire. L'une utilise la méthode `hasOwnProperty()` et l'autre utilise le mot-clé `in`. Si nous avons un objet `users` dont la propriété est `Alan`, nous pouvons vérifier sa présence de l'une des façons suivantes :

```js
users.hasOwnProperty('Alan');
'Alan' in users;
```

Les deux renvoient `true`.

# --instructions--

Terminez l'écriture de la fonction afin qu'elle renvoie true si l'objet qui lui est passé contient les quatre noms, `Alan`, `Jeff`, `Sarah` et `Ryan` et renvoie false sinon.

# --hints--

On ne doit pas accéder directement à l'objet `users`.

```js 

assert(code.match(/users/gm).length <= 2)

```

L'objet `users` ne doit contenir que les clés `Alan`, `Jeff`, `Sarah`, et `Ryan`.

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

La fonction `isEveryoneHere` doit retourner `true` si `Alan`, `Jeff`, `Sarah`, et `Ryan` sont des propriétés de l'objet qui lui est passé.

```js
assert(isEveryoneHere(users) === true);
```

La fonction `isEveryoneHere` doit retourner `false` si `Alan` n'est pas une propriété de l'objet qui lui est passé.

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

La fonction `isEveryoneHere` doit retourner `false` si `Jeff` n'est pas une propriété de l'objet qui lui est passé.

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

La fonction `isEveryoneHere` doit retourner `false` si `Sarah` n'est pas une propriété de l'objet qui lui est passé.

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

La fonction `isEveryoneHere` doit retourner `false` si `Ryan` n'est pas une propriété de l'objet qui lui est passé.

```js
assert(
  (function () {
    delete users.Ryan;
    return isEveryoneHere(users);
  })() === false
);
```

# --seed--

## --seed-contents--

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
 // Ne changez que le code en dessous de cette ligne
  
  // Ne changez que le code au-dessus de cette ligne
}

console.log(isEveryoneHere(users));
```

# --solutions--

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(user => userObj.hasOwnProperty(user));
}

console.log(isEveryoneHere(users));
```
