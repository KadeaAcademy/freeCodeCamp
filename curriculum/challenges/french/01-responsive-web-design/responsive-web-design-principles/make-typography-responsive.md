---
id: 587d78b1367417b2b2512b0c
title: Rendre la typographie responsive
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/crzN7T8'
forumTopicId: 301141
dashedName: make-typography-responsive
---

# --description--

Dimensionner le texte, vous pouvez utiliser les unités de visualisation pour une typographie responsive. Les unités de visualisation, comme les pourcentages, sont des unités relatives, mais elles sont basées sur des éléments différents. Les unités de visualisation sont relatives aux dimensions de la fenêtre d'affichage (largeur ou hauteur) d'un périphérique, tandis que les pourcentages sont relatifs à la taille de l'élément conteneur parent.

Les quatre unités d'affichage différentes sont les suivantes :

<ul><li><code>vw</code> (viewport width): <code>10vw</code> serait de 10 % de la largeur de la fenêtre.</li><li><code>vh</code> (viewport height): <code>3vh</code> serait égale à 3 % de la hauteur de la fenêtre.</li><li><code>vmin</code> (viewport minimum): <code>70vmin</code> correspondrait à 70 % de la plus petite dimension (hauteur ou largeur) de la fenêtre d'affichage.</li><li><code>vmax</code> (viewport maximum): <code>100vmax</code> serait égal à 100 % de la plus grande dimension (hauteur ou largeur) de la fenêtre d'affichage.</li></ul>

Voici un exemple qui définit une balise `body` à 30% de la largeur de la fenêtre d'affichage.

```css
body { width: 30vw; }
```

# --instructions--

Définissez le `width` de la balise `h2` à 80 % de la largeur de la fenêtre d'affichage et le `width` du paragraphe à 75 % de la plus petite dimension de la fenêtre d'affichage.

# --hints--

Votre balise `h2` doit avoir un `width` de 80vw.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g)
);
```

Votre balise `p` doit avoir un `width` de 75vmin.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
