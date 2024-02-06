---
id: bd7123c9c448eddfaeb5bdef
title: Trouver la longueur d'une chaîne de caractères
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

Vous pouvez trouver la longueur d'une valeur `String` en écrivant `.length` après la variable string ou le littéral string.

```js
console.log("Alan Peter".length);
```

La valeur `10` sera affichée dans la console.

Par exemple, si nous avons créé une variable `const firstName = "Ada"`, nous pourrions découvrir la longueur de la chaîne `Ada` en utilisant la propriété `firstName.length`.

# --instructions--

Utilisez la propriété `.length` pour compter le nombre de caractères de la variable `lastName` et l'affecter à `lastNameLength`.

# --hints--

Vous ne devez pas modifier les déclarations de variables dans la section `// Setup`.

```js
assert(
  code.match(/let lastNameLength = 0;/) &&
    code.match(/const lastName = "Lovelace";/)
);
```

`lastNameLength` doit être égal à huit.

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

Vous devriez obtenir la longueur de `lastName` en utilisant `.length` comme ceci : `lastName.length`.

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Ne changez que le code en dessous de cette ligne
lastNameLength = lastName;
```

# --solutions--

```js
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
```
