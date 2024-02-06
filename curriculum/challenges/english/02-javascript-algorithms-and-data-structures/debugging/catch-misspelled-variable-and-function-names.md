---
id: 587d7b84367417b2b2512b35
title: Repérer les noms de variables et de fonctions mal orthographiés
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

Les méthodes `console.log()` et `typeof` sont les deux principaux moyens de vérifier les valeurs intermédiaires et les types de sortie du programme. Il est maintenant temps d'aborder les formes courantes que prennent les bugs. Un problème de niveau syntaxique avec lequel les dactylographes rapides peuvent compatir est l'humble erreur d'orthographe.

Des caractères transposés, manquants ou mal capitalisés dans un nom de variable ou de fonction feront que le navigateur cherchera un objet qui n'existe pas - et se plaindra sous la forme d'une erreur de référence. Les noms de variables et de fonctions JavaScript sont sensibles à la casse.

# --instructions--

Corriger les deux erreurs d'orthographe dans le code pour que le calcul du `netWorkingCapital` fonctionne.

# --hints--

Vérifiez l'orthographe des deux variables utilisées dans le calcul du fonds de roulement net (`netWorkingCapital`), la sortie de la console devrait montrer que "Le fonds de roulement net est : 2".

```js
assert(netWorkingCapital === 2);
```

Il ne doit y avoir aucun cas de variables mal orthographiées dans le code.

```js
assert(!code.match(/recievables/g));
```

La variable `receivables` doit être déclarée et utilisée correctement dans le code.

```js
assert(code.match(/receivables/g).length == 2);
```

Il ne doit y avoir aucun cas de variables mal orthographiées dans le code.

```js
assert(!code.match(/payable;/g));
```

La variable `payables` doit être déclarée et utilisée correctement dans le code.

```js
assert(code.match(/payables/g).length == 2);
```

# --seed--

## --seed-contents--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Le fonds de roulement net est: ${netWorkingCapital}`);
```

# --solutions--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Le fonds de roulement net est: ${netWorkingCapital}`);
```
