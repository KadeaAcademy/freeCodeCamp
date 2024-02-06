---
id: 56533eb9ac21ba0edf2244ac
title: Incrémenter un nombre avec JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
dashedName: increment-a-number-with-javascript
---

# --description--

Vous pouvez facilement <dfn>incrémenter</dfn> ou ajouter un à une variable avec l'opérateur `++`.

```js
i++;
```

est l'équivalent de

```js
i = i + 1;
```

**Note:** La ligne entière devient `i++;`, éliminant le besoin du signe égal.

# --instructions--

Modifiez le code pour utiliser l'opérateur `++` sur `myVar`.

# --hints--

`myVar` devrait être égal à `88`.

```js
assert(myVar === 88);
```

Vous ne devez pas utiliser l'opérateur d'affectation.

```js
assert(
  /let\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code)
);
```

Vous devez utiliser l'opérateur `++`.

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
```

Vous ne devez pas modifier le code au-dessus du commentaire spécifié.

```js
assert(/let myVar = 87;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 87;

// Ne changez que le code sous cette ligne
myVar = myVar + 1;
```

# --solutions--

```js
let myVar = 87;
myVar++;
```
