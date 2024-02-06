---
id: 587d7daf367417b2b2512b7e
title: Comprendre la propriété du constructeur
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

Il existe une propriété spéciale `constructor` située sur les instances d'objets `duck` et `beagle` qui ont été créées dans les défis précédents :

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

Ces deux appels à `console.log` afficheront `true` dans la console.

Notez que la propriété `constructor` est une référence à la fonction constructeur qui a créé l'instance. L'avantage de la propriété `constructor` est qu'il est possible de vérifier cette propriété pour savoir de quel type d'objet il s'agit. Voici un exemple d'utilisation de cette propriété :

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**Note:** Comme la propriété `constructor` peut être écrasée (ce qui sera couvert dans les deux prochains défis), il est généralement préférable d'utiliser la méthode `instanceof` pour vérifier le type d'un objet.

# --instructions--

Ecrivez une fonction `joinDogFraternity` qui prend un paramètre `candidate` et, en utilisant la propriété `constructor`, retourne `true` si le candidat est un `Dog`, sinon retourne `false`.

# --hints--

`joinDogFraternity` doit être définie comme une fonction.

```js
assert(typeof joinDogFraternity === 'function');
```

`joinDogFraternity` doit retourner `true` si `candidate` est une instance de `Dog`.

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` devrait utiliser la propriété `constructor`.

```js
assert(/\.constructor/.test(code) && !/instanceof/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Ne modifiez que le code situé en dessous de cette ligne
function joinDogFraternity(candidate) {

}
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```
