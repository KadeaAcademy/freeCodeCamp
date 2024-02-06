---
id: 587d781b367417b2b2512abe
title: Ajouter un  box-shadow à un élément de type carte
challengeType: 0
videoUrl: "https://scrimba.com/c/cvVZdUd"
forumTopicId: 301031
dashedName: add-a-box-shadow-to-a-card-like-element
---

# --description--

La propriété `box-shadow` applique une ou plusieurs ombres à un élément.

La propriété `box-shadow` prend les valeurs suivantes

<ul>
  <li><code>offset-x</code> (jusqu'où pousser l'ombre horizontalement par rapport à l'élément),</li>
  <li><code>offset-y</code> (à quelle distance l'ombre doit être poussée verticalement de l'élément),</li>
  <li><code>blur-radius</code>,</li>
  <li><code>spread-radius</code> et</li>
  <li><code>color</code>, dans cet ordre.</li>
</ul>

Les valeurs `blur-radius` et `spread-radius` sont facultatives.

Il est possible de créer plusieurs ombres en utilisant des virgules pour séparer les propriétés de chaque élément `box-shadow`.

Voici un exemple de CSS permettant de créer plusieurs ombres avec un certain flou, sur des couleurs noires essentiellement transparentes :

```css
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
```

# --instructions--

L'élément a maintenant un id qui vaut `thumbnail`. Avec ce sélecteur, utilisez les valeurs CSS de l'exemple ci-dessus pour placer un `box-shadow` sur la carte.

# --hints--

Votre code devrait ajouter une propriété `box-shadow` pour l'id `thumbnail`.

```js
assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g));
```

Vous devez utiliser le CSS donné pour la valeur `box-shadow`.

```js
assert(
  code.match(
    /box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\)\s*?,\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
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
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr />
      <p>
        <em
          >at <strong>Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient
          <u>étudiants en doctorat</u> à <strong>l'université de Stanford</strong>.</em
        >
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      ><br /><br />
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
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr />
      <p>
        <em
          >Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient
          <u>étudiants en doctorat</u> à 
          <strong>l'université de Stanford</strong>.</em
        >
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      ><br /><br />
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
