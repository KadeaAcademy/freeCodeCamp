---
id: 587d7b8e367417b2b2512b5e
title: Éviter les mutations et les effets secondaires grâce à la programmation fonctionnelle
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

Si vous ne l'avez pas encore compris, le problème dans le défi précédent était l'appel à `splice` dans la fonction `tabClose()`. Malheureusement, `splice` modifie le tableau original sur lequel il est appelé, donc le second appel a utilisé un tableau modifié, et a donné des résultats inattendus.

Il s'agit d'un petit exemple d'un schéma beaucoup plus large - vous appelez une fonction sur une variable, un tableau ou un objet, et la fonction modifie la variable ou quelque chose dans l'objet.

L'un des principes fondamentaux de la programmation fonctionnelle est de ne pas modifier les choses. Les modifications entraînent des bogues. Il est plus facile de prévenir les bogues en sachant que vos fonctions ne modifient rien, y compris les arguments de la fonction ou toute variable globale.

L'exemple précédent ne comportait pas d'opérations compliquées, mais la méthode `splice` a modifié le tableau original, ce qui a entraîné un bogue.

Souvenez-vous qu'en programmation fonctionnelle, le fait de changer ou d'altérer des choses est appelé <dfn>mutation</dfn>, et le résultat est appelé <dfn>effet secondaire</dfn>. Idéalement, une fonction devrait être une <dfn>fonction pure</dfn>, c'est-à-dire qu'elle ne provoque aucun effet secondaire.

Essayons de maîtriser cette discipline et de ne modifier aucune variable ni aucun objet dans notre code.

# --instructions--

Complétez le code de la fonction `incrementer` pour qu'elle renvoie la valeur de la variable globale `fixedValue` augmentée de un.

# --hints--

Votre fonction `incrementer` ne doit pas changer la valeur de `fixedValue` (qui est `4`).

```js
incrementer();
assert(fixedValue === 4);
```

Votre fonction `incrementer` doit retourner une valeur supérieure d'une unité à la valeur `fixedValue`.

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

Votre fonction `incrementer` doit retourner une valeur basée sur la valeur globale de la variable `fixedValue`.

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// La variable globale
let fixedValue = 4;

function incrementer() {
// Ne modifiez que le code situé en dessous de cette ligne


// Ne modifiez que le code au-dessus de cette ligne
}
```

# --solutions--

```js
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
