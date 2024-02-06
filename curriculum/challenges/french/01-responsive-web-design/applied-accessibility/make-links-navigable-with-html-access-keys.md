---
id: 587d7790367417b2b2512aaf
title: Rendre les liens navigables avec les touches d'accès HTML
challengeType: 0
videoUrl: "https://scrimba.com/c/cQvmaTp"
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

Le langage HTML propose l'attribut `accesskey` pour spécifier un raccourci clavier permettant d'activer ou de mettre en évidence un élément. L'ajout d'un attribut `accesskey` peut rendre la navigation plus efficace pour les utilisateurs ne possédant qu'un clavier.

HTML5 permet d'utiliser cet attribut sur n'importe quel élément, mais il est particulièrement utile lorsqu'il est utilisé avec des éléments interactifs. Cela inclut les liens, les boutons et les contrôles de formulaires.

Voici un exemple:

```html
<button accesskey="b">Bouton important</button>
```

# --instructions--

Camper Cat veut que les liens autour des deux titres d'articles de blog aient des raccourcis clavier pour que les utilisateurs de son site puissent accéder rapidement à l'article complet. Ajoutez un attribut `accesskey` aux deux liens et attribuez au premier la valeur `g` (pour Garfield) et au second la valeur `c` (pour Chuck Norris).

# --hints--

Votre code devrait ajouter un attribut `accesskey` à la balise `a` avec le `id` de `first`.

```js
assert($("#first").attr("accesskey"));
```

Votre code devrait ajouter un attribut `accesskey` à la balise `a` avec le `id` de `second`.

```js
assert($("#second").attr("accesskey"));
```

Votre code devrait définir l'attribut `accesskey` sur la balise `a` avec l'`id` de `first` à `g`. Notez que la casse est importante.

```js
assert($("#first").attr("accesskey") == "g");
```

Votre code devrait définir l'attribut `accesskey` sur la balise `a` avec l'`id` de `second` à `c`. Notez que la casse est importante.

```js
assert($("#second").attr("accesskey") == "c");
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Réflexions profondes avec Master Camper Cat</h1>
  </header>
  <article>
    <h2>
      <a id="first" href="#"
        >Les Dossiers Garfield : Les lasagnes comme carburant d'entraînement?</a
      >
    </h2>

    <p>
      Internet regorge d'opinions diverses sur les paradigmes nutritionnels, de
      l'herbe à chat paléo aux nettoyages de boules de poils. Mais tournons
      notre attention vers un carburant de remise en forme souvent négligé, et
      examinons le tiercé protéine-carbone-NOM que sont les lasagnes...
    </p>
  </article>
  <article>
    <h2><a id="second" href="#">Chuck Norris aime-t-il les chats?</a></h2>

    <p>
      Chuck Norris est largement considéré comme le premier pratiquant d'arts
      martiaux de la planète, et c'est une coïncidence totale que tous ceux qui
      ne sont pas d'accord avec ce fait disparaissent mystérieusement peu après.
      Mais la vraie question est de savoir s'il aime les chats?...
    </p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Réflexions profondes avec Master Camper Cat</h1>
  </header>
  <article>
    <h2>
      <a id="first" accesskey="g" href="#"
        >Les Dossiers Garfield : Les lasagnes comme carburant d'entraînement?</a
      >
    </h2>

    <p>
      Internet regorge d'opinions diverses sur les paradigmes nutritionnels, de
      l'herbe à chat paléo aux nettoyages de boules de poils. Mais tournons
      notre attention vers un carburant de remise en forme souvent négligé, et
      examinons le tiercé protéine-carbone-NOM que sont les lasagnes...
    </p>
  </article>
  <article>
    <h2>
      <a id="second" accesskey="c" href="#"
        >Chuck Norris aime-t-il les chats?</a
      >
    </h2>

    <p>
      Internet regorge d'opinions diverses sur les paradigmes nutritionnels, de
      l'herbe à chat paléo aux nettoyages de boules de poils. Mais tournons
      notre attention vers un carburant de remise en forme souvent négligé, et
      examinons le tiercé protéine-carbone-NOM que sont les lasagnes...
    </p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
