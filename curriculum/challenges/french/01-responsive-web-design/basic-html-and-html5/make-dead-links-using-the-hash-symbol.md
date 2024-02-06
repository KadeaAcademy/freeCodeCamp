---
id: bad87fee1348bd9aedf08817
title: Créer des liens morts en utilisant le symbole du dièse
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMdkytL'
forumTopicId: 18230
dashedName: make-dead-links-using-the-hash-symbol
---

# --description--

Parfois, vous voulez ajouter des éléments `a` à votre site Web avant de savoir où ils seront liés.

C'est également pratique lorsque vous modifiez le comportement d'un lien à l'aide de `JavaScript`, dont nous parlerons plus tard.

# --instructions--

La valeur actuelle de l'attribut `href` est un lien qui pointe vers "`https://www.freecatphotoapp.com`". Remplacez la valeur de l'attribut `href` par un `#`, également connu sous le nom de symbole de dièse, pour créer un lien mort.

Par exemple : `href="#"`

# --hints--

Votre élément `a` doit être un lien mort dont la valeur de l'attribut `href` est fixée à "#".

```js
assert($('a').attr('href') === '#');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Cliquez ici pour voir plus de <a href="https://www.freecatphotoapp.com" target="_blank">photos de chats</a>.</p>.

  <img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Cliquez ici pour voir plus de <a href="#" target="_blank">photos de chats</a>.</p>.
  
  <img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos.">
  
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
