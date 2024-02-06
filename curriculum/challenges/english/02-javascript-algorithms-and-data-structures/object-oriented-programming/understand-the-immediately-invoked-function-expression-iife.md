---
id: 587d7db2367417b2b2512b8b
title: Comprendre l'expression de la fonction immédiatement invoquée (IIFE)
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

Un modèle courant en JavaScript consiste à exécuter une fonction dès qu'elle est déclarée :

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

Il s'agit d'une expression de fonction anonyme qui s'exécute immédiatement, et qui produit `Chirp, chirp!` immédiatement.

Notez que la fonction n'a pas de nom et n'est pas stockée dans une variable. Les deux parenthèses () à la fin de l'expression de la fonction font qu'elle est immédiatement exécutée ou invoquée. Ce modèle est connu sous le nom d'expression de fonction immédiatement invoquée ou <dfn>IIFE</dfn>.

# --instructions--

Réécrivez la fonction `makeNest` et supprimez son appel pour en faire une expression de fonction anonyme immédiatement invoquée (IIFE).

# --hints--

La fonction doit être anonyme.

```js
assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, '')));
```

Votre fonction doit avoir des parenthèses à la fin de l'expression pour l'appeler immédiatement.

```js
assert(/\(.*(\)\(|\}\(\))\)/.test(code.replace(/[\s;]/g, '')));
```

# --seed--

## --seed-contents--

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
```

# --solutions--

```js
(function () {
  console.log("A cozy nest is ready");
})();
```

---

```js
(function () {
  console.log("A cozy nest is ready");
}());
```

---

```js
(() => {
  console.log("A cozy nest is ready");
})();
```

---

```js
(() =>
  console.log("A cozy nest is ready")
)();
```
