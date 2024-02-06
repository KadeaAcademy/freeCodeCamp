---
id: aa7697ea2477d1316795783b
title: Pig Latin
challengeType: 5
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

Le Pig Latin est une façon de modifier les mots anglais. Les règles sont les suivantes :

\- Si un mot commence par une consonne, prenez la première consonne ou groupe de consonnes, déplacez-la à la fin du mot et ajoutez-y `ay`.

\- Si un mot commence par une voyelle, ajoutez simplement "way" à la fin.

# --instructions--

Traduit la chaîne de caractères fournie en Pig Latin. Les chaînes d'entrée sont garanties comme étant des mots anglais en minuscules.

# --hints--

`translatePigLatin("california")` devrait retourner la chaine `aliforniacay`.

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` devrait retourner la chaine `aragraphspay`.

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` devrait retourner la chaine `oveglay`.

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` devrait retourner la chaine `algorithmway`.

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` devrait retourner la chaine `eightway`.

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

Doit traiter les mots dont la première voyelle se trouve au milieu du mot. `translatePigLatin("schwartz")` devrait retourner la chaine `artzschway`.

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

Devrait gérer les mots sans voyelles. `translatePigLatin("rhythm")` devrait retourner la chaine `rhythmay`.

```js
assert.deepEqual(translatePigLatin('rhythm'), 'rhythmay');
```

# --seed--

## --seed-contents--

```js
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
```

# --solutions--

```js
function translatePigLatin(str) {
  if (isVowel(str.charAt(0))) return str + "way";
  var front = [];
  str = str.split('');
  while (str.length && !isVowel(str[0])) {
    front.push(str.shift());
  }
  return [].concat(str, front).join('') + 'ay';
}

function isVowel(c) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}
```
