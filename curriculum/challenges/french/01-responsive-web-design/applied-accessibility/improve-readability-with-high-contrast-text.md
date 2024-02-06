---
id: 587d778e367417b2b2512aab
title: Améliorer la lisibilité grâce à un texte à fort contraste
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

Un faible contraste entre les couleurs de premier plan et d'arrière-plan peut rendre le texte difficile à lire. Un contraste suffisant améliore la lisibilité de votre contenu, mais que signifie exactement "suffisant" ?

Les directives d'accessibilité aux contenus Web (WCAG) recommandent un rapport de contraste d'au moins 4,5 à 1 pour un texte normal. Ce rapport est calculé en comparant les valeurs de luminance relatives de deux couleurs. Il va de 1:1 pour la même couleur, ou aucun contraste, à 21:1 pour le blanc contre le noir, le contraste le plus important. Il existe de nombreux outils de vérification du contraste disponibles en ligne qui calculent ce rapport pour vous.

# --instructions--

Le texte gris clair sur fond blanc choisi par Camper Cat pour son récent article de blog a un rapport de contraste de 1,5:1, ce qui le rend difficile à lire. Changez l'attribut `color` du texte du gris actuel (`#D3D3D3`) à un gris plus foncé (`#636363`) pour améliorer le rapport de contraste à 6:1.

# --hints--

Votre code devrait changer la `couleur` du texte de l'élément `body` en gris foncé.

```js
assert($('body').css('color') == 'rgb(99, 99, 99)');
```

Votre code ne devrait pas modifier la `couleur` d'arrière-plan de l'élément `body`.

```js
assert($('body').css('background-color') == 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Réflexions profondes avec Master Camper Cat</h1>
  </header>
  <article>
    <h2>Un mot sur le récent scandale du dopage à l'herbe à chat</h2>
    <p>L'influence de l'herbe à chat sur le comportement des félins est bien documentée, mais son utilisation en tant que complément alimentaire dans le milieu des ninjas de compétition reste controversée. Une fois de plus, le débat visant à interdire cette substance est porté à l'attention du public après la victoire très médiatisée de Kittytron, un partisan et utilisateur de longue date de la substance verte, au tournoi Claw of Fury.</p>
    <p>Comme je l'ai dit dans le passé, je crois fermement que les compétences d'un vrai ninja doivent venir de l'intérieur, sans influences extérieures. Ma propre utilisation de l'herbe à chat doit continuer à être purement récréative.</p>
  </article>
</body>
```

# --solutions--

```html
<head>
  <style>
  body {
    color: #636363;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Réflexions profondes avec Master Camper Cat</h1>
  </header>
  <article>
    <h2>Un mot sur le récent scandale du dopage à l'herbe à chat</h2>
    <p>L'influence de l'herbe à chat sur le comportement des félins est bien documentée, mais son utilisation en tant que complément alimentaire dans le milieu des ninjas de compétition reste controversée. Une fois de plus, le débat visant à interdire cette substance est porté à l'attention du public après la victoire très médiatisée de Kittytron, un partisan et utilisateur de longue date de la substance verte, au tournoi Claw of Fury.</p>
    <p>Comme je l'ai dit dans le passé, je crois fermement que les compétences d'un vrai ninja doivent venir de l'intérieur, sans influences extérieures. Ma propre utilisation de l'herbe à chat doit continuer à être purement récréative.</p>
  </article>
</body>
```
