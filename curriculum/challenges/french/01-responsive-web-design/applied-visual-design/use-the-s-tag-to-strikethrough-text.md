---
id: 587d781b367417b2b2512aba
title: Utilisez la balise s pour barrer le texte
challengeType: 0
videoUrl: ''
forumTopicId: 301079
dashedName: use-the-s-tag-to-strikethrough-text
---

# --description--

Pour barrer du texte, c'est-à-dire lorsqu'une ligne horizontale coupe les caractères, vous pouvez utiliser la balise `s`. Elle indique qu'une section de texte n'est plus valable. Avec la balise `s`, le navigateur applique le CSS de `text-decoration : line-through;` à l'élément.

# --instructions--

Placez la balise `s` autour de `Google` à l'intérieur de la balise `h4`, puis ajoutez le mot `Alphabet` à côté sans le formatage barré.

# --hints--

Votre code doit ajouter une balise `s` à la balise.

```js
assert($('s').length == 1);
```

Une balise `s` doit entourer le texte `Google` dans la balise `h4`. Elle ne doit pas contenir le mot `Alphabet`.

```js
assert(
  $('h4 > s')
    .text()
    .match(/Google/gi) &&
    !$('h4 > s')
      .text()
      .match(/Alphabet/gi)
);
```

Vous devez inclure le mot `Alphabet` dans la balise `h4`, sans le formatage barré.

```js
assert(
  $('h4')
    .html()
    .match(/Alphabet/gi)
);
```

# --seed--

## --seed-contents--

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
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
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
    height: 25px;
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
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4><s>Google</s> Alphabet</h4>
      <p><em>Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient <u>étudiants en doctorat</u> à <strong>l'université de Stanford</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
