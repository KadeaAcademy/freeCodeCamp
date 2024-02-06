---
id: 587d778f367417b2b2512aac
title: Évitez les problèmes de daltonisme en utilisant un contraste suffisant
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMEUw'
forumTopicId: 301012
dashedName: avoid-colorblindness-issues-by-using-sufficient-contrast
---

# --description--

La couleur est un élément important de la conception visuelle, mais son utilisation pose deux problèmes d'accessibilité. Premièrement, la couleur seule ne doit pas être utilisée comme seul moyen de transmettre des informations importantes, car les utilisateurs de lecteurs d'écran ne les verront pas. Deuxièmement, les couleurs de premier plan et d'arrière-plan doivent être suffisamment contrastées pour que les utilisateurs daltoniens puissent les distinguer.

Les défis précédents portaient sur l'utilisation d'alternatives textuelles pour résoudre le premier problème. Le dernier défi a introduit des outils de vérification du contraste pour aider à résoudre le second. Le rapport de contraste de 4,5:1 recommandé par les WCAG s'applique à l'utilisation des couleurs ainsi qu'aux combinaisons de niveaux de gris.

Les utilisateurs daltoniens ont des difficultés à distinguer certaines couleurs des autres - généralement la teinte, mais parfois aussi la luminosité. Vous vous souvenez peut-être que le rapport de contraste est calculé à partir des valeurs de luminance (ou de luminosité) relatives des couleurs de premier plan et d'arrière-plan.

En pratique, le rapport de contraste de 4,5:1 peut être atteint en ombrant (en ajoutant du noir à) la couleur la plus foncée et en teintant (en ajoutant du blanc à) la couleur la plus claire. Sur la roue chromatique, les nuances les plus sombres sont les bleus, les violets, les magentas et les rouges, tandis que les couleurs plus claires sont les oranges, les jaunes, les verts et les bleu-vert.

# --instructions--

Camper Cat expérimente l'utilisation de la couleur pour le texte et l'arrière-plan de son blog, mais sa combinaison actuelle d'un `background-color` verdâtre et d'un `color` de texte marron a un rapport de contraste de 2,5:1. Vous pouvez facilement ajuster la luminosité des couleurs puisqu'il les a déclarées à l'aide de la propriété CSS `hsl()` (qui signifie teinte, saturation, luminosité) en modifiant le troisième argument. Augmentez la valeur de luminosité de `background-color` de 35% à 55%, et diminuez la valeur de luminosité de `color` de 20% à 15%. Cela améliore le contraste à 5,9:1.

# --hints--

Votre code doit uniquement modifier la valeur de luminosité de la propriété `color` du texte à une valeur de 15%.

```js
assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
```

Votre code devrait seulement changer la valeur de luminosité pour la propriété `background-color` à une valeur de 55%.

```js
assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
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
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
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
