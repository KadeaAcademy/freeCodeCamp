---
id: 587d7b8c367417b2b2512b56
title: Utiliser "export" pour partager un bloc de code
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

Imaginez un fichier appelé `math_functions.js` qui contient plusieurs fonctions liées à des opérations mathématiques. L'une d'elles est stockée dans une variable, `add`, qui prend deux nombres et renvoie leur somme. Vous souhaitez utiliser cette fonction dans plusieurs fichiers JavaScript différents. Afin de la partager avec ces autres fichiers, vous devez d'abord l'exporter.

```js
export const add = (x, y) => {
  return x + y;
}
```

La méthode ci-dessus est une façon courante d'exporter une seule fonction, mais vous pouvez obtenir la même chose de la façon suivante :

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

Lorsque vous exportez une variable ou une fonction, vous pouvez l'importer dans un autre fichier et l'utiliser sans avoir à réécrire le code. Vous pouvez exporter plusieurs choses en répétant le premier exemple pour chaque chose que vous voulez exporter, ou en les plaçant toutes dans l'instruction d'exportation du deuxième exemple, comme ceci : 

```js
export { add, subtract };
```

# --instructions--

Il existe deux fonctions liées aux chaînes de caractères dans l'éditeur. Exportez-les toutes les deux en utilisant la méthode de votre choix.

# --hints--

Vous devez exporter correctement `uppercaseString`.

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

Vous devez exporter correctement `lowercaseString`.

```js
assert(
  code.match(
    /(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g
  )
);
```

# --seed--

## --seed-contents--

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

# --solutions--

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
