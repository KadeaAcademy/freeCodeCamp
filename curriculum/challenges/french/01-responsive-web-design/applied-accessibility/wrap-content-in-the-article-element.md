---
id: 587d774e367417b2b2512aa0
title: Envelopper le contenu dans l'élément d'article
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` est un autre des nouveaux éléments HTML5 qui ajoutent une signification sémantique à votre balisage. La balise `article` est un élément de sectionnement et est utilisée pour envelopper un contenu indépendant et autonome. La balise fonctionne bien avec les entrées de blog, les messages de forum ou les articles d'actualité.

Déterminer si un contenu peut être autonome est généralement une question de jugement, mais vous pouvez utiliser quelques tests simples. Demandez-vous si, en supprimant tout le contexte environnant, ce contenu aurait encore un sens. De même, pour le texte, le contenu tiendrait-il la route s'il se trouvait dans un flux RSS ?

N'oubliez pas que les personnes utilisant des technologies d'assistance comptent sur un balisage organisé et sémantiquement significatif pour mieux comprendre votre travail.

**Note:** L'élément `section` est également nouveau dans HTML5, et sa signification sémantique est légèrement différente de celle de l'élément `article`. Un `article` est destiné à un contenu autonome, tandis qu'une `section` sert à regrouper un contenu thématiquement lié. Ils peuvent être utilisés l'un dans l'autre, selon les besoins. Par exemple, si un livre est un `article`, alors chaque chapitre est une `section`. S'il n'y a pas de relation entre les groupes de contenu, utilisez une `div`.

`<div>` - contenu des groupes
`<section>` - contenu lié aux groupes
`<article>` - regroupe des contenus indépendants et autonomes

# --instructions--

Camper Cat a utilisé les balises `article` pour envelopper les articles sur sa page de blog, mais il a oublié de les utiliser autour de celui du haut. Changez la balise `div` pour utiliser une balise `article` à la place.

# --hints--

Votre code devrait comporter trois balises `article`.

```js
assert($('article').length == 3);
```

Votre code ne devrait pas avoir de balises `div`.

```js
assert($('div').length == 0);
```

# --seed--

## --seed-contents--

```html
<h1>Pensées profondes avec Maître Camper Cat</h1>
<main>
  <div>
    <h2>Les Dossiers Garfield : Les lasagnes comme carburant d'entraînement ?</h2>
    <p>L'Internet regorge d'opinions diverses sur les paradigmes nutritionnels, de l'herbe à chat paléo aux nettoyages de boules de poils. Mais tournons notre attention vers un carburant d'entraînement souvent négligé, et examinons le tiercé protein-carb-NOM qu'est la lasagne...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Vaincre son ennemi : le point rouge est à nous !</h2>
    <p>Les félins du monde entier ont fait la guerre aux ennemis les plus tenaces. Cette némésis rouge combine à la fois l'astuce, la discrétion et la vitesse de l'éclair. Mais tenez bon, amis combattants, l'heure de la victoire pourrait bientôt sonner...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Chuck Norris est-il un homme à chats ?</h2>
    <p>Chuck Norris est largement considéré comme le premier artiste martial de la planète, et c'est une coïncidence totale que toute personne qui ne partage pas ce fait disparaisse mystérieusement peu après. Mais la vraie question est de savoir s'il aime les chats...</p>
  </article>
</main>
```

# --solutions--

```html
<h1>Pensées profondes avec Maître Camper Cat</h1>
<main>
  <article>
    <h2>Les Dossiers Garfield : Les lasagnes comme carburant d'entraînement ?</h2>
    <p>L'Internet regorge d'opinions diverses sur les paradigmes nutritionnels, de l'herbe à chat paléo aux nettoyages de boules de poils. Mais tournons notre attention vers un carburant d'entraînement souvent négligé, et examinons le tiercé protein-carb-NOM qu'est la lasagne...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Vaincre son ennemi : le point rouge est à nous !</h2>
    <p>Les félins du monde entier ont fait la guerre aux ennemis les plus tenaces. Cette némésis rouge combine à la fois l'astuce, la discrétion et la vitesse de l'éclair. Mais tenez bon, amis combattants, l'heure de la victoire pourrait bientôt sonner...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Chuck Norris est-il un homme à chats ?</h2>
    <p>Chuck Norris est largement considéré comme le premier artiste martial de la planète, et c'est une coïncidence totale que toute personne qui ne partage pas ce fait disparaisse mystérieusement peu après. Mais la vraie question est de savoir s'il aime les chats...</p>
  </article>
</main>
```
