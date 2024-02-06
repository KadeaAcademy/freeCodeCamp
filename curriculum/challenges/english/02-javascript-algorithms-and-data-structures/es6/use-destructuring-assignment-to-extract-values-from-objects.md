---
id: 5cfa550e84205a357704ccb6
title: Utiliser l'affectation de déstructuration pour extraire les valeurs des objets
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>L'affectation de déstructuration</dfn> est une syntaxe spéciale introduite dans ES6, pour assigner proprement des valeurs prises directement dans un objet.

Considérons le code ES5 suivant :

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` aurait une valeur de la chaîne `John Doe`, et `age` aurait le nombre `34`.

Voici une instruction d'affectation équivalente utilisant la syntaxe de déstructuration ES6 :

```js
const { name, age } = user;
```

Encore une fois, `name` aura une valeur de la chaîne `John Doe`, et `age` aura le nombre `34`.

Ici, les variables `name` et `age` seront créées et se verront attribuer les valeurs respectives tirées de l'objet `user`. Vous pouvez voir à quel point c'est plus propre.

Vous pouvez extraire autant ou aussi peu de valeurs de l'objet que vous le souhaitez.

# --instructions--

Remplacez les deux affectations par une affectation de déstructuration équivalente. Elle devrait toujours affecter aux variables `today` et `tomorrow` les valeurs de `today` et `tomorrow` de l'objet `HIGH_TEMPERATURES`.

# --hints--

Vous devez supprimer la syntaxe d'affectation ES5.

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

Vous devez utiliser la déstructuration pour créer la variable `today`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

Vous devez utiliser la déstructuration pour créer la variable `tomorrow`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` doit être égal à `77` et `tomorrow` doit être égal à `80`.

```js
assert(today === 77 && tomorrow === 80);
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

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Ne changez que le code au-dessus de cette ligne
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
