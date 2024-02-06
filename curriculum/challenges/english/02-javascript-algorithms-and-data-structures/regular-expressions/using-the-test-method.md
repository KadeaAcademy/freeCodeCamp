---
id: 587d7db3367417b2b2512b8e
title: Utiliser la méthode test
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

Les expressions régulières sont utilisées dans les langages de programmation pour faire correspondre des parties de chaînes de caractères. Vous créez des schémas pour vous aider à effectuer cette correspondance.

Si vous voulez trouver le mot `the` dans la chaîne `The dog chased the cat`, vous pouvez utiliser l'expression régulière suivante : `/the/`. Notez que les guillemets ne sont pas obligatoires dans l'expression régulière.

JavaScript propose plusieurs façons d'utiliser les expressions régulières. L'une d'elles consiste à utiliser la méthode `.test()` pour tester une regex. La méthode `.test()` prend l'expression régulière, l'applique à une chaîne de caractères (qui est placée à l'intérieur des parenthèses), et renvoie `true` ou `false` si votre schéma trouve quelque chose ou pas.

```js
let testStr = "Kadea Learning Plateform";
let testRegex = /Kadea/;
testRegex.test(testStr);
```

La méthode `test` renvoie ici `true`.

# --instructions--

Appliquez la regex `myRegex` sur la chaîne `myString` en utilisant la méthode `.test()`.

# --hints--

Vous devriez utiliser `.test()` pour tester la regex.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

Votre résultat devrait retourner `true`.

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Modifiez cette ligne
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Modifiez cette ligne
```
