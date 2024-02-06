---
id: bad87fee1348bd9aedf08833
title: Remplir le vide avec du texte de remplacement
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cgR7Dc7'
forumTopicId: 18178
dashedName: fill-in-the-blank-with-placeholder-text
---

# --description--

Les développeurs Web utilisent traditionnellement le texte <dfn>lorem ipsum</dfn> comme texte de remplacement. Le texte lorem ipsum est extrait au hasard d'un célèbre passage de Cicéron, de la Rome antique.

Le texte lorem ipsum est utilisé comme texte de remplacement par les typographes depuis le 16e siècle, et cette tradition se poursuit sur le Web.

Cinq siècles, c'est assez long. Puisque nous construisons une CatPhotoApp, utilisons un texte appelé "kitty ipsum".

# --instructions--

Remplacez le texte de votre élément `p` par les premiers mots de ce texte kitty ipsum : `Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

# --hints--

Votre élément `p` doit contenir les premiers mots du texte "kitty ipsum" fourni.

```js
assert.isTrue(/Kitty(\s)+ipsum/gi.test($('p').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Bonjour le monde</h1>

<h2>CatPhotoApp</h2>

<p>Bonjour Paragraphe</p>
```

# --solutions--

```html
<h1>Bonjour le monde</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff</p>
```
