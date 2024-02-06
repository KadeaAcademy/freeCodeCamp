---
id: bad87fee1348bd9aedf08805
title: Utiliser les sélecteurs CSS pour styliser les éléments
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKMBT2'
forumTopicId: 18349
dashedName: use-css-selectors-to-style-elements
---

# --description--

Avec le CSS, il existe des centaines de propriétés CSS que vous pouvez utiliser pour modifier l'apparence d'un élément sur votre page.

Lorsque vous avez saisi `<h2 style="color : red ;">CatPhotoApp</h2>`, vous avez donné un style à cet élément `h2` individuel avec le CSS en ligne, qui signifie feuilles de style en cascade.

C'est une façon de spécifier le style d'un élément, mais il existe une meilleure façon d'appliquer le CSS.

En haut de votre code, créez un bloc `style` comme ceci :

```html
<style>
</style>
```

À l'intérieur de ce bloc de style, vous pouvez créer un <dfn>Sélecteur CSS</dfn> pour tous les éléments `h2`. Par exemple, si vous voulez que tous les éléments `h2` soient rouges, vous ajouterez une règle de style qui ressemble à ceci :

```html
<style>
  h2 {
    color: red;
  }
</style>
```

Notez qu'il est important de placer des accolades ouvrantes et fermantes (`{` et `}`) autour des règles de style de chaque élément. Vous devez également vous assurer que la définition de style de votre élément se trouve entre les balises de style ouvrantes et fermantes. Enfin, veillez à ajouter un point-virgule à la fin de chacune des règles de style de votre élément.

# --instructions--

Supprimez l'attribut de style de votre élément `h2` et créez plutôt un bloc CSS `style`. Ajoutez le CSS nécessaire pour que tous les éléments `h2` deviennent bleus.

# --hints--

L'attribut `style` doit être supprimé de votre élément `h2`.

```js
assert(!$('h2').attr('style'));
```

Vous devez créer un élément `style`.

```js
assert($('style') && $('style').length >= 1);
```

Votre élément `h2` devrait être bleu.

```js
assert($('h2').css('color') === 'rgb(0, 0, 255)');
```

Votre déclaration `h2` de feuille de style doit être valide avec un point-virgule et une accolade fermante.

```js
assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
```

Tous vos éléments `style` doivent être valides et comporter des balises de fermeture.

```js
assert(
  code.match(/<\/style>/g) &&
    code.match(/<\/style>/g).length ===
      (
        code.match(
          /<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g
        ) || []
      ).length
);
```

# --seed--

## --seed-contents--

```html
<h2 style="color: red;">CatPhotoApp</h2>
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
