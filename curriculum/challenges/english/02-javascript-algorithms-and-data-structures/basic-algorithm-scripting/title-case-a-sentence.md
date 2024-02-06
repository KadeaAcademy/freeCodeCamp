---
id: ab6137d4e35944e21037b769
title: Mettre en majuscule la première lettre des mots dans une phrase
challengeType: 5
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

Renvoie la chaîne de caractères fournie avec la première lettre de chaque mot en majuscule. Assurez-vous que le reste du mot est en minuscule.

Pour les besoins de cet exercice, vous devez également mettre en majuscules les mots de liaison tels que `le/la` et `de`.

# --hints--

`titleCase("I'm a little tea pot")` doit retourner une chaîne.

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")` doit retourner la chaîne `I'm A Little Tea Pot`.

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` doit retourner la chaîne `Short And Stout`.

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` doit retourner la chaîne `Here Is My Handle Here Is My Spout`.

```js
assert(
  titleCase('HERE IS MY HANDLE HERE IS MY SPOUT') ===
    'Here Is My Handle Here Is My Spout'
);
```

# --seed--

## --seed-contents--

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
```

# --solutions--

```js
function titleCase(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");
```
