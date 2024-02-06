---
id: bad87fee1348bd9aecf08806
title: Utiliser une classe CSS pour styliser un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

Les classes sont des styles réutilisables qui peuvent être ajoutés aux éléments HTML.

Voici un exemple de déclaration de classe CSS :

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

Vous pouvez voir que nous avons créé une classe CSS appelée `blue-text` dans la balise `<style>`. Vous pouvez appliquer une classe à un élément HTML comme ceci : `<h2 class="blue-text">CatPhotoApp</h2>`. Notez que dans votre élément CSS `style`, les noms de classe commencent par un point. Dans l'attribut class de vos éléments HTML, le nom de la classe n'inclut pas le point.

# --instructions--

Dans votre élément `style`, changez le sélecteur `h2` en `.red-text` et mettez à jour la valeur de la couleur de `blue` à `red`.

Donnez à votre élément `h2` l'attribut `class` avec la valeur `red-text`.

# --hints--

Votre élément `h2` doit être rouge.

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

Votre élément `h2` doit avoir la classe `red-text`.

```js
assert($('h2').hasClass('red-text'));
```

Votre feuille de style devrait déclarer une classe `red-text` et avoir sa couleur fixée à `red`.

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

Vous ne devez pas utiliser de déclarations de style en ligne comme `style="color : red"` dans votre élément `h2`.

```js
assert($('h2').attr('style') === undefined);
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
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
