---
id: 587d778f367417b2b2512aad
title: >-
  Éviter les problèmes de daltonisme en choisissant soigneusement les couleurs qui véhiculent les informations
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

Il existe plusieurs formes de daltonisme. Elles peuvent aller d'une sensibilité réduite à une certaine longueur d'onde de la lumière à l'incapacité de voir les couleurs du tout. La forme la plus courante est une sensibilité réduite à la détection des verts.

Par exemple, si deux couleurs vertes similaires constituent la couleur d'avant-plan et d'arrière-plan de votre contenu, un utilisateur daltonien peut ne pas être en mesure de les distinguer. Les couleurs proches peuvent être considérées comme des voisines sur la roue chromatique, et ces combinaisons doivent être évitées lorsque vous transmettez des informations importantes.

**Note:** Certains outils de sélection des couleurs en ligne comprennent des simulations visuelles de l'apparence des couleurs pour différents types de daltonisme. Ce sont d'excellentes ressources en plus des calculateurs de contraste en ligne.

# --instructions--

Camper Cat teste différents styles pour un bouton important, mais la couleur d'arrière-plan jaune (`#FFFF33`) et la couleur de texte verte (`#33FF33`) sont des teintes voisines sur la roue chromatique et pratiquement indiscernables pour certains utilisateurs daltoniens. (Leur luminosité similaire ne permet pas non plus de vérifier le rapport de contraste). Changez l'attribut `color` du texte en bleu foncé (`#003366`) pour résoudre les deux problèmes.

# --hints--

Votre code devrait changer l'attribut `color` du texte du `button` en bleu foncé.

```js
assert($('button').css('color') == 'rgb(0, 51, 102)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Supprimer Internet</button>
</body>
```

# --solutions--

```html
<head>
  <style>
    button {
      color: #003366;
      background-color: #FFFF33;
      font-size: 14px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Supprimer Internet</button>
</body>
```
