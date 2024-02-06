---
id: 5c3dda8b4d8df89bea71600f
title: Vérifier le regroupement mixte des caractères
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

Parfois, nous voulons vérifier des groupes de caractères à l'aide d'une expression régulière et pour cela, nous utilisons les parenthèses `()`.

Si vous voulez trouver `Penguin` ou `Pumpkin` dans une chaîne de caractères, vous pouvez utiliser l'expression régulière suivante : `/P(engu|umpk)in/g`.

Vérifiez ensuite si les groupes de chaînes souhaités se trouvent dans la chaîne de test en utilisant la méthode `test()`.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

La méthode `test` renverrait ici `true`.

# --instructions--

Corrigez l'expression pour qu'elle vérifie les noms de `Franklin Roosevelt` ou `Eleanor Roosevelt` en respectant la casse et en faisant des concessions pour les seconds prénoms.

Corrigez ensuite le code pour que l'expression de remplacement que vous avez créée soit vérifiée par rapport à `myString` et qu'elle renvoie soit `true` soit `false` selon que l'expression de remplacement correspond ou non.

# --hints--

Votre regex `myRegex` doit retourner `true` pour la chaîne `Franklin D. Roosevelt`.

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

Votre regex `myRegex` devrait retourner `true` pour la chaîne `Eleanor Roosevelt`.

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

Votre regex `myRegex` devrait retourner `false` pour la chaîne `Franklin Rosevelt`.

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

Votre regex `myRegex` devrait retourner `false` pour la chaîne `Frank Roosevelt`.

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

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
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Modifiez cette ligne
let result = false; // Modifiez cette ligne
// Après avoir réussi le défi, expérimentez avec myString et voyez comment le regroupement fonctionne.
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
```
