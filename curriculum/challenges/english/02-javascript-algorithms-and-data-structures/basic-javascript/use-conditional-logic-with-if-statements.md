---
id: cf1111c1c12feddfaeb3bdef
title: Utiliser la logique conditionnelle avec les instructions If
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
dashedName: use-conditional-logic-with-if-statements
---

# --description--

Les instructions `if` sont utilisées pour prendre des décisions dans le code. Le mot clé "if" indique à JavaScript d'exécuter le code entre accolades sous certaines conditions, définies entre parenthèses. Ces conditions sont connues sous le nom de conditions booléennes et ne peuvent être que `true` ou `false`.

Lorsque la condition est évaluée à `true`, le programme exécute l'instruction contenue dans les accolades. Lorsque la condition booléenne est évaluée à `false`, l'instruction entre accolades n'est pas exécutée.

**Pseudocode**

<blockquote>if (<i>la condition est true</i>) {<br>  <i>l'instruction est exécutée</i><br>}</blockquote>

**Exemple**

```js
function test (maCondition) {
  if (maCondition) {
    return "C'était vrai";
  }
  return "C'était faux";
}

test(true);
test(false);
```

`test(true)` renvoie la chaîne `C'était vrai`, et `test(false)` renvoie la chaîne `C'était faux`.

Lorsque `test` est appelé avec la valeur `true`, l'instruction `if` évalue `maCondition` pour voir si elle est `true` ou non. Puisque c'est `true`, la fonction renvoie `C'était vrai`. Lorsque nous appelons `test` avec la valeur `false`, `maCondition` n'est *pas* `true` et l'instruction entre accolades n'est pas exécutée et la fonction renvoie `C'était faux`.

# --instructions--

Créez une instruction `if` à l'intérieur de la fonction pour retourner `Oui, c'était vrai` si le paramètre `etaitCeVrai` est `true` et retourner `Non, c'était faux` sinon.

# --hints--

`vraiOuFaux` devrait être une fonction

```js
assert(typeof vraiOuFaux === 'function');
```

`vraiOuFaux(true)` devrait retourner une chaîne de caractères

```js
assert(typeof vraiOuFaux(true) === 'string');
```

`vraiOuFaux(true)` devrait retourner une chaîne de caractères

```js
assert(typeof vraiOuFaux(false) === 'string');
```

`vraiOuFaux(true)` devrait retourner la chaîne de caractères `Oui, c'était vrai`.

```js
assert(vraiOuFaux(true) === "Oui, c'était vrai");
```

`vraiOuFaux(false)` devrait retourner la chaîne `Non, c'était faux`.

```js
assert(vraiOuFaux(false) === "Non, c'était faux");
```

# --seed--

## --seed-contents--

```js
function vraiOuFaux(etaitCeVrai) {
  // Ne changez que le code en dessous de cette ligne



  // Ne changez que le code au-dessus de cette ligne

}
```

# --solutions--

```js
function vraiOuFaux(etaitCeVrai) {
  if (etaitCeVrai) {
    return "Oui, c'était vrai";
  }
  return "Non, c'était faux";
}
```
