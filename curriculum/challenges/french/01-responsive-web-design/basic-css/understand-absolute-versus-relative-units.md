---
id: bad82fee1322bd9aedf08721
title: Comprendre les unités absolues et relatives
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN66JSL'
forumTopicId: 301089
dashedName: understand-absolute-versus-relative-units
---

# --description--

Les derniers défis ont tous défini la marge ou le remplissage d'un élément en pixels (`px`). Les pixels sont un type d'unité de longueur, qui indique au navigateur la taille ou l'espacement d'un élément. En plus des `px`, CSS propose un certain nombre d'options d'unités de longueur différentes que vous pouvez utiliser.

Les deux principaux types d'unités de longueur sont absolus et relatifs. Les unités absolues sont liées aux unités physiques de longueur. Par exemple, `in` et `mm` désignent respectivement les pouces et les millimètres. Les unités de longueur absolues se rapprochent de la mesure réelle sur un écran, mais il existe quelques différences en fonction de la résolution de l'écran.

Les unités relatives, telles que `em` ou `rem`, sont relatives à une autre valeur de longueur. Par exemple, `em` est basé sur la taille de la police d'un élément. Si vous l'utilisez pour définir la propriété `font-size` elle-même, elle est relative à la `font-size` du parent.

**Note:** Il existe plusieurs options d'unités relatives qui sont liées à la taille de la fenêtre d'affichage. Elles sont abordées dans la section Principes de conception Web réactive.

# --instructions--

Ajoutez une propriété `padding` à l'élément avec la classe `red-box` et définissez-la à `1.5em`.

# --hints--

Votre classe `red-box` devrait avoir une propriété `padding`.

```js
assert(
  $('.red-box').css('padding-top') != '0px' &&
    $('.red-box').css('padding-right') != '0px' &&
    $('.red-box').css('padding-bottom') != '0px' &&
    $('.red-box').css('padding-left') != '0px'
);
```

Votre classe `red-box` devrait donner aux éléments `1,5em` de `padding`.

```js
assert(code.match(/\.red-box\s*?{[\s\S]*padding\s*:\s*?1\.5em/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">marge externe</h5>

<div class="box yellow-box">
  <h5 class="box red-box">marge interne</h5>
  <h5 class="box green-box">marge interne</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">marge externe</h5>

<div class="box yellow-box">
  <h5 class="box red-box">marge interne</h5>
  <h5 class="box green-box">marge interne</h5>
</div>
```
