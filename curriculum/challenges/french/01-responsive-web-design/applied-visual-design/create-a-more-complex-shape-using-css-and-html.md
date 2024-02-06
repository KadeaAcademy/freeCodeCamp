---
id: 587d78a6367417b2b2512ade
title: Créer une forme plus complexe à l'aide de CSS et HTML
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
dashedName: create-a-more-complex-shape-using-css-and-html
---

# --description--

L'une des formes les plus populaires au monde est celle du cœur. Dans ce défi, vous allez en créer un en utilisant du pur CSS. Mais d'abord, vous devez comprendre les pseudo-éléments `::before` et `::after`. `::before` crée un pseudo-élément qui est le premier enfant de l'élément sélectionné ; `::after` crée un pseudo-élément qui est le dernier enfant de l'élément sélectionné. Dans l'exemple suivant, un pseudo-élément `::before` est utilisé pour ajouter un rectangle à un élément de la classe `heart` :

```css
.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
```

Pour que les pseudo-éléments `::before` et `::after` fonctionnent correctement, ils doivent avoir une propriété `content` définie. Cette propriété est généralement utilisée pour ajouter des éléments comme une photo ou du texte à l'élément sélectionné. Lorsque les pseudo-éléments `::before` et `::after` sont utilisés pour créer des formes, la propriété `content` est toujours nécessaire, mais elle est définie comme une chaîne vide. Dans l'exemple ci-dessus, l'élément avec la classe `heart` a un pseudo-élément `::before` qui produit un rectangle jaune avec une hauteur et une largeur de `50px` et `70px`, respectivement. Ce rectangle a des coins arrondis grâce à son `border-radius` de 25% et est positionné de manière absolue à `5px` de la gauche et `50px` au-dessus du haut de l'élément.

# --instructions--

Transformez l'élément à l'écran en un cœur. Dans le sélecteur `heart::after`, changez la `background-color` en `pink` et la `border-radius` en 50%.

Ensuite, ciblez l'élément avec la classe `heart` (juste `heart`) et remplissez la propriété `transform`. Utilisez la fonction `rotate()` avec -45 degrés.

Enfin, dans le sélecteur `heart::before`, définissez sa propriété `content` à une chaîne vide.

# --hints--

La propriété `background-color` du sélecteur `heart::after` doit être `pink`.

```js
const heartAfter = code.match(/\.heart::after\s*{[\s\S]+?[^\}]}/g)[0];
assert(
  /({|;)\s*background-color\s*:\s*pink\s*(;|})/g.test(heartAfter)
);
```

La valeur de `border-radius` du sélecteur `heart::after` devrait être de 50 %.

```js
assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
```

La propriété `transform` de la classe `heart` devrait utiliser une fonction `rotate()` réglée sur -45 degrés.

```js
assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
```

Le `contenu` du sélecteur `heart::before` doit être une chaîne vide.

```js
assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: ;
  }
  .heart::after {
    background-color: blue;
    content: "";
    border-radius: 25%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: ;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```
