---
id: bad87fee1348bd9aedf08801
title: Informer avec l'élément Paragraphe
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
dashedName: inform-with-the-paragraph-element
---

# --description--

Les éléments `p` sont les éléments préférés pour le texte des paragraphes sur les sites Web. `p` est l'abréviation de "**paragraph**".

Vous pouvez créer un élément de paragraphe comme ceci :

```html
<p>Je suis une balise p !</p>
```

# --instructions--

Créez un élément `p` sous votre élément `h2`, et donnez-lui le texte `Bonjour Paragraphe`.

**Note:** Par convention, toutes les balises HTML sont écrites en minuscules, par exemple `<p></p>` et non `<P></P>`.

# --hints--

Votre code devrait avoir un élément `p` valide.

```js
assert($('p').length > 0);
```

Votre élément `p` devrait avoir le texte `Bonjour Paragraphe`.

```js
assert.isTrue(/bonjour(\s)+paragraphe/gi.test($('p').text()));
```

Votre élément `p` doit avoir une balise de fermeture.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

# --seed--

## --seed-contents--

```html
<h1>Bonjour le monde</h1>
<h2>CatPhotoApp</h2>
```

# --solutions--

```html
<h1>Bonjour le monde</h1>
<h2>CatPhotoApp</h2>
<p>Bonjour Paragraphe</p>
```
