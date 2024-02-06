---
id: 587d778b367417b2b2512aa7
title: Envelopper les boutons radio dans un élément fieldset pour une meilleure accessibilité
challengeType: 0
videoUrl: "https://scrimba.com/c/cVJVefw"
forumTopicId: 301030
dashedName: wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility
---

# --description--

Le prochain sujet de formulaire concerne l'accessibilité des boutons radio. Chaque choix est doté d'un `label` et d'un attribut `for` lié à l'`id` de l'élément correspondant, comme indiqué dans le dernier défi. Comme les boutons radio sont souvent présentés dans un groupe où l'utilisateur doit en choisir un, il existe un moyen de montrer sémantiquement que les choix font partie d'un ensemble.

Pour ce faire, la balise `fieldset` entoure le groupe entier de boutons radio. Elle utilise souvent une balise `legend` pour fournir une description du groupe, que les lecteurs d'écran lisent pour chaque choix de l'élément `fieldset`.

Le wrapper `fieldset` et la balise `legend` ne sont pas nécessaires lorsque les choix sont explicites, comme la sélection du sexe. Il suffit d'utiliser un élément `label` avec l'attribut `for` pour chaque bouton radio.

Voici un exemple :

```html
<form>
  <fieldset>
    Choisissez l'un de ces trois éléments :
    <legend></legend>
    <input id="one" type="radio" name="items" value="one" />
    <label for="one">Premier choix</label><br />
    <input id="two" type="radio" name="items" value="two" />
    <label for="two">Deuxième choix</label><br />
    <input id="three" type="radio" name="items" value="three" />
    <label for="three">Troisième choix</label>
  </fieldset>
</form>
```

# --instructions--

Camper Cat souhaite obtenir des informations sur le niveau de ninja de ses utilisateurs lorsqu'ils s'inscrivent à sa liste de diffusion. Il a ajouté un ensemble de boutons radio et a appris de notre dernière leçon à utiliser des balises `label` avec des attributs `for` pour chaque choix. Allez Camper Cat ! Cependant, son code a encore besoin d'un peu d'aide. Remplacez la balise `div` qui entoure les boutons radio par une balise `fieldset`, et remplacez la balise `p` qu'elle contient par une balise `legend`.

# --hints--

Votre code devrait avoir une balise `fieldset` autour du jeu de boutons radio.

```js
assert($("fieldset").length == 1);
```

L'élément `fieldset` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/fieldset>/g) &&
    code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length
);
```

Votre code doit comporter une balise `legend` autour du texte demandant le niveau ninja de l'utilisateur.

```js
assert($("legend").length == 1);
```

Votre code ne doit pas comporter de balises `div`.

```js
assert($("div").length == 0);
```

Votre code ne doit plus comporter de balise `p` autour du texte demandant quel est le niveau ninja de l'utilisateur.

```js
assert($("p").length == 4);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Pensées profondes avec Maître Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>
        Inscrivez-vous pour recevoir les articles du blog de Camper Cat par
        courriel ici !
      </p>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" />

      <!-- Only change code below this line -->
      <div>
        <p>Quel niveau de ninja es-tu ?</p>
        <input id="newbie" type="radio" name="levels" value="newbie" />
        <label for="newbie">Chaton débutant</label><br />
        <input
          id="intermediate"
          type="radio"
          name="levels"
          value="intermediate"
        />
        <label for="intermediate">Étudiant en développement </label><br />
        <input id="master" type="radio" name="levels" value="master" />
        <label for="master">Maître</label>
      </div>
      <!-- Only change code above this line -->

      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
  <article>
    <h2>
      Les Dossiers Garfield : Les lasagnes comme carburant d'entraînement ?
    </h2>
    <p>
      L'internet est rempli d'opinions diverses sur les paradigmes
      nutritionnels, de l'herbe de chat paléo au nettoyage des boules de poils.
      Mais tournons notre attention vers un carburant de fitness souvent
      négligé, et examinons le tiercé protein-carb-NOM que sont les lasagnes...
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Vaincre son ennemi : le point rouge est à nous !</h2>
    <p>
      Les félins du monde entier ont fait la guerre aux ennemis les plus
      tenaces... Cette némésis rouge combine à la fois l'astuce, la discrétion
      et la vitesse de l'éclair. Mais tenez bon, amis combattants, l'heure de la
      victoire pourrait bientôt sonner...
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Chuck Norris est-il un homme à chats ?</h2>
    <p>
      Chuck Norris est largement considéré comme le premier artiste martial de
      la planète, et c'est une coïncidence totale que toute personne qui ne
      partage pas ce fait disparaisse mystérieusement peu après. Mais la vraie
      question est de savoir s'il aime les chats...
    </p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>
        Inscrivez-vous pour recevoir les articles du blog de Camper Cat par
        courriel ici !
      </p>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" />

      <fieldset>
        <legend>Quel niveau de ninja es-tu ?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie" />
        <label for="newbie">Chaton débutant</label><br />
        <input
          id="intermediate"
          type="radio"
          name="levels"
          value="intermediate"
        />
        <label for="intermediate">Étudiant en développement </label><br />
        <input id="master" type="radio" name="levels" value="master" />
        <label for="master">Maître</label>
      </fieldset>

      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
  <article>
    <h2>Les Dossiers Garfield : Les lasagnes comme carburant d'entraînement ?</h2>
    <p>
      L'internet est rempli d'opinions diverses sur les paradigmes nutritionnels,
      de l'herbe de chat paléo au nettoyage des boules de poils. Mais tournons notre attention vers un
      carburant de fitness souvent négligé, et examinons le tiercé protein-carb-NOM
      que sont les lasagnes...
    </p>
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Vaincre son ennemi : le point rouge est à nous !</h2>
    <p>
      Les félins du monde entier ont fait la guerre aux ennemis les plus
      tenaces... Cette némésis rouge combine à la fois l'astuce, la discrétion
      et la vitesse de l'éclair. Mais tenez bon, amis combattants, l'heure de la
      victoire pourrait bientôt sonner...
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Chuck Norris est-il un homme à chats ?</h2>
    <p>
      Chuck Norris est largement considéré comme le premier artiste martial de la planète, et c'est une coïncidence totale que toute personne qui ne partage pas ce fait disparaisse mystérieusement peu après. Mais la vraie question est de savoir s'il aime les chats...
    </p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
