---
id: 565bbe00e9cc8ac0725390f4
title: Comptage des cartes
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
dashedName: counting-cards
---

# --description--

Au jeu de casino Blackjack, un joueur peut obtenir un avantage sur la maison en suivant le nombre relatif de cartes hautes et basses restant dans le jeu. C'est ce qu'on appelle le [Card Counting](https://en.wikipedia.org/wiki/Card_counting).

Le fait d'avoir plus de cartes hautes dans le jeu favorise le joueur. Une valeur est attribuée à chaque carte selon le tableau ci-dessous. Lorsque le compte est positif, le joueur doit miser haut. Lorsque le compte est nul ou négatif, le joueur doit miser bas.

<table class='table table-striped'><thead><tr><th>Compter le changement</th><th>Cartes</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>

Vous allez écrire une fonction de comptage de cartes. Elle recevra un paramètre `card`, qui peut être un nombre ou une chaîne de caractères, et incrémentera ou décrémentera la variable globale `count` en fonction de la valeur de la carte (voir tableau). La fonction renvoie ensuite une chaîne de caractères avec le compte actuel et la chaîne `Bet` si le compte est positif, ou `Hold` si le compte est nul ou négatif. Le compte actuel et la décision du joueur (`Bet` ou `Hold`) doivent être séparés par un espace.

**Exemple de sorties:** `-3 Hold` ou `5 Bet`.

**Indice**  
Ne remettez PAS `count` à 0 quand la valeur est 7, 8, ou 9.  
Ne PAS retourner un tableau.  
Ne PAS inclure de guillemets (simples ou doubles) dans la sortie.

# --hints--

La séquence de cartes 2, 3, 4, 5, 6 devrait retourner la chaîne `5 Bet`.

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(3);
    cc(4);
    cc(5);
    var out = cc(6);
    if (out === '5 Bet') {
      return true;
    }
    return false;
  })()
);
```

La séquence de cartes 7, 8, 9 devrait retourner la chaîne de caractères `0 Hold`.

```js
assert(
  (function () {
    count = 0;
    cc(7);
    cc(8);
    var out = cc(9);
    if (out === '0 Hold') {
      return true;
    }
    return false;
  })()
);
```

La séquence de cartes 10, J, Q, K, A devrait retourner la chaîne `-5 Hold`.

```js
assert(
  (function () {
    count = 0;
    cc(10);
    cc('J');
    cc('Q');
    cc('K');
    var out = cc('A');
    if (out === '-5 Hold') {
      return true;
    }
    return false;
  })()
);
```

La séquence de cartes 3, 7, Q, 8, A devrait retourner la chaîne `-1 Hold`.

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(7);
    cc('Q');
    cc(8);
    var out = cc('A');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

La séquence de cartes 2, J, 9, 2, 7 devrait retourner la chaîne `1 Bet`.

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc('J');
    cc(9);
    cc(2);
    var out = cc(7);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

La séquence de cartes 2, 2, 10 devrait retourner la chaîne `1 Bet`.

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(2);
    var out = cc(10);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

La séquence de cartes 3, 2, A, 10, K devrait retourner la chaîne `-1 Hold`.

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(2);
    cc('A');
    cc(10);
    var out = cc('K');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

# --seed--

## --seed-contents--

```js
let count = 0;

function cc(card) {
  // Ne changez que le code en dessous de cette ligne


  return "Change Me";
  // Ne changez que le code au-dessus de cette ligne
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```

# --solutions--

```js
let count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```
