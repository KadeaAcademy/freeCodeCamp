---
id: 5c6c06847491271903d37cfd
title: Utilisez l'attribut value avec les boutons radio et les cases à cocher.
challengeType: 0
forumTopicId: 301099
dashedName: use-the-value-attribute-with-radio-buttons-and-checkboxes
---

# --description--

Lorsqu'un formulaire est soumis, les données sont envoyées au serveur et comprennent des entrées pour les options sélectionnées. Les entrées de type `radio` et `checkbox` renvoient leurs valeurs à partir de l'attribut `value`.

Par exemple :

```html
<label for="interieur">
  <input id="interieur" value="interieur" type="radio" name="interieur-exterieur"> Interieur
</label>
<label for="exterieur">
  <input id="exterieur" value="exterieur" type="radio" name="interieur-exterieur"> Extérieur
</label>
```

Ici, vous avez deux entrées `radio`. Lorsque l'utilisateur soumet le formulaire avec l'option `interieur` sélectionnée, les données du formulaire comprendront la ligne : `interieur-exterieur=interieur`. Cela provient des attributs `name` et `value` de l'entrée "interieur".

Si vous omettez l'attribut `value`, les données du formulaire soumis utilisent la valeur par défaut, qui est `on`. Dans ce scénario, si l'utilisateur clique sur l'option "interieur" et soumet le formulaire, les données de formulaire résultantes seront `interieur-exterieur=on`, ce qui n'est pas utile. L'attribut "value" doit donc être défini sur une valeur permettant d'identifier l'option.

# --instructions--

Donnez à chacune des entrées existantes `radio` et `checkbox` l'attribut `value`. Ne créez pas de nouveaux éléments radio ou case à cocher. Utilisez le texte du label de l'entrée, en minuscules, comme valeur de l'attribut.

# --hints--

L'un de vos boutons radio doit avoir l'attribut `value` de `interieur`.

```js
assert(
  $('label:contains("Interieur") > input[type="radio"]').filter("[value='interieur']")
    .length > 0
);
```

L'un de vos boutons radio doit avoir l'attribut `value` avec la valeur `exterieur`.

```js
assert(
  $('label:contains("Extérieur") > input[type="radio"]').filter(
    "[value='exterieur']"
  ).length > 0
);
```

L'une de vos cases à cocher doit avoir l'attribut `value` avec la valeur `aimable`.

```js
assert(
  $('label:contains("Aimable") > input[type="checkbox"]').filter(
    "[value='aimable']"
  ).length > 0
);
```

L'une de vos cases à cocher devrait avoir l'attribut `value` de `paresseux`.

```js
assert(
  $('label:contains("Paresseux") > input[type="checkbox"]').filter("[value='paresseux']")
    .length > 0
);
```

L'une de vos cases à cocher doit avoir l'attribut `value` avec la valeur `energetique`.

```js
assert(
  $('label:contains("Énergétique") > input[type="checkbox"]').filter(
    "[value='energetique']"
  ).length > 0
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  </p>Cliquez ici pour voir plus de <a href="#">photos de chats</a>.</p>

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
    <label for="interieur"><input id="interieur" type="radio" name="interieur-exterieur">  Interieur</label>
    <label for="exterieur"><input id="exterieur" type="radio" name="interieur-exterieur"> Extérieur</label><br>
    <label for="aimable"><input id="aimable" type="checkbox" name="personality"> Aimable</label>
    <label for="paresseux"><input id="paresseux" type="checkbox" name="personality"> Paresseux</label>
    <label for="energetique"><input id="energetique" type="checkbox" name="personality"> Énergétique</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  </p>Cliquez ici pour voir plus de <a href="#">photos de chats</a>.</p>

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
    <label for="interieur"><input id="interieur" type="radio" name="interieur-exterieur" value="interieur"> Interieur</label>
    <label for="exterieur"><input id="exterieur" type="radio" name="interieur-exterieur" value="exterieur"> Extérieur</label><br>
    <label for="aimable"><input id="aimable" type="checkbox" name="personality" value="aimable"> Aimable</label>
    <label for="paresseux"><input id="paresseux" type="checkbox" name="personality" value="paresseux"> Paresseux</label>
    <label for="energetique"><input id="energetique" type="checkbox" name="personality" value="energetique"> Énergétique</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
