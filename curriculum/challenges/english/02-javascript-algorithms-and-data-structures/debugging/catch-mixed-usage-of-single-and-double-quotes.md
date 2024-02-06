---
id: 587d7b84367417b2b2512b37
title: Capturer l'utilisation mixte des guillemets simples et doubles
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

JavaScript permet l'utilisation de guillemets simples (`'`) et doubles (`"`) pour déclarer une chaîne de caractères. La décision d'utiliser l'une ou l'autre est généralement une question de préférence personnelle, à quelques exceptions près.

Le fait d'avoir deux choix est très utile lorsqu'une chaîne de caractères contient des contractions ou un autre élément de texte entre guillemets. Veillez simplement à ne pas fermer la chaîne trop tôt, ce qui entraînerait une erreur de syntaxe.

Voici quelques exemples de mélange de guillemets :

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

Les deux premiers sont corrects, mais le troisième est incorrect.

Bien entendu, il est possible de n'utiliser qu'un seul style de guillemets. Vous pouvez échapper aux guillemets à l'intérieur de la chaîne en utilisant le caractère d'échappement backslash (``) :

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

Corrigez la chaîne pour qu'elle utilise des guillemets différents pour la valeur `href`, ou échappez les guillemets existants. Gardez les guillemets doubles autour de la chaîne entière.

# --hints--

Votre code devrait corriger les guillemets autour de la valeur `href` `#Home` en les modifiant ou en les échappant.

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

Votre code doit conserver les guillemets doubles autour de la chaîne entière.

```js
assert(code.match(/"<p>.*?<\/p>";/g));
```

# --seed--

## --seed-contents--

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

# --solutions--

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```
