---
id: bad87fee1348bd9aedf08719
title: Utiliser un code hexadécimal abrégé
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
dashedName: use-abbreviated-hex-code
---

# --description--

De nombreuses personnes se sentent dépassées par les possibilités offertes par plus de 16 millions de couleurs. Et il est difficile de se souvenir du code hexadécimal. Heureusement, vous pouvez le raccourcir.

Par exemple, le code hexadécimal `#FF0000` du rouge peut être raccourci en `#F00`. Cette forme raccourcie donne un chiffre pour le rouge, un chiffre pour le vert et un chiffre pour le bleu.

Cela réduit le nombre total de couleurs possibles à environ 4 000. Mais les navigateurs interpréteront `#FF0000` et `#F00` comme étant exactement la même couleur.

# --instructions--

Allez-y, essayez d'utiliser les codes hexagonaux abrégés pour colorer les bons éléments.

<table class='table table-striped'><tbody><tr><th>Couleur</th><th>Code hexagonal abrégé</th></tr><tr><td>Cyan</td><td><code>#0FF</code></td></tr><tr><td>Vert</td><td><code>#0F0</code></td></tr><tr><td>Rouge</td><td><code>#F00</code></td></tr><tr><td>Fuchsia</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

Votre élément `h1` avec le texte `Je suis rouge!` devrait recevoir la `couleur` rouge.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Le code hexagonal abrégé de la couleur rouge doit être utilisé à la place du code hexagonal "#FF0000".

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?#F00\s*?;?\s*?}/gi));
```

Votre élément `h1` avec le texte `Je suis vert!` devrait recevoir la `couleur` verte.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

Il convient d'utiliser le `code hex` abrégé de la couleur verte au lieu du code hex `#00FF00`.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?#0F0\s*?;?\s*?}/gi));
```

Votre élément `h1` avec le texte `Je suis cyan!` doit recevoir la `color` cyan.

```js
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
```

Il convient d'utiliser le `code hex` abrégé de la couleur cyan au lieu du code hex `#00FFFF`

```js
assert(code.match(/\.cyan-text\s*?{\s*?color\s*:\s*?#0FF\s*?;?\s*?}/gi));
```

Votre élément `h1` contenant le texte `Je suis fuchsia!` doit recevoir la `couleur` fuchsia.

```js
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
```

Il convient d'utiliser le `code hex` abrégé de la couleur fuchsia au lieu du code hex `#FF00FF`.

```js
assert(code.match(/\.fuchsia-text\s*?{\s*?color\s*:\s*?#F0F\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">Je suis rouge!</h1>

<h1 class="fuchsia-text">Je suis fuchsia!</h1>

<h1 class="cyan-text">Je suis cyan!</h1>

<h1 class="green-text">Je suis vert!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">Je suis rouge!</h1>

<h1 class="fuchsia-text">Je suis fuchsia!</h1>

<h1 class="cyan-text">Je suis cyan!</h1>

<h1 class="green-text">Je suis vert!</h1>
```
