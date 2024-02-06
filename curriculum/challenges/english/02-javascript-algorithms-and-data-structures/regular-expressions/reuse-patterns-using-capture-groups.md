---
id: 587d7dbb367417b2b2512baa
title: Réutiliser les modèles en utilisant les groupes de capture
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

Disons que vous voulez faire correspondre un mot qui apparaît plusieurs fois comme ci-dessous.

```js
let repeatStr = "row row row your boat";
```

You pourriez utiliser `/row row row/`, mais que faire si vous ne connaissez pas le mot spécifique répété ? Les groupes de capture peuvent être utilisés pour trouver des sous-chaînes répétées.

Les groupes de capture sont construits en mettant entre parenthèses le motif regex à capturer. Dans ce cas, l'objectif est de capturer un mot composé de caractères alphanumériques. Le groupe de capture sera donc `\w+` entre parenthèses : `/(\w+)/`.

La sous-chaîne correspondant au groupe est enregistrée dans une "variable" temporaire, à laquelle on peut accéder dans la même regex en utilisant une barre oblique inverse et le numéro du groupe de capture (par exemple `\1`). Les groupes de capture sont automatiquement numérotés en fonction de la position de leurs parenthèses ouvrantes (de gauche à droite), en commençant par 1.

L'exemple ci-dessous correspond à un mot qui apparaît trois fois, séparé par des espaces :

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // retourne true
repeatStr.match(repeatRegex); // retourne ["row row row", "row"]
```

L'utilisation de la méthode `.match()` sur une chaîne de caractères renverra un tableau avec la sous-chaîne trouvée, ainsi que ses groupes capturés.


# --instructions--

Utilisez les groupes de capture dans `reRegex` pour faire correspondre une chaîne de caractères qui consiste uniquement en un même nombre répété exactement trois fois et séparé par des espaces simples.

# --hints--

Votre regex doit utiliser la classe de caractères raccourcis pour les chiffres.

```js
assert(reRegex.source.match(/\\d/));
```

Votre regex doit réutiliser un groupe de capture deux fois.

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

Votre regex doit correspondre à la chaîne de caractères `42 42 42`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

Votre regex doit correspondre à la chaîne de caractères `100 100 100`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('100 100 100'));
```

Votre regex ne doit pas correspondre à la chaîne de caractères `42 42 42 42`.

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

Votre regex ne doit pas correspondre à la chaîne de caractères `42 42`.

```js
assert.equal('42 42'.match(reRegex.source), null);
```

Votre regex ne doit pas correspondre à la chaîne de caractères `101 102 103`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

Votre regex ne doit pas correspondre à la chaîne de caractères `1 2 3`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

Votre regex doit correspondre à la chaîne de caractères `10 10 10`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Modifiez cette ligne
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
```
