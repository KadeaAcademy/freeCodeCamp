---
id: 587d7791367417b2b2512ab5
title: Ajuster la hauteur d'un élément à l'aide de la propriété height
challengeType: 0
videoUrl: "https://scrimba.com/c/cEDaDTN"
forumTopicId: 301034
dashedName: adjust-the-height-of-an-element-using-the-height-property
---

# --description--

Vous pouvez spécifier la hauteur d'un élément en utilisant la propriété `height` en CSS, comme pour la propriété `width`. Voici un exemple qui modifie la hauteur d'une image à 20px :

```css
img {
  height: 20px;
}
```

# --instructions--

Ajoutez une propriété `height` à la balise `h4` et définissez-la à 25px.

**Note:** Il se peut que vous ayez besoin d'un zoom à 100% pour réussir le test de ce défi.

# --hints--

Votre code devrait changer la propriété `h4` `height` à une valeur de 25 pixels.

```js
assert(
  Math.round(document.querySelector("h4").getBoundingClientRect().height) ===
    25 &&
    /h4{\S*height:25px(;\S*}|})/.test($("style").text().replace(/\s/g, ""))
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
      <p>
        Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient
        étudiants en doctorat à l'université de Stanford
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      >
      <a
        href="https://en.wikipedia.org/wiki/Sergey_Brin"
        target="_blank"
        class="links"
        >Sergey Brin</a
      >
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
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
      <p>
        Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient
        étudiants en doctorat à l'université de Stanford
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      >
      <a
        href="https://en.wikipedia.org/wiki/Sergey_Brin"
        target="_blank"
        class="links"
        >Sergey Brin</a
      >
    </div>
  </div>
</div>
```
