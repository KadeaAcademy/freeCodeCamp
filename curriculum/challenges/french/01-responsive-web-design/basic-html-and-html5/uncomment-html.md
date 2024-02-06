---
id: bad87fee1348bd9aedf08802
title: Décommenter le HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--


Commenter est un moyen de laisser des commentaires pour les autres développeurs dans votre code sans affecter le résultat affiché à l'utilisateur final.

Les commentaires sont également un moyen pratique de rendre le code inactif sans avoir à le supprimer entièrement.

Les commentaires en HTML commencent par `<!--` et se terminent par un `-->`.

# --instructions--

Décommentez vos éléments `h1`, `h2` et `p`.

# --hints--

Votre élément `h1` devrait être visible sur la page en le décommentant.

```js
assert($('h1').length > 0);
```

Votre élément `h2` devrait être visible sur la page en le décommentant.

```js
assert($('h2').length > 0);
```

Votre élément `p` devrait être visible sur la page en le décommentant.

```js
assert($('p').length > 0);
```

Aucune balise de commentaire de fin ne doit être visible sur la page (par exemple, `-->`).

```js
assert(!$('*:contains("-->")')[1]);
```

# --seed--

## --seed-contents--

```html
<!--
<h1>Bonjour le monde</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

# --solutions--

```html
<h1>Bonjour le monde</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
