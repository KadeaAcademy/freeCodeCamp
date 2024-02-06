---
id: bad87fee1348bd9aede08807
title: Définir la famille de police d'un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bvpCg'
forumTopicId: 18278
dashedName: set-the-font-family-of-an-element
---

# --description--

Vous pouvez définir la police qu'un élément doit utiliser, en utilisant la propriété `font-family`.

Par exemple, si vous souhaitez définir la police de votre élément `h2` sur `sans-serif`, vous utiliserez le CSS suivant :

```css
h2 {
  font-family: sans-serif;
}
```

# --instructions--

Faites en sorte que tous vos éléments `p` utilisent la police `monospace`.

# --hints--

Vos éléments `p` doivent utiliser la police `monospace`.

```js
assert(
  $('p')
    .not('.red-text')
    .css('font-family')
    .match(/monospace/i)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Cliquez ici pour voir plus <a href="#">photos de chats</a>.</p>

  <a href="#"><img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>

  <div>
    <p>Les choses que les chats aiment :</p>
    <ul>
      <li>cataire</li>
      <li>pointeurs laser</li>
      <li>lasagnes</li>
    </ul>
    <p>Les 3 choses que les chats détestent le plus :</p>
    <ol>
      <li>traitement contre les puces</li>
      <li>tonnerre</li>
      <li>autres chats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Intérieur</label>
    <label><input type="radio" name="indoor-outdoor"> Extérieur</label><br>
    <label><input type="checkbox" name="personality" checked> Aimant</label>
    <label><input type="checkbox" name="personality"> Paresseux</label>
    <label><input type="checkbox" name="personality"> Énergique</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Soumettre</button>
  </form>
</main>
```

# --solutions--

```html
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Cliquez ici pour voir plus <a href="#">photos de chats</a>.</p>
  
  <a href="#"><img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>
  
  <div>
    <p>Les choses que les chats aiment :</p>
    <ul>
      <li>cataire</li>
      <li>pointeurs laser</li>
      <li>lasagnes</li>
    </ul>
    <p>Les 3 choses que les chats détestent le plus :</p>
    <ol>
      <li>traitement contre les puces</li>
      <li>tonnerre</li>
      <li>autres chats</li>
    </ol>
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Intérieur</label>
    <label><input type="radio" name="indoor-outdoor"> Extérieur</label><br>
    <label><input type="checkbox" name="personality" checked> Aimant</label>
    <label><input type="checkbox" name="personality"> Paresseux</label>
    <label><input type="checkbox" name="personality"> Énergique</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Soumettre</button>
  </form>
</main>
```
