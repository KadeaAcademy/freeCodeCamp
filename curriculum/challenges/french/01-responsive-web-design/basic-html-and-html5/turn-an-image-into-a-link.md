---
id: bad87fee1348bd9aedf08820
title: Transformer une image en lien
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
dashedName: turn-an-image-into-a-link
---

# --description--

Vous pouvez transformer des éléments en liens en les imbriquant dans un élément `a`.

Placez votre image dans un élément `a`. Voici un exemple :

```html
<a href="#"><img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>
```

N'oubliez pas d'utiliser `#` comme propriété `href` de votre élément `a` afin de le transformer en lien mort.

# --instructions--

Placez l'élément image existant dans un élément `a` (*ancre*).

Une fois que vous avez fait cela, survolez votre image avec votre curseur. Le pointeur normal de votre curseur devrait devenir le pointeur de clic du lien. La photo est maintenant un lien.

# --hints--

L'élément `img` existant doit être imbriqué dans un élément `a`.

```js
assert($('a').children('img').length > 0);
```

Votre élément `a` doit être un lien mort dont l'attribut `href` est fixé à `#`.

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
```

Chacun de vos éléments `a` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  </p>Cliquez ici pour voir plus de <a href="#">photos de chats</a>.</p>

  <img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  </p>Cliquez ici pour voir plus de <a href="#">photos de chats</a>.</p>
  
  <a href="#"><img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>
  
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
