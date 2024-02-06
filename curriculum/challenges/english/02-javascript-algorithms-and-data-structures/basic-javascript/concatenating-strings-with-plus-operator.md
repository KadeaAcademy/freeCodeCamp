---
id: 56533eb9ac21ba0edf2244b7
title: Concaténer des chaînes de caractères avec l'opérateur Plus
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

En JavaScript, lorsque l'opérateur `+` est utilisé avec une valeur `String`, il s'appelle l'opérateur de <dfn>concaténation</dfn>. Vous pouvez créer une nouvelle chaîne à partir d'autres chaînes en les <dfn>concaténant</dfn> ensemble.

**Exemple**

```js
"Je m'appelle Alan," + " je concatène."
```

**Note:** Attention aux espaces. La concaténation n'ajoute pas d'espaces entre les chaînes concaténées, vous devrez donc les ajouter vous-même.

Exemple :

```js
const ourStr = "Je suis le premier. " + "Je viens en second." ;
```

La chaîne `J'arrive en premier. Je viens en second.` s'affiche dans la console.
# --instructions--

Construisez `myStr` à partir des chaînes `C'est le début.` et `C'est la fin.` en utilisant l'opérateur `+`. Veillez à inclure un espace entre les deux chaînes de caractères.

# --hints--

`myStr` devrait avoir une valeur de la chaîne `C'est le début. C'est la fin.`

```js
assert(myStr === "C'est le début. C'est la fin.");
```

Vous devez utiliser l'opérateur `+` pour construire `myStr`.

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

`myStr` doit être créé en utilisant le mot-clé `const`.

```js
assert(/const\s+myStr/.test(code));
```

Vous devez affecter le résultat à la variable `myStr`.

```js
assert(/myStr\s*=/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Modifiez cette ligne
```

# --solutions--

```js
const myStr = "C'est le début. " + "C'est la fin.";
```
