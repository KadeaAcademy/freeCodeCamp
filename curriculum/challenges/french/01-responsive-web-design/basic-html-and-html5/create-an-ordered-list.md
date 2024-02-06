---
id: bad87fee1348bd9aedf08828
title: Créer une liste ordonnée
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cQ3B8TM'
forumTopicId: 16824
dashedName: create-an-ordered-list
---

# --description--

Le HTML possède un autre élément spécial pour créer des <dfn>listes ordonnées</dfn> ou des listes numérotées.

Les listes ordonnées commencent par un élément  d’ouverture `<ol>`, suivi d’un nombre quelconque d’éléments `<li>`. Enfin, les listes ordonnées sont fermées avec la balise `</ol>`.

Par exemple:

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

créerait une liste numérotée avec les noms `Garfield` et `Sylvester`.

# --instructions--

Créez une liste ordonnée des trois choses que les chats détestent le plus.

# --hints--

Vous devriez avoir une liste ordonnée pour le `top 3 des choses que les chats détestent`.

```js
assert(/top 3 des choses que les chats détestent :/i.test($('ol').prev().text()));
```

Vous devriez avoir une liste non ordonnée pour les `choses que les chats aiment`.

```js
assert(/choses que les chats aiment :/i.test($('ul').prev().text()));
```

Vous ne devez avoir qu'un seul élément `ul`.

```js
assert.equal($('ul').length, 1);
```

Vous ne devez avoir qu'un seul élément `ol`.

```js
assert.equal($('ol').length, 1);
```

Vous devriez avoir trois éléments `li` dans votre élément `ul`.

```js
assert.equal($('ul li').length, 3);
```

Vous devriez avoir trois éléments `li` dans votre élément `ol`.

```js
assert.equal($('ol li').length, 3);
```

Votre élément `ul` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/ul>/g) &&
    code.match(/<\/ul>/g).length === code.match(/<ul>/g).length
);
```

Votre élément `ol` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/ol>/g) &&
    code.match(/<\/ol>/g).length === code.match(/<ol>/g).length
);
```

Votre élément `li` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/li>/g) &&
    code.match(/<li>/g) &&
    code.match(/<\/li>/g).length === code.match(/<li>/g).length
);
```

Les éléments `li` de votre liste non ordonnée ne doivent pas être vides.

```js
$('ul li').each((i, val) =>
  assert(__helpers.removeWhiteSpace(val.textContent))
);
```

Les éléments `li` de votre liste ordonnée ne doivent pas être vides.

```js
$('ol li').each((i, val) =>
  assert(!!__helpers.removeWhiteSpace(val.textContent))
);
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
    <li>hate 1</li>
    <li>hate 2</li>
    <li>hate 3</li>
  </ol>
</main>
```
