---
id: 5a90376038fddaf9a66b5d3c
title: Aligner tous les éléments horizontalement à l'aide de justify-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpECn'
forumTopicId: 301120
dashedName: align-all-items-horizontally-using-justify-items
---

# --description--

Parfois, vous souhaitez que tous les éléments de votre grille CSS partagent le même alignement. Vous pouvez utiliser les propriétés apprises précédemment et les aligner individuellement, ou vous pouvez les aligner tous en même temps horizontalement en utilisant `justify-items` sur votre conteneur de grille. Cette propriété peut accepter toutes les valeurs que vous avez apprises dans les deux défis précédents, la différence étant qu'elle déplacera **tous** les éléments de notre grille vers l'alignement souhaité.

# --instructions--

Utilisez cette propriété pour centrer tous nos éléments horizontalement.

# --hints--

La classe `container` doit avoir une propriété `justify-items` dont la valeur est `center`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* Only change code below this line */

    
    /* Only change code above this line */
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
<style>.container {justify-items: center;}</style>
```
