---
id: bad87dee1348bd9aede07836
title: Utiliser un attribut id pour styliser un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakyZfL'
forumTopicId: 18339
dashedName: use-an-id-attribute-to-style-an-element
---

# --description--

Ce qui est bien avec les attributs `id`, c'est que, comme les classes, vous pouvez les styliser à l'aide de CSS.

Cependant, un `id` n'est pas réutilisable et ne doit être appliqué qu'à un seul élément. Un `id` a également une spécificité (importance) plus élevée qu'une classe, donc si les deux sont appliqués au même élément et ont des styles conflictuels, les styles du `id` seront appliqués.

Voici un exemple de la façon dont vous pouvez prendre votre élément avec l'attribut `id` de `cat-photo-element` et lui donner la couleur de fond verte. Dans votre élément `style` :

```css
#cat-photo-element {
  background-color: green;
}
```

Notez qu'à l'intérieur de votre élément `style`, vous faites toujours référence aux classes en mettant un `.` devant leur nom. Vous faites toujours référence aux ids en mettant un `#` devant leurs noms.
# --instructions--

Essayez de donner à votre formulaire, qui a maintenant l'attribut `id` de `cat-photo-form`, un fond vert.
# --hints--

Votre élément `form` devrait avoir l'id de `cat-photo-form`.

```js
assert($('form').attr('id') === 'cat-photo-form');
```

Votre élément `form` devrait avoir la `background-color` de couleur verte.

```js
assert($('#cat-photo-form').css('background-color') === 'rgb(0, 128, 0)');
```

Votre élément `form` doit avoir un attribut `id`.

```js
assert(
  code.match(/<form.*cat-photo-form.*>/gi) &&
    code.match(/<form.*cat-photo-form.*>/gi).length > 0
);
```

Vous ne devez pas donner à votre `form` des attributs `class` ou `style`.

```js
assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi));
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
   </p>Cliquez ici pour voir plus de <a href="#">photos de chats</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
    <label><input type="radio" name="indoor-outdoor" checked> Intérieur</label>
    <label><input type="radio" name="indoor-outdoor"> Extérieur</label><br>
    <label><input type="checkbox" name="personality" checked> Aimant</label>
    <label><input type="checkbox" name="personality"> Paresseux</label>
    <label><input type="checkbox" name="personality"> Energique</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Soumettre</button>
  </form>
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

  #cat-photo-form {
    background-color: green;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
   </p>Cliquez ici pour voir plus de <a href="#">photos de chats</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
    <label><input type="radio" name="indoor-outdoor" checked> Intérieur</label>
    <label><input type="radio" name="indoor-outdoor"> Extérieur</label><br>
    <label><input type="checkbox" name="personality" checked> Aimant</label>
    <label><input type="checkbox" name="personality"> Paresseux</label>
    <label><input type="checkbox" name="personality"> Energique</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Soumettre</button>
  </form>
</main>
```
