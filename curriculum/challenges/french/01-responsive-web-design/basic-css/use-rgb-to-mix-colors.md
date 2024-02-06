---
id: bad82fee1348bd9aedf08721
title: Utiliser RGB pour mélanger les couleurs
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24JU6'
forumTopicId: 18368
dashedName: use-rgb-to-mix-colors
---

# --description--

Tout comme avec le code hexadécimal, vous pouvez mélanger les couleurs en RGB en utilisant des combinaisons de valeurs différentes.

# --instructions--

Remplacez les codes hexagonaux de notre élément `style` par leurs valeurs RGB correctes.

<table class='table table-striped'><tbody><tr><th>Color</th><th>RGB</th></tr><tr><td>Blue</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Red</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Orchid</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Sienna</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>

# --hints--

Votre élément `h1` avec le texte `Je suis rouge!` devrait avoir la `couleur` rouge.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Vous devez utiliser `rgb` pour la couleur rouge.

```js
assert(
  code.match(
    /\.red-text\s*{\s*color\s*:\s*rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)\s*;?\s*}/gi
  )
);
```

Votre élément `h1` avec le texte `Je suis une orchidée!` devrait avoir la `couleur` orchidée.

```js
assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)');
```

Vous devez utiliser `rgb` pour la couleur orchidée.

```js
assert(
  code.match(
    /\.orchid-text\s*{\s*color\s*:\s*rgb\(\s*218\s*,\s*112\s*,\s*214\s*\)\s*;?\s*}/gi
  )
);
```

Votre élément `h1` avec le texte `Je suis bleu !` devrait avoir la `couleur` bleue.

```js
assert($('.blue-text').css('color') === 'rgb(0, 0, 255)');
```

Vous devez utiliser `rgb` pour la couleur bleue.

```js
assert(
  code.match(
    /\.blue-text\s*{\s*color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*255\s*\)\s*;?\s*}/gi
  )
);
```

Votre élément `h1` avec le texte `Je suis Sienna !` devrait avoir la `couleur` sienna.

```js
assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)');
```

Vous devez utiliser `rgb` pour la couleur sienne.

```js
assert(
  code.match(
    /\.sienna-text\s*{\s*color\s*:\s*rgb\(\s*160\s*,\s*82\s*,\s*45\s*\)\s*;?\s*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">Je suis rouge !</h1>

<h1 class="orchid-text">Je suis orchidée !</h1>

<h1 class="sienna-text">Je suis Sienna !</h1>

<h1 class="blue-text">Je suis bleu !</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color:rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">Je suis rouge !</h1>

<h1 class="orchid-text">Je suis orchidée !</h1>

<h1 class="sienna-text">Je suis Sienna !</h1>

<h1 class="blue-text">Je suis bleu !</h1>
```
