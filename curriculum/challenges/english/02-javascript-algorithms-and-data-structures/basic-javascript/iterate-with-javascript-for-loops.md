---
id: cf1111c1c11feddfaeb5bdef
title: Itérer avec les boucles For de JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
dashedName: iterate-with-javascript-for-loops
---

# --description--

Vous pouvez exécuter le même code plusieurs fois en utilisant une boucle.

Le type de boucle JavaScript le plus courant est appelé boucle `for` car elle s'exécute un nombre spécifique de fois.

Les boucles For sont déclarées avec trois expressions facultatives séparées par des points-virgules :

`for (a ; b ; c)`, où `a` est la déclaration d'initialisation, `b` est la déclaration de condition, et `c` est l'expression finale.

L'instruction d'initialisation est exécutée une seule fois avant le début de la boucle. Elle est généralement utilisée pour définir et configurer votre variable de boucle.

L'instruction de condition est évaluée au début de chaque itération de la boucle et continue tant qu'elle est évaluée à `vrai`. Lorsque la condition est "fausse" au début de l'itération, la boucle cesse de s'exécuter. Cela signifie que si la condition est fausse au départ, votre boucle ne s'exécutera jamais.

L'expression finale est exécutée à la fin de chaque itération de la boucle, avant la vérification de la condition suivante, et est généralement utilisée pour incrémenter ou décrémenter le compteur de la boucle.

Dans l'exemple suivant, on initialise avec `i = 0` et on itère tant que notre condition `i < 5` est vraie. Nous incrémenterons `i` de `1` à chaque itération de la boucle avec `i++` comme expression finale.

```js
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` aura maintenant la valeur `[0, 1, 2, 3, 4]`.

# --instructions--

Utilisez une boucle `for` pour insérer les valeurs 1 à 5 dans `myArray`.

# --hints--

Vous devriez utiliser une boucle `for` pour cela.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` devrait être égal à `[1, 2, 3, 4, 5]`.

```js
assert.deepEqual(myArray, [1, 2, 3, 4, 5]);
```

# --seed--

## --after-user-code--

```js
if (typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Ne changez que le code en dessous de cette ligne

```

# --solutions--

```js
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
```
