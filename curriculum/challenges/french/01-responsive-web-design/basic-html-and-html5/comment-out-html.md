---
id: bad87fee1348bd9aedf08804
title: Commenter le code HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cGyGbca'
forumTopicId: 16782
dashedName: comment-out-html
---

# --description--

Rappelez-vous que pour commencer un commentaire, vous devez utiliser `<!--` et pour terminer un commentaire, vous devez utiliser `-->`.

Ici, vous devez terminer le commentaire avant le début de votre élément `h2`.

# --instructions--

Commentez votre élément `h1` et votre élément `p`, mais pas votre élément `h2`.

# --hints--

Votre élément `h1` doit être commenté afin qu'il ne soit pas visible sur la page.

```js
assert($('h1').length === 0);
```

Votre élément `h2` ne doit pas être commenté pour qu'il soit visible sur la page.

```js
assert($('h2').length > 0);
```

Votre élément `p` doit être commenté afin qu'il ne soit pas visible sur la page.

```js
assert($('p').length === 0);
```

Chacun de vos commentaires doit être fermé par `-->`.

```js
assert(code.match(/[^fc]-->/g).length > 1);
```

Vous ne devez pas changer l'ordre des `h1`, `h2` ou `p` dans le code.

```js
assert(
  code.match(/<([a-z0-9]){1,2}>/g)[0] === '<h1>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[1] === '<h2>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[2] === '<p>'
);
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
<!--<h1>Bonjour le monde</h1>-->
<h2>CatPhotoApp</h2> 
<!--<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p> -->
```
