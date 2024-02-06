---
id: 587d781e367417b2b2512aca
title: Déplacer un élément positionné de façon relative avec les décalages CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

Les décalages CSS de `top` ou `bottom`, et `left` ou `right` indiquent au navigateur de combien il doit décaler un élément par rapport à l'endroit où il se trouverait dans le flux normal du document. Vous décalez un élément par rapport à un endroit donné, ce qui éloigne l'élément du côté référencé (en fait, dans la direction opposée). Comme vous l'avez vu dans le dernier défi, l'utilisation du décalage `top` a déplacé le `h2` vers le bas. De même, l'utilisation d'un décalage `gauche` déplace un élément vers la droite.

# --instructions--

Utilisez les décalages CSS pour déplacer le `h2` de 15 pixels vers la droite et de 10 pixels vers le haut.

# --hints--

Votre code doit utiliser un décalage CSS pour positionner le `h2` 10px plus haut. En d'autres termes, déplacez-le de 10px par rapport au `bas` où il se trouve normalement.

```js
assert($('h2').css('bottom') == '10px');
```

Votre code doit utiliser un décalage CSS pour positionner le `h2` 15px relativement à droite. En d'autres termes, il faut le déplacer de 15px par rapport à sa position normale.

```js
assert($('h2').css('left') == '15px');
```

# --seed--

## --seed-contents--

```html
<head>
<style>
  h2 {
    position: relative;


  }
</style>
</head>
<body>
  <h1>Être bien positionné</h1>
  <h2>Bougez-moi !</h2>
  <p>Je pense toujours que le h2 est là où il se trouve normalement.</p>
</body>
```

# --solutions--

```html
<head>
<style>
  h2 {
    position: relative;
    left: 15px;
    bottom: 10px;
  }
</style>
</head>
<body>
  <h1>Être bien positionné</h1>
  <h2>Bougez-moi !</h2>
  <p>Je pense toujours que le h2 est là où il se trouve normalement.</p>
</body>
```
