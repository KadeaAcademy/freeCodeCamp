---
id: bad87fee1348bd8aedf06756
title: Remplacer les déclarations de classe par des attributs d'ID de style
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

Nous venons de prouver que les navigateurs lisent les CSS de haut en bas, dans l'ordre de leur déclaration. Cela signifie que, en cas de conflit, le navigateur utilisera la dernière déclaration CSS. Remarquez que même si nous avions mis `blue-text` avant `pink-text` dans les classes de notre élément `h1`, il regarderait toujours l'ordre de déclaration et non l'ordre d'utilisation !

Mais nous n'avons pas encore terminé. Il existe d'autres moyens de remplacer les CSS. Vous vous souvenez des attributs id ?

Remplaçons vos classes `pink-text` et `blue-text`, et rendons votre élément `h1` orange, en donnant à l'élément `h1` un id et en donnant un style à cet id.

# --instructions--

Donnez à votre élément `h1` l'attribut `id` de `orange-text`. Rappelez-vous, les styles id ressemblent à ceci :

```html
<h1 id="orange-text">
```

Laissez les classes `blue-text` et `pink-text` sur votre élément `h1`.

Créez une déclaration CSS pour votre id `orange-text` dans votre élément `style`. Voici un exemple de ce à quoi cela ressemble :

```css
#brown-text {
  color: brown;
}
```

**Note:** Peu importe que vous déclariez ce CSS au-dessus ou au-dessous de la classe `pink-text`, puisque l'attribut `id` aura toujours la priorité.

# --hints--

Votre élément `h1` doit avoir la classe `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Votre élément `h1` doit avoir la classe `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Votre élément `h1` devrait avoir l'id de `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Il ne doit y avoir qu'un seul élément `h1`.

```js
assert($('h1').length === 1);
```

Votre identifiant `orange-text` doit avoir une déclaration CSS.

```js
assert(code.match(/#orange-text\s*{/gi));
```

Votre `h1` ne doit pas avoir d'attributs `style`.

```js
assert(!code.match(/<h1.*style.*>/gi));
```

Votre élément `h1` devrait être orange.

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Bonjour le monde !</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Bonjour le monde !</h1>
```
