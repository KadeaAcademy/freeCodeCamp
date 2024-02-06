---
id: 56533eb9ac21ba0edf2244cc
title: Accéder aux objets imbriqués
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
dashedName: accessing-nested-objects
---

# --description--

Les sous-propriétés des objets sont accessibles en enchaînant la notation par points ou par crochets.

Voici un objet imbriqué :

```js
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
```

`ourStorage.cabinet["top drawer"].folder2` serait la chaîne de caractères `secrets`, et `ourStorage.desk.drawer` serait la chaîne de caractères `stapler`.

# --instructions--

Accédez à l'objet `myStorage` et affectez le contenu de la propriété `glove box` à la variable `gloveBoxContents`. Utilisez la notation par points pour toutes les propriétés lorsque cela est possible, sinon utilisez la notation par crochets.

# --hints--

`gloveBoxContents` doit être égal à la chaîne `maps`.

```js
assert(gloveBoxContents === 'maps');
```

Votre code doit utiliser la notation par points et par crochets pour accéder à `myStorage`.

```js
assert(/=\s*myStorage\.car\.inside\[\s*("|')glove box\1\s*\]/g.test(code));
```

# --seed--

## --after-user-code--

```js
(function(x) { 
  if(typeof x != 'undefined') { 
    return "gloveBoxContents = " + x;
  }
  return "gloveBoxContents is undefined";
})(gloveBoxContents);
```

## --seed-contents--

```js
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = undefined;
```

# --solutions--

```js
const myStorage = {
  "car":{
    "inside":{
      "glove box":"maps",
      "passenger seat":"crumbs"
    },
    "outside":{
      "trunk":"jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];
```
