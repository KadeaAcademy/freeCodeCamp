---
id: 587d7b7d367417b2b2512b1d
title: Itérer à travers les clés d'un objet avec une instruction for...in
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

Parfois, vous pouvez avoir besoin d'itérer à travers toutes les clés d'un objet. Cela nécessite une syntaxe spécifique en JavaScript appelée <dfn>for...in<dfn>. Pour notre objet `users`, cela pourrait ressembler à ceci :

```js
for (let user in users) {
  console.log(user);
}
```

Ainsi, `Alan`, `Jeff`, `Sarah` et `Ryan` seraient enregistrés - chaque valeur sur sa propre ligne.

Dans cette instruction, nous avons défini une variable `user`, et comme vous pouvez le voir, cette variable a été réinitialisée à chaque itération sur chacune des clés de l'objet, alors que l'instruction bouclait sur l'objet, ce qui a permis d'imprimer le nom de chaque utilisateur sur la console.

**NOTE:** Les objets ne maintiennent pas un ordre pour les clés stockées comme le font les tableaux ; ainsi, la position d'une clé sur un objet, ou l'ordre relatif dans lequel elle apparaît, n'est pas pertinent lors de la référence ou de l'accès à cette clé.

# --instructions--

Nous avons défini une fonction `countOnline` qui accepte un argument (un objet users). Utilisez une instruction <dfn>for...in</dfn> dans cette fonction pour boucler sur l'objet users passé dans la fonction et retourner le nombre d'utilisateurs dont la propriété `online` a la valeur `true`. Un exemple d'un objet users qui pourrait être passé à `countOnline` est montré ci-dessous. Chaque utilisateur aura une propriété `online` avec une valeur `true` ou `false`.

```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

# --hints--

La fonction `countOnline` doit utiliser une instruction `for in` pour itérer à travers les clés de l'objet qui lui est passé.

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

La fonction `countOnline` doit retourner `1` lorsque l'objet `{ Alan : { online : false }, Jeff : { online : true }, Sarah : { online : false } }` est passé à la fonction

```js
assert(countOnline(usersObj1) === 1);
```

La fonction `countOnline` doit retourner `2` lorsque l'objet `{ Alan : { online : true }, Jeff : { online : false }, Sarah : { online : true } }` est passé à la fonction

```js
assert(countOnline(usersObj2) === 2);
```

La fonction `countOnline` doit retourner `0` lorsque l'objet `{ Alan : { online : false }, Jeff : { online : false }, Sarah : { online : false } }` lui est passé

```js
assert(countOnline(usersObj3) === 0);
```

# --seed--

## --after-user-code--

```js
const usersObj1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const usersObj2 = {
  Alan: {
    online: true
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: true
  }
}


const usersObj3 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}
```

## --seed-contents--

```js
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Ne changez que le code en dessous de cette ligne

  // Ne changez que le code au-dessus de cette ligne
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(usersObj) {
  let online = 0;
  for(let user in usersObj){
    if(usersObj[user].online) {
      online++;
    }
  }
  return online;
}
```
