---
id: bd7123c9c441eddfaeb5bdef
title: Comprendre les valeurs booléennes
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

Un autre type de données est le <dfn>Boolean</dfn>. Les booléens ne peuvent prendre que l'une des deux valeurs suivantes : `true` (vrai) ou `false` (faux). Ce sont essentiellement de petits interrupteurs marche-arrêt, où `true` est allumé et `false` est éteint. Ces deux états s'excluent mutuellement.

**Note:** Les valeurs booléennes ne sont jamais écrites avec des guillemets. Les chaînes de caractères `"true"` et `"false"` ne sont pas booléennes et n'ont pas de signification particulière en JavaScript.

# --instructions--

Modifiez la fonction `welcomeToBooleans` pour qu'elle renvoie `true` au lieu de `false` lorsque le bouton d'exécution est cliqué. 

# --hints--

La fonction `welcomeToBooleans()` doit retourner une valeur booléenne (`true` ou `false`).

```js
assert(typeof welcomeToBooleans() === 'boolean');
```

`welcomeToBooleans()` devrait retourner `true`.

```js
assert(welcomeToBooleans() === true);
```

# --seed--

## --after-user-code--

```js
welcomeToBooleans();
```

## --seed-contents--

```js
function welcomeToBooleans() {
  // Ne changez que le code en dessous de cette ligne

  return false; // Modifiez cette ligne

  // Ne changez que le code au-dessus de cette ligne
}
```

# --solutions--

```js
function welcomeToBooleans() {
  return true; // Modifiez cette ligne
}
```
