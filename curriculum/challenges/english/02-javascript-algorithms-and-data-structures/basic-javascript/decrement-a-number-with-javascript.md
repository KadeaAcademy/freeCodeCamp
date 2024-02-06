---
id: 56533eb9ac21ba0edf2244ad
title: Décrémenter un nombre avec JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

Vous pouvez facilement <dfn>décrémenter</dfn> ou faire décroître une variable de un avec l'opérateur `--`.

```js
i--;
```

est l'équivalent de

```js
i = i - 1;
```

**Note:** La ligne entière devient `i--;`, éliminant le besoin du signe égal.

# --instructions--

Changez le code pour utiliser l'opérateur `--` sur `myVar`.

# --hints--

`myVar` devrait être égal à `10`.

```js
assert(myVar === 10);
```

`myVar = myVar - 1;` doit être modifié.

```js
assert(
  /let\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code)
);
```

Vous devez utiliser l'opérateur `--` sur `myVar`.

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

Vous ne devez pas modifier le code au-dessus du commentaire spécifié.

```js
assert(/let myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 11;

// Ne changez que le code sous cette ligne
myVar = myVar - 1;
```

# --solutions--

```js
let myVar = 11;
myVar--;
```
