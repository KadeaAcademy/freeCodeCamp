---
id: 587d7db6367417b2b2512b9b
title: Trouver des caractères avec la correspondance paresseuse
challengeType: 1
forumTopicId: 301341
dashedName: find-characters-with-lazy-matching
---

# --description--

Dans les expressions régulières, une correspondance avide trouve la partie la plus longue possible d'une chaîne de caractères qui correspond au motif de l'expression rationnelle et la renvoie comme correspondance. L'alternative s'appelle une correspondance paresseuse, qui trouve la plus petite partie possible de la chaîne de caractères qui correspond au motif de l'expression rationnelle.

Vous pouvez appliquer la regex `/t[a-z]*i/` à la chaîne `"titanic"`. Cette regex est essentiellement un motif qui commence par `t`, se termine par `i`, et a quelques lettres entre les deux.

Les expressions régulières sont par défaut gourmandes, donc la correspondance retournerait `["titani"]`. Elle trouve la plus grande sous-chaîne possible qui correspond au motif.

Cependant, vous pouvez utiliser le caractère `?` pour passer à une correspondance paresseuse. Ainsi, la recherche de "titanic"` par rapport à la regex ajustée de `/t[a-z]*?i/` renvoie `["ti"]`.

**Remarque:** L'analyse du HTML avec des expressions régulières doit être évitée, mais le filtrage d'une chaîne HTML avec des expressions régulières est tout à fait acceptable.

# --instructions--

Corrigez l'expression rationnelle `/<.*>/` pour qu'elle renvoie la balise HTML `<h1>` et non le texte `"<h1>L'hiver arrive</h1>"`. Rappelez-vous que le caractère générique `.` dans une expression régulière correspond à n'importe quel caractère.

# --hints--

La variable `result` doit être un tableau contenant `<h1>`.

```js
assert(result[0] == '<h1>');
```

`myRegex` devrait utiliser la correspondance paresseuse

```js
assert(/[^\\][\*\+\?]\?/.test(myRegex));
```

myRegex` ne doit pas inclure la chaîne `h1`.

```js
assert(!myRegex.source.match('h1'));
```

# --seed--

## --seed-contents--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Modifiez cette ligne
let result = text.match(myRegex);
```

# --solutions--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Modifiez cette ligne
let result = text.match(myRegex);
```
