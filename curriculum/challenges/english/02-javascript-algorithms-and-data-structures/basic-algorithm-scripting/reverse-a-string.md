---
id: a202eed8fc186c8434cb6d61
title: Inverser une chaîne de caractères
challengeType: 5
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

Inversez la chaîne de caractères fournie.

Vous devrez peut-être transformer la chaîne en un tableau avant de pouvoir l'inverser.

Votre résultat doit être une chaîne de caractères.

# --hints--

`reverseString("hello")` doit retourner une chaîne de caractères.

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` doit retourner la chaîne `olleh`.

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` doit retourner la chaîne `ydwoH`.

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` doit retourner la chaîne `htraE morf sgniteerG`.

```js
assert(reverseString('Greetings from Earth') === 'htraE morf sgniteerG');
```

# --seed--

## --seed-contents--

```js
function reverseString(str) {
  return str;
}

reverseString("hello");
```

# --solutions--

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");
```
