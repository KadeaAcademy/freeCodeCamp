---
id: 5b7d72c338cd7e35b63f3e14
title: Amélioration de la compatibilité avec les "Fallbacks" des navigateurs
challengeType: 0
videoUrl: ''
forumTopicId: 301087
dashedName: improve-compatibility-with-browser-fallbacks
---

# --description--

Lorsque vous travaillez avec des feuilles de style en cascade, vous rencontrerez probablement des problèmes de compatibilité avec les navigateurs à un moment ou à un autre. C'est pourquoi il est important de prévoir des solutions de repli pour éviter les problèmes potentiels.

Lorsque votre navigateur analyse le CSS d'une page Web, il ignore toutes les propriétés qu'il ne reconnaît pas ou ne prend pas en charge. Par exemple, si vous utilisez une variable CSS pour attribuer une couleur d'arrière-plan à un site, Internet Explorer ignorera la couleur d'arrière-plan car il ne prend pas en charge les variables CSS. Dans ce cas, le navigateur utilisera la valeur qu'il possède pour cette propriété. S'il ne trouve aucune autre valeur définie pour cette propriété, il reviendra à la valeur par défaut, ce qui n'est généralement pas idéal.

Cela signifie que si vous souhaitez fournir une solution de repli au navigateur, il vous suffit de fournir une autre valeur plus largement prise en charge immédiatement avant votre déclaration. Ainsi, un navigateur plus ancien aura quelque chose à quoi se raccrocher, tandis qu'un navigateur plus récent se contentera d'interpréter la déclaration qui se trouve plus loin dans la cascade.

# --instructions--

Il semble qu'une variable soit utilisée pour définir la couleur de fond de la classe `.red-box`. Améliorons la compatibilité avec le navigateur en ajoutant une autre déclaration `background` juste avant la déclaration existante et définissons sa valeur à `red`.

# --hints--

Votre règle `.red-box` devrait inclure un fallback avec le `background` défini à `red` immédiatement avant la déclaration `background` existante.

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

# --solutions--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```
