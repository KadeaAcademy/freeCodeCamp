---
id: bad87fee1348bd9aedf08721
title: Utilisez le code hexadécimal pour mélanger les couleurs
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
dashedName: use-hex-code-to-mix-colors
---

# --description--

Pour rappel, les codes hexadécimaux utilisent 6 chiffres hexadécimaux pour représenter les couleurs, deux pour les composantes rouge (R), verte (G) et bleue (B).

À partir de ces trois couleurs pures (rouge, vert et bleu), nous pouvons faire varier les quantités de chacune d'elles pour créer plus de 16 millions d'autres couleurs !

Par exemple, l'orange est du rouge pur, mélangé à un peu de vert, et pas de bleu. En code hexadécimal, cela se traduit par `#FFA500`.

Le chiffre "0" est le plus petit chiffre du code hexadécimal et représente une absence totale de couleur.

Le chiffre "F" est le chiffre le plus élevé du code hexadécimal et représente la luminosité maximale possible.

# --instructions--

Remplacez les mots de couleur dans notre élément `style` par leurs codes hexagonaux corrects.

<table class='table table-striped'><tbody><tr><th>Color</th><th>Hex Code</th></tr><tr><td>Dodger Blue</td><td><code>#1E90FF</code></td></tr><tr><td>Green</td><td><code>#00FF00</code></td></tr><tr><td>Orange</td><td><code>#FFA500</code></td></tr><tr><td>Red</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

Votre élément `h1` avec le texte `I am red!` devrait recevoir la `couleur` rouge.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Le code hexadécimal de la couleur rouge doit être utilisé à la place du mot `red`.

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?(#FF0000|#F00)\s*?;?\s*?}/gi));
```

Votre élément `h1` avec le texte `I am green!` devrait recevoir la couleur `green`.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

Le code hexadécimal de la couleur verte doit être utilisé à la place du mot `green`.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?(#00FF00|#0F0)\s*?;?\s*?}/gi));
```

Votre élément `h1` avec le texte `I am dodger blue!` devrait recevoir la `color` dodger blue.

```js
assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
```

Le code hexadécimal de la couleur "dodger blue" doit être utilisé à la place du mot `dodgerblue`.

```js
assert(code.match(/\.dodger-blue-text\s*?{\s*?color\s*:\s*?#1E90FF\s*?;?\s*?}/gi));
```

Votre élément `h1` avec le texte `I am orange!` devrait recevoir la `couleur` orange.

```js
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
```

Le code hexadécimal de la couleur orange doit être utilisé à la place du mot `orange`.

```js
assert(code.match(/\.orange-text\s*?{\s*?color\s*:\s*?#FFA500\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```
