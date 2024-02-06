---
id: a0b5010f579e69b815e7c5d6
title: Rechercher et remplacer
challengeType: 5
forumTopicId: 16045
dashedName: search-and-replace
---

# --description--

Effectuer une recherche et un remplacement sur la phrase en utilisant les arguments fournis et renvoyer la nouvelle phrase.

Le premier argument est la phrase sur laquelle effectuer la recherche et le remplacement.

Le deuxième argument est le mot que vous allez remplacer (avant).

Le troisième argument est ce par quoi vous remplacerez le deuxième argument (après).

**Note:** Conservez la casse du premier caractère du mot original lorsque vous le remplacez. Par exemple, si vous voulez remplacer le mot `Book` par le mot `dog`, il doit être remplacé par `Dog`.

# --hints--

`myReplace("Let us go to the store", "store", "mall")` devrait retourner la chaîne `Let us go to the mall`.

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` devrait retourner la chaîne `He is Sitting on the couch`.

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace("I think we should look up there", "up", "Down")` devrait retourner la chaîne `I think we should look down there`.

```js
assert.deepEqual(
  myReplace('I think we should look up there', 'up', 'Down'),
  'I think we should look down there'
);
```

`myReplace("This has a spellngi error", "spellngi", "spelling")` devrait retourner la chaîne `This has a spelling error`.

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace("His name is Tom", "Tom", "john")` devrait retourner la chaîne `His name is John`.

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace("Let us get back to more Coding", "Coding", "algorithms")` devrait retourner la chaîne `Let us get back to more Algorithms`.

```js
assert.deepEqual(
  myReplace('Let us get back to more Coding', 'Coding', 'algorithms'),
  'Let us get back to more Algorithms'
);
```

# --seed--

## --seed-contents--

```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

# --solutions--

```js
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
```
