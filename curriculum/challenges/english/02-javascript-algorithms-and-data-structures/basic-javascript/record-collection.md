---
id: 56533eb9ac21ba0edf2244cf
title: Collection de disques
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

On vous donne un objet littéral représentant une partie de votre collection d'albums musicaux. Chaque album a un numéro d'identification unique comme clé et plusieurs autres propriétés. Tous les albums n'ont pas une information complète.

Vous commencez avec une fonction `updateRecords` qui prend un objet littéral, `records`, contenant la collection d'albums musicaux, un `id`, un `prop` (comme `artist` ou `tracks`), et un `value`. Complétez la fonction en utilisant les règles ci-dessous pour modifier l'objet transmis à la fonction.

- Votre fonction doit toujours retourner la totalité de l'objet collection d'enregistrements.
- Si `prop` n'est pas `tracks` et que `value` n'est pas une chaîne vide, mettez à jour ou définissez la propriété `prop` de cet album à `value`.
- Si `prop` est `tracks` mais que l'album ne possède pas de propriété `tracks`, créez un tableau vide et ajoutez-y `value`.
- Si `prop` est `tracks` et que `value` n'est pas une chaîne vide, ajoutez `value` à la fin du tableau `tracks` existant de l'album.
- Si `value` est une chaîne vide, supprime la propriété `prop` de l'album.

**Note:** Une copie de l'objet `recordCollection` est utilisée pour les tests.

# --hints--

Après `updateRecords(recordCollection, 5439, "artist", "ABBA")`, `artist` devrait être la chaîne `ABBA`.

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

Après `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")`, `tracks` devrait avoir la chaîne `Take a Chance on Me` comme dernier élément.

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me')[5439][
    'tracks'
  ].pop() === 'Take a Chance on Me'
);
```

Après `updateRecords(recordCollection, 2548, "artist", "")`, `artist` ne doit pas être défini

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

Après `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")`, `tracks` devrait avoir la chaîne `Addicted to Love` comme dernier élément.

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

Après `updateRecords(recordCollection, 2468, "tracks", "Free")`tracks` devrait avoir la chaîne `1999` comme premier élément.

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

Après `updateRecords(recordCollection, 2548, "tracks", "")`, `tracks` ne doit pas être défini

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

Après `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")`, `albumTitle` devrait être la chaîne `Riptide`.

```js
assert(
  updateRecords(_recordCollection, 1245, 'albumTitle', 'Riptide')[1245][
    'albumTitle'
  ] === 'Riptide'
);
```

# --seed--

## --before-user-code--

```js
const _recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
```

## --seed-contents--

```js
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Ne changez que le code en dessous de cette ligne
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
```

# --solutions--

```js
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Ne changez que le code en dessous de cette ligne
function updateRecords(records, id, prop, value) {
  if (value === '') delete records[id][prop];
  else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }

  return records;
}
```
