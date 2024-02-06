---
id: 587d78a5367417b2b2512ad8
title: Créez de la texture en ajoutant un motif subtil comme image de fond
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

Une façon d'ajouter de la texture et de l'intérêt à un arrière-plan et de le faire ressortir davantage est d'ajouter un motif subtil. La clé est l'équilibre, car vous ne voulez pas que l'arrière-plan se démarque trop et qu'il empiète sur le premier plan. La propriété `background` supporte la fonction `url()` afin d'établir un lien vers une image de la texture ou du motif choisi. L'adresse du lien est placée entre guillemets à l'intérieur des parenthèses.

# --instructions--

En utilisant l'url de `https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/MJAkxbh.png`, définissez le `background` de la page entière avec le sélecteur `body`.

# --hints--

Votre élément `body` doit avoir une propriété `background` définie sur un `url()` avec le lien donné.

```js
assert(
  code.match(
    /background(-image)?:\s*?url\(\s*("|'|)https:\/\/online-kadea-resources\.fra1\.cdn\.digitaloceanspaces\.com\/challenges-resources\/MJAkxbh\.png\2\s*\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {

  }
</style>
```

# --solutions--

```html
<style>
  body {
    background: url("https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/MJAkxbh.png");
  }
</style>
```
