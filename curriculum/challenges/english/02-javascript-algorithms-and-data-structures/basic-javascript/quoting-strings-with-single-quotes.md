---
id: 56533eb9ac21ba0edf2244b4
title: Citer des chaînes de caractères avec des guillemets simples
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

Les valeurs <dfn>String</dfn> en JavaScript peuvent être écrites avec des guillemets simples ou doubles, tant que vous commencez et terminez avec le même type de guillemets. Contrairement à certains autres langages de programmation, les guillemets simples et doubles fonctionnent de la même manière en JavaScript. 

```js
const doubleQuoteStr = "Une chaîne de caractères"; 
const singleQuoteStr = 'Une chaîne de caractères aussi';
```

La raison pour laquelle vous voudrez peut-être utiliser un type de guillemet plutôt qu'un autre est si vous voulez utiliser les deux dans une chaîne. Cela peut arriver si vous souhaitez enregistrer une conversation dans une chaîne et avoir la conversation entre guillemets. Une autre utilisation serait de sauvegarder une balise `<a>` avec divers attributs entre guillemets, le tout dans une chaîne.

```js
const conversation = 'Finn a crié à Jake : "Algébrique !"';
```

Cependant, cela devient un problème si vous devez utiliser les guillemets les plus éloignés à l'intérieur de la chaîne. Rappelez-vous qu'une chaîne de caractères comporte le même type de guillemets au début et à la fin. Mais si vous avez le même type de guillemet au milieu, la chaîne s'arrêtera prématurément et une erreur sera signalée.

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

Ici, `badStr` lancera une erreur.

Dans le <dfn>goodStr</dfn> ci-dessus, vous pouvez utiliser les deux guillemets en toute sécurité en utilisant la barre oblique inversée `\` comme caractère d'échappement.

**Note:** Il ne faut pas confondre la barre oblique inversée `\` avec la barre oblique directe `/`. Elles ne font pas la même chose.

# --instructions--

Remplacez la chaîne fournie par une chaîne avec des guillemets simples au début et à la fin et sans caractères d'échappement.

À l'heure actuelle, la balise `<a>` dans la chaîne utilise des guillemets doubles partout. Vous devrez remplacer les guillemets externes par des guillemets simples afin de pouvoir supprimer les caractères d'échappement.

# --hints--

Vous devez enlever tous les antislashs (`\`).

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

Vous devriez avoir deux guillemets simples `'` et quatre guillemets doubles `"`.

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --after-user-code--

```js
(function() { return "myStr = " + myStr; })();
```

## --seed-contents--

```js
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
