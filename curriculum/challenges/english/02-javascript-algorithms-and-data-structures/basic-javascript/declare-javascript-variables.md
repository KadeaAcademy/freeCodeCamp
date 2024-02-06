---
id: bd7123c9c443eddfaeb5bdef
title: Déclarer des variables JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

En informatique, les <dfn>données</dfn> sont tout ce qui a du sens pour l'ordinateur. JavaScript fournit huit <dfn>types de données</dfn> différents qui sont `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number` et `object`.

Par exemple, les ordinateurs font la distinction entre les nombres, tels que le nombre `12`, et les `chaînes`, telles que `"12"`, `"chien"` ou `"123 chats"`, qui sont des collections de caractères. Les ordinateurs peuvent effectuer des opérations mathématiques sur un nombre, mais pas sur une chaîne.

Les <dfn>variables</dfn> permettent aux ordinateurs de stocker et de manipuler des données de manière dynamique. Pour ce faire, ils utilisent une "étiquette" pour pointer vers les données plutôt que d'utiliser les données elles-mêmes. N'importe lequel des huit types de données peut être stocké dans une variable.

Les variables sont similaires aux variables x et y que vous utilisez en mathématiques, ce qui signifie qu'elles sont un nom simple pour représenter les données auxquelles nous voulons nous référer. Les variables informatiques diffèrent des variables mathématiques en ce qu'elles peuvent stocker des valeurs différentes à des moments différents.

Nous disons à JavaScript de créer ou de <dfn>déclarer</dfn> une variable en plaçant le mot-clé `var` devant, comme ceci :

```js
var notreNom;
```

crée une variable appelée `notreNom`. En JavaScript, nous terminons les déclarations par des points-virgules. Les noms de variables peuvent être composés de chiffres, de lettres et de `$` ou `_`, mais ne peuvent pas contenir d'espaces ni commencer par un chiffre.

# --instructions--

Utilisez le mot-clé `var` pour créer une variable appelée `monNom`.

**Hint**  
Regardez l'exemple `notreNom` ci-dessus si vous êtes bloqué.

# --hints--

Vous devez déclarer `monNom` avec le mot-clé `var`, en terminant par un point-virgule

```js
assert(/var\s+monNom\s*;/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof monNom !== "undefined"){(function(v){return v;})(monNom);}
```

## --seed-contents--

```js

```

# --solutions--

```js
var monNom;
```
