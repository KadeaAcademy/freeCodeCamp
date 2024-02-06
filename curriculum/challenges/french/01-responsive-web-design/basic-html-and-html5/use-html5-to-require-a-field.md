---
id: bad87fee1348bd9aedc08830
title: Utilisez HTML5 pour rendre un champ obligatoire
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMd4EcQ'
forumTopicId: 18360
dashedName: use-html5-to-require-a-field
---

# --description--

Vous pouvez rendre obligatoires des champs de formulaire spécifiques afin que votre utilisateur ne puisse pas soumettre votre formulaire tant qu'il ne les a pas remplis.

Par exemple, si vous voulez rendre un champ de saisie de texte obligatoire, vous pouvez simplement ajouter l'attribut `required` dans votre élément `input`, comme ceci : `<input type="text" required>` 

# --instructions--

Faites de votre `input` de type texte un champ `required`, de sorte que votre utilisateur ne puisse pas soumettre le formulaire sans remplir ce champ.

Essayez ensuite de soumettre le formulaire sans saisir de texte. Vous voyez comment votre formulaire HTML5 vous signale que le champ est obligatoire ?
# --hints--

Votre élément `input` de type texte doit avoir l'attribut `required`

```js
assert($('input').prop('required'));
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
    <button type="submit">Envoyer</button>
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
    <input type="text" placeholder="URL de la photo de chat" required>
    <button type="submit">Envoyer</button>
  </form>
</main>
```
