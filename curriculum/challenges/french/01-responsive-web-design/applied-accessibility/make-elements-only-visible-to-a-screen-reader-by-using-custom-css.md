---
id: 587d778d367417b2b2512aaa
title: Rendre les éléments uniquement visibles pour un lecteur d'écran à l'aide d'un CSS personnalisé
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJ8QGkhJ'
forumTopicId: 301020
dashedName: make-elements-only-visible-to-a-screen-reader-by-using-custom-css
---

# --description--

Avez-vous remarqué que tous les défis d'accessibilité appliqués jusqu'à présent n'ont pas utilisé de CSS ? Cela montre l'importance d'utiliser un plan de document logique et des balises sémantiquement significatives autour de votre contenu avant d'introduire l'aspect conception visuelle.

Toutefois, la magie de CSS peut également améliorer l'accessibilité de votre page lorsque vous souhaitez masquer visuellement un contenu destiné uniquement aux lecteurs d'écran. C'est le cas lorsque les informations sont présentées dans un format visuel (comme un graphique), mais que les utilisateurs de lecteurs d'écran ont besoin d'une autre présentation (comme un tableau) pour accéder aux données. Le CSS est utilisé pour positionner les éléments réservés aux lecteurs d'écran en dehors de la zone visuelle de la fenêtre du navigateur.

Voici un exemple des règles CSS qui permettent d'y parvenir:

```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

**Note:** Les approches CSS suivantes ne feront PAS la même chose :

<ul>
<li><code>display: none;</code> ou <code>visibility: hidden;</code> cache le contenu pour tout le monde, y compris les utilisateurs de lecteurs d'écran</li>
<li>Les valeurs nulles pour les tailles de pixel, telles que <code>width: 0px; height: 0px;</code> retire cet élément du contenu de votre document, ce qui signifie que les lecteurs d'écran l'ignoreront.</li>
</ul>

# --instructions--

Camper Cat a créé un diagramme à barres empilées vraiment cool pour sa page de formation, et a mis les données dans un tableau pour ses utilisateurs malvoyants. Le tableau a déjà une classe `sr-only`, mais les règles CSS ne sont pas encore remplies. Donnez à la `position` une valeur `absolute`, à  `left`  une valeur `-10000px`, et à la `width` et à la `height` des valeurs `1px`.

# --hints--

Votre code devrait définir la propriété `position` de la classe `sr-only` à une valeur de `absolute`.

```js
assert($('.sr-only').css('position') == 'absolute');
```

Votre code devrait définir la propriété `left` de la classe `sr-only` à une valeur de `-10000px`.

```js
assert($('.sr-only').css('left') == '-10000px');
```

Votre code devrait définir la propriété `width` de la classe `sr-only` à une valeur de `1` pixel.

```js
assert(code.match(/width:\s*?1px/gi));
```

Votre code devrait définir la propriété `height` de la classe `sr-only` à une valeur de `1` pixel.

```js
assert(code.match(/height:\s*?1px/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  .sr-only {
    position: ;
    left: ;
    width: ;
    height: ;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
<body>
  <header>
    <h1>Entraînement</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Furtivité &amp; Agilité</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Armes</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h2>Programme de formation de trois semaines pour les débutants de Master Camper Cat</h2>
    <figure>
      <!-- Stacked bar chart of weekly training -->
      <p>[Diagramme à barres empilées]</p>
      <br />
      <figcaption>Répartition par semaine du temps à consacrer à l'entraînement à la furtivité, au combat et aux armes.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Des heures d'entraînement hebdomadaire à la furtivité, au combat et aux armes.</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Furtivité &amp; Agilité</th>
          <th scope="col">Combat</th>
          <th scope="col">Armes</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Première semaine</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Deuxième semaine</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Troisième semaine</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
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
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
  .sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
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
  <section>
    <h2>Programme de formation de trois semaines pour les débutants de Master Camper Cat</h2>
    <figure>
      <!-- Diagramme à barres empilées de l'entraînement hebdomadaire -->
      <p>[Diagramme à barres empilées]</p>
      <br />
      <figcaption>Répartition par semaine du temps à consacrer à l'entraînement à la furtivité, au combat et aux armes.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Des heures d'entraînement hebdomadaire à la furtivité, au combat et aux armes.</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Furtivité &amp; Agilité</th>
          <th scope="col">Combat</th>
          <th scope="col">Armes</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Première semaine</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Deuxième semaine</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Troisième semaine</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
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
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
