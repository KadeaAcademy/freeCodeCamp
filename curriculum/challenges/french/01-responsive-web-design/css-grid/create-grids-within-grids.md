---
id: 5a94fe8569fb03452672e464
title: Créer des grilles (Grids) dans des grilles (Grids)
challengeType: 0
forumTopicId: 301128
dashedName: create-grids-within-grids
---

# --description--

Transformer un élément en grille n'affecte que le comportement de ses descendants directs. Ainsi, en transformant un descendant direct en grille, on obtient une grille dans une grille.

Par exemple, en définissant les propriétés `display` et `grid-template-columns` de l'élément avec la classe `item3`, vous créez une grille dans votre grille.

# --instructions--

Transformez l'élément avec la classe `item3` en une grille avec deux colonnes avec une largeur de `auto` et `1fr` en utilisant `display` et `grid-template-columns`.

# --hints--

La classe `item3` devrait avoir une propriété `grid-template-columns` avec `auto` et `1fr` comme valeurs.

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

La classe `item3` devrait avoir une propriété `display` avec la valeur de `grid`.

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">en-tête</div>
  <div class="item2">publicité</div>
  <div class="item3">
    <div class="itemOne">paragraphe1</div>
    <div class="itemTwo">paragraphe2</div>
  </div>
  <div class="item4">pied de page</div>
</div>
```

# --solutions--

```html
<style>.item3 {grid-template-columns: auto 1fr; display: grid;}</style>
```
