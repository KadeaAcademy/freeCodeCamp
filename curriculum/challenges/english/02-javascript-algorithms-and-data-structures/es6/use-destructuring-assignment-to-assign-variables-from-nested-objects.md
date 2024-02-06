---
id: 587d7b89367417b2b2512b4a
title: Utiliser l'affectation de déstructuration pour affecter des variables à partir d'objets imbriqués
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

Vous pouvez utiliser les mêmes principes que ceux des deux leçons précédentes pour déstructurer les valeurs des objets imbriqués.

En utilisant un objet similaire aux exemples précédents :

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Voici comment extraire les valeurs des propriétés d'un objet et les affecter à des variables portant le même nom 

```js
const { johnDoe: { age, email }} = user;
```

Et voici comment vous pouvez affecter les valeurs des propriétés d'un objet à des variables portant des noms différents :

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

Remplacez les deux affectations par une affectation de déstructuration équivalente. Elle devrait toujours affecter aux variables `lowToday` et `highToday` les valeurs de `today.low` et `today.high` de l'objet `LOCAL_FORECAST`.

# --hints--

Vous devez supprimer la syntaxe d'affectation ES5.

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

Vous devez utiliser la déstructuration pour créer la variable `lowToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

Vous devez utiliser la déstructuration pour créer la variable `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` doit être égal à `64` et `highToday` doit être égal à `77`.

```js
assert(lowToday === 64 && highToday === 77);
```

# --seed--

## --seed-contents--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Ne changez que le code en dessous de cette ligne
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Ne changez que le code au-dessus de cette ligne
```

# --solutions--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
 
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```
