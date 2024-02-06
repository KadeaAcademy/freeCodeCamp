---
id: bad87fee1348bd9aedf08814
title: Ajouter des coins arrondis avec border-radius
challengeType: 0
videoUrl: "https://scrimba.com/c/cbZm2hg"
forumTopicId: 16649
dashedName: add-rounded-corners-with-border-radius
---

# --description--

Votre photo de chat présente actuellement des angles vifs. Nous pouvons arrondir ces coins avec une propriété CSS appelée `border-radius`.

# --instructions--

Vous pouvez spécifier un `border-radius` en pixels. Donnez à votre photo de chat un `border-radius` de `10px`.

**Note:** Ce défi permet plusieurs solutions possibles. Par exemple, vous pouvez ajouter `border-radius` à la classe `.thick-green-border` ou à la classe `.smaller-image`.

# --hints--

Votre élément image doit avoir la classe `thick-green-border`.

```js
assert($("img").hasClass("thick-green-border"));
```

Le rayon de la bordure de votre image doit être de `10px`.

```js
assert(
  $("img").css("border-top-left-radius") === "10px" &&
    $("img").css("border-top-right-radius") === "10px" &&
    $("img").css("border-bottom-left-radius") === "10px" &&
    $("img").css("border-bottom-right-radius") === "10px"
);
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
  }

  .smaller-image {
    width: 100px;
    border-radius: 10px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">
    Cliquez ici pour en savoir plus <a href="#">photos de chats</a>.
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
