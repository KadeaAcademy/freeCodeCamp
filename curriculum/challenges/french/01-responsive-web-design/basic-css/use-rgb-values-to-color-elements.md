---
id: bad87fee1348bd9aede08718
title: Utiliser les valeurs RGB pour colorer les éléments
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

Une autre façon de représenter les couleurs en CSS est d'utiliser les valeurs RGB.

La valeur `RGB` pour le noir ressemble à ceci :

```css
rgb(0, 0, 0)
```

La valeur `RGB` pour le blanc ressemble à ceci :

```css
rgb(255, 255, 255)
```

Au lieu d'utiliser six chiffres hexadécimaux comme avec le code hexadécimal, avec `RGB` vous spécifiez la luminosité de chaque couleur avec un nombre entre 0 et 255.

Si vous faites le calcul, les deux chiffres d'une couleur sont égaux à 16 fois 16, ce qui nous donne 256 valeurs au total. Donc `RGB`, qui commence à compter à partir de zéro, a exactement le même nombre de valeurs possibles que le code hexadécimal.

Voici un exemple de la façon dont vous pouvez changer le fond de `body` en orange en utilisant son code RGB.

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

Remplaçons le code hexadécimal de la couleur d'arrière-plan de notre élément `body` par la valeur RGB du noir : `rgb(0, 0, 0)`.

# --hints--

Votre élément `body` doit avoir un fond noir.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Vous devez utiliser `rgb` pour donner à votre élément `body` un fond noir.

```js
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```
