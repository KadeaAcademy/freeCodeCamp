---
id: 587d7b7d367417b2b2512b1e
title: Générer un tableau de toutes les clés d'un objet avec Object.keys()
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

Nous pouvons également générer un tableau qui contient toutes les clés stockées dans un objet en utilisant la méthode `Object.keys()` et en passant un objet comme argument. Cette méthode renvoie un tableau contenant des chaînes de caractères représentant chaque propriété de l'objet. Encore une fois, il n'y aura pas d'ordre spécifique pour les entrées dans le tableau.

# --instructions--

Terminez l'écriture de la fonction `getArrayOfUsers` afin qu'elle renvoie un tableau contenant toutes les propriétés de l'objet qu'elle reçoit en argument.

# --hints--

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

La fonction `getArrayOfUsers` doit retourner un tableau qui contient toutes les clés de l'objet `users`.

```js
assert(
  (function () {
    users.Sam = {};
    users.Lewis = {};
    let R = getArrayOfUsers(users);
    return (
      R.indexOf('Alan') !== -1 &&
      R.indexOf('Jeff') !== -1 &&
      R.indexOf('Sarah') !== -1 &&
      R.indexOf('Ryan') !== -1 &&
      R.indexOf('Sam') !== -1 &&
      R.indexOf('Lewis') !== -1
    );
  })() === true
);
```

# --seed--

## --seed-contents--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
 // Ne changez que le code en dessous de cette ligne

  // Ne changez que le code au-dessus de cette ligne
}

console.log(getArrayOfUsers(users));
```

# --solutions--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
```
