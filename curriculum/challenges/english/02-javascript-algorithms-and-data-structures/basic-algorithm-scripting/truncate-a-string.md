---
id: ac6993d51946422351508a41
title: Tronquer une chaîne de caractères
challengeType: 5
forumTopicId: 16089
dashedName: truncate-a-string
---

# --description--

Tronque une chaîne de caractères (premier argument) si elle est plus longue que la longueur maximale donnée (deuxième argument). Retourne la chaîne tronquée avec une terminaison `...`.

# --hints--

`truncateString("A-tisket a-tasket A green and yellow basket", 8)` doit retourner la chaîne `A-tisket...`.

```js
assert(
  truncateString('A-tisket a-tasket A green and yellow basket', 8) ===
    'A-tisket...'
);
```

`truncateString("Peter Piper picked a peck of pickled peppers", 11)` doit retourner la chaîne `Peter Piper...`.

```js
assert(
  truncateString('Peter Piper picked a peck of pickled peppers', 11) ===
    'Peter Piper...'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)` doit retourner la chaîne `A-tisket a-tasket A green and yellow basket`.

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)` doit retourner la chaîne `A-tisket a-tasket A green and yellow basket`.

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-", 1)` doit retourner la chaîne `A...`.

```js
assert(truncateString('A-', 1) === 'A...');
```

`truncateString("Absolutely Longer", 2)` doit retourner la chaîne `Ab...`.

```js
assert(truncateString('Absolutely Longer', 2) === 'Ab...');
```

# --seed--

## --seed-contents--

```js
function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

# --solutions--

```js
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  return str.slice(0, num) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```
