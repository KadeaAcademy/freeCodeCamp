---
id: bad87fee1348bd9aede08817
title: Incorporer un élément d'ancrage dans un paragraphe
challengeType: 0
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

Vous pouvez incorporer des liens dans d'autres éléments de texte.

```html
<p>
  Voici un <a target="_blank" href="https://www.google.com"> lien vers www.google.com</a> pour que vous puissiez le suivre.
</p>
```

Prenons un exemple. Le texte normal est inséré dans l'élément `p` :

```html
<p> Voici un ... que vous pouvez suivre. </p>
```

Vient ensuite l'élément *ancre* `<a>` (qui nécessite une balise de fermeture `</a>`) :  

```html
<a> ... </a>
```

`target` est un attribut de la balise d'ancrage qui indique où ouvrir le lien. La valeur `_blank` indique qu'il faut ouvrir le lien dans un nouvel onglet. La valeur `href` est un attribut de la balise d'ancrage qui contient l'adresse URL du lien :  

```html
<a href="https://www.google.com" target="_blank"> ... </a>
```

Le texte, `lien vers www.google.com`, dans l'élément `a` est appelé <dfn>texte d'ancrage</dfn>, et affichera le lien à cliquer :

```html
<a href=" ... " target="...">lien vers www.google.com</a>
```

La résultante finale de l'exemple ressemblera à ceci :  

Voici un <a href="https://www.google.com" target="_blank">lien vers www.google.com</a> à suivre.

# --instructions--

Placez l'élément `a` existant dans un nouvel élément `p`. Ne créez pas de nouvelle balise d'ancrage. Le nouveau paragraphe doit contenir le texte suivant : `Voir plus de photos de chats`, où `photos de chats` est un lien, le reste étant du texte brut.

# --hints--

Vous ne devez avoir qu'un seul élément `a`.

```js
assert(
  $('a').length  === 1 
);
```

L'élément `a` doit renvoyer au site "`https://www.freecatphotoapp.com`".

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').length  === 1 
);
```

Votre élément `a` doit contenir le texte d'ancrage `photos de chats`.

```js
assert(
  $('a')
    .text()
    .match(/photos\sde\schats/gi)
);
```

Vous devez créer un nouvel élément `p`. Il devrait y avoir au moins 3 balises `p` au total dans votre code HTML.

```js
assert($('p') && $('p').length > 2);
```

Votre élément `a` doit être inclus dans votre nouvel élément `p`.

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').parent().is('p')
);
```

Votre élément `p` doit contenir le texte `Voir plus de` (avec un espace après).

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/Voir\splus\sde\s/gi)
);
```

Votre élément `a` ne devrait <em>pas</em> avoir le texte `Voir plus de`. 

```js
assert(
  !$('a')
    .text()
    .match(/Voir\splus\sde\s/gi)
);
```

Chacun de vos éléments `p` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
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

  <a href="https://www.freecatphotoapp.com" target="_blank">photos de chats</a>

  <img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Voir plus de <a target="_blank" href="https://www.freecatphotoapp.com">photos de chats</a></p>

  <img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
