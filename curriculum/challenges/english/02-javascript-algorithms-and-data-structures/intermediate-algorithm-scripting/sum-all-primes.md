---
id: a3bfc1673c0526e06d3ac698
title: Somme de tous les nombres premiers
challengeType: 5
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

Un <dfn>nombre premier</dfn> est un nombre entier supérieur à 1 ayant exactement deux diviseurs : 1 et lui-même. Par exemple, 2 est un nombre premier car il n'est divisible que par 1 et 2. En revanche, 4 n'est pas un nombre premier car il est divisible par 1, 2 et 4.

Réécrivez `sumPrimes` pour qu'il retourne la somme de tous les nombres premiers qui sont inférieurs ou égaux à num.

# --hints--

`sumPrimes(10)` devrait retourner un nombre.

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` devrait retourner 17.

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` devrait retourner 73156.

```js
assert.deepEqual(sumPrimes(977), 73156);
```

# --seed--

## --seed-contents--

```js
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
```

# --solutions--

```js
function eratosthenesArray(n) {
    var primes = [];
    if (n > 2) {
        var half = n>>1;
        var sieve = Array(half);
        for (var i = 1, limit = Math.sqrt(n)>>1; i <= limit; i++) {
            if (!sieve[i]) {
                for (var step = 2*i+1, j = (step*step)>>1; j < half; j+=step) {
                    sieve[j] = true;
                }
            }
        }
        primes.push(2);
        for (var p = 1; p < half; p++) {
            if (!sieve[p]) primes.push(2*p+1);
        }
    }
    return primes;
}

function sumPrimes(num) {
  return eratosthenesArray(num+1).reduce(function(a,b) {return a+b;}, 0);
}

sumPrimes(10);
```
