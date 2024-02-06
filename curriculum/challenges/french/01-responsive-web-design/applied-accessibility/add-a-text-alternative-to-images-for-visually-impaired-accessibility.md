---
id: 587d774c367417b2b2512a9c
title: Ajouter une alternative textuelle aux images pour l'accessibilité des malvoyants
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 16628
dashedName: add-a-text-alternative-to-images-for-visually-impaired-accessibility
---

# --description--

Vous avez probablement déjà vu un attribut `alt` sur une balise `img` dans d'autres défis. Le texte `alt` décrit le contenu de l'image et lui fournit une alternative textuelle. Un attribut `alt` est utile dans les cas où l'image ne se charge pas ou ne peut pas être vue par un utilisateur. Les moteurs de recherche l'utilisent également pour comprendre ce que contient une image et l'inclure dans les résultats de recherche. Voici un exemple:

```html
<img src="importantLogo.jpeg" alt="Company logo">
```

Les personnes malvoyantes utilisent des lecteurs d'écran pour convertir le contenu du Web en une interface audio. Elles n'obtiendront pas les informations si elles ne sont présentées que visuellement. Pour les images, les lecteurs d'écran peuvent accéder à l'attribut `alt` et lire son contenu pour fournir des informations clés.

Un bon texte `alt` fournit au lecteur une brève description de l'image. Vous devez toujours inclure un attribut `alt` sur votre image. Conformément à la spécification HTML5, cet attribut est désormais considéré comme obligatoire.

# --instructions--

Camper Cat est à la fois un ninja du codage et un vrai ninja, qui construit un site Web pour partager ses connaissances. La photo de profil qu'il veut utiliser montre ses compétences et devrait être appréciée par tous les visiteurs du site. Ajoutez un attribut `alt` dans la balise `img`, qui explique que Camper Cat fait du karaté. (L'attribut `src` de l'image n'est pas liée à un fichier réel, vous devriez donc voir le texte `alt` dans l'affichage).

# --hints--

Votre balise `img` doit avoir un attribut `alt` et il ne doit pas être vide.

```js
assert($('img').attr('alt'));
```

# --seed--

## --seed-contents--

```html
<img src="doingKarateWow.jpeg">
```

# --solutions--

```html
<img src="doingKarateWow.jpeg" alt="Someone doing karate">
```
