---
id: 56533eb9ac21ba0edf2244ab
title: Comprendre la sensibilité à la casse dans les variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

En JavaScript, toutes les variables et tous les noms de fonctions sont sensibles à la casse. Cela signifie que les majuscules sont importantes.

`MYVAR` n'est pas la même chose que `MyVar` ou `myvar`. Il est possible d'avoir plusieurs variables distinctes avec le même nom mais avec une casse différente. Il est fortement recommandé, pour des raisons de clarté, de ne pas utiliser cette fonctionnalité du langage.

**Meilleure pratique**

Écrivez les noms des variables en JavaScript en <dfn>camelCase</dfn>. En <dfn>camelCase</dfn>, les noms de variables à plusieurs mots ont le premier mot en minuscule et la première lettre de chaque mot suivant est en majuscule.

**Exemples:**

```js
var uneVariable ;
var autreNomVariable ;
var cetteVariableEstTropLongue ;
```

# --instructions--

Modifiez les déclarations et les affectations existantes pour que leurs noms utilisent <dfn>camelCase</dfn>.

Ne créez pas de nouvelles variables.

# --hints--

`studlyCapVar` doit être défini et avoir une valeur de `10`.

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

`properCamelCase` doit être défini et avoir pour valeur la chaîne `A String`.

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

`titleCaseOver` doit être défini et avoir une valeur de `9000`.

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` devrait utiliser la notation camelCase dans les sections de déclaration et d'affectation.

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` doit utiliser la notation camelCase dans les sections de déclaration et d'affectation.

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` doit utiliser la notation camelCase dans les sections de déclaration et d'affectation.

```js
assert(code.match(/titleCaseOver/g).length === 2);
```

# --seed--

## --seed-contents--

```js
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

# --solutions--

```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```
