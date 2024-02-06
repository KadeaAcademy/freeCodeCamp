---
id: a302f7aae1aa3152a5b413bc
title: Factoriser un nombre
challengeType: 5
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

Retourne la factorielle de l'entier fourni.

Si l'entier est représenté par la lettre `n`, une factorielle est le produit de tous les entiers positifs inférieurs ou égaux à `n`.

Les factorielles sont souvent représentées par la notation abrégée `n!`.

Par exemple : `5! = 1 * 2 * 3 * 4 * 5 = 120`.

Seuls les entiers supérieurs ou égaux à zéro seront fournis à la fonction.

# --hints--

`factorialize(5)` doit retourner un nombre.

```js
assert(typeof factorialize(5) === 'number');
```

`factorialize(5)` doit retourner `120`.

```js
assert(factorialize(5) === 120);
```

`factorialize(10)` doit retourner `3628800`.

```js
assert(factorialize(10) === 3628800);
```

`factorialize(20)` doit retourner `2432902008176640000`.

```js
assert(factorialize(20) === 2432902008176640000);
```

`factorialize(0)` doit retourner `1`.

```js
assert(factorialize(0) === 1);
```

# --seed--

## --seed-contents--

```js
function factorialize(num) {
  return num;
}

factorialize(5);
```

# --solutions--

```js
function factorialize(num) {
  return num < 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);
```
