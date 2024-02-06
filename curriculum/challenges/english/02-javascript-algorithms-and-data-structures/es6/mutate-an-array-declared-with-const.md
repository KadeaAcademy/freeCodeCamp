---
id: 587d7b87367417b2b2512b42
title: Mutation d'un tableau déclaré avec const.
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

Si vous n'êtes pas familier avec `const`, consultez [ce défi](/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword).

La déclaration `const` a de nombreux cas d'utilisation dans le JavaScript moderne.

Certains développeurs préfèrent affecter toutes leurs variables en utilisant `const` par défaut, à moins qu'ils ne sachent qu'ils auront besoin de réaffecter la valeur. Dans ce cas seulement, ils utilisent `let`.

Cependant, il est important de comprendre que les objets (y compris les tableaux et les fonctions) affectés à une variable en utilisant `const` sont toujours mutables. L'utilisation de la déclaration `const` empêche seulement la réaffectation de l'identifiant de la variable.

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` entraînera une erreur. Le fichier `console.log` affichera la valeur `[5, 6, 45]`.

Comme vous pouvez le voir, vous pouvez modifier l'objet `[5, 6, 7]` lui-même et la variable `s` pointera toujours vers le tableau modifié `[5, 6, 45]`. Comme tous les tableaux, les éléments du tableau `s` sont mutables, mais comme `const` a été utilisé, vous ne pouvez pas utiliser l'identifiant de la variable `s` pour pointer vers un tableau différent en utilisant l'opérateur d'affectation.

# --instructions--

Un tableau est déclaré comme `const s = [5, 7, 2]`. Changez le tableau en `[2, 5, 7]` en utilisant diverses affectations d'éléments.

# --hints--

Vous ne devez pas remplacer le mot-clé `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` devrait être une variable constante (en utilisant `const`).

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+s/g));
```

Vous ne devez pas modifier la déclaration originale du tableau.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
    )
  );
```

`s` devrait être égal à `[2, 5, 7]`.

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // Ne changez le code qu'en dessous de cette ligne

  // Utiliser s = [2, 5, 7] ne serait pas valide.

  // Ne changez que le code au-dessus de cette ligne
}
editInPlace();
```

# --solutions--

```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```
