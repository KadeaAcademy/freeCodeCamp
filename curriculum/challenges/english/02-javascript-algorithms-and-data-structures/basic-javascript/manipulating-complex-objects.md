---
id: 56533eb9ac21ba0edf2244cb
title: Manipulation d'objets complexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

Il peut arriver que vous souhaitiez stocker des données dans une structure de données flexible. Un objet JavaScript est un moyen de gérer des données flexibles. Ils permettent des combinaisons arbitraires de chaînes de caractères, de nombres, de booléens, de tableaux, de fonctions et d'objets.

Voici un exemple de structure de données complexe :

```js
const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

C'est un tableau qui contient un objet. L'objet contient divers éléments de métadonnées sur un album. Il contient également un tableau imbriqué de `formats`. Si vous voulez ajouter des enregistrements d'albums, vous pouvez le faire en ajoutant des enregistrements au tableau de niveau supérieur. Les objets contiennent des données dans une propriété, qui a un format clé-valeur. Dans l'exemple ci-dessus, `"artist" : "Daft Punk"` est une propriété dont la clé est `artist` et la valeur `Daft Punk`. [JavaScript Object Notation](http://www.json.org/) ou `JSON` est un format d'échange de données connexe utilisé pour stocker des données.

```json
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```

**Note:** Vous devrez placer une virgule après chaque objet du tableau, sauf s'il s'agit du dernier objet du tableau.

# --instructions--

Ajoutez un nouvel album au tableau `myMusic`. Ajoutez les chaînes `artist` et `title`, le nombre `release_year`, et un tableau de chaînes `formats`.  

# --hints--

`myMusic` devrait être un tableau

```js
assert(Array.isArray(myMusic));
```

`myMusic` devrait avoir au moins deux éléments

```js
assert(myMusic.length > 1);
```

Les éléments du tableau `myMusic` doivent être des objets

```js
myMusic.forEach(object => {assert.typeOf(object, 'object')})
```

Votre objet dans `myMusic` devrait avoir au moins 4 propriétés

```js
myMusic.forEach(object => {assert(Object.keys(object).length > 3); });
```

Votre objet dans `myMusic` devrait contenir la propriété `artist` qui est une chaîne de caractères.

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['artist']);
  assert.typeOf(object.artist, 'string')
})
```

Votre objet dans `myMusic` devrait contenir la propriété `title` qui est une chaîne de caractères

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['title']);
  assert.typeOf(object.title, 'string')
})
```

Votre objet dans `myMusic` doit contenir la propriété `release_year` qui est un nombre.

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['release_year']);
  assert.typeOf(object.release_year, 'number')
})
```

Votre objet dans `myMusic` devrait contenir une propriété `formats` qui est un tableau

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['formats']);
  assert.typeOf(object.formats, 'array')
})
```

`formats` doit être un tableau de chaînes de caractères avec au moins deux éléments

```js
myMusic.forEach(object => {
  object.formats.forEach(format => {
    assert.typeOf(format, 'string')
  });
  assert.isAtLeast(object.formats.length, 2)
})
```

# --seed--

## --after-user-code--

```js
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

## --seed-contents--

```js
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
```

# --solutions--

```js
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "ABBA",
    "title": "Ring Ring",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP",
    "CD",
  ]
  }
];
```
