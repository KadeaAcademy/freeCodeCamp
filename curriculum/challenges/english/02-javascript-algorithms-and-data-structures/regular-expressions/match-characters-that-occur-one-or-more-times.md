---
id: 587d7db6367417b2b2512b99
title: Rechercher des caractères qui apparaissent une ou plusieurs fois.
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

Parfois, vous devez identifier un caractère (ou un groupe de caractères) qui apparaît une ou plusieurs fois de suite. Cela signifie qu'il apparaît au moins une fois et qu'il peut être répété.

Vous pouvez utiliser le caractère `+` pour vérifier si c'est le cas. N'oubliez pas que le caractère ou le motif doit être présent consécutivement. Autrement dit, le caractère doit se répéter l'un après l'autre.

Par exemple, `/a+/g` trouvera une correspondance dans `abc` et retournera `["a"]`. À cause du `+`, elle trouverait également une seule correspondance dans `aabc` et renverrait `["aa"]`.

Si elle vérifiait plutôt la chaîne `abab`, elle trouverait deux correspondances et renverrait `["a", "a"]` car les caractères `a` ne sont pas alignés - il y a un `b` entre eux. Enfin, comme il n'y a pas de `a` dans la chaîne `bcd`, elle ne trouverait pas de correspondance.

# --instructions--

Vous voulez trouver des correspondances lorsque la lettre `s` apparaît une ou plusieurs fois dans `Mississippi`. Écrivez une regex qui utilise le signe `+`.

# --hints--

Votre regex `myRegex` doit utiliser le signe `+` pour correspondre à un ou plusieurs caractères `s`.

```js
assert(/\+/.test(myRegex.source));
```

Votre regex `myRegex` doit correspondre à 2 éléments.

```js
assert(result.length == 2);
```

La variable `result` doit être un tableau contenant deux correspondances de `ss`.

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Modifiez cette ligne
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Modifiez cette ligne
let result = difficultSpelling.match(myRegex);
```
