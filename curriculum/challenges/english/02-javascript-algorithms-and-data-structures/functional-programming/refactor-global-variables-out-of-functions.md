---
id: 587d7b8f367417b2b2512b60
title: Refactoriser les variables globales hors des fonctions
challengeType: 1
forumTopicId: 301235
dashedName: refactor-global-variables-out-of-functions
---

# --description--

Jusqu'à présent, nous avons vu deux principes distincts pour la programmation fonctionnelle :

1) Ne pas modifier une variable ou un objet - créer de nouvelles variables et de nouveaux objets et les retourner si nécessaire à partir d'une fonction. Astuce : utiliser quelque chose comme `const newArr = arrVar`, où `arrVar` est un tableau, créera simplement une référence à la variable existante et non une copie. Donc changer une valeur dans `newArr` changera la valeur dans `arrVar`.

2) Déclarer les paramètres des fonctions - tout calcul à l'intérieur d'une fonction ne dépend que des arguments passés à la fonction, et non d'un objet ou d'une variable globale.

Ajouter un à un nombre n'est pas très excitant, mais nous pouvons appliquer ces principes lorsque nous travaillons avec des tableaux ou des objets plus complexes.

# --instructions--

Réécrivez le code pour que le tableau global `bookList` ne soit pas modifié dans l'une ou l'autre des fonctions. La fonction `add` doit ajouter le `bookName` (nom de livre) donné à la fin du tableau qui lui est passé et retourner un nouveau tableau (liste). La fonction `remove` doit supprimer le `bookName` donné du tableau qui lui est passé.

**Note:** Les deux fonctions doivent retourner un tableau, et tout nouveau paramètre doit être ajouté avant le paramètre `bookName`.

# --hints--

`bookList` ne devrait pas changer et rester égal à `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
add(bookList, "Test");
assert(
  JSON.stringify(bookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`add(bookList, "A Brief History of Time")` doit retourner `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(add(bookList, "A Brief History of Time")) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

`remove(bookList, "On The Electrodynamics of Moving Bodies")` doit retourner `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
assert(
  JSON.stringify(remove(bookList, 'On The Electrodynamics of Moving Bodies')) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");` doit être égal à `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies')) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

# --seed--

## --seed-contents--

```js
// La variable globale
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Modifier le code sous cette ligne
function add(bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Modifiez le code au-dessus de cette ligne
}

// Modifiez le code en dessous de cette ligne
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Modifier le code au-dessus de cette ligne
    }
}
```

# --solutions--

```js
// La variable globale
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
  return [...bookList, bookName];
}

function remove(bookList, bookName) {
  const bookListCopy = [...bookList];
  const bookNameIndex = bookList.indexOf(bookName);
  if (bookNameIndex >= 0) {
    bookListCopy.splice(bookNameIndex, 1);
  }
  return bookListCopy;
}
```
