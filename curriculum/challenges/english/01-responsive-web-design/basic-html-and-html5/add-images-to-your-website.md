---
id: bad87fee1348bd9aedf08812
title: Ajouter des images à votre site Web
challengeType: 0
forumTopicId: 16640
dashedName: add-images-to-your-website
---

# --description--

Vous pouvez ajouter des images à votre site Web en utilisant l'élément `img`, et pointer vers l'URL d'une image spécifique en utilisant l'attribut `src`.

Voici un exemple :

```html
<img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/online-kadea-brand-resources/kda-learning-plateform-landing-logo.png">
```

Notez que les éléments `img` sont auto-fermants.

Tous les éléments `img` **doivent** avoir un attribut `alt`. Le texte contenu dans un attribut `alt` est utilisé par les lecteurs d'écran pour améliorer l'accessibilité et s'affiche si le chargement de l'image échoue.

**Note:** Si l'image est purement décorative, l'utilisation d'un attribut `alt` vide est une meilleure pratique.

Idéalement, l'attribut `alt` ne devrait pas contenir de caractères spéciaux, sauf si cela est nécessaire.

Ajoutons un attribut `alt` à notre exemple `img` ci-dessus :

```html
<img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/online-kadea-brand-resources/kda-learning-plateform-landing-logo.png" alt="Le logo de Kadea Online">
```

# --instructions--

Essayons d'ajouter une image à notre site Web :

Dans l'élément `main` existant, insérez un élément `img` avant les éléments `p` existants.

Maintenant, définissez l'attribut `src` de façon à ce qu'il pointe sur l'url suivante `https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg`

Enfin, n'oubliez pas de donner à votre élément `img` un attribut `alt` avec un texte adéquat.

# --hints--

Votre page doit comporter un élément `img`.

```js
assert($('img').length);
```

Votre image doit avoir un attribut `src` qui pointe vers l'image du chaton.

```js
assert(/^https:\/\/online-kadea-resources\.fra1\.cdn\.digitaloceanspaces\.com\/challenges-resources\/relaxing-cat\.jpg$/i.test($('img').attr('src')));
```

L'attribut `alt` de votre élément image ne doit pas être vide.

```js
assert(
  $('img').attr('alt') &&
    $('img').attr('alt').length &&
    /<img\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(
      __helpers.removeWhiteSpace(code)
    )
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#"><img src="https://online-kadea-resources.fra1.cdn.digitaloceanspaces.com/challenges-resources/relaxing-cat.jpg" alt="Un joli chat orange couché sur le dos."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
