---
id: cf1111c1c11feddfaeb8bdef
title: Modifier les données d'un tableau avec des indices
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

Contrairement aux chaînes de caractères, les entrées des tableaux sont <dfn>muables</dfn> et peuvent être modifiées librement, même si le tableau a été déclaré avec `const`.

**Example**

```js
const notreTableau = [50, 40, 30];
notreTableau[0] = 15;
```

`notreTableau` a maintenant la valeur `[15, 40, 30]`.

**Remarque :** il ne doit pas y avoir d'espace entre le nom du tableau et les crochets, comme "tableau [0]". Bien que JavaScript soit capable de traiter cela correctement, cela peut perturber les autres programmeurs qui lisent votre code.

# --instructions--

Remplacez la donnée stockée à l'indice `0` de `monTableau` par la valeur 45.

# --hints--

`monTableau` devrait maintenant être `[45, 64, 99]`.

```js
assert(
  (function () {
    if (
      typeof monTableau != 'undefined' &&
      monTableau[0] == 45 &&
      monTableau[1] == 64 &&
      monTableau[2] == 99
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

Vous devriez utiliser le bon indice pour modifier la valeur dans `monTableau`.

```js
assert(
  (function () {
    if (code.match(/monTableau\[0\]\s*=\s*/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof monTableau !== "undefined"){(function(){return monTableau;})();}
```

## --seed-contents--

```js
// Setup
const monTableau = [18, 64, 99];

// Ne changez que le code en dessous de cette ligne

```

# --solutions--

```js
const monTableau = [18, 64, 99];
monTableau[0] = 45;
```
