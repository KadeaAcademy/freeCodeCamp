---
id: bad88fee1348bd9aedf08816
title: Créer des liens vers les sections internes d'une page avec des éléments d'ancrage
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cyrDRUL'
forumTopicId: 301098
dashedName: link-to-internal-sections-of-a-page-with-anchor-elements
---

# --description--

Les éléments `a` (*ancre*) peuvent également être utilisés pour créer des liens internes permettant d'accéder à différentes sections d'une page Web.

Pour créer un lien interne, vous attribuez à l'attribut `href` d'un lien le symbole dièse `#` plus la valeur de l'attribut `id` de l'élément vers lequel vous voulez créer un lien interne, généralement plus bas dans la page. Vous devez ensuite ajouter le même attribut `id` à l'élément vers lequel vous établissez un lien. Un "id" est un attribut qui décrit de manière unique un élément.

Voici un exemple de lien d'ancrage interne et de son élément cible :

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

Lorsque les utilisateurs cliquent sur le lien `Contacts`, ils sont dirigés vers la section de la page Web comportant l'élément d'en-tête **Contacts**.

# --instructions--

Transformez votre lien externe en lien interne en remplaçant l'attribut `href` par `#footer` et le texte de `cat photos` par `Sauter au bas de la page`.

Supprimez l'attribut `target="_blank"` de la balise d'ancrage, car il entraîne l'ouverture du document lié dans un nouvel onglet de fenêtre.

Ajoutez ensuite un attribut `id` avec la valeur `footer` à l'élément `<footer>` en bas de la page.

# --hints--

Il ne doit y avoir qu'une seule balise d'ancrage sur votre page.

```js
assert($('a').length == 1);
```

Il ne doit y avoir qu'une seule balise `footer` sur votre page.

```js
assert($('footer').length == 1);
```

La balise `a` doit avoir un attribut `href` dont la valeur est "#footer".

```js
assert($('a').eq(0).attr('href') == '#footer');
```

La balise `a` ne doit pas avoir d'attribut `target`.

```js
assert(
  typeof $('a').eq(0).attr('target') == typeof undefined ||
    $('a').eq(0).attr('target') == true
);
```

Le texte `a` devrait être "Sauter au bas de la page".

```js
assert(
  $('a')
    .eq(0)
    .text()
    .match(/Sauter au bas de la page/gi)
);
```

La balise `footer` doit avoir un attribut `id` défini sur "footer".

```js
assert($('footer').eq(0).attr('id') == 'footer');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer>Copyright Cat Photo App</footer>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="#footer">Sauter au bas de la page</a>

  <img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer id="footer">Copyright Cat Photo App</footer>
```
