---
id: 56533eb9ac21ba0edf2244ba
title: Comprendre l'immuabilité des chaînes
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

En JavaScript, les chaînes de caractères (`String`) sont <dfn>immuables</dfn>, ce qui signifie qu'elles ne peuvent pas être modifiées une fois créées.

Par exemple, le code suivant :

```js
let myStr = "Bob";
myStr[0] = "J";
```

ne peut pas changer la valeur de `myStr` en `Job`, car le contenu de `myStr` ne peut pas être modifié. Notez que cela ne signifie *pas* que `myStr` ne peut pas être modifié, mais simplement que les caractères individuels d'un <dfn>littéral de chaîne</dfn> ne peuvent pas être modifiés. La seule façon de changer `myStr` serait de lui attribuer une nouvelle chaîne, comme ceci :

```js
let myStr = "Bob";
myStr = "Job";
```

# --instructions--

Corrigez l'affectation à `myStr` pour qu'elle contienne la valeur de la chaîne de caractères `Hello World` en utilisant l'approche montrée dans l'exemple ci-dessus.

# --hints--

`myStr` devrait avoir une valeur de la chaîne `Hello World`.

```js
assert(myStr === 'Hello World');
```

Vous ne devez pas modifier le code au-dessus du commentaire spécifié.

```js
assert(/myStr = "Jello World"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(v){return "myStr = " + v;})(myStr);
```

## --seed-contents--

```js
// Setup
let myStr = "Jello World";

// Ne changez que le code en dessous de cette ligne
myStr[0] = "H"; // Modifiez cette ligne
// Ne changez que le code au-dessus de cette ligne
```

# --solutions--

```js
let myStr = "Jello World";
myStr = "Hello World";
```
