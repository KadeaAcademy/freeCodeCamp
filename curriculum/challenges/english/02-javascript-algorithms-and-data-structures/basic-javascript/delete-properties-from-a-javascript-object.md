---
id: 56bbb991ad1ed5201cd392d3
title: Supprimer les propriétés d'un objet JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

Nous pouvons également supprimer les propriétés des objets comme ceci

```js
delete notrechien.aboie;
```

Exemple:

```js
const notreChien = {
  "nom" : "Campeur",
  "pattes" : 4,
  "queues" : 1,
  "amis" : ["tout !"],
  "aboie" : "bow-wow"
} ;

delete notrechien.aboie;
```

Après la dernière ligne montrée ci-dessus, `notreChien` ressemble à ceci :

```js
{
  "nom" : "Campeur",
  "pattes" : 4,
  "queues" : 1,
  "amis" : ["tout !"]
}
```

# --instructions--

Supprimez la propriété `queues` de `monChien`. Vous pouvez utiliser la notation par points ou par crochets.

# --hints--

Vous devez supprimer la propriété `queues` de `monChien`.

```js
assert(typeof monChien === 'object' && monChien.queues === undefined);
```

Vous ne devez pas modifier la structure de `monChien`.

```js
assert(code.match(/"queues": 1/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(monChien);
```

## --seed-contents--

```js
// Setup
const monChien = {
  "nom": "Happy Coder",
  "pattes": 4,
  "queues": 1,
  "amis": ["Kadea Campeurs"],
  "aboie": "woof"
};

// Ne changez que le code en dessous de cette ligne

```

# --solutions--

```js
const monChien = {
  "nom": "Happy Coder",
  "pattes": 4,
  "queues": 1,
  "amis": ["kadea Campeurs"],
  "aboie": "woof"
};
delete monChien.queues;
```
