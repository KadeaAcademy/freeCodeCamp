---
id: bad87fee1348bd9aedf08815
title: Créer des images circulaires avec border-radius
challengeType: 0
videoUrl: "https://scrimba.com/c/c2MvrcB"
forumTopicId: 18229
dashedName: make-circular-images-with-a-border-radius
---

# --description--

En plus des pixels, vous pouvez également spécifier le "rayon de la bordure" en utilisant un pourcentage.

# --instructions--

Donnez à votre photo de chat un `border-radius` de `50%`.

# --hints--

Votre image doit avoir un rayon de bordure de `50 %`, ce qui la rend parfaitement circulaire.

```js
assert(parseInt($("img").css("border-top-left-radius")) > 48);
```

La valeur `border-radius` doit utiliser un pourcentage de `50%`.

```js
assert(code.match(/50%/g));
```

# --seed--

## --seed-contents--

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
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
    border-radius: 10px;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">
    Cliquez ici pour voir plus <a href="#">photos de chats</a>.
  </p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."
  /></a>

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
    <label
      ><input type="radio" name="indoor-outdoor" checked /> Intérieur</label
    >
    <label><input type="radio" name="indoor-outdoor" /> Extérieur</label><br />
    <label><input type="checkbox" name="personality" checked /> Aimant</label>
    <label><input type="checkbox" name="personality" /> Paresseux</label>
    <label><input type="checkbox" name="personality" /> Énergique</label><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Soumettre</button>
  </form>
</main>
```

# --solutions--

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
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
    border-radius: 10px;
  }

  .smaller-image {
    width: 100px;
    border-radius: 50%;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Cliquez ici pour en savoir plus <a href="#">photos de chats</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."
  /></a>

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
    <label
      ><input type="radio" name="indoor-outdoor" checked /> Intérieur</label
    >
    <label><input type="radio" name="indoor-outdoor" /> Extérieur</label><br />
    <label><input type="checkbox" name="personality" checked /> Aimant</label>
    <label><input type="checkbox" name="personality" /> Paresseux</label>
    <label><input type="checkbox" name="personality" /> Énergique</label><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Soumettre</button>
  </form>
</main>
```
