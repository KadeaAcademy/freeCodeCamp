---
id: bad87fee1348bd9aedf08803
title: Modifier la couleur du texte
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkVmSm'
forumTopicId: 16775
dashedName: change-the-color-of-text
---

# --description--

Maintenant, changeons la couleur d'une partie de notre texte.

Nous pouvons le faire en modifiant le style de l'élément `h2`.

La propriété responsable de la couleur du texte d'un élément est la propriété de style `color`.

Voici comment définir la couleur bleue du texte de l'élément `h2` :

```html
<h2 style="color: blue;">CatPhotoApp</h2>
```

Notez que c'est une bonne pratique de terminer les déclarations inline `style` par un `;` .

# --instructions--

Modifiez le style de votre élément `h2` pour que la couleur de son texte soit rouge.

# --hints--

Votre élément `h2` doit avoir une déclaration `style`.

```js
assert($('h2').attr('style'));
```

La couleur de votre élément `h2` devrait être réglée sur `red`.

```js
assert($('h2')[0].style.color === 'red');
```

Votre déclaration `style` doit se terminer par un `;` .

```js
assert($('h2').attr('style') && $('h2').attr('style').endsWith(';'));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
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
<h2 style="color: red;">CatPhotoApp</h2>
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
