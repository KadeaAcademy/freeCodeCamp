---
id: 587d78a3367417b2b2512ad1
title: Découvrez les couleurs complémentaires
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MD3Tr'
forumTopicId: 301056
dashedName: learn-about-complementary-colors
---

# --description--

La théorie des couleurs et son impact sur le design est un sujet très vaste et seuls les principes de base sont abordés dans les défis suivants. Sur un site Web, la couleur peut attirer l'attention sur le contenu, évoquer des émotions ou créer une harmonie visuelle. L'utilisation de différentes combinaisons de couleurs peut réellement changer l'aspect d'un site Web, et il faut beaucoup de réflexion pour choisir une palette de couleurs qui fonctionne avec votre contenu.

Le cercle chromatique est un outil utile pour visualiser les relations entre les couleurs. Il s'agit d'un cercle où les teintes similaires sont voisines et les teintes différentes plus éloignées. Lorsque deux couleurs sont opposées sur la roue, elles sont appelées couleurs complémentaires. Elles ont la caractéristique que si elles sont combinées, elles s'annulent et créent une couleur grise. Cependant, lorsqu'elles sont placées côte à côte, ces couleurs apparaissent plus vives et produisent un fort contraste visuel.

Voici quelques exemples de couleurs complémentaires avec leurs codes hexadécimaux :

<blockquote>rouge (#FF0000) et cyan (#00FFFF)<br>vert (#00FF00) et magenta (#FF00FF)<br>bleu (#0000FF) et jaune (#FFFF00)</blockquote>

Ce modèle est différent du modèle de couleur RYB, dépassé, que beaucoup d'entre nous ont appris à l'école et qui comporte des couleurs primaires et complémentaires différentes. La théorie moderne des couleurs utilise le modèle additif RVB (comme sur un écran d'ordinateur) et le modèle soustractif CMY(K) (comme en imprimerie). Lisez [ici](https://en.wikipedia.org/wiki/Color_model) pour plus d'informations sur ce sujet complexe.

Il existe de nombreux outils de sélection des couleurs disponibles en ligne qui proposent une option permettant de trouver le complément d'une couleur.

**Note :** L'utilisation de la couleur peut être un moyen efficace d'ajouter un intérêt visuel à une page. Cependant, la couleur seule ne doit pas être utilisée comme le seul moyen de transmettre des informations importantes, car les utilisateurs souffrant de déficiences visuelles pourraient ne pas comprendre ce contenu. Cette question sera traitée plus en détail dans les défis de l'accessibilité appliquée.

# --instructions--

Changez la propriété `background-color` des classes `blue` et `yellow` pour leurs couleurs respectives. Remarquez que les couleurs n'ont pas le même aspect l'une à côté de l'autre que sur le fond blanc.

# --hints--

L'élément `div` avec la classe `blue` doit avoir un `background-color` de couleur bleue.

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

L'élément `div` de la classe `yellow` doit avoir un `background-color` de couleur jaune.

```js
assert($('.yellow').css('background-color') == 'rgb(255, 255, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```
