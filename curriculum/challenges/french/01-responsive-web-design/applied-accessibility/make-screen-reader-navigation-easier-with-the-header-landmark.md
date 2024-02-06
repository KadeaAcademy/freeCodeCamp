---
id: 587d7787367417b2b2512aa1
title: Facilitez la navigation des lecteurs d'écran grâce à la balise header
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
dashedName: make-screen-reader-navigation-easier-with-the-header-landmark
---

# --description--

L'élément HTML5 qui ajoute une signification sémantique et améliore l'accessibilité est la balise `header`. Elle est utilisée pour envelopper des informations d'introduction ou des liens de navigation pour sa balise parente et fonctionne bien autour du contenu qui est répété en haut de plusieurs pages.

La balise `header` partage la fonction de point de repère intégré que vous avez vue avec la balise `main`, permettant aux technologies d'assistance de naviguer rapidement vers ce contenu.

**Remarque : Le `header` est destiné à être utilisé dans la balise `body` de votre document HTML. Il est différent de l'élément `head`, qui contient le titre de la page, les méta-informations, etc.

# --instructions--

Camper Cat écrit d'excellents articles sur l'entraînement des ninjas, et veut ajouter une page pour eux sur son site. Changez la `div` supérieure qui contient actuellement le `h1` en une balise `header` à la place.

# --hints--

Votre code devrait avoir une seule balise `header`.

```js
assert($('header').length == 1);
```

Vos balises `header` doivent s'enrouler autour de la balise `h1`.

```js
assert($('header').children('h1').length == 1);
```

Votre code ne doit pas comporter de balises `div`.

```js
assert($('div').length == 0);
```

Votre élément `header` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/header>/g) &&
    code.match(/<\/header>/g).length === code.match(/<header>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>

  <div>
    <h1>Entraînement avec Camper Cat</h1>
  </div>


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
      <h2>Entraînement au combat</h2>
      <article><h3>Les épées : le meilleur outil pour littéralement diviser et conquérir</h3></article>
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
      <h2>Entraînement au combat</h2>
      <article><h3>Les épées : le meilleur outil pour littéralement diviser et conquérir</h3></article>
      <article><h3>Entraînement multi-armes : priorité à la largeur ou à la profondeur ?</h3></article>
    </section>
  </main>
</body>
```
