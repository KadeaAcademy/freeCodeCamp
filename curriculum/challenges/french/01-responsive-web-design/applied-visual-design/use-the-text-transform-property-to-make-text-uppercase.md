---
id: 587d781c367417b2b2512ac0
title: Utilisez la propriété text-transform pour mettre le texte en majuscules.
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZQSP'
forumTopicId: 301081
dashedName: use-the-text-transform-property-to-make-text-uppercase
---

# --description--

La propriété `text-transform` de CSS est utilisée pour modifier l'apparence du texte. C'est un moyen pratique de s'assurer que le texte d'une page Web apparaît de manière cohérente, sans avoir à modifier le contenu textuel des éléments HTML.

Le tableau suivant montre comment les différentes valeurs de `text-transform` modifient le texte de l'exemple "Transforme-moi".

<table class='table table-striped'><thead><tr><th>Valeur</th><th>Résultat</th></tr></thead><tbody><tr><td><code>lowercase</code></td><td>"transforme moi"</td></tr><tr><td><code>uppercase</code></td><td>"TRANSFORME MOI"</td></tr><tr><td><code>capitalize</code></td><td>"Transforme Moi"</td></tr><tr><td><code>initial</code></td><td>Utiliser la valeur par défaut</td></tr><tr><td><code>inherit</code></td><td>Utilise le <code>text-transform</code> de l'élément parent</td></tr><tr><td><code>none</code></td><td><strong>Default:</strong> Utilisez le texte original</td></tr></tbody></table>

# --instructions--

Transformez le texte du `h4` en majuscules en utilisant la propriété `text-transform`.

# --hints--

Le texte `h4` doit être en `uppercase`.

```js
assert($('h4').css('text-transform') === 'uppercase');
```

Le texte original du h4 ne doit pas être modifié.

```js
assert($('h4').text() !== $('h4').text().toUpperCase());
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
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
      <hr>
      <p><em>Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient <u>étudiants en doctorat</u> à <strong>l'université de Stanford</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
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
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
    text-transform: uppercase;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
      <hr>
      <p><em>Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient <u>étudiants en doctorat</u> à <strong>l'université de Stanford</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
