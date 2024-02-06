---
id: bad87fee1348bd9aedf08835
title: Créer un ensemble de cases à cocher
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cqrkJsp'
forumTopicId: 16821
dashedName: create-a-set-of-checkboxes
---

# --description--

Les formulaires utilisent couramment des <dfn>cases à cocher</dfn> pour les questions qui peuvent avoir plus d'une réponse.

Les cases à cocher sont un type de `input`.

Chacune de vos cases à cocher peut être imbriquée dans son propre élément `label`. En enveloppant un élément `input` à l'intérieur d'un élément `label`, on associe automatiquement la case à cocher à l'élément label qui l'entoure.

Toutes les entrées de case à cocher associées doivent avoir le même attribut `name`.

La meilleure pratique consiste à définir explicitement la relation entre une entrée de type case à cocher et l'élément `label` qui lui correspond, en définissant l'attribut `for` de l'élément `label` pour qu'il corresponde à l'attribut `id` de l'élément `input` associé.

Voici un exemple de case à cocher :

```html
<label for="aimable"><input id="aimable" type="checkbox" name="personnalite"> Aimable</label>
```

# --instructions--

Ajoutez à votre formulaire un ensemble de trois cases à cocher. Chaque case à cocher doit être imbriquée dans son propre élément `label`. Toutes les trois doivent avoir l'attribut `name` avec comme valeur `personnalite`.

# --hints--

Votre page doit comporter trois éléments de case à cocher.

```js
assert($('input[type="checkbox"]').length > 2);
```

Chacun de vos trois éléments de case à cocher doit être imbriqué dans son propre élément `label`.

```js
assert($('label > input[type="checkbox"]:only-child').length > 2);
```

Assurez-vous que chacun de vos éléments `label` possède une balise de fermeture.

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

Vos cases à cocher doivent recevoir l'attribut `name` égal à `personnalite`.

```js
assert(
  $('label > input[type="checkbox"]').filter('[name="personnalite"]').length > 2
);
```

Chacune de vos cases à cocher doit être ajoutée dans la balise `form`.

```js
assert($('label').parent().get(0).tagName.match('FORM'));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
 <p>Cliquez ici pour voir plus <a href="#">des photos de chats</a>.</p>

  <a href="#"><img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>

 <p>Les choses que les chats aiment :</p>
  <ul>
    <li>l'herbe à chat</li>
    <li>les pointeurs laser</li>
    <li>les lasagnes</li>
  </ul>
  <p>Le top 3 des choses que les chats détestent :</p>
  <ol>
    <li>le traitement des puces</li>
    <li>le tonnerre</li>
    <li>les autres chats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="interieur"><input id="interieur" type="radio" name="interieur-exterieur"> Interieur</label>
    <label for="exterieur"><input id="exterieur" type="radio" name="interieur-exterieur"> Extérieur</label><br>
    <input type="text" placeholder="URL de la photo de chat" required>
    <button type="submit">Envoyer</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
<p>Cliquez ici pour voir plus <a href="#">des photos de chats</a>.</p>
  
  <a href="#"><img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>
  
  <p>Les choses que les chats aiment :</p>
  <ul>
    <li>l'herbe à chat</li>
    <li>les pointeurs laser</li>
    <li>les lasagnes</li>
  </ul>
  <p>Le top 3 des choses que les chats détestent :</p>
  <ol>
    <li>le traitement des puces</li>
    <li>le tonnerre</li>
    <li>les autres chats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="interieur"><input id="interieur" type="radio" name="interieur-exterieur"> Interieur</label>
    <label for="exterieur"><input id="exterieur" type="radio" name="interieur-exterieur"> Extérieur</label><br>
    <label for="aimable"><input id="aimable" type="checkbox" name="personnalite"> Aimable</label>
    <label for="paresseux"><input id="paresseux" type="checkbox" 
name="personnalite"> Paresseux</label>
    <label for="mauvais"><input id="mauvais" type="checkbox" 
name="personnalite"> Mauvais</label><br>
    <input type="text" placeholder="URL de la photo de chat" required>
    <button type="submit">Envoyer</button>
  </form>
</main>
```
