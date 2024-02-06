---
id: 587d778a367417b2b2512aa5
title: Améliorer l'accessibilité des figures avec l'élément figure
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMqtE'
forumTopicId: 301015
dashedName: improve-chart-accessibility-with-the-figure-element
---

# --description--

HTML5 a introduit l'élément `figure` et l'élément connexe `figcaption`. Utilisés ensemble, ces éléments enveloppent une représentation visuelle (comme une image, un diagramme ou un graphique) ainsi que sa légende. L'association de ces éléments donne un double avantage en termes d'accessibilité, en regroupant sémantiquement le contenu associé et en fournissant une alternative textuelle expliquant la "figure".

Pour les visualisations de données telles que les graphiques, la légende peut être utilisée pour noter brièvement les tendances ou les conclusions pour les utilisateurs ayant une déficience visuelle. Un autre défi consiste à déplacer une version tableau des données du graphique hors de l'écran (à l'aide de CSS) pour les utilisateurs de lecteurs d'écran.

Voici un exemple - notez que la légende du tableau se trouve à l'intérieur des balises `figure` et peut être combinée avec d'autres éléments :

```html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo de Camper Cat exécutant un coup de pied circulaire.">
  <br>
  <figcaption>
    Master Camper Cat démontre la forme correcte d'un coup de pied circulaire.
  </figcaption>
</figure>
```

# --instructions--

Camper Cat est en train de créer un diagramme à barres empilées montrant le temps qu'il faut consacrer chaque semaine à l'entraînement à la furtivité, au combat et aux armes. Aidez-le à mieux structurer sa page en remplaçant la balise `div` qu'il a utilisée par une balise `figure`, et la balise `p` qui entoure la légende par une balise `figcaption`.

# --hints--

Votre code devrait avoir une balise `figure`.

```js
assert($('figure').length == 1);
```

Votre code devrait comporter une balise `figcaption`.

```js
assert($('figcaption').length == 1);
```

Votre code ne devrait pas comporter de balises `div`.

```js
assert($('div').length == 0);
```

Votre code ne devrait pas avoir de balises `p`.

```js
assert($('p').length == 0);
```

La balise `figcaption` devrait être un enfant de la balise `figure`.

```js
assert($('figure').children('figcaption').length == 1);
```

Votre élément `figure` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/figure>/g) &&
    code.match(/<\/figure>/g).length === code.match(/<figure>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Entraînements</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Furtivité &amp; Agilité</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Armes</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>

      <!-- Only change code below this line -->
      <div>
        <!-- Stacked bar chart will go here -->
        <br>
        <p>Répartition par semaine du temps à consacrer à l'entraînement à la furtivité, au combat et aux armes.</p>
      </div>
      <!-- Only change code above this line -->

    </section>
    <section id="stealth">
      <h2>Entraînement de furtivité &amp; d'agilité</h2>
      <article><h3>Grimper rapidement sur le feuillage en utilisant une approche par arbre à portée minimale</h3></article>
      <article><h3>Aucun entraînement n'est NP-complet sans parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Entraînement au combat</h2>
      <article><h3>Affrontez de nombreux ennemis grâce à des tactiques multithreads.</h3></article>
      <article><h3>Goodbye world : 5 façons éprouvées d'assommer un adversaire</h3></article>
    </section>
    <section id="weapons">
      <h2>Entraînement aux armes</h2>
      <article><h3>Les épées : le meilleur outil pour littéralement diviser et conquérir</h3></article>
      <article><h3>Formation aux armes multiples : priorité à l'élargissement ou à la profondeur ?</h3></article>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Entraînements</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Furtivité &amp; Agilité</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Armes</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <figure>
        <!-- Stacked bar chart will go here -->
        <br>
        <figcaption>Répartition par semaine du temps à consacrer à l'entraînement à la furtivité, au combat et aux armes.</figcaption>
      </figure>
    </section>
    <section id="stealth">
      <h2>Entraînement de furtivité &amp; d'agilité</h2>
      <article><h3>Grimper rapidement sur le feuillage en utilisant une approche par arbre à portée minimale</h3></article>
      <article><h3>Aucun entraînement n'est NP-complet sans parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Entraînement au combat</h2>
      <article><h3>Affrontez de nombreux ennemis grâce à des tactiques multithreads.</h3></article>
      <article><h3>Goodbye world : 5 façons éprouvées d'assommer un adversaire</h3></article>
    </section>
    <section id="weapons">
      <h2>Entraînement aux armes</h2>
      <article><h3>Les épées : le meilleur outil pour littéralement diviser et conquérir</h3></article>
      <article><h3>Formation aux armes multiples : priorité à l'élargissement ou à la profondeur ?</h3></article>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
