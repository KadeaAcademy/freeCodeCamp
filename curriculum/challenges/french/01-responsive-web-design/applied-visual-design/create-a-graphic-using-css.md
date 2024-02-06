---
id: 587d78a6367417b2b2512add
title: Créer un graphique à l'aide de CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDWPs6'
forumTopicId: 301048
dashedName: create-a-graphic-using-css
---

# --description--

En manipulant différents sélecteurs et propriétés, vous pouvez créer des formes intéressantes. L'une des plus faciles à réaliser est un croissant de lune. Pour ce défi, vous devez travailler avec la propriété `box-shadow` qui définit l'ombre d'un élément, ainsi que la propriété `border-radius` qui contrôle l'arrondi des coins de l'élément.

Vous allez créer un objet rond et transparent avec une ombre nette légèrement décalée sur le côté - l'ombre sera en fait la forme de la lune que vous voyez.

Afin de créer un objet rond, la propriété `border-radius` doit être définie sur une valeur de 50%.

Vous vous souvenez peut-être d'un défi précédent, la propriété `box-shadow` prend les valeurs de `offset-x`, `offset-y`, `blur-radius`, `spread-radius` et une valeur de couleur dans cet ordre. Les valeurs `blur-radius` et `spread-radius` sont facultatives.

# --instructions--

Manipulez l'élément carré dans l'éditeur pour créer la forme de la lune. Tout d'abord, changez la couleur d'arrière-plan (`background-color`) en `transparent`, puis définissez la propriété `border-radius` à 50 % pour obtenir une forme circulaire. Enfin, modifiez la propriété `box-shadow` pour définir le `offset-x` sur 25px, le `offset-y` sur 10px, le `blur-radius` sur 0, le `spread-radius` sur 0, et la couleur sur `blue`.

# --hints--

La valeur de la propriété `background-color` doit être définie sur `transparent`.

```js
assert(code.match(/background-color:\s*?transparent;/gi));
```

La valeur de la propriété `border-radius` doit être fixée à `50%`.

```js
assert(code.match(/border-radius:\s*?50%;/gi));
```

La valeur de la propriété `box-shadow` doit être définie à 25px pour `offset-x`, 10px pour `offset-y`, 0 pour `blur-radius`, 0 pour `spread-radius`, et enfin `blue` pour la couleur.

```js
assert(
  code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 0px;
    box-shadow: 25px 10px 10px 10px green;
  }

</style>
<div class="center"></div>
```

# --solutions--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
</style>
<div class="center"></div>
```
