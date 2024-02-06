---
id: 587d7dba367417b2b2512ba9
title: Lookahead positif et négatif
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

Les <dfn>Lookaheads</dfn> sont des motifs qui indiquent à JavaScript d'anticiper dans votre chaîne de caractères pour rechercher des motifs plus loin. Cela peut être utile lorsque vous souhaitez rechercher plusieurs motifs dans la même chaîne.

Il existe deux types de lookaheads : le <dfn>lookahead positif</dfn> et le <dfn>lookahead négatif</dfn>.

Un lookahead positif s'assure que l'élément du modèle de recherche est présent, mais ne le fait pas correspondre. Un lookahead positif est utilisé comme `(?=...)` où le `...` est la partie requise qui ne correspond pas.

En revanche, un lookahead négatif cherchera à s'assurer que l'élément du modèle de recherche n'est pas présent. Un lookahead négatif est utilisé comme `( ?!...)` où le `...` est le motif que vous ne voulez pas voir apparaître. Le reste du motif est retourné si la partie négative du lookahead n'est pas présente.

Les lookaheads sont un peu confus mais quelques exemples vous aideront.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

Ces deux appels `match` renverraient `["q"]`.

Une utilisation plus pratique des lookaheads est de vérifier deux ou plusieurs motifs dans une chaîne. Voici un vérificateur de mot de passe (naïvement) simple qui recherche entre 3 et 6 caractères et au moins un chiffre :

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

Utilisez les lookaheads dans le `pwRegex` pour faire correspondre les mots de passe qui ont une longueur supérieure à 5 caractères, et qui ont deux chiffres consécutifs.

# --hints--

Votre regex doit utiliser deux `lookaheads` positifs.

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

Your regex should not match the string `astronaut`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

Votre regex ne doit pas correspondre à la chaîne `banan1`.

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

Votre regex doit correspondre à la chaîne `bana12`.

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

Votre regex doit correspondre à la chaîne `abc123`.

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

Votre regex ne doit pas correspondre à la chaîne `12345`.

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

Votre regex doit correspondre à la chaîne `8pass99`.

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

Votre regex ne doit pas correspondre à la chaîne `1a2bcde`.

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

Votre regex doit correspondre à la chaîne `astr1on11aut`.

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Modifiez cette ligne
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```
