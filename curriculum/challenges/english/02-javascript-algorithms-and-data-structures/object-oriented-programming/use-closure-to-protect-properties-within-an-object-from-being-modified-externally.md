---
id: 587d7db2367417b2b2512b8a
title: >-
  Utiliser une Closure pour protéger les propriétés d'un objet contre les modifications externes
challengeType: 1
forumTopicId: 18234
dashedName: >-
  use-closure-to-protect-properties-within-an-object-from-being-modified-externally
---

# --description--

Dans le défi précédent, `bird` avait une propriété publique `name`. Elle est considérée comme publique parce qu'on peut y accéder et la modifier en dehors de la définition de `bird`.

```js
bird.name = "Duffy";
```

Par conséquent, n'importe quelle partie de votre code peut facilement changer le nom de `bird` en n'importe quelle valeur. Pensez à des choses comme les mots de passe et les comptes bancaires qui peuvent être facilement modifiés par n'importe quelle partie de votre base de code. Cela pourrait causer beaucoup de problèmes.

La façon la plus simple de rendre privée cette propriété publique est de créer une variable dans la fonction constructeur. Cela permet de modifier la portée de cette variable pour qu'elle soit à l'intérieur de la fonction constructeur plutôt que d'être disponible globalement. De cette façon, la variable ne peut être accédée et modifiée que par des méthodes appartenant également à la fonction constructeur.

```js
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```

Ici, `getHatchedEggCount` est une méthode privilégiée, car elle a accès à la variable privée `hatchedEgg`. Ceci est possible parce que `hatchedEgg` est déclaré dans le même contexte que `getHatchedEggCount`. En JavaScript, une fonction a toujours accès au contexte dans lequel elle a été créée. C'est ce qu'on appelle la `closure`.

# --instructions--

Modifiez la façon dont `weight` est déclaré dans la fonction `Bird` afin qu'il s'agisse d'une variable privée. Ensuite, créez une méthode `getWeight` qui renvoie la valeur de `weight` 15.

# --hints--

La propriété `weight` doit être une variable privée et la valeur `15` doit lui être attribuée.

```js
assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
```

Votre code doit créer une méthode dans `Bird` appelée `getWeight` qui renvoie la valeur de la variable privée `weight`.

```js
assert(new Bird().getWeight() === 15);
```

Votre fonction `getWeight` doit retourner la variable privée `weight`.

```js
assert(code.match(/((return\s+)|(\(\s*\)\s*\=\>\s*))weight\;?/g));
```

# --seed--

## --seed-contents--

```js
function Bird() {
  this.weight = 15;


}
```

# --solutions--

```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```
