---
id: 587d7db4367417b2b2512b91
title: Ignorer la casse lors de la correspondance
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

Jusqu'à présent, vous avez utilisé les regex pour effectuer des correspondances littérales de chaînes de caractères. Mais parfois, vous pouvez aussi vouloir faire correspondre des différences de casse.

La casse (ou parfois la casse des lettres) est la différence entre les lettres majuscules et les lettres minuscules. Des exemples de majuscules sont `A`, `B`, et `C`. Les exemples de minuscules sont `a`, `b`, et `c`.

Vous pouvez faire correspondre les deux cas en utilisant ce qu'on appelle un marqueur. Il existe d'autres marqueur, mais nous nous concentrerons ici sur celui qui ignore la casse : le marqueur `i`. Vous pouvez l'utiliser en l'ajoutant à l'expression rationnelle. Un exemple d'utilisation de ce marqueur est `/ignorecase/i`. Cette regex peut correspondre aux chaînes de caractères `ignorecase`, `igNoreCase`, et `IgnoreCase`.


# --instructions--

Écrivez une expression régulière `kadeaRegex` qui correspond à `kadeaAcademyLearn`, quelle que soit sa casse. Votre regex ne doit pas correspondre à des abréviations ou des variations avec des espaces.

# --hints--

Votre expression régulière doit correspondre à la chaîne `kadeaAcademyLearn`.

```js
kadeaRegex.lastIndex = 0; 
assert(kadeaRegex.test('kadeaAcademyLearn'));
```

Votre expression rationnelle doit correspondre à la chaîne `KadeaAcademyLearn`.

```js
kadeaRegex.lastIndex = 0;
assert(kadeaRegex.test('KadeaAcademyLearn'));
```

Votre regex doit correspondre à la chaîne `KadeaacademyLearn`.

```js
kadeaRegex.lastIndex = 0;
assert(kadeaRegex.test('KadeaacademyLearn'));
```

Votre regex doit correspondre à la chaîne `KadeaAcademylearn`.

```js
kadeaRegex.lastIndex = 0;
assert(kadeaRegex.test('KadeaAcademylearn'));
```

Votre regex ne doit pas correspondre à la chaîne `Kadea Academy Learn`.

```js
kadeaRegex.lastIndex = 0;
assert(!kadeaRegex.test('Kadea Academy Learn'));
```

Votre expression rationnelle doit correspondre à la chaîne `KadeaACademyLearn`.

```js
kadeaRegex.lastIndex = 0;
assert(kadeaRegex.test('KadeaACademyLearn'));
```

Votre regex ne doit pas correspondre à la chaîne `KAL`.

```js
kadeaRegex.lastIndex = 0;
assert(!kadeaRegex.test('KAL'));
```

Votre expression rationnelle doit correspondre à la chaîne `KadeaACademyLEarn`.

```js
kadeaRegex.lastIndex = 0;
assert(kadeaRegex.test('KadeaACademyLEarn'));
```

Votre expression rationnelle doit correspondre à la chaîne `KAdeaACademylEArn`.

```js
kadeaRegex.lastIndex = 0;
assert(kadeaRegex.test('KAdeaACademylEArn'));
```

Votre expression rationnelle doit correspondre à la chaîne `KADEAaCademylEArn`.

```js
kadeaRegex.lastIndex = 0;
assert(kadeaRegex.test('KADEAaCademylEArn'));
```

# --seed--

## --seed-contents--

```js
let myString = "kadeaAcademyLearn";
let kadeaRegex = /change/; // Modifiez cette ligne
let result = kadeaRegex.test(myString);
```

# --solutions--

```js
let myString = "kadeaAcademyLearn";
let kadeaRegex = /kadeaAcademyLearn/i; // Modifiez cette ligne
let result = kadeaRegex.test(myString);
```
