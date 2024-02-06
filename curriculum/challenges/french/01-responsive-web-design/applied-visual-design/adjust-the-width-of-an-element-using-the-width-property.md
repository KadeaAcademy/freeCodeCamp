---
id: 587d7791367417b2b2512ab4
title: Ajuster la largeur d'un élément à l'aide de la propriété width
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVLPtN'
forumTopicId: 301039
dashedName: adjust-the-width-of-an-element-using-the-width-property
---

# --description--

Vous pouvez spécifier la largeur d'un élément à l'aide de la propriété `width` en CSS. Les valeurs peuvent être données en unités de longueur relative (comme `em`), en unités de longueur absolue (comme `px`) ou en pourcentage de l'élément parent qui le contient. Voici un exemple qui modifie la largeur d'une image à 220px :

```css
img {
  width: 220px;
}
```

# --instructions--

Ajoutez une propriété `width` à la carte entière et définissez-la à une valeur absolue de 245px. Utilisez la classe `fullCard` pour sélectionner l'élément.

# --hints--

Votre code doit modifier la propriété `width` de la carte en 245 pixels en utilisant le sélecteur de classe `fullCard`.

```js
const fullCard = code.match(/\.fullCard\s*{[\s\S]+?[^}]}/g);
assert(
  fullCard &&
    /width\s*:\s*245px\s*(;|})/gi.test(fullCard[0]) &&
    $('.fullCard').css('maxWidth') === 'none'
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {

    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient étudiants en doctorat à l'université de Stanford.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient étudiants en doctorat à l'université de Stanford.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
