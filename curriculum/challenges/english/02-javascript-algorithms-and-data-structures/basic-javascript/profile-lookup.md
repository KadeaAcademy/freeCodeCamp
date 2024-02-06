---
id: 5688e62ea601b2482ff8422b
title: Recherche de profils
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqW2Cg'
forumTopicId: 18259
dashedName: profile-lookup
---

# --description--

Nous avons un tableau d'objets représentant différentes personnes dans notre liste de contacts.

Une fonction `lookUpProfile` qui prend `name` et une propriété (`prop`) comme arguments a été pré-écrite pour vous.

La fonction doit vérifier si `name` est bien le `firstName` d'un contact et si la propriété donnée (`prop`) est une propriété de ce contact.

Si les deux sont vrais, alors elle retourne la "valeur" de cette propriété.

Si `name` ne correspond à aucun contact, alors retourne la chaîne `No such contact`.

Si `prop` ne correspond à aucune propriété valide d'un contact correspondant à `name`, alors retourne la chaîne `No such property`.

# --hints--

`lookUpProfile("Kristian", "lastName")` doit retourner la chaîne `Vos`

```js
assert(lookUpProfile('Kristian', 'lastName') === 'Vos');
```

`lookUpProfile("Sherlock", "likes")` doit retourner `["Intriguing Cases", "Violin"]`

```js
assert.deepEqual(lookUpProfile('Sherlock', 'likes'), [
  'Intriguing Cases',
  'Violin'
]);
```

`lookUpProfile("Harry", "likes")` doit retourner un tableau

```js
assert(typeof lookUpProfile('Harry', 'likes') === 'object');
```

`lookUpProfile("Bob", "number")` doit retourner la chaîne `No such contact`

```js
assert(lookUpProfile('Bob', 'number') === 'No such contact');
```

`lookUpProfile("Bob", "potato")` doit retourner la chaîne `No such contact`

```js
assert(lookUpProfile('Bob', 'potato') === 'No such contact');
```

`lookUpProfile("Akira", "address")` doit retourner la chaîne `No such property`

```js
assert(lookUpProfile('Akira', 'address') === 'No such property');
```

# --seed--

## --seed-contents--

```js
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Ne changez que le code en dessous de cette ligne

  // Ne changez que le code au-dessus de cette ligne
}

lookUpProfile("Akira", "likes");
```

# --solutions--

```js
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let i in contacts) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}
```
