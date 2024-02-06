---
id: 587d781b367417b2b2512abc
title: Ajustez la propriété de couleur d'arrière-plan du texte
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
dashedName: adjust-the-background-color-property-of-text
---

# --description--

Au lieu d'ajuster l'arrière-plan général ou la couleur du texte pour rendre le premier plan facilement lisible, vous pouvez ajouter une `background-color` à l'élément contenant le texte que vous voulez mettre en valeur. Ce défi utilise `rgba()` au lieu des codes `hex` ou du `rgb()` normal.

<blockquote>rgba signifie :<br>  r = red<br>  g = green<br>  b = blue<br>  a = alpha/degré d'opacité</blockquote>

Les valeurs RVB peuvent aller de 0 à 255. La valeur alpha peut être comprise entre 1, ce qui correspond à une opacité totale ou à une couleur unie, et 0, ce qui correspond à une transparence totale ou à une clarté. `rgba()` est très utile dans ce cas, car il vous permet d'ajuster l'opacité. Cela signifie que vous n'avez pas à bloquer complètement l'arrière-plan.

Vous utiliserez `background-color : rgba(45, 45, 45, 0.1)` pour ce défi. Il produit une couleur gris foncé qui est presque transparente étant donné la faible valeur d'opacité de 0,1.

# --instructions--

Pour faire ressortir davantage le texte, ajustez le `background-color` de l'élément `h4` à la valeur donnée par `rgba()`.

De même, pour l'élément `h4`, supprimez la propriété `height` et ajoutez un `padding` de 10px.

# --hints--

Votre code devrait ajouter une propriété `background-color` à l'élément `h4` définie sur `rgba(45, 45, 45, 0.1)`.

```js
assert(
  /(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(
    code.replace(/\s/g, '')
  )
);
```

Votre code devrait ajouter une propriété `padding` à l'élément `h4` et la définir à 10 pixels.

```js
assert(
  $('h4').css('padding-top') == '10px' &&
    $('h4').css('padding-right') == '10px' &&
    $('h4').css('padding-bottom') == '10px' &&
    $('h4').css('padding-left') == '10px'
);
```

La propriété `height` de l'élément `h4` doit être supprimée.

```js
assert(!($('h4').css('height') == '25px'));
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient <u>étudiants en doctorat</u> à <strong>l'université de Stanford</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google a été fondé par Larry Page et Sergey Brin alors qu'ils étaient <u>étudiants en doctorat</u> à <strong>l'université de Stanford</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
