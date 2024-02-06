---
id: 587d7b7c367417b2b2512b18
title: Ajouter des paires clé-valeur à des objets JavaScript
challengeType: 1
forumTopicId: 301153
dashedName: add-key-value-pairs-to-javascript-objects
---

# --description--

À la base, les objets ne sont que des collections de paires clé-valeur. En d'autres termes, il s'agit d'éléments de données (valeurs) associés à des identifiants uniques appelés propriétés (clés). Prenons un exemple :

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

Le code ci-dessus définit un objet personnage de jeu vidéo Tekken appelé `tekkenCharacter`. Il possède trois propriétés, chacune d'entre elles correspondant à une valeur spécifique. Si vous voulez ajouter une propriété supplémentaire, telle que "origine", vous pouvez le faire en assignant `origin` à l'objet :

```js
tekkenCharacter.origin = 'South Korea';
```

Ceci utilise la notation par points. Si vous observez l'objet `tekkenCharacter`, il comprendra maintenant la propriété `origin`. Hwoarang avait aussi des cheveux orange distincts. Vous pouvez ajouter cette propriété avec la notation entre parenthèses en faisant :

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

La notation entre crochets est nécessaire si votre propriété comporte un espace ou si vous souhaitez utiliser une variable pour nommer la propriété. Dans le cas ci-dessus, la propriété est placée entre guillemets pour indiquer qu'il s'agit d'une chaîne de caractères et elle sera ajoutée exactement comme indiqué. Sans les guillemets, elle sera évaluée comme une variable et le nom de la propriété sera la valeur de la variable. Voici un exemple avec une variable :

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

Après avoir ajouté tous les exemples, l'objet ressemblera à ceci :

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

# --instructions--

Un objet `foods` a été créé avec trois entrées. En utilisant la syntaxe de votre choix, ajoutez-lui trois autres entrées : `bananas` avec la valeur `13`, `grapes` avec la valeur '35', et `strawberries` avec la valeur `27`.

# --hints--

`foods` doit être un objet.

```js
assert(typeof foods === 'object');
```

L'objet `foods` devrait avoir une clé `bananas` avec la valeur `13`.

```js
assert(foods.bananas === 13);
```

L'objet `foods` devrait avoir une clé `grapes` avec une valeur de `35`.

```js
assert(foods.grapes === 35);
```

L'objet `foods` devrait avoir une clé `strawberries` avec la valeur `27`.

```js
assert(foods.strawberries === 27);
```

Les paires clé-valeur doivent être définies en utilisant la notation par points ou par crochets.

```js
assert(
  code.search(/bananas:/) === -1 &&
    code.search(/grapes:/) === -1 &&
    code.search(/strawberries:/) === -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Ne changez que le code en dessous de cette ligne

// Ne changez que le code au-dessus de cette ligne

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
```
