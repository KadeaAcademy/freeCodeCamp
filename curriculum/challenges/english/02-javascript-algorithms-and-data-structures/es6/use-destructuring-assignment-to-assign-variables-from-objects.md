---
id: 587d7b89367417b2b2512b49
title: Utiliser l'affectation de la déstructuration pour affecter des variables à partir d'objets
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

La déstructuration vous permet d'attribuer un nouveau nom de variable lors de l'extraction des valeurs. Pour ce faire, il suffit de placer le nouveau nom après les deux points lors de l'attribution de la valeur.

En utilisant le même objet que dans le dernier exemple :

```js
const user = { name: 'John Doe', age: 34 };
```

Voici comment vous pouvez donner de nouveaux noms de variables dans l'affectation :

```js
const { name: userName, age: userAge } = user;
```

Vous pouvez le lire comme suit : " récupérer la valeur de `user.name` et l'affecter à une nouvelle variable nommée `userName` " et ainsi de suite. La valeur de `userName` serait la chaîne `John Doe`, et la valeur de `userAge` serait le nombre `34`.

# --instructions--

Remplacez les deux affectations par une affectation de déstructuration équivalente. Elle devrait toujours affecter aux variables `highToday` et `highTomorrow` les valeurs de `today` et `tomorrow` de l'objet `HIGH_TEMPERATURES`.

# --hints--

Vous devez supprimer la syntaxe d'affectation ES5.

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

Vous devez utiliser la déstructuration pour créer la variable `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

Vous devez utiliser la déstructuration pour créer la variable `highTomorrow`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` doit être égal à `77` et `highTomorrow` doit être égal à `80`.

```js
assert(highToday === 77 && highTomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Ne changez que le code en dessous de cette ligne
  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Ne changez que le code au-dessus de cette ligne
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```
