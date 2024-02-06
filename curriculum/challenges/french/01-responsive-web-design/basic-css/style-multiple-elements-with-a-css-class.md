---
id: bad87fee1348bd9aefe08806
title: Styliser plusieurs éléments avec une classe CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkVbsQ'
forumTopicId: 18311
dashedName: style-multiple-elements-with-a-css-class
---

# --description--

Les classes vous permettent d'utiliser les mêmes styles CSS sur plusieurs éléments HTML. Vous pouvez le voir en appliquant votre classe `red-text` au premier élément `p`.

# --hints--

Votre élément `h2` doit être rouge.

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

Votre élément `h2` doit avoir la classe `red-text`.

```js
assert($('h2').hasClass('red-text'));
```

Votre premier élément `p` devrait être rouge.

```js
assert($('p:eq(0)').css('color') === 'rgb(255, 0, 0)');
```

Vos deuxième et troisième éléments `p` ne doivent pas être rouges.

```js
assert(
  !($('p:eq(1)').css('color') === 'rgb(255, 0, 0)') &&
    !($('p:eq(2)').css('color') === 'rgb(255, 0, 0)')
);
```

Votre premier élément `p` doit avoir la classe `red-text`.

```js
assert($('p:eq(0)').hasClass('red-text'));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Cliquez ici pour voir plus <a href="#">photos de chats</a>.</p>

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
