---
id: bad87fee1348bd9aedf08816
title: Créer des liens vers des pages externes avec des éléments d'ancrage
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
dashedName: link-to-external-pages-with-anchor-elements
---

# --description--

Vous pouvez utiliser des éléments `a` (*ancre*) pour créer un lien vers un contenu extérieur à votre page Web.

Les éléments `a` ont besoin d'une adresse Web de destination appelée attribut `href`. Ils ont également besoin d'un texte d'ancrage. Voici un exemple :

```html
<a href="https://www.google.com">ce lien pointe vers google.com</a>
```

Votre navigateur affichera alors le texte "**ce lien pointe vers google.com**" comme un lien sur lequel vous pouvez cliquer. Et ce lien vous mènera à l'adresse web `https://www.google.com`.

# --instructions--

Créez un élément `a` qui renvoie à `https://www.freecatphotoapp.com` et dont le texte d'ancrage est "cat photos".

# --hints--

Votre élément `a` devrait avoir le texte d'ancrage suivant: `cat photos`.

```js
assert(/cat photos/gi.test($('a').text()));
```

Vous avez besoin d'un élément `a` qui pointe vers `https://www.freecatphotoapp.com`.

```js
assert(/^https?:\/\/(www\.)?freecatphotoapp\.com\/?$/i.test($('a').attr('href')));
```

Votre élément `a` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>



  <img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  
  <img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos.">
  
  <a href="https://www.freecatphotoapp.com">cat photos</a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
