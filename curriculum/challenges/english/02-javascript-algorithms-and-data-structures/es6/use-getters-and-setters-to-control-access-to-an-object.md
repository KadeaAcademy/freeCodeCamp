---
id: 587d7b8c367417b2b2512b54
title: Utiliser les getters et setters pour contrôler l'accès à un objet
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

Vous pouvez obtenir des valeurs d'un objet et définir la valeur d'une propriété dans un objet.

Ces fonctions sont classiquement appelées <dfn>getters et setters</dfn>.

Les fonctions Getter sont destinées à retourner simplement (obtenir) la valeur de la variable privée d'un objet à l'utilisateur sans que ce dernier n'accède directement à la variable privée.

Les fonctions Setter sont destinées à modifier (fixer) la valeur de la variable privée d'un objet en fonction de la valeur transmise à la fonction Setter. Cette modification peut impliquer des calculs, voire l'écrasement complet de la valeur précédente.

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

La console affichera les chaînes `anonymous` et `newAuthor`.

Remarquez la syntaxe utilisée pour invoquer le getter et le setter. Ils ne ressemblent même pas à des fonctions. Les getter et les setters sont importants car ils cachent les détails internes de l'implémentation.

**Note:** Par convention, le nom d'une variable privée est précédé d'un trait de soulignement (`_`). Cependant, cette pratique en elle-même ne rend pas une variable privée.

# --instructions--

Utilisez le mot-clé `class` pour créer une classe `Thermostat`. Le constructeur accepte une température Fahrenheit.

Dans la classe, créez un `getter` pour obtenir la température en Celsius et un `setter` pour définir la température en Celsius.

Rappelez-vous que `C = 5/9 * (F - 32)` et `F = C * 9,0 / 5 + 32`, où `F` est la valeur de la température en Fahrenheit, et `C` est la valeur de la même température en Celsius.

**Note:** Lorsque vous implémentez cette fonction, vous suivez la température à l'intérieur de la classe dans une seule échelle, soit Fahrenheit, soit Celsius.

C'est la puissance d'un getter et d'un setter. Vous créez une API pour un autre utilisateur, qui peut obtenir le bon résultat, quelle que soit l'échelle utilisée.

En d'autres termes, vous faites abstraction des détails de mise en œuvre pour l'utilisateur.

# --hints--

`Thermostat` devrait être une `class` avec une méthode `constructor` définie.

```js
assert(
  typeof Thermostat === 'function' &&
    typeof Thermostat.constructor === 'function'
);
```

Le mot-clé `class` doit être utilisé.

```js
assert(code.match(/class/g));
```

Le `Thermostat` doit pouvoir être instancié.

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return typeof t === 'object';
  })()
);
```

Lorsqu'il est instancié avec une valeur Fahrenheit, `Thermostat` doit définir la bonne `température`.

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return t.temperature === 50;
  })()
);
```

Un `getter` doit être défini.

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.get === 'function';
  })()
);
```

Un `setter` doit être défini.

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.set === 'function';
  })()
);
```

L'appel du `setter` avec une valeur Celsius devrait modifier la `temperature`.

```js
assert(
  (() => {
    const t = new Thermostat(32);
    t.temperature = 26;
    const u = new Thermostat(32);
    u.temperature = 50;
    return t.temperature === 26 && u.temperature === 50;
  })()
);
```

# --seed--

## --seed-contents--

```js
// Ne changez que le code en dessous de cette ligne

// Ne changez que le code au-dessus de cette ligne

const thermos = new Thermostat(76); // Réglage sur l'échelle Fahrenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius
```

# --solutions--

```js
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}

const thermos = new Thermostat(76); // Réglage sur l'échelle Fahrenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius
```
