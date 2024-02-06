---
id: 587d7dab367417b2b2512b6d
title: Appliquer la programmation fonctionnelle pour convertir des chaînes de caractères en slugs d'URL
challengeType: 1
forumTopicId: 301227
dashedName: apply-functional-programming-to-convert-strings-to-url-slugs
---

# --description--

Les derniers défis ont couvert un certain nombre de méthodes utiles pour les tableaux et les chaînes de caractères qui suivent les principes de la programmation fonctionnelle. Nous avons également appris à connaître la méthode `reduce`, qui est une méthode puissante utilisée pour réduire les problèmes à des formes plus simples. Du calcul des moyennes au tri, toute opération sur un tableau peut être réalisée en l'appliquant. Rappelons que `map` et `filter` sont des cas particuliers de `reduce`.

Combinons ce que nous avons appris pour résoudre un problème pratique.

Sur de nombreux sites de gestion de contenu (CMS), les titres des articles sont ajoutés à une partie de l'URL à des fins de bookmarking. Par exemple, si vous écrivez un article sur Medium intitulé `Stop Using Reduce`, il est probable que l'URL contienne une partie de la chaîne de titre (`.../stop-using-reduce`). Vous l'avez peut-être déjà remarqué sur le site Kadea.

# --instructions--

Remplissez la fonction `urlSlug` pour qu'elle convertisse une chaîne de caractères `title` et retourne la version avec trait d'union pour l'URL. Vous pouvez utiliser n'importe laquelle des méthodes décrites dans cette section, et n'utilisez pas `replace`. Voici les conditions requises :

L'entrée est une chaîne de caractères avec des espaces et des mots mis en majuscules dans le titre

La sortie est une chaîne dont les espaces entre les mots sont remplacés par un trait d'union (`-`).

La sortie doit être composée de lettres minuscules

La sortie ne doit pas comporter d'espaces

# --hints--

Votre code ne doit pas utiliser la méthode `replace` pour ce défi.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`urlSlug("Winter Is Coming")` doit retourner la chaîne `winter-is-coming`.

```js
assert(urlSlug('Winter Is Coming') === 'winter-is-coming');
```

`urlSlug(" Winter Is  Coming")` doit retourner la chaîne `winter-is-coming`.

```js
assert(urlSlug(' Winter Is  Coming') === 'winter-is-coming');
```

`urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` doit retourner la chaîne  `a-mind-needs-books-like-a-sword-needs-a-whetstone`.

```js
assert(
  urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone') ===
    'a-mind-needs-books-like-a-sword-needs-a-whetstone'
);
```

`urlSlug("Hold The Door")` doit retourner la chaîne `hold-the-door`.

```js
assert(urlSlug('Hold The Door') === 'hold-the-door');
```

# --seed--

## --seed-contents--

```js
// Ne modifiez que le code situé en dessous de cette ligne
function urlSlug(title) {


}
// Ne modifiez que le code au-dessus de cette ligne
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
```

# --solutions--

```js
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
```
