---
id: 587d7daa367417b2b2512b6c
title: Combiner un tableau en une chaîne de caractères à l'aide de la méthode join
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

La méthode `join` est utilisée pour joindre les éléments d'un tableau afin de créer une chaîne de caractères. Elle prend un argument pour le délimiteur qui est utilisé pour séparer les éléments du tableau dans la chaîne.

Voici un exemple :

```js
const arr = ["Hello", "World"];
const str = arr.join(" ");
```

`str` aurait une valeur de la chaîne de caractères `Hello World`.
# --instructions--

Utilisez la méthode `join` (entre autres) à l'intérieur de la fonction `sentensify` pour créer une phrase à partir des mots de la chaîne `str`. La fonction doit retourner une chaîne de caractères. Par exemple, `I-like-Star-Wars` sera converti en `I like Star Wars`. Pour ce défi, n'utilisez pas la méthode `replace`.

# --hints--

Votre code doit utiliser la méthode `join`.

```js
assert(code.match(/\.join/g));
```

Votre code ne doit pas utiliser la méthode `replace`.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`sentensify("May-the-force-be-with-you")` doit retourner une chaîne.

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

`sentensify("May-the-force-be-with-you")` doit retourner la chaîne `May the force be with you`.

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

`sentensify("The.force.is.strong.with.this.one")` doit retourner la chaîne `The force is strong with this one`.

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

`sentensify("There,has,been,an,awakening")` doit retourner la chaîne `There has been an awakening`.

```js
assert(
  sentensify('There,has,been,an,awakening') === 'There has been an awakening'
);
```

# --seed--

## --seed-contents--

```js
function sentensify(str) {
// Ne modifiez que le code situé en dessous de cette ligne


// Ne modifiez que le code au-dessus de cette ligne
}

sentensify("May-the-force-be-with-you");
```

# --solutions--

```js
function sentensify(str) {
  return str.split(/\W/).join(' ');
}
```
