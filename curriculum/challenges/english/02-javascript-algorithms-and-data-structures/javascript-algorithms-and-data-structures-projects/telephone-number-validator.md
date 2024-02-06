---
id: aff0395860f5d3034dc0bfc9
title: Validateur de numéro de téléphone
challengeType: 5
forumTopicId: 16090
dashedName: telephone-number-validator
---

# --description--

Retourne `true` si la chaîne passée ressemble à un numéro de téléphone américain valide.

L'utilisateur peut remplir le champ du formulaire de la manière qu'il souhaite tant qu'il a le format d'un numéro américain valide. Voici des exemples de formats valides pour les numéros américains (voir les tests ci-dessous pour d'autres variantes) :

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

Pour ce défi, on vous présentera une chaîne de caractères telle que `800-692-7753` ou `8oo-six427676;laskdjf`. Votre tâche consiste à valider ou à rejeter le numéro de téléphone américain en vous basant sur n'importe quelle combinaison des formats fournis ci-dessus. L'indicatif régional est obligatoire. Si le code pays est fourni, vous devez confirmer que le code pays est `1`. Retournez `true` si la chaîne est un numéro de téléphone américain valide, sinon retournez `false`.

# --hints--

`telephoneCheck("555-555-5555")` devrait retourner un booléen.

```js
assert(typeof telephoneCheck('555-555-5555') === 'boolean');
```

`telephoneCheck("1 555-555-5555")` devrait retourner `true`.

```js
assert(telephoneCheck('1 555-555-5555') === true);
```

`telephoneCheck("1 (555) 555-5555")` devrait retourner `true`.

```js
assert(telephoneCheck('1 (555) 555-5555') === true);
```

`telephoneCheck("5555555555")` devrait retourner `true`.

```js
assert(telephoneCheck('5555555555') === true);
```

`telephoneCheck("555-555-5555")` devrait retourner `true`.

```js
assert(telephoneCheck('555-555-5555') === true);
```

`telephoneCheck("(555)555-5555")` devrait retourner `true`.

```js
assert(telephoneCheck('(555)555-5555') === true);
```

`telephoneCheck("1(555)555-5555")` devrait retourner `true`.

```js
assert(telephoneCheck('1(555)555-5555') === true);
```

`telephoneCheck("555-5555")` devrait retourner `false`.

```js
assert(telephoneCheck('555-5555') === false);
```

`telephoneCheck("5555555")` devrait retourner `false`.

```js
assert(telephoneCheck('5555555') === false);
```

`telephoneCheck("1 555)555-5555")` devrait retourner `false`.

```js
assert(telephoneCheck('1 555)555-5555') === false);
```

`telephoneCheck("1 555 555 5555")` devrait retourner `true`.

```js
assert(telephoneCheck('1 555 555 5555') === true);
```

`telephoneCheck("1 456 789 4444")` devrait retourner `true`.

```js
assert(telephoneCheck('1 456 789 4444') === true);
```

`telephoneCheck("123**&!!asdf#")` devrait retourner `false`.

```js
assert(telephoneCheck('123**&!!asdf#') === false);
```

`telephoneCheck("55555555")` devrait retourner `false`.

```js
assert(telephoneCheck('55555555') === false);
```

`telephoneCheck("(6054756961)")` devrait retourner `false`.

```js
assert(telephoneCheck('(6054756961)') === false);
```

`telephoneCheck("2 (757) 622-7382")` devrait retourner `false`.

```js
assert(telephoneCheck('2 (757) 622-7382') === false);
```

`telephoneCheck("0 (757) 622-7382")` devrait retourner `false`.

```js
assert(telephoneCheck('0 (757) 622-7382') === false);
```

`telephoneCheck("-1 (757) 622-7382")` devrait retourner `false`.

```js
assert(telephoneCheck('-1 (757) 622-7382') === false);
```

`telephoneCheck("2 757 622-7382")` devrait retourner `false`.

```js
assert(telephoneCheck('2 757 622-7382') === false);
```

`telephoneCheck("10 (757) 622-7382")` devrait retourner `false`.

```js
assert(telephoneCheck('10 (757) 622-7382') === false);
```

`telephoneCheck("27576227382")` devrait retourner `false`.

```js
assert(telephoneCheck('27576227382') === false);
```

`telephoneCheck("(275)76227382")` devrait retourner `false`.

```js
assert(telephoneCheck('(275)76227382') === false);
```

`telephoneCheck("2(757)6227382")` devrait retourner `false`.

```js
assert(telephoneCheck('2(757)6227382') === false);
```

`telephoneCheck("2(757)622-7382")` devrait retourner `false`.

```js
assert(telephoneCheck('2(757)622-7382') === false);
```

`telephoneCheck("555)-555-5555")` devrait retourner `false`.

```js
assert(telephoneCheck('555)-555-5555') === false);
```

`telephoneCheck("(555-555-5555")` devrait retourner `false`.

```js
assert(telephoneCheck('(555-555-5555') === false);
```

`telephoneCheck("(555)5(55?)-5555")` devrait retourner `false`.

```js
assert(telephoneCheck('(555)5(55?)-5555') === false);
```

`telephoneCheck("55 55-55-555-5")` devrait retourner `false`.

```js
assert(telephoneCheck('55 55-55-555-5') === false);
```

`telephoneCheck("11 555-555-5555")` devrait retourner `false`.

```js
assert(telephoneCheck('11 555-555-5555') === false);
```

# --seed--

## --seed-contents--

```js
function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");
```

# --solutions--

```js
var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555");
```
