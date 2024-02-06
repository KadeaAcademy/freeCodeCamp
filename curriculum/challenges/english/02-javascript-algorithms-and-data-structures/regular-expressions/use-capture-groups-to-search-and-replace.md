---
id: 587d7dbb367417b2b2512bab
title: Utiliser les groupes de capture pour rechercher et remplacer
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

La recherche est utile. Cependant, vous pouvez rendre la recherche encore plus puissante lorsqu'elle modifie (ou remplace) également le texte que vous recherchez.

Vous pouvez rechercher et remplacer du texte dans une chaîne en utilisant `.replace()` sur une chaîne. Les entrées de `.replace()` sont d'abord le motif regex que vous voulez rechercher. Le second paramètre est la chaîne de caractères à remplacer ou une fonction pour faire quelque chose.

```js
let wrongText = "Le ciel est argenté.";
let silverRegex = /argenté/;
wrongText.replace(silverRegex, "bleu");
```

L'appel à `replace` renverrait la chaîne `Le ciel est bleu.`.

Vous pouvez également accéder aux groupes de capture dans la chaîne de remplacement avec des signes de dollar (`$`).

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

L'appel `replace` renverrait la chaîne `Camp Code`

# --instructions--

Écrivez une regex `fixRegex` utilisant trois groupes de capture qui recherchera chaque mot de la chaîne `un deux trois`. Mettez ensuite à jour la variable `replaceText` pour remplacer `un deux trois` par la chaîne `trois deux un` et affectez le résultat à la variable `result`. Assurez-vous que vous utilisez les groupes de capture dans la chaîne de remplacement en utilisant la syntaxe du signe dollar (`$`).

# --hints--

Vous devriez utiliser `.replace()` pour rechercher et remplacer.

```js
assert(code.match(/\.replace\(.*\)/));
```

Votre regex devrait changer la chaîne `un deux trois` en la chaîne `trois deux un`.

```js
assert(result === 'trois deux un');
```

Vous ne devez pas changer la dernière ligne.

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` doit utiliser au moins trois groupes de capture.

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` doit utiliser des chaînes de sous-matchs entre parenthèses (c'est-à-dire que la nième chaîne de sous-matchs entre parenthèses, $n, correspond au nième groupe de capture).

```js
{
  const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
  assert(replaceText.match(re).length >= 3);
}
```

# --seed--

## --seed-contents--

```js
let str = "un deux trois";
let fixRegex = /change/; // Modifiez cette ligne
let replaceText = ""; // Modifiez cette ligne
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "un deux trois";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Modifiez cette ligne
let replaceText = "$3 $2 $1"; // Modifiez cette ligne
let result = str.replace(fixRegex, replaceText);
```
