---
id: bad87fee1348bd9aede08830
title: Créer un élément de formulaire
challengeType: 0
forumTopicId: 16817
dashedName: create-a-form-element
---

# --description--

Vous pouvez créer des formulaires Web qui soumettent réellement des données à un serveur en utilisant uniquement du HTML pur. Vous pouvez le faire en spécifiant un attribut `action` sur votre élément `form`.

Par exemple :

```html
<form action="url-ou-vous-voulez-soumettre-les-donnees-du-formulaire">
  <input>
</form>
```

# --instructions--

Insérez l'élément `input` existant dans un élément `form` et attribuez `"https://www.freecatphotoapp.com/submit-cat-photo"` à l'attribut `action` de l'élément `form`.

# --hints--

L'élément `input` existant doit être imbriqué dans un élément `form`.

```js
const inputElem = document.querySelector('form input');
assert(
  inputElem.getAttribute('type') === 'text' &&
    inputElem.getAttribute('placeholder') === 'URL de la photo de chat'
);
```

Votre formulaire doit avoir un attribut `action` qui est égal à `https://www.freecatphotoapp.com/submit-cat-photo`.

```js
const action = $('form').attr('action');
assert(action.match(/^https:\/\/(www\.)?freecatphotoapp\.com\/submit-cat-photo$/i))
```

Votre élément `form` doit avoir des balises ouvertes et fermées bien formatées.

```js
assert(
  code.match(/<\/form>/g) &&
    code.match(/<form [^<]*>/g) &&
    code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length
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
  <input type="text" placeholder="URL de la photo de chat">
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
  </form>
</main>
```
