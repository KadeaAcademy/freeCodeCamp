---
id: 56533eb9ac21ba0edf2244b6
title: Séquences d'échappement dans les chaînes de caractères
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

Les guillemets ne sont pas les seuls caractères qui peuvent être <dfn>échappés</dfn> à l'intérieur d'une chaîne de caractères. Il y a deux raisons d'utiliser des caractères d'échappement :

1.  Pour vous permettre d'utiliser des caractères que vous ne pourriez pas taper autrement, comme un retour chariot.
2.  Pour vous permettre de représenter plusieurs guillemets dans une chaîne sans que JavaScript n'interprète mal ce que vous voulez dire.

Nous avons appris cela dans le défi précédent.

<table class='table table-striped'><thead><tr><th>Code</th><th>Output</th></tr></thead><tbody><tr><td><code>\'</code></td><td>single quote</td></tr><tr><td><code>\"</code></td><td>double quote</td></tr><tr><td><code>\\</code></td><td>backslash</td></tr><tr><td><code>\n</code></td><td>newline</td></tr><tr><td><code>\r</code></td><td>carriage return</td></tr><tr><td><code>\t</code></td><td>tab</td></tr><tr><td><code>\b</code></td><td>word boundary</td></tr><tr><td><code>\f</code></td><td>form feed</td></tr></tbody></table>

*Notez que la barre oblique inversée elle-même doit être échappée afin de s'afficher comme une barre oblique inversée.*

# --instructions--

Assignez les trois lignes de texte suivantes dans la variable unique `myStr` en utilisant des séquences d'échappement.

<blockquote>FirstLine<br>    \SecondLine<br>ThirdLine</blockquote>

Vous devrez utiliser des séquences d'échappement pour insérer correctement les caractères spéciaux. Vous devrez également respecter l'espacement tel qu'il apparaît ci-dessus, sans espace entre les séquences d'échappement ou les mots.

**Note:** L'indentation pour `SecondLine` est obtenue avec le caractère d'échappement tabulation, et non avec les espaces.

# --hints--

`myStr` ne doit pas contenir d'espace.

```js
assert(!/ /.test(myStr));
```

`myStr` doit contenir les chaînes `FirstLine`, `SecondLine` et `ThirdLine` (n'oubliez pas la sensibilité à la casse)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` doit être suivi du caractère de nouvelle ligne `n`.

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` doit contenir un caractère de tabulation `\t` qui suit un caractère de nouvelle ligne

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` doit être précédé du caractère backslash `\`.

```js
assert(/\\SecondLine/.test(myStr));
```

Il doit y avoir un caractère de nouvelle ligne entre `SecondLine` et `ThirdLine`.

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` ne doit contenir que les caractères indiqués dans les instructions

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --after-user-code--

```js
(function(){
if (myStr !== undefined){
console.log('myStr:\n' + myStr);}})();
```

## --seed-contents--

```js
const myStr = ""; // Modifiez cette ligne
```

# --solutions--

```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
