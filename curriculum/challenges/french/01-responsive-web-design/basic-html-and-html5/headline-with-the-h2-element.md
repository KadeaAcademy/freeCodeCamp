---
id: bad87fee1348bd9aedf0887a
title: Titre avec l'élément h2
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

Au cours des prochaines leçons, nous allons construire une application Web HTML5 de photos de chats, pièce par pièce.

L'élément `h2` que vous allez ajouter dans cette étape ajoutera un titre de niveau deux à la page Web.

Cet élément indique au navigateur la structure de votre site Web. Les éléments `h1` sont souvent utilisés pour les titres principaux, tandis que les éléments `h2` sont généralement utilisés pour les sous-titres. Il existe également des éléments `h3`, `h4`, `h5` et `h6` pour indiquer les différents niveaux de sous-titres.

# --instructions--

Ajoutez une balise `h2` qui dit "CatPhotoApp" pour créer un deuxième élément HTML sous votre élément `h1` "Bonjour le monde".

# --hints--

Vous devez créer un élément `h2`.

```js
assert($('h2').length > 0);
```

Votre élément `h2` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

Votre élément `h2` devrait avoir le texte `CatPhotoApp`.

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

Votre élément `h1` doit contenir le texte `Bonjour le monde`.

```js
assert.isTrue(/Bonjour(\s)+le(\s)+monde/gi.test($('h1').text()));
```

Votre élément `h1` doit se placer avant votre élément `h2`.

```js
assert(code.match(/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Bonjour le monde</h1>
```

# --solutions--

```html
<h1>Bonjour le monde</h1>
<h2>CatPhotoApp</h2>
```
