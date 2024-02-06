---
id: bad87fed1348bd9aedf08833
title: Supprimer des éléments HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
dashedName: delete-html-elements
---

# --description--

Notre téléphone n'a pas beaucoup d'espace vertical.

Supprimons les éléments inutiles pour pouvoir commencer à construire notre CatPhotoApp.

# --instructions--

Supprimez votre élément `h1` pour que nous puissions simplifier notre vue.

# --hints--

Votre élément `h1` doit être supprimé.

```js
assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
```

Votre élément `h2` doit être sur la page.

```js
assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
```

Votre élément `p` doit être sur la page.

```js
assert(code.match(/<p>[\w\W]*<\/p>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Bonjour le monde</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2><p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
