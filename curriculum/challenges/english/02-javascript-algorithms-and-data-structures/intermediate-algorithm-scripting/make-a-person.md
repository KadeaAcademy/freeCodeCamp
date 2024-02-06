---
id: a2f1d72d9b908d0bd72bb9f6
title: Créer une Personne
challengeType: 5
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

Complétez le constructeur de l'objet avec les méthodes suivantes :

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

Exécutez les tests pour voir le résultat attendu pour chaque méthode. Les méthodes qui prennent un argument ne doivent accepter qu'un seul argument et celui-ci doit être une chaîne de caractères. Ces méthodes doivent être le seul moyen disponible pour interagir avec l'objet.

# --hints--

Aucune propriété ne doit être ajoutée. `Object.keys(bob).length` doit toujours retourner 6.

```js
assert.strictEqual(
  Object.keys((function () {
    let bob = new Person('Bob Ross');
    bob.setFirstName('Haskell');
    bob.setLastName('Curry');
    bob.setFullName('John Smith');
    return bob;
  })()).length,
  6
 );
```

`bob instanceof Person` devrait retourner `true`.

```js
assert.deepEqual(bob instanceof Person, true);
```

`bob.firstName` devrait retourner `undefined`.

```js
assert.deepEqual(bob.firstName, undefined);
```

`bob.lastName` devrait retourner `undefined`.

```js
assert.deepEqual(bob.lastName, undefined);
```

`bob.getFirstName()` devrait retourner la chaîne `Bob`.

```js
assert.deepEqual(bob.getFirstName(), 'Bob');
```

`bob.getLastName()` devrait retourner la chaîne `Ross`.

```js
assert.deepEqual(bob.getLastName(), 'Ross');
```

`bob.getFullName()` devrait retourner la chaîne `Bob Ross`.

```js
assert.deepEqual(bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` devrait retourner la chaîne `Haskell Ross` après `bob.setFirstName("Haskell")`.

```js
assert.strictEqual(
  (function () {
    bob.setFirstName('Haskell');
    return bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` devrait retourner la chaîne `Haskell Curry` après `bob.setLastName("Curry")`.

```js
assert.strictEqual(
  (function () {
    var _bob = new Person('Haskell Ross');
    _bob.setLastName('Curry');
    return _bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFullName()` devrait retourner la chaîne `Haskell Curry` après `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` devrait retourner la chaîne `Haskell` après `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` devrait retourner la chaîne `Curry` après `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getLastName();
  })(),
  'Curry'
);
```

# --seed--

## --after-user-code--

```js
if(bob){
  bob = new Person("Bob Ross");
}
```

## --seed-contents--

```js
const Person = function(firstAndLast) {
// Ne modifiez le code qu'en dessous de cette ligne
// Compléter la méthode ci-dessous et implémenter les autres de manière similaire
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
```

# --solutions--

```js
const Person = function(firstAndLast) {

  let firstName, lastName;

  function updateName(str) {
    firstName = str.split(" ")[0];
    lastName = str.split(" ")[1];
  }

  updateName(firstAndLast);

  this.getFirstName = function(){
    return firstName;
  };

  this.getLastName = function(){
    return lastName;
  };

  this.getFullName = function(){
    return firstName + " " + lastName;
  };

  this.setFirstName = function(str){
    firstName = str;
  };


  this.setLastName = function(str){
    lastName = str;
  };

  this.setFullName = function(str){
    updateName(str);
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();
```
