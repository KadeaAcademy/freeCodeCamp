---
id: 587d781c367417b2b2512ac3
title: Définir le poids de la police pour plusieurs éléments d'en-tête
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
dashedName: set-the-font-weight-for-multiple-heading-elements
---

# --description--

Vous avez défini la `font-size` de chaque balise de titre dans le dernier défi, ici vous allez ajuster le `font-weight`.

La propriété `font-weight` définit l'épaisseur ou la finesse des caractères dans une section de texte.

# --instructions--

<ul><li>Définir le <code>font-weight</code> de la balise <code>h1</code> à 800.</li><li>Définir le <code>font-weight</code> de la balise <code>h2</code> à 600.</li><li>Définir le <code>font-weight</code> de la balise <code>h3</code> à 500.</li><li>Définir le <code>font-weight</code> de la balise <code>h4</code> à 400.</li><li>Définir le <code>font-weight</code> de la balise <code>h5</code> à 300.</li><li>Définir le <code>font-weight</code> de la balise <code>h6</code> à 200.</li></ul>

# --hints--

Votre code devrait définir la propriété `font-weight` de la balise `h1` à 800.

```js
assert($('h1').css('font-weight') == '800');
```

Votre code devrait définir la propriété `font-weight` de la balise `h2` à 600.

```js
assert($('h2').css('font-weight') == '600');
```

Votre code devrait définir la propriété `font-weight` de la balise  `h3` à 500.

```js
assert($('h3').css('font-weight') == '500');
```

Votre code devrait définir la propriété `font-weight` de la balise  `h4` à 400.

```js
assert($('h4').css('font-weight') == '400');
```

Votre code devrait définir la propriété `font-weight` de la balise  `h5` à 300.

```js
assert($('h5').css('font-weight') == '300');
```

Votre code devrait définir la propriété `font-weight` de la balise  `h6` à 200.

```js
assert($('h6').css('font-weight') == '200');
```

# --seed--

## --seed-contents--

```html
<style>
  h1 {
    font-size: 68px;

  }
  h2 {
    font-size: 52px;

  }
  h3 {
    font-size: 40px;

  }
  h4 {
    font-size: 32px;

  }
  h5 {
    font-size: 21px;

  }
  h6 {
    font-size: 14px;

  }
</style>
<h1>Ceci est le texte h1</h1>
<h2>Ceci est le texte h2</h2>
<h3>Ceci est le texte h3</h3>
<h4>Ceci est le texte h4</h4>
<h5>Ceci est le texte h5</h5>
<h6>Ceci est le texte h6</h6>
```

# --solutions--

```html
<style>
  h1 {
    font-size: 68px;
    font-weight: 800;
  }
  h2 {
    font-size: 52px;
    font-weight: 600;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
  }
  h4 {
    font-size: 32px;
    font-weight: 400;
  }
  h5 {
    font-size: 21px;
    font-weight: 300;
  }
  h6 {
    font-size: 14px;
    font-weight: 200;
  }
</style>
<h1>Ceci est le texte h1</h1>
<h2>Ceci est le texte h2</h2>
<h3>Ceci est le texte h3</h3>
<h4>Ceci est le texte h4</h4>
<h5>Ceci est le texte h5</h5>
<h6>Ceci est le texte h6</h6>
```
