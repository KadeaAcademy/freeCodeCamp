---
id: 56533eb9ac21ba0edf2244c9
title: Accéder aux propriétés des objets avec des variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

Une autre utilisation de la notation entre crochets sur les objets consiste à accéder à une propriété stockée comme valeur d'une variable. Cela peut être très utile pour itérer parmi les propriétés d'un objet ou pour accéder à une table de recherche.

Voici un exemple d'utilisation d'une variable pour accéder à une propriété :

```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
```

La chaîne `Doberman` sera affichée dans la console.

Une autre façon d'utiliser ce concept est lorsque le nom de la propriété est collecté dynamiquement pendant l'exécution du programme, comme suit :

```js
const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
```

`someProp` aurait une valeur de la chaîne `propName`, et la chaîne `John` serait affichée dans la console.

Notez que nous n'utilisons *pas* de guillemets autour du nom de la variable lorsque nous l'utilisons pour accéder à la propriété, car nous utilisons la *valeur* de la variable, et non son *nom*.

# --instructions--

Donnez à la variable `playerNumber` la valeur `16`. Ensuite, utilisez la variable pour rechercher le nom du joueur et l'affecter à `player`

# --hints--

`playerNumber` doit être un nombre.

```js
assert(typeof playerNumber === 'number');
```

La variable `player` doit être une chaîne de caractères.

```js
assert(typeof player === 'string');
```

La valeur de `player` doit être la chaîne `Montana`.

```js
assert(player === 'Montana');
```

Vous devez utiliser la notation entre parenthèses pour accéder à `testObj`.

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

Vous ne devez pas attribuer la valeur `Montana` à la variable `player` directement.

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

Vous devez utiliser la variable `playerNumber` dans votre notation entre crochets.

```js
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

## --seed-contents--

```js
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Ne changez que le code en dessous de cette ligne
const playerNumber = 42;  // Modifiez cette ligne
const player = testObj;   // Modifiez cette ligne
```

# --solutions--

```js
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];
```
