---
id: 587d78a3367417b2b2512ace
title: Pousser les éléments à gauche ou à droite avec la propriété float
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

L'outil de positionnement suivant n'utilise pas réellement `position`, mais définit la propriété `float` d'un élément. Les éléments flottants sont retirés du flux normal d'un document et poussés vers le `left` ou le `right` de l'élément parent qui les contient. Elle est généralement utilisée avec la propriété `width` pour spécifier l'espace horizontal nécessaire à l'élément flottant.

# --instructions--

Le balisage donné fonctionnerait bien dans une mise en page à deux colonnes, avec les éléments `section` et `aside` l'un à côté de l'autre. Donnez à l'élément `#left` un `float` de `left` et à l'élément `#right` un `float` de `right`.

# --hints--

L'élément avec l'id `left` devrait avoir une valeur `float` de `left`.

```js
assert($('#left').css('float') == 'left');
```

L'élément avec l'id `right` devrait avoir une valeur `float` de `right`.

```js
assert($('#right').css('float') == 'right');
```

# --seed--
## --seed-contents--

```html
<head>
  <style>
    #left {

      width: 50%;
    }
    #right {

      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Bienvenu.e!</h1>
  </header>
  <section id="left">
    <h2>Contenu</h2>
    <p>Bonne chose</p>
  </section>
  <aside id="right">
    <h2>Barre latérale</h2>
    <p>Liens</p>
  </aside>
</body>
```

# --solutions--

```html
<head>
  <style>
    #left {
      float: left;
      width: 50%;
    }
    #right {
      float: right;
      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Bienvenu.e!</h1>
  </header>
  <section id="left">
    <h2>Contenu</h2>
    <p>Bonne chose</p>
  </section>
  <aside id="right">
    <h2>Barre latérale</h2>
    <p>Liens</p>
  </aside>
</body>
```
