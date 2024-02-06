---
id: 587d7788367417b2b2512aa2
title: Facilitez la navigation avec un lecteur d'écran grâce à la balise nav.
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVwWSv'
forumTopicId: 301024
dashedName: make-screen-reader-navigation-easier-with-the-nav-landmark
---

# --description--

L'élément `nav` est un autre élément HTML5 doté de la fonction de repère intégré pour faciliter la navigation par lecteur d'écran. Cette balise est destinée à entourer les principaux liens de navigation de votre page.

S'il y a des liens répétés en bas de la page, il n'est pas nécessaire de les baliser avec une balise `nav`. L'utilisation d'un `footer` (abordé dans le prochain défi) est suffisante.

# --instructions--

Camper Cat a inclus des liens de navigation en haut de sa page de formation, mais les a placés dans une `div`. Remplacez la balise `div` par une balise `nav` pour améliorer l'accessibilité de sa page.

# --hints--

Votre code doit comporter une seule balise `nav`.

```js
assert($('nav').length == 1);
```

Vos balises `nav` doivent entourer le `ul` et ses éléments de liste.

```js
assert($('nav').children('ul').length == 1);
```

Votre code ne doit pas comporter de balises `div`.

```js
assert($('div').length == 0);
```

Votre élément `nav` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/nav>/g) &&
    code.match(/<\/nav>/g).length === code.match(/<nav>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Entraînement avec Camper Cat</h1>

    <div>
      <ul>
        <li><a href="#stealth">Entraînement &amp; Agilité</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Armes</a></li>
      </ul>
    </div>

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
      <h2>Entraînement aux armes</h2>
      <article><h3>es épées : le meilleur outil pour littéralement diviser et conquérir</h3></article>
      <article><h3>Entraînement multi-armes : priorité à la largeur ou à la profondeur ?</h3></article>
    </section>
  </main>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>S'entraîner avec Camper Cat</h1>

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
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Entraînement au combat</h2>
      <article><h3>Les épées : le meilleur outil pour littéralement diviser et conquérir</h3></article>
      <article><h3>Entraînement multi-armes : priorité à la largeur ou à la profondeur ?</h3></article>
    </section>
  </main>
</body>
```
