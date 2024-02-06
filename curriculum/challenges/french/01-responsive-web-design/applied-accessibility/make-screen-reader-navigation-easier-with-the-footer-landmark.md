---
id: 587d7788367417b2b2512aa3
title: Facilitez la navigation des lecteurs d'écran avec la balise footer
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVrDh8'
forumTopicId: 301022
dashedName: make-screen-reader-navigation-easier-with-the-footer-landmark
---

# --description--

Comme les éléments `header` et `nav`, l'élément `footer` possède une fonction de repère intégrée qui permet aux dispositifs d'assistance de s'y rendre rapidement. Il est principalement utilisé pour contenir des informations sur les droits d'auteur ou des liens vers des documents connexes qui se trouvent généralement au bas d'une page.

# --instructions--

La page de formation de Camper Cat progresse bien. Changez le `div` qu'il a utilisé pour envelopper ses informations de copyright en bas de la page en un élément `footer`.

# --hints--

Votre code doit comporter une balise `footer`.

```js
assert($('footer').length == 1);
```

Votre code ne doit pas comporter de balise `div`.

```js
assert($('div').length == 0);
```

Votre code doit comporter une balise `footer` d'ouverture et de fermeture.

```js
assert(code.match(/<footer>\s*&copy; 2018 Camper Cat\s*<\/footer>/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Entraînement</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Entraînement &amp; Agilité</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Armes</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="stealth">
      <h2>Entraînement &amp; Entraînement à l'agilité</h2>
      <article><h3>Grimper rapidement au feuillage à l'aide d'une approche par arbre à portée minimale</h3></article>
      <article><h3>Aucun entraînement n'est NP-complet sans parkour.</h3></article>
    </section>
    <section id="combat">
      <h2>Entraînement au combat</h2>
      <article><h3>Eliminez plusieurs ennemis grâce à des tactiques multidimensionnelles.</h3></article>
      <article><h3>Adieu le monde : 5 façons éprouvées d'assommer un adversaire</h3></article>
    </section>
    <section id="weapons">
      <h2>Formation au maniement des armes</h2>
      <article><h3>Les épées : le meilleur outil pour diviser et conquérir littéralement</h3></article>
      <article><h3>Formation multi-armes : priorité à la largeur ou à la profondeur ?</h3></article>
    </section>
  </main>


  <div>&copy; 2018 Camper Cat</div>


</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Entraînement</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Entraînement &amp; Agilité</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Armes</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="stealth">
      <h2>Entraînement &amp; Entraînement à l'agilité</h2>
      <article><h3>Grimper rapidement au feuillage à l'aide d'une approche par arbre à portée minimale</h3></article>
      <article><h3>Aucun entraînement n'est NP-complet sans parkour.</h3></article>
    </section>
    <section id="combat">
      <h2>Entraînement au combat</h2>
      <article><h3>Eliminez plusieurs ennemis grâce à des tactiques multidimensionnelles.</h3></article>
      <article><h3>Adieu le monde : 5 façons éprouvées d'assommer un adversaire</h3></article>
    </section>
    <section id="weapons">
      <h2>Formation au maniement des armes</h2>
      <article><h3>Les épées : le meilleur outil pour diviser et conquérir littéralement</h3></article>
      <article><h3>Formation multi-armes : priorité à la largeur ou à la profondeur ?</h3></article>
    </section>
  </main>


  <footer>&copy; 2018 Camper Cat</footer>


</body>
```
