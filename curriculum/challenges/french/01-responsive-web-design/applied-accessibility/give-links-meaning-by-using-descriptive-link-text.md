---
id: 587d778f367417b2b2512aae
title: Donnez du sens aux liens en utilisant un texte de lien descriptif
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
dashedName: give-links-meaning-by-using-descriptive-link-text
---

# --description--

Les utilisateurs de lecteurs d'écran disposent de plusieurs options pour le type de contenu que leur appareil lit. Ces options comprennent le saut vers (ou au-dessus) des éléments marquants, le saut vers le contenu principal ou l'obtention d'un résumé de la page à partir des titres. Une autre option consiste à n'entendre que les liens disponibles sur une page.

Les lecteurs d'écran lisent le texte du lien, ou ce qui se trouve entre les balises d'ancrage (`a`). Une liste de liens "cliquez ici" ou "en savoir plus" n'est pas utile. Utilisez plutôt un texte bref mais descriptif dans les balises `a` pour donner plus de sens à ces utilisateurs.

# --instructions--

Le texte du lien utilisé par Camper Cat n'est pas très descriptif sans le contexte environnant. Déplacez les balises d'ancrage (`a`) pour qu'elles entourent le texte `informations sur les piles` au lieu de `Cliquez ici`.

# --hints--

Votre code devrait déplacer les balises d'ancrage `a` autour des mots `Cliquez ici` pour les placer autour des mots `informations sur les piles`.

```js
assert(
  $('a')
    .text()
    .match(/^(informations sur les piles)$/g)
);
```

L'élément `a` doit avoir un attribut `href` dont la valeur est une chaîne vide `""`.

```js
assert($('a').attr('href') === '');
```

L'élément `a` doit avoir une balise fermante.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Réflexions profondes avec Master Camper Cat</h1>
  </header>
  <article>
    <h2>Vaincre l'ennemi : le point rouge est à nous!</h2>
    <p>Les félins du monde entier ont fait la guerre aux ennemis les plus tenaces. Cette némésis rouge combine à la fois l'astuce, la discrétion et la vitesse de l'éclair. Mais tenez bon, camarades combattants, l'heure de la victoire pourrait bientôt sonner. <a href="">Cliquez ici</a> pour des informations sur les piles</p>
  </article>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Réflexions profondes avec Master Camper Cat</h1>
  </header>
  <article>
    <h2>Vaincre l'ennemi : le point rouge est à nous!</h2>
    <p>Les félins du monde entier ont fait la guerre aux ennemis les plus tenaces. Cette némésis rouge combine à la fois l'astuce, la discrétion et la vitesse de l'éclair. Mais tenez bon, camarades combattants, l'heure de la victoire pourrait bientôt sonner. Cliquez ici pour des <a href="">informations sur les piles</a></p>
  </article>
</body>
```
