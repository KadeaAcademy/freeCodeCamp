---
id: 5a9036ee38fddaf9a66b5d34
title: Utilisez les unités de grille (Grid ) CSS pour modifier la taille des colonnes et des lignes
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
dashedName: use-css-grid-units-to-change-the-size-of-columns-and-rows
---

# --description--

Vous pouvez utiliser des unités absolues et relatives comme `px` et `em` dans CSS Grid pour définir la taille des lignes et des colonnes. Vous pouvez également utiliser ces unités :

`fr` : définit la colonne ou la ligne à une fraction de l'espace disponible,

`auto` : règle automatiquement la colonne ou la ligne sur la largeur ou la hauteur de son contenu,

`%` : ajuste la colonne ou la ligne au pourcentage de largeur de son conteneur.

Voici le code qui génère la sortie dans l'aperçu :

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

Ce snippet crée cinq colonnes. La première colonne est aussi large que son contenu, la deuxième colonne est de 50px, la troisième colonne est de 10% de son conteneur, et pour les deux dernières colonnes ; l'espace restant est divisé en trois sections, deux sont allouées pour la quatrième colonne, et une pour la cinquième.

# --instructions--

Faites une grille avec trois colonnes dont les largeurs sont les suivantes : 1fr, 100px, et 2fr.

# --hints--

La classe `container` devrait avoir une propriété `grid-template-columns` qui a trois colonnes avec les largeurs suivantes : `1fr, 100px, et 2fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>
```
