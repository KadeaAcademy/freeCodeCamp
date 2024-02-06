---
id: a6b0bb188d873cb2c8729495
title: Convertir les entités HTML
challengeType: 5
forumTopicId: 16007
dashedName: convert-html-entities
---

# --description--

Convertit les caractères `&`, `<`, `>`, `"` (guillemet double) et `'` (apostrophe) d'une chaîne en entités HTML correspondantes.

# --hints--

`convertHTML("Dolce & Gabbana")` devrait retourner la chaîne `Dolce &amp; Gabbana`.

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML("Hamburgers < Pizza < Tacos")` devrait retourner la chaîne `Hamburgers &lt; Pizza &lt; Tacos`.

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML("Sixty > twelve")` devrait retourner la chaîne `Sixty &gt; twelve`.

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')` devrait retourner la chaîne `Stuff in &quot;quotation marks&quot;`.

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML("Schindler's List")` devrait retourner la chaîne `Schindler&apos;s List`.

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML("<>")` devrait retourner la chaîne `&lt;&gt;`.

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML("abc")` devrait retourner la chaîne `abc`.

```js
assert.strictEqual(convertHTML('abc'), 'abc');
```

# --seed--

## --seed-contents--

```js
function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");
```

# --solutions--

```js
var MAP = { '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;'};

function convertHTML(str) {
  return str.replace(/[&<>"']/g, function(c) {
    return MAP[c];
  });
}
```
