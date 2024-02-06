---
id: bad87fee1348bd9aedf08726
title: Utiliser le code hexadécimal pour des couleurs spécifiques
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

Saviez-vous qu'il existe d'autres façons de représenter les couleurs en CSS ? L'une de ces façons est appelée code hexadécimal, ou code hex pour faire court.

Nous utilisons généralement des <dfn>décimaux</dfn>, ou des nombres en base 10, qui utilisent les symboles 0 à 9 pour chaque chiffre. <dfn>Hexadécimaux</dfn> (ou <dfn>hex</dfn>) sont des nombres en base 16. Cela signifie qu'il utilise seize symboles distincts. Comme les décimales, les symboles 0-9 représentent les valeurs de zéro à neuf. Alors A,B,C,D,E,F représentent les valeurs dix à quinze. Au total, les chiffres 0 à F peuvent représenter un chiffre en hexadécimal, ce qui nous donne 16 valeurs possibles au total. Vous pouvez trouver plus d'informations sur [les nombres hexadécimaux ici](https://www.freecodecamp.org/news/hexadecimal-number-system/).

En CSS, nous pouvons utiliser 6 chiffres hexadécimaux pour représenter les couleurs, deux pour les composantes rouge (R), verte (G) et bleue (B). Par exemple, `#000000` est le noir et c'est aussi la plus petite valeur possible. Vous pouvez trouver plus d'informations sur les [Système de couleur RGB ici](https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/#whatisthergbcolormodel).

```css
body {
  color: #000000;
}
```

# --instructions--

Remplacez le mot `noir` dans la couleur d'arrière-plan de notre élément `body` par sa représentation en code hexadécimal, `#000000`.

# --hints--

Votre élément `body` doit avoir une couleur de fond noire.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Le `code hex` de la couleur noire doit être utilisé à la place du mot `noir`.

```js
assert(
  code.match(
    /body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```
