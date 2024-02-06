---
id: 56533eb9ac21ba0edf2244b5
title: Echapper aux citations littérales dans les chaînes de caractères
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

Lorsque vous définissez une chaîne de caractères, vous devez commencer et terminer par un guillemet simple ou double. Que se passe-t-il lorsque vous avez besoin d'un guillemet littéral : `"` ou `'` à l'intérieur de votre chaîne de caractères ?

En JavaScript, vous pouvez échapper un guillemet pour qu'il ne soit pas considéré comme un guillemet de fin de chaîne en plaçant une barre oblique inverse (\\) devant le guillemet.

```js
const sampleStr = "Alan a dit : \"Peter apprend le JavaScript\".";
```

Cela indique à JavaScript que le guillemet suivant n'est pas la fin de la chaîne de caractères, mais qu'il doit au contraire apparaître à l'intérieur de celle-ci. Donc si vous deviez imprimer ceci à la console, vous obtiendriez :

```js
Alan a dit : "Peter apprend le JavaScript".
```

# --instructions--

Utilisez les barres obliques inverses (\\) pour assigner une chaîne de caractères à la variable `myStr` de sorte que si vous deviez l'imprimer sur la console, vous verriez :

```js
Je suis une chaîne "entre guillemets" à l'intérieur de "guillemets".
```

# --hints--

Vous devez utiliser deux guillemets doubles (`"`) et quatre guillemets doubles échappés (`\"`).

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

La variable myStr doit contenir la chaîne de caractères : `Je suis une chaîne "entre guillemets" à l'intérieur de "guillemets".`

```js
assert(/Je suis une chaîne "entre guillemets" à l'intérieur de "guillemets(\."|"\.)$/.test(myStr));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Modifiez cette ligne
```

# --solutions--

```js
const myStr = "Je suis une chaîne \"entre guillemets\" à l'intérieur de \"guillemets\".";
```
