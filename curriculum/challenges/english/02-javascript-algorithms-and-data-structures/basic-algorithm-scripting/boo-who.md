---
id: a77dbc43c33f39daa4429b4f
title: Boo who
challengeType: 5
forumTopicId: 16000
dashedName: boo-who
---

# --description--

Vérifie si une valeur est classée comme une primitive booléenne. Retourne `true` ou `false`.

Les primitives booléennes sont `true` et `false`.

# --hints--

`booWho(true)` doit retourner `true`.

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)` doit retourner `true`.

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1, 2, 3])` doit retourner `false`.

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)` doit retourner `false`.

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({ "a": 1 })` doit retourner `false`.

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)` doit retourner `false`.

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)` doit retourner `false`.

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")` doit retourner `false`.

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")` doit retourner `false`.

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")` doit retourner `false`.

```js
assert.strictEqual(booWho('false'), false);
```

# --seed--

## --seed-contents--

```js
function booWho(bool) {
  return bool;
}

booWho(null);
```

# --solutions--

```js
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
```
