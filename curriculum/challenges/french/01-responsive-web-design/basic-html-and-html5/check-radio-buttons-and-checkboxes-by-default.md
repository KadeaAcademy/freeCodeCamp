---
id: bad87fee1348bd9aedd08835
title: Vérifier les boutons radio et les cases à cocher par défaut
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cWk3Qh6'
forumTopicId: 301094
dashedName: check-radio-buttons-and-checkboxes-by-default
---

# --description--

Vous pouvez faire en sorte qu'une case à cocher ou un bouton radio soit coché par défaut en utilisant l'attribut `checked`.

Pour ce faire, il suffit d'ajouter le mot "**checked**" à l'intérieur d'un élément de saisie. Par exemple :

```html
<input type="radio" name="nom-test" checked>
```

# --instructions--

Configurez le premier de vos boutons radio et la première de vos cases à cocher pour qu'ils soient tous deux cochés par défaut.

# --hints--

Le premier bouton radio de votre formulaire doit être coché par défaut.

```js
assert($('input[type="radio"]').prop('checked'));
```

La première case à cocher de votre formulaire doit être cochée par défaut.

```js
assert($('input[type="checkbox"]').prop('checked'));
```

Vous ne devez pas modifier le texte intérieur de l'étiquette `Intérieur`.

```js
assert.equal(document.querySelector('label[for="interieur"]')?.innerText?.trim(), 'Intérieur');
```

Vous ne devez pas modifier le texte intérieur de l'étiquette `Aimable`.

```js
assert.equal(document.querySelector('label[for="aimable"]')?.innerText?.trim(), 'Aimable');
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
    <li>le traitement contre les puces</li>
    <li>le tonnerre</li>
    <li>les autres chats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="interieur"><input id="interieur" type="radio" name="interieur-exterieur" value="interieur"> Intérieur</label>
    <label for="exterieur"><input id="exterieur" type="radio" name="interieur-exterieur" value="exterieur"> Extérieur</label><br>
    <label for="aimable"><input id="aimable" type="checkbox" name="personnalite" value="aimable"> Aimable</label>
    <label for="paresseux"><input id="paresseux" type="checkbox" name="personnalite" value="paresseux"> Paresseux</label>
    <label for="energique"><input id="energique" type="checkbox" name="personnalite" value="energique"> Énergique</label><br>
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
    <li>le traitement contre les puces</li>
    <li>le tonnerre</li>
    <li>les autres chats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="interieur"><input id="interieur" type="radio" name="interieur-exterieur" value="interieur" checked> Intérieur</label>
    <label for="exterieur"><input id="exterieur" type="radio" name="interieur-exterieur" value="exterieur"> Extérieur</label><br>
    <label for="aimable"><input id="aimable" type="checkbox" name="personnalite" value="aimable" checked> Aimable</label>
    <label for="paresseux"><input id="paresseux" type="checkbox" name="personnalite" value="paresseux"> Paresseux</label>
    <label for="energique"><input id="energique" type="checkbox" name="personnalite" value="energique"> Énergique</label><br>
    <input type="text" placeholder="URL de la photo de chat" required>
    <button type="submit">Envoyer</button>
  </form>
</main>
```
