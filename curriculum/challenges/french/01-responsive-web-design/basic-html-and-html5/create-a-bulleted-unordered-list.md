---
id: bad87fee1348bd9aedf08827
title: Créer une liste non ordonnée à puces
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cDKVPuv'
forumTopicId: 16814
dashedName: create-a-bulleted-unordered-list
---

# --description--

Le HTML a un élément spécial pour créer des <dfn>listes non ordonnées</dfn>, ou des listes de style à puces.

Les listes non ordonnées commencent par un élément `<ul>` d'ouverture, suivi d'un nombre quelconque d'éléments `<li>`. Enfin, les listes non ordonnées se terminent par un `</ul>`.

Par exemple:

```html
<ul>
  <li>Lait</li>
  <li>Fromage</li>
</ul>
```

créerait une liste à puces de `lait` et `fromage`.

# --instructions--

Supprimez les deux derniers éléments `p` et créez une liste non ordonnée de trois choses que les chats aiment en bas de la page.

# --hints--

Créez un élément `ul`.

```js
assert($('ul').length > 0);
```

Vous devriez avoir trois éléments `li` dans votre élément `ul`.

```js
assert($('ul li').length > 2);
```

Votre élément `ul` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/ul>/gi) &&
    code.match(/<ul/gi) &&
    code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length
);
```

Vos éléments `li` doivent avoir des balises de fermeture.

```js
assert(
  code.match(/<\/li>/gi) &&
    code.match(/<li[\s>]/gi) &&
    code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length
);
```

Vos éléments `li` ne doivent pas contenir une chaîne vide ou uniquement des espaces blancs.

```js
assert($('ul li').filter((_, item) => !$(item).text().trim()).length === 0);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Cliquez ici pour voir plus <a href="#">des photos de chats</a>.</p>

  <a href="#"><img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Cliquez ici pour voir plus <a href="#">des photos de chats</a>.</p>

  <a href="#"><img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>

  <ul>
    <li>le lait</li>
    <li>les souris</li>
    <li>l'herbe à chat</li>
  </ul>
</main>
```
