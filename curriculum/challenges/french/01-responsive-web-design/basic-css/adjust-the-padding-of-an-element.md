---
id: bad88fee1348bd9aedf08825
title: Ajuster la marge interne d'un élément
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--
Mettons maintenant de côté notre Cat Photo App pour un petit moment et apprenons-en plus sur le style HTML.

Vous l'avez peut-être déjà remarqué, mais tous les éléments HTML sont essentiellement des petits rectangles.

Trois propriétés importantes contrôlent l'espace qui entoure chaque élément HTML : `padding`, `border` et `margin`.

Le `padding` d'un élément contrôle la quantité d'espace entre le contenu de l'élément et son `border`.

Ici, nous pouvons voir que le conteneur bleue et le conteneur rouge sont imbriquées dans le conteneur jaune. Notez que le conteneur rouge a plus de `padding` que le conteneur bleue.

Lorsque vous augmentez le `padding` du conteneur bleu, vous augmentez la distance (`padding`) entre le texte et la bordure qui l'entoure.

# --instructions--

Modifiez le `padding` de votre conteneur bleue pour qu'il corresponde à celui de votre conteneur rouge.

# --hints--

Votre classe `blue-box` devrait donner à l'élément `20px` de `padding`.

```js
assert($('.blue-box').css('padding-top') === '20px');
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
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
</style>
<h5 class="injected-text">marge externe</h5>

<div class="box yellow-box">
  <h5 class="box red-box">marge interne</h5>
  <h5 class="box blue-box">marge interne</h5>
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
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">marge externe</h5>

<div class="box yellow-box">
  <h5 class="box red-box">marge interne</h5>
  <h5 class="box blue-box">marge interne</h5>
</div>
```
