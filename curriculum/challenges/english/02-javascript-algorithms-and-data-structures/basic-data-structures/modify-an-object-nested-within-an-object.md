---
id: 587d7b7c367417b2b2512b19
title: Modifier un objet imbriqué dans un autre objet
challengeType: 1
forumTopicId: 301164
dashedName: modify-an-object-nested-within-an-object
---

# --description--

Examinons maintenant un objet un peu plus complexe. Les propriétés des objets peuvent être imbriquées à une profondeur arbitraire et leurs valeurs peuvent être n'importe quel type de données prises en charge par JavaScript, y compris des tableaux et même d'autres objets. Prenons l'exemple suivant :

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
```

`nestedObject` possède trois propriétés : `id` (la valeur est un nombre), `date` (la valeur est une chaîne), et `data` (la valeur est un objet avec sa structure imbriquée). Bien que les structures puissent rapidement devenir complexes, nous pouvons toujours utiliser les mêmes notations pour accéder aux informations dont nous avons besoin. Pour attribuer la valeur `10` à la propriété `busy` de l'objet imbriqué `onlineStatus`, nous utilisons la notation point pour référencer la propriété :

```js
nestedObject.data.onlineStatus.busy = 10;
```

# --instructions--

Ici, nous avons défini un objet `userActivity`, qui inclut un autre objet imbriqué dans celui-ci. Définissez la valeur de la clé `online` à `45`.

# --hints--

`userActivity` devrait avoir les propriétés `id`, `date` et `data`.

```js
assert(
  'id' in userActivity && 'date' in userActivity && 'data' in userActivity
);
```

La clé `userActivity` devrait avoir une clé `data` définie sur un objet avec les clés `totalUsers` et `online`.

```js
assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
```

La propriété `online` contenue dans la clé `data` de `userActivity` doit avoir la valeur `45`.

```js
assert(userActivity.data.online === 45);
```

La propriété `online` doit être définie en utilisant la notation par points ou par crochets.

```js
assert.strictEqual(code.search(/online: 45/), -1);
```

# --seed--

## --seed-contents--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Ne changez que le code en dessous de cette ligne

// Ne changez que le code au-dessus de cette ligne

console.log(userActivity);
```

# --solutions--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
```
