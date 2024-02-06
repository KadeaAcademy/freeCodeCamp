---
id: 587d781e367417b2b2512ac9
title: Modifier la position relative d'un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
forumTopicId: 301044
dashedName: change-an-elements-relative-position
---

# --description--

CSS traite chaque élément HTML comme sa propre boîte, que l'on appelle généralement le <dfn>CSS Box Model</dfn>. Les éléments de niveau bloc commencent automatiquement sur une nouvelle ligne (pensez aux titres, aux paragraphes et aux divs), tandis que les éléments en ligne s'insèrent dans le contenu environnant (comme les images ou les espaces). La disposition par défaut des éléments de cette manière est appelée le <dfn>normal flow</dfn> d'un document, mais CSS propose la propriété position pour la remplacer.

Lorsque la position d'un élément est définie sur `relative`, cela vous permet de spécifier comment le CSS doit le déplacer *relativement* à sa position actuelle dans le flux normal de la page. Elle est associée aux propriétés de décalage CSS `left` ou `right`, et `top` ou `bottom`. Elles indiquent de combien de pixels, de pourcentages ou d'ems il faut déplacer l'élément *par rapport* à sa position normale. L'exemple suivant déplace le paragraphe de 10 pixels par rapport au bas (`bottom`) :

```css
p {
  position: relative;
  bottom: 10px;
}
```

Le fait de changer la position d'un élément en position relative ne le retire pas du flux normal - les autres éléments autour de lui se comportent toujours comme si cet élément était dans sa position par défaut.

**Note :** Le positionnement vous donne beaucoup de flexibilité et de pouvoir sur la disposition visuelle d'une page. Il est bon de se rappeler que, quelle que soit la position des éléments, le balisage HTML sous-jacent doit être organisé et avoir un sens lorsqu'il est lu de haut en bas. C'est ainsi que les utilisateurs malvoyants (qui utilisent des dispositifs d'assistance comme les lecteurs d'écran) accèdent à votre contenu.

# --instructions--

Changez la `position` de l'élément `h2` en `relative`, et utilisez un décalage CSS pour le déplacer de 15 pixels par rapport au `haut` où il se trouve dans le flux normal. Remarquez qu'il n'y a aucun impact sur les positions des éléments h1 et p qui l'entourent.

# --hints--

L'élément `h2` doit avoir une propriété `position` définie sur `relative`.

```js
assert($('h2').css('position') == 'relative');
```

Votre code devrait utiliser un décalage CSS pour positionner relativement le `h2` à 15px du `haut` de l'endroit où il se trouve normalement.

```js
assert($('h2').css('top') == '15px');
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {


  }
</style>
<body>
  <h1>Être bien positionné</h1>
  <h2>  Déplace-moi </h2>
  <p>Je pense toujours que le h2 est là où il se trouve normalement.</p>
</body>
```

# --solutions--

```html
<style>
  h2 {
    position: relative;
    top: 15px;
  }
</style>
<body>
   <h1>Être bien positionné</h1>
  <h2>  Déplace-moi </h2>
  <p>Je pense toujours que le h2 est là où il se trouve normalement.</p>
</body>
```
