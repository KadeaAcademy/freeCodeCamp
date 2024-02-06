---
id: bad87fee1348bd9aedf08808
title: Spécifier comment les polices doivent se dégrader
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
dashedName: specify-how-fonts-should-degrade
---

# --description--

Il existe plusieurs polices par défaut, disponibles dans tous les navigateurs. Ces familles de polices génériques comprennent `monospace`, `serif` et `sans-serif`.

Lorsqu'une police n'est pas disponible, vous pouvez demander au navigateur de "rétrograder" vers une autre police.

Par exemple, si vous voulez qu'un élément utilise la police `Helvetica`, mais qu'il passe à la police `sans-serif` lorsque `Helvetica` n'est pas disponible, vous le spécifierez comme suit :

```css
p {
  font-family: Helvetica, sans-serif;
}
```

Les noms de famille de polices génériques ne sont pas sensibles à la casse. De plus, ils n'ont pas besoin de guillemets car ce sont des mots-clés CSS.

# --instructions--

Pour commencer, appliquez la police `monospace` à l'élément `h2`, de sorte qu'il possède maintenant deux polices - `Lobster` et `monospace`.

Dans le dernier défi, vous avez importé la police `Lobster` à l'aide de la balise `link`. Maintenant, commentez l'importation de la police `Lobster` (à l'aide des commentaires HTML que vous avez appris auparavant) à partir de Google Fonts pour qu'elle ne soit plus disponible. Remarquez comment votre élément `h2` se dégrade en police `monospace`.

**Note:** Si la police `Lobster` est installée sur votre ordinateur, vous ne verrez pas la dégradation car votre navigateur est capable de trouver la police.

# --hints--

Votre élément h2 doit utiliser la police `Lobster`.

```js
assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);
```

Votre élément h2 devrait se dégrader à la police `monospace` lorsque `Lobster` n'est pas disponible.

```js
assert(
  /\s*h2\s*\{\s*font-family\s*\:\s*(\'|"|)Lobster\1\s*,\s*monospace\s*;?\s*\}/gi.test(
    code
  )
);
```

Vous devriez commenter votre appel à Google pour la police `Lobster` en mettant `<!--` devant.

```js
assert(new RegExp('<!--[^fc]', 'gi').test(code));
```

Vous devez fermer votre commentaire en ajoutant `-->`.

```js
assert(new RegExp('[^fc]-->', 'gi').test(code));
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
    font-family: Lobster;
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
    <button type="submit">>Soumettre</button>
  </form>
</main>
```

# --solutions--

```html
<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
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
