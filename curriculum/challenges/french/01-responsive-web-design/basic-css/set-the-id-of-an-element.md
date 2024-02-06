---
id: bad87eee1348bd9aede07836
title: Définir l'identifiant d'un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN6MEc2'
forumTopicId: 18279
dashedName: set-the-id-of-an-element
---

# --description--

En plus des classes, chaque élément HTML peut également avoir un attribut `id`.

L'utilisation des attributs `id` présente plusieurs avantages : Vous pouvez utiliser un `id` pour styliser un seul élément et vous apprendrez plus tard que vous pouvez les utiliser pour sélectionner et modifier des éléments spécifiques avec JavaScript.

Les attributs `id` doivent être uniques. Les navigateurs n'imposent pas cette règle, mais il s'agit d'une bonne pratique largement reconnue. Ne donnez donc pas le même attribut `id` à plusieurs éléments.

Voici un exemple de la façon dont vous donnez à votre élément `h2` l'id de `cat-photo-app` :

```html
<h2 id="cat-photo-app">
```

# --instructions--

Donnez à votre élément `form` l'id `cat-photo-form`.

# --hints--

Votre élément `form` devrait avoir l'id de `cat-photo-form`.

```js
assert($('form').attr('id') === 'cat-photo-form');
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

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Cliquez ici pour voir plus <a href="#">photos de chats</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>

  <div class="silver-background">
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
  <p class="red-text">Cliquez ici pour voir plus <a href="#">photos de chats</a>.</p>
  
  <a href="#"><img class="smaller-image thick-green-border" src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>
  
  <div class="silver-background">
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
  
  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
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
