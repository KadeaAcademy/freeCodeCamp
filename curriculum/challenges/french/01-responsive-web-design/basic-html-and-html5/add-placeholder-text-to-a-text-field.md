---
id: bad87fee1348bd9aedf08830
title: Ajouter un texte de remplacement à un champ de texte
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
dashedName: add-placeholder-text-to-a-text-field
---

# --description--

Le texte de remplacement est ce qui est affiché dans votre élément `input` avant que l'utilisateur n'ait saisi quoi que ce soit.

Vous pouvez créer un texte de remplacement ( **placeholder** ) comme suit :

```html
<input type="text" placeholder="ceci est un texte de remplacement">
```

**Note:** Rappelez-vous que les éléments `input` sont auto-fermants.

# --instructions--

Mettez la valeur `placeholder` de votre `input` textuel à "URL de la photo de chat".

# --hints--

Vous devez ajouter un attribut `placeholder` à l'élément textuel `input` existant.

```js
assert($('input[placeholder]').length > 0);
```

Vous devez définir la valeur de votre attribut `placeholder` à `URL de la photo de chat`.

```js
assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/URL\s+de\s+la\s+photo\s+de\s+chat/gi)
);
```

L'élément `input` final ne doit pas avoir de balise de fermeture.

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

L'élément `input` final doit avoir une syntaxe valide.

```js
assert($('input[type=text]').length > 0);
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
  <input type="text">
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
  <input type="text" placeholder="URL de la photo de chat">
</main>
```
