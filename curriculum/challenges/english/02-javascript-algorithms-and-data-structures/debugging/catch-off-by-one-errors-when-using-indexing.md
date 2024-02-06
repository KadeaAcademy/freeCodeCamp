---
id: 587d7b86367417b2b2512b3b
title: Attraper les erreurs de décalage lors de l'utilisation de l'indexation
challengeType: 1
forumTopicId: 301189
dashedName: catch-off-by-one-errors-when-using-indexing
---

# --description--

Les erreurs de type de décalage <dfn>"Off by one errors"</dfn> (parfois appelées OBOE) apparaissent lorsque vous essayez de cibler un indice spécifique d'une chaîne ou d'un tableau (pour découper ou accéder à un segment), ou lorsque vous bouclez sur leurs indices. L'indexation en JavaScript commence à zéro et non à un, ce qui signifie que le dernier indice est toujours inférieur d'une unité à la longueur de l'élément. Si vous essayez d'accéder à un index égal à la longueur, le programme peut lancer une erreur de référence "index out of range" ou afficher `undefined`.

Lorsque vous utilisez des méthodes de chaîne ou de tableau qui prennent des plages d'index comme arguments, il est utile de lire la documentation et de comprendre si elles sont inclusives (l'élément à l'index donné fait partie de ce qui est retourné) ou non. Voici quelques exemples d'erreurs de type "off by one" :

```js
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
```

Le premier exemple boucle une fois de trop, et le deuxième boucle une fois de trop (il manque le premier indice, 0). Le troisième exemple est correct.

# --instructions--

Corrigez les deux erreurs d'indexation dans la fonction suivante afin que tous les chiffres de 1 à 5 soient imprimés sur la console.

# --hints--

Votre code doit définir la condition initiale de la boucle pour qu'elle commence au premier indice.

```js
assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1);
```

Votre code doit fixer la condition initiale de la boucle pour que l'index commence à 0.

```js
assert(!code.match(/i\s?=\s*?1\s*?;/g));
```

Votre code doit définir la condition finale de la boucle pour qu'elle s'arrête au dernier indice.

```js
assert(code.match(/i\s*?<\s*?len\s*?;/g).length == 1);
```

Votre code doit fixer la condition terminale de la boucle pour qu'elle s'arrête à 1 avant la longueur.

```js
assert(!code.match(/i\s*?<=\s*?len;/g));
```

# --seed--

## --seed-contents--

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Ne changez que le code en dessous de cette ligne
  for (let i = 1; i <= len; i++) {
  // Ne changez que le code au-dessus de cette ligne
    console.log(firstFive[i]);
  }
}

countToFive();
```

# --solutions--

```js
function countToFive() {
 let firstFive = "12345";
 let len = firstFive.length;
 // Ne changez que le code en dessous de cette ligne
 for (let i = 0; i < len; i++) {
 // Ne changez que le code au-dessus de cette ligne
   console.log(firstFive[i]);
 }
}

countToFive();
```
