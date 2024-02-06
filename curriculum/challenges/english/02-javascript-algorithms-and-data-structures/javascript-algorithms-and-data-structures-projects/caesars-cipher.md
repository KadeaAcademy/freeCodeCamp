---
id: 56533eb9ac21ba0edf2244e2
title: Chiffre de César
challengeType: 5
forumTopicId: 16003
dashedName: caesars-cipher
---

# --description--

L'un des chiffres les plus simples et les plus connus est le chiffre de César, également connu sous le nom de chiffre à décalage. Dans un chiffrement par décalage, la signification des lettres est décalée d'une certaine valeur.

Une utilisation moderne courante est le chiffrement [ROT13](https://en.wikipedia.org/wiki/ROT13), dans lequel les valeurs des lettres sont décalées de 13 places. Ainsi, `A ↔ N`, `B ↔ O` et ainsi de suite.

Écrivez une fonction qui prend en entrée une chaîne encodée [ROT13](https://en.wikipedia.org/wiki/ROT13) et renvoie une chaîne décodée.

Toutes les lettres seront en majuscules. Ne transformez aucun caractère non alphabétique (c'est-à-dire les espaces, la ponctuation), mais transmettez-les.

# --hints--

`rot13("SERR PBQR PNZC")` doit décoder la chaîne `FREE CODE CAMP`

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` doit décoder la chaîne `FREE PIZZA!`

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` doit décoder la chaîne `FREE LOVE?`

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` doit décoder la chaîne `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

```js
assert(
  rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.') ===
    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
);
```

# --seed--

## --seed-contents--

```js
function rot13(str) {
  return str;
}

rot13("SERR PBQR PNZC");
```

# --solutions--

```js
var lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // Chaîne à tableau
  var decodedArr = []; // Votre résultat est ici
  // Ne modifiez que le code situé en dessous de cette ligne

  decodedArr = codeArr.map(function(letter) {
    if(lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  // Ne modifiez que le code au-dessus de cette ligne
  return decodedArr.join(""); // Tableau en chaîne
}
```
