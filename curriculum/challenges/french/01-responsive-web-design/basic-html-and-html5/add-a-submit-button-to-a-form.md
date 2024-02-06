---
id: bad87fee1348bd9aedd08830
title: Ajouter un bouton de soumission à un formulaire 
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

Ajoutons un bouton `submit` à votre formulaire. En cliquant sur ce bouton, les données de votre formulaire seront envoyées à l'URL que vous avez spécifié avec l'attribut `action` de votre formulaire.

Voici un exemple de bouton d'envoi :

```html
<button type="submit">ce bouton soumet le formulaire</button>
```

# --instructions--

Ajoutez un bouton comme dernier élément de votre élément `form` dont le type est `submit` et dont le texte est `Envoyer`.

# --hints--

Votre `form` devrait avoir un `button` à l'intérieur.

```js
assert($('form').children('button').length > 0);
```

Votre bouton d'envoi doit avoir l'attribut `type` défini à `submit`.

```js
assert($('button').attr('type') === 'submit');
```

Votre bouton d'envoi ne doit comporter que le texte `Envoyer`.

```js
assert(
  $('button')
    .text()
    .match(/^\s*Envoyer\s*$/gi)
);
```

Votre élément `button` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Cliquez ici pour voir plus <a href="#">des photos de chats</a>.</p>

  <a href="#"><img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>

  <p>Les choses que les chats aiment :</p>
  <ul>
    <li>l'herbe à chat</li>
    <li>les pointeurs laser</li>
    <li>les lasagnes</li>
  </ul>
  <p>Le top 3 des choses que les chats détestent :</p>
  <ol>
    <li>le traitement des puces</li>
    <li>le tonnerre</li>
    <li>les autres chats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="URL de la photo de chat">
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Cliquez ici pour voir plus <a href="#">des photos de chats</a>.</p>

  <a href="#"><img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>

  <p>Les choses que les chats aiment :</p>
  <ul>
    <li>l'herbe à chat</li>
    <li>les pointeurs laser</li>
    <li>les lasagnes</li>
  </ul>
  <p>Le top 3 des choses que les chats détestent :</p>
  <ol>
    <li>le traitement des puces</li>
    <li>le tonnerre</li>
    <li>les autres chats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="URL de la photo de chat">
    <button type="submit">Envoyer</button>
  </form>
</main>
```
