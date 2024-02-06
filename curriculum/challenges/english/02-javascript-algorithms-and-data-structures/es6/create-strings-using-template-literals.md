---
id: 587d7b8a367417b2b2512b4e
title: Créer des chaînes de caractères en utilisant des littéraux de modèle (Template literal)
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

Une nouvelle fonctionnalité de ES6 est le <dfn>template literal</dfn>. Il s'agit d'un type spécial de chaîne de caractères qui facilite la création de chaînes de caractères complexes.

Les templates literals vous permettent de créer des chaînes de plusieurs lignes et d'utiliser des fonctionnalités d'interpolation de chaînes pour créer des chaînes de caractères.

Considérez le code ci-dessous :

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

La console affiche les chaînes `Hello, my name is Zodiac Hasbro!` et `I am 56 years old.`.

Il s'est passé beaucoup de choses ici. Premièrement, l'exemple utilise des barres obliques inversées (` `` `), et non des guillemets (`'` ou `"`), pour envelopper la chaîne. Deuxièmement, remarquez que la chaîne de caractères est multi-lignes, à la fois dans le code et dans la sortie. Cela évite d'insérer des `\n` dans les chaînes de caractères. La syntaxe `${variable}` utilisée ci-dessus est un caractère de remplacement. En fait, vous n'aurez plus à utiliser la concaténation avec l'opérateur `+`. Pour ajouter des variables à des chaînes, il suffit de déposer la variable dans une chaîne modèle et de l'entourer de `${` et `}`. De même, vous pouvez inclure d'autres expressions dans votre littéral de chaîne, par exemple `${a + b}`. Cette nouvelle façon de créer des chaînes de caractères vous donne plus de flexibilité pour créer des chaînes de caractères robustes.

# --instructions--

Utilisez la syntaxe du littéral de modèle avec des backticks pour créer un tableau de chaînes d'éléments de liste (`li`). Le texte de chaque élément de liste doit être un des éléments du tableau de la propriété `failure` de l'objet `result` et avoir un attribut `class` avec la valeur `text-warning`. La fonction `makeList` doit retourner le tableau de chaînes d'éléments de liste.

Utilisez une méthode d'itération (n'importe quel type de boucle) pour obtenir le résultat souhaité (voir ci-dessous).

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` doit être un tableau contenant les messages `result failure`.

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` doit être égal à la sortie spécifiée.

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

Il convient d'utiliser des chaînes de modèles et l'interpolation d'expressions.

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

Un itérateur doit être utilisé.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --seed--

## --seed-contents--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Ne changez que le code en dessous de cette ligne
  const failureItems = [];
  // Ne changez que le code au-dessus de cette ligne

  return failureItems;
}

const failuresList = makeList(result.failure);
```

# --solutions--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  return arr.map(val => `<li class="text-warning">${val}</li>`);
}

const failuresList = makeList(result.failure);
```
