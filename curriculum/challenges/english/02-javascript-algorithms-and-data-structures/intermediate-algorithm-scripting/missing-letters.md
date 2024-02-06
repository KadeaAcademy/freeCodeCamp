---
id: af7588ade1100bde429baf20
title: Lettres manquantes
challengeType: 5
forumTopicId: 16023
dashedName: missing-letters
---

# --description--

Trouve la lettre manquante dans l'intervalle de lettres passé et la renvoie.

Si toutes les lettres sont présentes dans la plage, il renvoie `undefined`.

# --hints--

`fearNotLetter("abce")` devrait retourner la chaîne `d`.

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` devrait retourner la chaîne `i`.

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` devrait retourner la chaîne `u`.

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` devrait retourner la chaîne `e`.

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` devrait retourner `undefined`.

```js
assert.isUndefined(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
```

# --seed--

## --seed-contents--

```js
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");
```

# --solutions--

```js
function fearNotLetter (str) {
  for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
    var letter = String.fromCharCode(i);
    if (str.indexOf(letter) === -1) {
      return letter;
    }
  }

  return undefined;
}
```
