---
id: 599a789b454f2bbd91a3ff4d
title: Entraînez-vous à comparer différentes valeurs
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

Dans les deux derniers défis, nous avons appris à connaître l'opérateur d'égalité (`==`) et l'opérateur d'égalité stricte (`===`). Faisons une rapide révision et exerçons-nous à utiliser ces opérateurs un peu plus.

Si les valeurs comparées ne sont pas du même type, l'opérateur d'égalité effectue une conversion de type, puis évalue les valeurs. En revanche, l'opérateur d'égalité stricte compare le type de données et la valeur tels quels, sans convertir un type en l'autre.

**Exemples**

`3 == '3'` renvoie `vrai` car JavaScript effectue une conversion de type de la chaîne de caractères en nombre. `3 === '3'` renvoie false car les types sont différents et la conversion de type n'est pas effectuée.

**Note:** En JavaScript, vous pouvez vérifier le type d'une variable ou d'une valeur avec l'opérateur `typeof`, comme suit :

```js
typeof 3
typeof '3'
```

`typeof 3` renvoie la chaîne `number`, et `typeof '3'` renvoie la chaîne `string`.

# --instructions--

La fonction `compareEquality` de l'éditeur compare deux valeurs en utilisant l'opérateur d'égalité. Modifiez la fonction pour qu'elle ne renvoie la chaîne `Egal` que lorsque les valeurs sont strictement égales.
# --hints--

`compareEquality(10, "10")` devrait renvoyer la chaîne `Pas Egal`.

```js
assert(compareEquality(10, '10') === 'Pas Egal');
```

`compareEquality("20", 20)` devrait retourner la chaine `Pas Egal`

```js
assert(compareEquality('20', 20) === 'Pas Egal');
```

Vous devez utiliser l'opérateur `===`.

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Modifiez cette ligne
    return "Egal";
  }
  return "Pas Egal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Egal";
  }
  return "Pas Egal";
}
```
