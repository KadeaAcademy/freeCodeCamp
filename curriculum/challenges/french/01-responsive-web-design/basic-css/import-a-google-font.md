---
id: bad87fee1348bd9aedf08807
title: Importer une police Google Font
challengeType: 0
videoUrl: "https://scrimba.com/c/cM9MRsJ"
forumTopicId: 18200
dashedName: import-a-google-font
---

# --description--

En plus de spécifier les polices courantes que l'on trouve sur la plupart des systèmes d'exploitation, nous pouvons également spécifier des polices Web non standard et personnalisées à utiliser sur notre site Web. Il existe de nombreuses sources de polices Web sur l'Internet. Pour cet exemple, nous allons nous concentrer sur la bibliothèque Google Fonts.

[Google Fonts](https://fonts.google.com/) est une bibliothèque gratuite de polices Web que vous pouvez utiliser dans votre CSS en faisant référence à l'URL de la police.

Nous allons donc importer et appliquer une police Google (notez que si Google est bloqué dans votre pays, vous devrez sauter ce défi).

Pour importer une police Google, vous pouvez copier l'URL de la police depuis la bibliothèque Google Fonts, puis la coller dans votre HTML. Pour ce défi, nous allons importer la police `Lobster`. Pour ce faire, copiez l'extrait de code suivant et collez-le en haut de votre éditeur de code (avant l'élément `style` d'ouverture) :

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
```

Vous pouvez maintenant utiliser la police `Lobster` dans votre CSS en utilisant `Lobster` comme FAMILY_NAME comme dans l'exemple suivant :

```css
font-family: FAMILY_NAME, GENERIC_NAME;
```

Le nom générique (GENERIC_NAME) est facultatif et constitue une police de secours au cas où l'autre police spécifiée ne serait pas disponible. Ce point est abordé dans le prochain défi.

Les noms de famille sont sensibles à la casse et doivent être entourés de guillemets si le nom contient un espace. Par exemple, vous avez besoin de guillemets pour utiliser la police `Open Sans`, mais pas pour utiliser la police `Lobster`.

# --instructions--

Importez la police `Lobster` dans votre page Web. Ensuite, utilisez un sélecteur d'élément pour définir `Lobster` comme `font-family` pour votre élément `h2`.

# --hints--

Vous devez importer la police `Lobster`.

```js
assert($('link[href*="googleapis" i]').length);
```

Votre élément `h2` doit utiliser la police `Lobster`.

```js
assert(
  $("h2")
    .css("font-family")
    .match(/lobster/i)
);
```

Vous ne devez utiliser qu'un sélecteur d'élément `h2` pour changer la police.

```js
assert(
  /\s*[^\.]h2\s*\{\s*font-family\s*:\s*('|"|)Lobster\1\s*(,\s*('|"|)[a-z -]+\3\s*)?(;\s*\}|\})/gi.test(
    code
  )
);
```

Votre élément `p` devrait toujours utiliser la police `monospace`.

```js
assert(
  $("p")
    .css("font-family")
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
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">
    Cliquez ici pour voir plus <a href="#">photos de chats</a>.
  </p>

  <a href="#"
    ><img
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

  p {
    font-size: 16px;
    font-family: monospace;
  }

  h2 {
    font-family: Lobster;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">
    Cliquez ici pour voir plus <a href="#">photos de chats</a>.
  </p>

  <a href="#"
    ><img
      src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."
  /></a>

  <div>
    <p>Les choses que les chats aiment :</p>
    <ul>
      <li>cataire</li>
      <li>pointeurs laser</li>
      <li>lasagnes</li>
    </ul>
    <p>Les 3 choses que les chats détestent le plus :/p></p>
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
