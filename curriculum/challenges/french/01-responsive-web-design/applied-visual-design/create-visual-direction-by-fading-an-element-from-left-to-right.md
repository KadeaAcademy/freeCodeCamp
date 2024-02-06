---
id: 587d78a7367417b2b2512ae2
title: Créer une direction visuelle en faisant disparaître un élément de gauche à droite
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

Pour ce défi, vous allez modifier le `opacity` d'un élément animé afin qu'il s'estompe progressivement lorsqu'il atteint le côté droit de l'écran.

Dans l'animation affichée, l'élément rond avec le fond en dégradé se déplace vers la droite à partir de 50 % de l'animation, conformément à la règle des `@keyframes`.

# --instructions--

Ciblez l'élément avec l'id de `ball` et ajoutez la propriété `opacity` définie à 0.1 à `50%`, de sorte que l'élément s'estompe lorsqu'il se déplace vers la droite.

# --hints--

La règle `keyframes` pour le fondu devrait définir la propriété `opacity` à 0.1 à 50%.

```js
assert(
  code.match(
    /@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```
