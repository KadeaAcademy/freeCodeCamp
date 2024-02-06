---
id: 587d778a367417b2b2512aa6
title: Améliorer l'accessibilité des champs de formulaire avec l'élément label
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
dashedName: improve-form-field-accessibility-with-the-label-element
---

# --description--

L'amélioration de l'accessibilité grâce au balisage HTML sémantique s'applique à l'utilisation des noms de balises et des attributs appropriés. Les quelques défis suivants couvrent quelques scénarios importants utilisant les attributs dans les formulaires.

La balise `label` enveloppe le texte d'un élément de contrôle de formulaire spécifique, généralement le nom ou l'étiquette d'un choix. Cela donne un sens à l'élément et rend le formulaire plus lisible. L'attribut `for` d'une balise `label` associe explicitement cette balise `label` au contrôle de formulaire et est utilisé par les lecteurs d'écran.

Vous avez étudié les boutons radio et leurs étiquettes dans une leçon de la section HTML de base. Dans cette leçon, nous avons enveloppé le bouton radio dans un élément label avec le texte du `label` afin de rendre le texte cliquable. Une autre façon d'y parvenir est d'utiliser l'attribut `for`, comme expliqué dans cette leçon.

La valeur de l'attribut `for` doit être la même que celle de l'attribut `id` du contrôle de formulaire. Voici un exemple:

```html
<form>
  <label for="name">Nom:</label>
  <input type="text" id="name" name="name">
</form>
```

# --instructions--

Camper Cat s'attend à ce que ses articles de blog réfléchis suscitent beaucoup d'intérêt et souhaite inclure un formulaire d'inscription par courriel. Ajoutez un attribut `for` à `label` de email qui correspond au `id` de son champ `input`.

# --hints--

Votre code doit avoir un attribut `for` sur la balise `label` qui n'est pas vide.

```js
assert($('label').attr('for'));
```

La valeur de votre attribut `for` doit correspondre à la valeur `id` de l'`input` d'e-mail.

```js
assert($('label').attr('for') == 'email');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Réflexions profondes avec Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Inscrivez-vous pour recevoir les articles du blog de Camper Cat par e-mail ici!</p>


      <label>E-mail:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>Les Dossiers Garfield : Les lasagnes comme carburant d'entraînement?</h2>
    <p>Internet regorge d'opinions diverses sur les paradigmes nutritionnels, de l'herbe à chat paléo aux nettoyages de boules de poils. Mais tournons notre attention vers un carburant de remise en forme souvent négligé, et examinons le tiercé protéine-carbone-NOM que sont les lasagnes...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Vaincre l'ennemi : le point rouge est à nous!</h2>
    <p>Les félins du monde entier ont fait la guerre aux ennemis les plus tenaces. Cette némésis rouge combine à la fois l'astuce, la discrétion et la vitesse de l'éclair. Mais tenez bon, camarades combattants, l'heure de la victoire pourrait bientôt sonner...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Chuck Norris aime-t-il les chats ?</h2>
    <p>Chuck Norris est largement considéré comme le premier pratiquant d'arts martiaux de la planète, et c'est une coïncidence totale que tous ceux qui ne sont pas d'accord avec ce fait disparaissent mystérieusement peu après. Mais la vraie question est de savoir s'il aime les chats...</p>
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
  <section>
    <form>
      <p>Inscrivez-vous pour recevoir les articles du blog de Camper Cat par e-mail ici!</p>


      <label for="email">E-mail:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>Les Dossiers Garfield : Les lasagnes comme carburant d'entraînement?</h2>
    <p>Internet regorge d'opinions diverses sur les paradigmes nutritionnels, de l'herbe à chat paléo aux nettoyages de boules de poils. Mais tournons notre attention vers un carburant de remise en forme souvent négligé, et examinons le tiercé protéine-carbone-NOM que sont les lasagnes...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Vaincre l'ennemi : le point rouge est à nous!</h2>
    <p>Les félins du monde entier ont fait la guerre aux ennemis les plus tenaces. Cette némésis rouge combine à la fois l'astuce, la discrétion et la vitesse de l'éclair. Mais tenez bon, camarades combattants, l'heure de la victoire pourrait bientôt sonner...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Chuck Norris aime-t-il les chats ?</h2>
    <p>Chuck Norris est largement considéré comme le premier pratiquant d'arts martiaux de la planète, et c'est une coïncidence totale que tous ceux qui ne sont pas d'accord avec ce fait disparaissent mystérieusement peu après. Mais la vraie question est de savoir s'il aime les chats...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
