---
id: 587d78b1367417b2b2512b09
title: Rendre une image responsive
challengeType: 0
forumTopicId: 301140
dashedName: make-an-image-responsive
---

# --description--

Rendre les images responsive (Adaptable) avec CSS est en fait très simple. Il suffit d'ajouter ces propriétés à une image :

```css
img {
  max-width: 100%;
  height: auto;
}
```

La largeur maximale de `100 %` fera en sorte que l'image ne soit jamais plus large que le conteneur dans lequel elle se trouve, et la `hauteur` de `auto` fera en sorte que l'image conserve son rapport d'aspect original.

# --instructions--

Ajoutez les règles de style à la classe `responsive-img` pour la rendre responsive (Adaptable). L'image ne doit jamais être plus large que son conteneur (dans ce cas, il s'agit de la fenêtre d'aperçu) et elle doit conserver son rapport d'aspect original. Après avoir ajouté votre code, redimensionnez l'aperçu pour voir comment vos images se comportent.

# --hints--

Your `responsive-img` class should have a `max-width` set to `100%`.

```js
assert(getComputedStyle($('.responsive-img')[0]).maxWidth === '100%');
```

Votre classe `responsive-img` doit avoir une `max-width` fixée à `100%`.

```js
assert(code.match(/height:\s*?auto;/g));
```

# --seed--

## --seed-contents--

```html
<style>
.responsive-img {


}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/FCCStickerPack.jpg" alt="ensemble d'autocollants">
<img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/FCCStickerPack.jpg" alt="ensemble d'autocollants">
```

# --solutions--

```html
<style>
.responsive-img {
  max-width: 100%;
  height: auto;
}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/FCCStickerPack.jpg" alt="ensemble d'autocollants">
<img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/FCCStickerPack.jpg" alt="ensemble d'autocollants">
```
