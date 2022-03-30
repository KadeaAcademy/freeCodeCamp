---
id: bad87fed1348bd9aede07836
title: Donner une couleur de fond à un élément div
challengeType: 0
videoUrl: 'https://scrimba.com/c/cdRKMCk'
forumTopicId: 18190
dashedName: give-a-background-color-to-a-div-element
---

# --description--


Vous pouvez définir la couleur de fond d'un élément avec la propriété `background-color`.

Par exemple, si vous voulez que la couleur d'arrière-plan d'un élément soit "vert", vous devez l'indiquer dans votre élément `style` :

```css
.green-background {
  background-color: green;
}
```

# --instructions--

Créez une classe appelée `silver-background` avec la propriété `background-color` égale à `silver`. Affectez cette classe à votre élément `div`.

# --hints--

Votre élément `div` doit avoir la classe `silver-background`.

```js
assert($('div').hasClass('silver-background'));
```

Votre élément `div` doit avoir un fond de couleur grise.

```js
assert($('div').css('background-color') === 'rgb(192, 192, 192)');
```

Une classe nommée `silver-background` doit être définie dans l'élément `style` et la valeur de `silver` doit être attribuée à la propriété `background-color`.

```js
assert(code.match(/\.silver-background\s*{\s*background-color\s*:\s*silver\s*;?\s*}/));
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Cliquez ici pour voir d'autres <a href="#">photos de chats</a>.</p>.

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Les choses que les chats aiment :</p>
    <ul>
      <li>l'herbe à chat</li>
      <li>les laser pointers</li>
      <li>les lasagnes</li>
    </ul>
    <p>Le top 3 des choses que les chats détestent :</p>
    <ol>
      <li>le traitement contre les puces</li>
      <li>le tonnerre</li>
      <li>les autres chats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Soumettre</button>
  </form>
</main>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
   <p class="red-text">Cliquez ici pour voir d'autres <a href="#">photos de chats</a>.</p>.

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
    <p>Les choses que les chats aiment :</p>
    <ul>
      <li>l'herbe à chat</li>
      <li>les laser pointers</li>
      <li>les lasagnes</li>
    </ul>
    <p>Le top 3 des choses que les chats détestent :</p>
    <ol>
      <li>le traitement contre les puces</li>
      <li>le tonnerre</li>
      <li>les autres chats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Soumettre</button>
  </form>
</main>
```
