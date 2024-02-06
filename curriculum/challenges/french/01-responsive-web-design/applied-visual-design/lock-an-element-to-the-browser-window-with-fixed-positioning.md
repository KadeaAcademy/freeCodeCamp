---
id: 587d781e367417b2b2512acc
title: Verrouiller un élément dans la fenêtre du navigateur avec un positionnement fixe
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
dashedName: lock-an-element-to-the-browser-window-with-fixed-positioning
---

# --description--

Le schéma de disposition suivant proposé par CSS est la position `fixed`, qui est un type de positionnement absolu qui verrouille un élément par rapport à la fenêtre du navigateur. Comme le positionnement absolu, il est utilisé avec les propriétés de décalage CSS et supprime également l'élément du flux normal du document. L'élément ne "réalise" plus où il est positionné, ce qui peut nécessiter quelques ajustements de mise en page ailleurs.

Une différence essentielle entre les positions `fixed` et `absolute` est qu'un élément avec une position fixe ne se déplacera pas lorsque l'utilisateur fait défiler la page.

# --instructions--

La barre de navigation dans le code est étiquetée avec un id de `navbar`. Changez sa `position` en `fixed`, et décalez-la de 0 pixel du `top` et de 0 pixel de la `left`. Après avoir ajouté le code, faites défiler la fenêtre d'aperçu pour voir comment la navigation reste en place.

# --hints--

L'élément `#navbar` doit avoir une `position` définie sur `fixed`.

```js
assert($('#navbar').css('position') == 'fixed');
```

Votre code doit utiliser le décalage CSS `top` de 0 pixel sur l'élément `#navbar`.

```js
assert($('#navbar').css('top') == '0px');
```

Votre code doit utiliser le décalage CSS `left` de 0 pixel sur l'élément `#navbar`.

```js
assert($('#navbar').css('left') == '0px');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {



    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Bienvenu.e!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Accueil</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>Je me décale quand la #navbar est fixée à la fenêtre du navigateur.</p>
</body>
```

# --solutions--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Bienvenu.e!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Accueil</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>Je me décale quand la #navbar est fixée à la fenêtre du navigateur.</p>
</body>
```
