---
id: 587d7791367417b2b2512ab3
title: Créer un équilibre visuel en utilisant la propriété text-align
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
dashedName: create-visual-balance-using-the-text-align-property
---

# --description--

Cette section du programme se concentre sur la conception visuelle appliquée. Le premier groupe de défis s'appuie sur la mise en page d'une carte donnée pour montrer un certain nombre de principes fondamentaux.

Le texte constitue souvent une part importante du contenu Web. Le CSS propose plusieurs options pour l'aligner avec la propriété `text-align`.

`text-align : justify;` espace le texte de sorte que chaque ligne ait la même largeur.

`text-align : center;` centre le texte.

`text-align : right;` aligne le texte à droite.

Et `text-align : left;` (par défaut) aligne le texte à gauche.

# --instructions--

Alignez le texte de la balise `h4`, qui indique "Google", au centre. Justifiez ensuite la balise de paragraphe qui contient des informations sur la création de Google.

# --hints--

Votre code doit utiliser la propriété text-align de la balise `h4` pour la définir sur `center`.

```js
assert($('h4').css('text-align') == 'center');
```

Votre code doit utiliser la propriété text-align de la balise `p` pour lui donner la valeur `justify`.

```js
assert($('p').css('text-align') == 'justify');
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

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
      <p>Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient doctorants à l'université de Stanford./p>
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
      <p>Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient doctorants à l'université de Stanford./p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
