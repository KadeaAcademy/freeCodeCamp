---
id: 587d781c367417b2b2512ac2
title: Définir la taille de la police pour les éléments à en-tête multiples
challengeType: 0
videoUrl: "https://scrimba.com/c/cPpQNT3"
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

La propriété `font-size` est utilisée pour spécifier la taille du texte dans un élément donné. Cette règle peut être utilisée pour plusieurs éléments afin de créer une cohérence visuelle du texte sur une page. Dans ce défi, vous allez définir les valeurs de toutes les balises `h1` à `h6` pour équilibrer les tailles des titres.

# --instructions--

  <p>Dans les <code>balises </code>de style, définir les<code>font-size</code> de:</p>

  <ul>
    <li><code>h1</code> à 68px.</li>
    <li><code>h2</code> à 52px.</li>
    <li><code>h3</code> à 40px.</li>
    <li><code>h4</code> à 32px.</li>
    <li><code>h5</code> à 21px.</li>
    <li><code>h6</code> à 14px.</li>
  </ul>

# --hints--

Votre code doit définir la propriété `font-size` de la balise `h1` à 68 pixels.

```js
const fontSizeOfh1 = new __helpers.CSSHelp(document)
  .getStyle("h1")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh1 === "68px");
```

Votre code devrait définir la propriété `font-size` de la balise `h2` à 52 pixels.

```js
const fontSizeOfh2 = new __helpers.CSSHelp(document)
  .getStyle("h2")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh2 === "52px");
```

Votre code devrait définir la propriété `font-size` de la balise `h3` à 40 pixels.

```js
const fontSizeOfh3 = new __helpers.CSSHelp(document)
  .getStyle("h3")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh3 === "40px");
```

Votre code doit définir la propriété `font-size` de la balise `h4` à 32 pixels.

```js
const fontSizeOfh4 = new __helpers.CSSHelp(document)
  .getStyle("h4")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh4 === "32px");
```

Votre code devrait définir la propriété `font-size` de la balise `h5` à 21 pixels.

```js
const fontSizeOfh5 = new __helpers.CSSHelp(document)
  .getStyle("h5")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh5 === "21px");
```

Votre code doit définir la propriété `font-size` de la balise `h6` à 14 pixels.

```js
const fontSizeOfh6 = new __helpers.CSSHelp(document)
  .getStyle("h6")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh6 === "14px");
```

# --seed--

## --seed-contents--

```html
<style></style>
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
