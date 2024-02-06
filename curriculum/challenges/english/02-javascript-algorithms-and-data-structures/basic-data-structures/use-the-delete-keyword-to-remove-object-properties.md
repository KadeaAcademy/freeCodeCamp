---
id: 587d7b7c367417b2b2512b1b
title: Utiliser le mot clé delete pour supprimer les propriétés d'un objet
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

Vous savez maintenant ce que sont les objets, leurs caractéristiques de base et leurs avantages. En bref, ce sont des conteneurs clé-valeur qui offrent un moyen flexible et intuitif de structurer les données, ***et***, ils offrent un temps de recherche très rapide. Dans le reste de ces défis, nous décrirons plusieurs opérations courantes que vous pouvez effectuer sur les objets afin que vous puissiez vous familiariser avec l'utilisation de ces structures de données utiles dans vos programmes.

Dans les défis précédents, nous avons à la fois ajouté et modifié les paires clé-valeur d'un objet. Ici, nous allons voir comment *supprimer* une paire clé-valeur d'un objet.

Reprenons l'exemple de notre objet `fruits` une dernière fois. Si nous voulons supprimer la clé `pommes`, nous pouvons le faire en utilisant le mot-clé `delete` comme ceci :

```js
delete fruits.pommes;
```

# --instructions--

Utilisez le mot-clé delete pour supprimer les clés `oranges`, `prunes`, et `fraises` de l'objet `fruits`.

# --hints--

L'objet `fruits` ne devrait avoir que trois clés : `pommes`, `raisins`, et `bananes`.

```js
assert(
  !fruits.hasOwnProperty('oranges') &&
    !fruits.hasOwnProperty('prunes') &&
    !fruits.hasOwnProperty('fraises') &&
    Object.keys(fruits).length === 3
);
```

Les clés `oranges`, `prunes`, et `fraises` doivent être supprimées en utilisant `delete`.

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/prunes:/) !== -1 &&
    code.search(/fraises:/) !== -1
);
```

# --seed--

## --seed-contents--

```js
let fruits = {
  pommes: 25,
  oranges: 32,
  prunes: 28,
  bananes: 13,
  raisins: 35,
  fraises: 27
};

// Only change code below this line

// Only change code above this line

console.log(fruits);
```

# --solutions--

```js
let fruits = {
  pommes: 25,
  oranges: 32,
  prunes: 28,
  bananes: 13,
  raisins: 35,
  fraises: 27
};

delete fruits.oranges;
delete fruits.prunes;
delete fruits.fraises;

console.log(fruits);
```
