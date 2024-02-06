---
id: 587d781d367417b2b2512ac8
title: Ajuster l'état de survol d'une balise d'ancrage
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakRGcm'
forumTopicId: 301035
dashedName: adjust-the-hover-state-of-an-anchor-tag
---

# --description--

Ce défi portera sur l'utilisation des pseudo-classes. Une pseudo-classe est un mot clé qui peut être ajouté aux sélecteurs, afin de sélectionner un état spécifique de l'élément.

Par exemple, le style d'une balise d'ancrage peut être modifié pour son état de survol en utilisant le sélecteur de pseudo-classe `:hover`. Voici la feuille de style CSS qui modifie le `color` de la balise d'ancrage en rouge lors de son survol :

```css
a:hover {
  color: red;
}
```

# --instructions--

L'éditeur de code possède une règle CSS qui donne un style noir à toutes les balises `a`. Ajoutez une règle pour que, lorsque l'utilisateur survole la balise `a`, la `color` soit bleue.

# --hints--

La balise d'ancrage `color` doit rester noire, ajoutez seulement des règles CSS pour l'état `:hover`.

```js
assert($('a').css('color') == 'rgb(0, 0, 0)');
```

La balise d'ancrage doit avoir une `color` bleue au survol.

```js
assert(
  code.match(
    /a:hover\s*?{\s*?color:\s*?(blue|rgba\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?,\s*?1\s*?\)|#00F|rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\))\s*?;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

# --solutions--

```html
<style>
  a {
    color: #000;
  }
  a:hover {
    color: rgba(0,0,255,1);
  }
</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```
