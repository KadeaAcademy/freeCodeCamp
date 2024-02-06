---
id: 587d78a4367417b2b2512ad2
title: Découvrez les couleurs tertiaires
challengeType: 0
forumTopicId: 301057
dashedName: learn-about-tertiary-colors
---

# --description--

Les moniteurs d'ordinateurs et les écrans d'appareils créent différentes couleurs en combinant des quantités de lumière rouge, verte et bleue. C'est ce qu'on appelle le modèle de couleur additif RVB dans la théorie moderne des couleurs. Le rouge (R), le vert (G) et le bleu (B) sont appelés couleurs primaires. Le mélange de deux couleurs primaires crée les couleurs secondaires cyan (G + B), magenta (R + B) et jaune (R + G). Vous avez vu ces couleurs dans le défi des couleurs complémentaires. Ces couleurs secondaires sont le complément de la couleur primaire qui n'a pas été utilisée dans leur création, et sont opposées à cette couleur primaire sur le cercle chromatique. Par exemple, le magenta est fait avec du rouge et du bleu, et est le complément du vert.

Les couleurs tertiaires sont le résultat de la combinaison d'une couleur primaire avec une de ses voisines de couleur secondaire. Par exemple, dans le modèle de couleurs RVB, le rouge (primaire) et le jaune (secondaire) donnent l'orange (tertiaire). Cela ajoute six couleurs supplémentaires à une roue chromatique simple, pour un total de douze.

Il existe plusieurs méthodes de sélection des différentes couleurs qui permettent d'obtenir une combinaison harmonieuse dans le design. Un exemple d'utilisation des couleurs tertiaires est le schéma de couleurs fractionnées-complémentaires. Ce schéma part d'une couleur de base, puis l'associe aux deux couleurs adjacentes à sa complémentaire. Les trois couleurs offrent un fort contraste visuel dans un dessin, mais sont plus subtiles que l'utilisation de deux couleurs complémentaires.

Voici trois couleurs créées à l'aide du schéma split-complémentaire :

<table class='table table-striped'><thead><tr><th>Color</th><th>Hex Code</th></tr></thead><thead></thead><tbody><tr><td>orange</td><td>#FF7F00</td></tr><tr><td>cyan</td><td>#00FFFF</td></tr><tr><td>raspberry</td><td>#FF007F</td></tr></tbody></table>

# --instructions--

Changez la propriété `background-color` des classes `orange`, `cyan`, et `raspberry` pour leurs couleurs respectives. Veillez à utiliser les codes hexadécimaux et non les noms des couleurs.

# --hints--

L'élément `div` avec la classe `orange` doit avoir un `background-color` de couleur orange.

```js
assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
```

L'élément `div` de la classe `cyan` doit avoir un `background-color` de couleur cyan.

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

L'élément `div` de la classe `raspberry` doit avoir un `background-color` de raspberry.

```js
assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
```

Toutes les valeurs `background-color` pour les classes de couleurs doivent être des codes hexadécimaux et non des noms de couleurs.

```js
assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```
