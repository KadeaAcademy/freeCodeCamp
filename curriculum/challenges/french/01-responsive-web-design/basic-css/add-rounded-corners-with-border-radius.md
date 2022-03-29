---
id: bad87fee1348bd9aedf08814
title: Ajouter des coins arrondis avec border-radius
challengeType: 0
videoUrl: 'https://scrimba.com/c/cbZm2hg'
forumTopicId: 16649
dashedName: add-rounded-corners-with-border-radius
---

# --description--

Votre photo de chat présente actuellement des angles vifs. Nous pouvons arrondir ces coins avec une propriété CSS appelée `border-radius`.

# --instructions--

Vous pouvez spécifier un `border-radius` en pixels. Donnez à votre photo de chat un `border-radius` de `10px`.

**Note : ** Ce défi permet de multiples solutions possibles. Par exemple, vous pouvez ajouter `border-radius` à la classe `.thick-green-border` ou à la classe `.smaller-image`.

# --hints--

Votre élément image doit avoir la classe `thick-green-border`.

```js
assert($('img').hasClass('thick-green-border'));
```

Votre image doit avoir un rayon de bordure de `10px`.

```js
assert(
  $('img').css('border-top-left-radius') === '10px' &&
    $('img').css('border-top-right-radius') === '10px' &&
    $('img').css('border-bottom-left-radius') === '10px' &&
    $('img').css('border-bottom-right-radius') === '10px'
);
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
      <li>les pointeurs laser</li>
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
  }

  .smaller-image {
    width: 100px;
    border-radius: 10px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Cliquez ici pour voir d'autres <a href="#">photos de chats</a>.</p>.

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>l'herbe à chat</li>
      <li>les pointeurs laser</li>
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
