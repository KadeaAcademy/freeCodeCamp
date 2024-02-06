---
id: 587d78a5367417b2b2512ada
title: Utilisez la propriété CSS Transform scale pour mettre à l'échelle un élément au survol de celui-ci.
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLPJuM'
forumTopicId: 301077
dashedName: use-the-css-transform-scale-property-to-scale-an-element-on-hover
---

# --description--

La propriété `transform` possède une variété de fonctions qui vous permettent de mettre à l'échelle, de déplacer, de faire pivoter, d'incliner, etc. vos éléments. Lorsqu'elle est utilisée avec des pseudo-classes telles que `:hover` qui spécifient un certain état d'un élément, la propriété `transform` peut facilement ajouter de l'interactivité à vos éléments.

Voici un exemple de mise à l'échelle des éléments de paragraphe à 2.1 fois leur taille d'origine lorsqu'un utilisateur les survole :

```css
p:hover {
  transform: scale(2.1);
}
```

**Note:** L'application d'une transformation à un élément `div` affectera également tous les éléments enfants contenus dans le div.

# --instructions--

Ajoutez une règle CSS pour l'état `hover` de l'élément `div` et utilisez la propriété `transform` pour redimensionner l'élément `div` à 1.1 fois sa taille originale lorsqu'un utilisateur le survole.

# --hints--

La taille de l'élément `div` doit être multipliée par 1.1 lorsque l'utilisateur le survole.

```js
assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }



</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }
  div:hover {
    transform: scale(1.1);
  }
</style>
<div></div>
```
