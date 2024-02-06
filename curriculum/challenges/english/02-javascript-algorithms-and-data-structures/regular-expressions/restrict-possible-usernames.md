---
id: 587d7db8367417b2b2512ba2
title: Limiter les noms d'utilisateur possibles
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

Les noms d'utilisateur sont utilisés partout sur l'internet. Ce sont eux qui donnent aux utilisateurs une identité unique sur leurs sites préférés.

Vous devez vérifier tous les noms d'utilisateur dans une base de données. Voici quelques règles simples que les utilisateurs doivent suivre lorsqu'ils créent leur nom d'utilisateur.

1) Les noms d'utilisateur ne peuvent utiliser que des caractères alphanumériques.

2) Les seuls chiffres du nom d'utilisateur doivent se trouver à la fin. Il peut y en avoir zéro ou plus à la fin. Le nom d'utilisateur ne peut pas commencer par un chiffre.

3) Les lettres du nom d'utilisateur peuvent être en minuscules et en majuscules.

4) Les noms d'utilisateur doivent comporter au moins deux caractères. Un nom d'utilisateur de deux caractères ne peut utiliser que des lettres de l'alphabet comme caractères.

# --instructions--

Changez la regex `userCheck` pour l'adapter aux contraintes listées ci-dessus.

# --hints--

Votre regex doit correspondre à la chaîne `JACK`.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

Votre regex ne doit pas correspondre à la chaîne `J`.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

Votre regex doit correspondre à la chaîne `Jo`.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

Votre regex doit correspondre à la chaîne `Oceans11`.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

Votre regex doit correspondre à la chaîne `RegexGuru`.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

Votre regex ne doit pas correspondre à la chaîne `007`.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

Votre regex ne doit pas correspondre à la chaîne `9`.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

Votre regex ne doit pas correspondre à la chaîne `A1`.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

Votre regex ne doit pas correspondre à la chaîne `BadUs3rnam3`.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

Votre regex doit correspondre à la chaîne `Z97`.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

Votre regex ne doit pas correspondre à la chaîne `c57bT3`.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

Votre regex doit correspondre à la chaîne `AB1`.

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

Votre regex ne doit pas correspondre à la chaîne `J%4`.

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J%4'))
```

# --seed--

## --seed-contents--

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Modifiez cette ligne
let result = userCheck.test(username);
```

# --solutions--

```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
