---
id: cf1111c1c12feddfaeb1bdef
title: Générer des nombres entiers aléatoires avec JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

C'est formidable de pouvoir générer des nombres décimaux aléatoires, mais c'est encore plus utile si on l'utilise pour générer des nombres entiers aléatoires.

<ol><li>utilisez <code>Math.random()</code> pour générer un nombre décimal aléatoire.</li><li>Multipliez ce nombre décimal aléatoire par <code>20</code>.</li><li>Utilisez une autre fonction, <code>Math.floor()</code> pour arrondir le nombre à l'entier inférieur le plus proche.</li></ol>

Rappelez-vous que `Math.random()` ne peut jamais retourner un `1` et, comme nous arrondissons à l'inférieur, il est impossible d'obtenir réellement `20`. Cette technique nous donnera un nombre entier compris entre " 0 " et " 19 ".

En mettant tout ensemble, voici à quoi ressemble notre code :

```js
Math.floor(Math.random() * 20);
```

Nous appelons `Math.random()`, nous multiplions le résultat par 20, puis nous passons la valeur à la fonction `Math.floor()` pour arrondir la valeur au nombre entier le plus proche.

# --instructions--

Utilisez cette technique pour générer et renvoyer un nombre entier aléatoire compris entre `0` et `9`.

# --hints--

Le résultat de `randomWholeNum` doit être un nombre entier.

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

Vous devriez utiliser `Math.random` pour générer un nombre aléatoire.

```js
assert(code.match(/Math.random/g).length >= 1);
```

Vous auriez dû multiplier le résultat de `Math.random` par 10 pour en faire un nombre compris entre zéro et neuf.

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

Vous devriez utiliser `Math.floor` pour enlever la partie décimale du nombre.

```js
assert(code.match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {

  // Ne changez que le code en dessous de cette ligne

  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
