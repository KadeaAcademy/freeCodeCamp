---
id: 5a94fe3669fb03452672e45f
title: Réduire les répétitions à l'aide de la fonction repeat
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

Lorsque vous avez utilisé `grid-template-columns` et `grid-template-rows` pour définir la structure d'une grille, vous avez saisi une valeur pour chaque ligne ou colonne que vous avez créée.

Disons que vous voulez une grille avec 100 lignes de la même hauteur. Il n'est pas très pratique d'insérer 100 valeurs individuellement. Heureusement, il y a un meilleur moyen - en utilisant la fonction `repeat` pour spécifier le nombre de fois que vous voulez que votre colonne ou ligne soit répétée, suivi d'une virgule et de la valeur que vous voulez répéter.

Voici un exemple qui créerait une grille de 100 lignes, chaque ligne ayant une hauteur de 50 pixels.

```css
grid-template-rows: repeat(100, 50px);
```

Vous pouvez également répéter plusieurs valeurs avec la fonction repeat et insérer la fonction parmi d'autres valeurs lorsque vous définissez une structure de grille. Voici à quoi cela ressemble :

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

Cela se traduit par :

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**Note:** Le `1fr 50px` est répété deux fois suivi de 20px.

# --instructions--

Utilisez `repeat` pour supprimer la répétition de la propriété `grid-template-columns`.

# --hints--

La classe `container` doit avoir une propriété `grid-template-columns` qui est définie pour répéter 3 colonnes avec la largeur de `1fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: 1fr 1fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat(3, 1fr);}</style>
```
